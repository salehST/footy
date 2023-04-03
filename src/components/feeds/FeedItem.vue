<template>
	<div class="match-card">
		<router-link
			v-if="feedItem.home_team"
			class="match-card__team"
			:to="`/team/${feedItem.home_team.id}`"
		>
			<img class="match-card__team-logo" :src="feedItem.home_team.logo_url || badge" />
			<span class="match-card__team-name text-brand text-20 font-700">{{ feedItem.home_team.name }}</span>
		</router-link>
		<div v-else class="match-card__team">
			<img class="match-card__team-logo" :src="badge" />
			<span class="match-card__team-name text-brand text-20 font-700">{{
				feedItem.placeholder_home_team ? feedItem.placeholder_home_team.name : 'Unknown'
			}}</span>
		</div>
		<div class="match-card__details">
			<template v-if="result">
				<span
					v-if="
						feedItem.pens_winner &&
						(feedItem.pens_winner === feedItem.home_team.id ||
							feedItem.pens_winner === feedItem.away_team.id)
					"
					class="pens__winner"
					:style="
						feedItem.pens_winner === feedItem.home_team.id
							? 'margin-left:-4rem;'
							: 'margin-left: 4rem;'
					"
					>* Pens
				</span>
				<p class="match-card__score score pb-2">
					<span class="score__number">{{ feedItem.home_score }}</span>
					<span class="score__seperator">:</span>
					<span class="score__number">{{ feedItem.away_score }} </span>
				</p>
				<p class="match-card__detail semi" v-if="motm">MOTM: {{ motm }}</p>
				<p class="match-card__name" v-if="referee">Ref: {{ referee }}</p>
			</template>
			<template v-else>
				<p v-if="!feedItem.postponed" class="match-card__time mb-4">
					<span v-if="country == 'US'"> {{ tConvert(kickOffTime) }}</span>
					<span v-else> {{ kickOffTime }} </span>
				</p>
				<p class="match-card__half-length" v-if="feedItem.number_of_halves && feedItem.half_length">
					<BaseSvgIcon icon="icon-clock" />
					{{ feedItem.number_of_halves }} x {{ feedItem.half_length }}
				</p>
				<span class="flex items-center flex-col md:flex-row justify-center gap-3 mt-3">
					<p class="match-card__detail flex items-center" v-if="feedItem.pitch && feedItem.pitch.location">
					<img src="/img/icons/icon-pin.svg" class=" h-4 w-4" alt="icon">
					{{ feedItem.pitch.location.name }}
				</p>
				<p class="match-card__name flex items-center mt-0" v-if="feedItem.pitch">
					
					<img src="/img/icons/icon-pitch.svg" class=" h-4 w-4" alt="icon">
					Pitch {{ feedItem.pitch.pitch_name || feedItem.pitch.name }}
				</p>
				</span>
			</template>
		</div>
		<router-link
			v-if="feedItem.away_team"
			class="match-card__team"
			:to="`/team/${feedItem.away_team.id}`"
		>
			<img class="match-card__team-logo" :src="feedItem.away_team.logo_url || badge" />
			<span class="match-card__team-name text-brand text-20 font-700">{{ feedItem.away_team.name }}</span>
		</router-link>
		<div v-else class="match-card__team">
			<img class="match-card__team-logo" :src="badge" />
			<span class="match-card__team-name text-brand text-20 font-700">{{
				feedItem.placeholder_away_team ? feedItem.placeholder_away_team.name : 'Unknown'
			}}</span>
		</div>
		<div v-if="matchComment" class="match-card__notifications">
			<p class="match-card__notifications-title">{{ $t('fixtures.match_notification') }}</p>
			<p class="match-card__notification">{{ matchComment.text }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseSvgIcon from '@/layouts/icons/BaseSvgIcon.vue';
import axios from 'axios';
import dayjs from 'dayjs';
export default Vue.extend({
	props: {
		// feedItem: Object,
		feedItem: {
			required: true,
			type: [Object, String, Array],
		},
	},
	data: () => ({
		badge: require('@/assets/images/footy_team_badge.png'),
		dataType: 'object',
		country: '',
	}),
	components: {
		BaseSvgIcon,
	},
	methods: {
		tConvert(value: any) {
			value = value.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [value];

			if (value.length > 1) {
				// If time format correct
				value = value.slice(1); // Remove full string match value
				value[5] = +value[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
				value[0] = +value[0] % 12 || 12; // Adjust hours
			}
			return value.join('');
		},
	},

	computed: {
		matchComment() {
			if (Array.isArray(this.feedItem)) {
				if (!(this as any).feedItem[0].match_comments.length) return '';
				for (const n in (this as any).feedItem[0].match_comments) {
					const comment = (this as any).feedItem[0].match_comments[n];
					if (!comment.private) return comment;
				}
				return '';
			} else {
				if (!(this as any).feedItem.match_comments.length) return '';
				for (const n in (this as any).feedItem.match_comments) {
					const comment = (this as any).feedItem.match_comments[n];
					if (!comment.private) return comment;
				}
				return '';
			}
		},
		result() {
			if (
				Number.isInteger((this as any).feedItem.away_score) &&
				Number.isInteger((this as any).feedItem.home_score)
			)
				return true;
			return false;
		},
		motm() {
			// @ts-ignore
			const manOfTheMatch = this.feedItem.man_of_the_match;
			return manOfTheMatch ? `${manOfTheMatch.first_name} ${manOfTheMatch.last_name}` : '';
		},

		referee() {
			const referee = this.feedItem.referee;
			if (!referee) return null;
			return `${referee.first_name} ${referee.last_name}`;
		},

		kickOffTime() {
			if (Array.isArray(this.feedItem)) {
				console.log('checking', this.feedItem);
				return this.feedItem[0].kick_off_time.slice(0, 5);
			} else {
				console.log('in else', this.feedItem);
				return this.feedItem.kick_off_time.slice(0, 5);
			}
		},
	},
	async mounted() {
		// @ts-ignore
		if (Array.isArray(this.feedItem)) {
			// @ts-ignore
			this.dataType = 'array';
			console.log('file type is array');
		} else {
			console.log('object');
		}
		const url = 'https://api.db-ip.com/v2/free/self';
		var data = await axios.get(url);
		// @ts-ignore
		this.country = data.data.countryCode;
		var timedifference = new Date().getTimezoneOffset();
		console.log('Time Zone: ', timedifference);
		if (timedifference == 420) {
			// @ts-ignore
			this.country = 'US';
		}
		// @ts-ignore
		if (this.feedItem.league.locationByLocation.city.country.name == 'USA') {
			// @ts-ignore
			this.country = 'US';
		}
	},
});
</script>
