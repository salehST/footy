<template>
	<div class="match-group" v-if="firstItem">
		<h4 class="match-group__title">
			<span v-if="firstItem && firstItem.postponed">{{ $t('fixtures.postponed') }}</span>
			<span v-else-if="firstItem.roundName">
				<span v-if="country == 'US'"> {{ customDate(firstItem.date) }} </span>
				<span v-else>
					{{ firstItem.roundName | convertRoundName }} -
					{{ getTextDate(firstItem.date, $i18n.locale) }}
				</span>
			</span>
			<span v-else>
				<span v-if="dataType == 'array'">
					<span v-if="country == 'US'"> {{ customDate(firstItem[0].date) }} </span>
					<span v-else>
						{{ getTextDate(firstItem[0].date, $i18n.locale) }}
					</span>
				</span>
				<span v-else>
					<span v-if="country == 'US'"> {{ customDate(firstItem.date) }} </span>
					<span v-else>
						{{ getTextDate(firstItem.date, $i18n.locale) }}
					</span>
				</span>
			</span>
			<span v-if="firstItem.is_friendly">Friendly</span>
		</h4>
		<slot />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getTextDate } from '@/helpers';
import axios from 'axios';
import dayjs from 'dayjs';

export default Vue.extend({
	props: {
		firstItem: {
			required: true,
			type: [Object, String, Array],
		},
	},

	data: () => ({
		dataType: 'object',
		country: '',
	}),

	methods: {
		// @ts-ignore
		getTextDate(value) {
			return dayjs(value).format('DD MMMM');
		},
		// @ts-ignore
		customDate(value) {
			return dayjs(value).format('MMMM DD');
		},
	},

	filters: {
		convertRoundName(val: string) {
			switch (val) {
				case 'F':
					return 'Final';
				case 'SF':
					return 'Semi Finals';
				case 'PF':
					return '3/4 Finals';
				case 'QF':
					return 'Quarter Finals';
				case 'L16':
					return 'Last 16';
				case 'L32':
					return 'Last 32';
			}
		},
	},

	async mounted() {
		if (Array.isArray(this.firstItem)) {
			this.dataType = 'array';
			console.log('file type is array');
		} else {
			console.log('object');
		}
		console.log('response');
		const url = 'https://api.db-ip.com/v2/free/self';
		var data = await axios.get(url);
		// @ts-ignore
		this.country = data.data.countryCode;
		// @ts-ignore
		console.log('country code: ', data.data.countryCode);
		var timedifference = new Date().getTimezoneOffset();
		console.log('Time Zone: ', timedifference);
		if (timedifference == 420) {
			this.country = 'US';
		}
		if (this.firstItem.league.locationByLocation.city.country.name == 'USA') {
			this.country = 'US';
		}
		console.log('check here: ', this.firstItem);
	},
});
</script>
