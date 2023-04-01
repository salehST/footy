<template>
	<BaseLayout :pageTitle="$t('global.team')">
		<template slot="content" v-if="!loading">
			<div class="card text-center">
				<h2 class="text-value mb-8">{{ team ? team.name : '' }}</h2>
				<div class="tabs" role="tablist">
					<button
						:class="`tab ${activeTab === 'info' ? 'is-active' : ''}`"
						v-on:click="activeTab = 'info'"
						type="button"
						role="tab"
					>
						Info
					</button>
					<button
						v-if="teamLeagues && teamLeagues.length"
						:class="`tab ${activeTab === 'leagues' ? 'is-active' : ''}`"
						v-on:click="activeTab = 'leagues'"
						type="button"
						role="tab"
					>
						Leagues
					</button>
					<button
						:class="`tab ${activeTab === 'squad' ? 'is-active' : ''}`"
						v-on:click="activeTab = 'squad'"
						type="button"
						role="tab"
					>
						Squad
					</button>
				</div>
			</div>
			<TeamInfoTab
				v-if="activeTab === 'info'"
				:form="teamForm"
				:stats="teamStats"
				:founded="founded"
			/>
			<TeamLeaguesTab v-if="activeTab === 'leagues'" :leagues="team.league_teams" />
			<TeamSquadTab v-if="activeTab === 'squad'" :players="players" :team="team" />
		</template>
		<template slot="content" v-if="loading">
			<div style="display: grid; place-items: center; margin-top: 5rem">
				<img :src="loadingGif" />
			</div>
		</template>
	</BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';
import TeamInfoTab from '@/components/team/TeamInfoTab.vue';
import TeamLeaguesTab from '@/components/team/TeamLeaguesTab.vue';
import TeamSquadTab from '@/components/team/TeamSquadTab.vue';
import { getMatchResultByTeam, getTeamStats } from '@/helpers';
import dayjs from 'dayjs';
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
	data: () => ({
		activeTab: 'info',
		players: null,
		stats: null,
		// team: null,
		matches: [],
		teamData: null,
		loading: true,
		loadingGif: require('@/assets/loading.gif'),
	}),

	computed: {
		...mapGetters(['getRefreshApp']),
		founded() {
			const team = (this as any).team;
			if (team && team.founded) {
				return team ? team.founded : '';
			} else {
				return team ? dayjs(team.created_at).year().toString() : '';
			}
		},

		team() {
			if (!this.teamData) return null;
			else return (this as any).teamData;
		},

		teamLeagues() {
			// @ts-ignore
			if (!this.team || !this.team.league_teams || !this.team.league_teams.length) return [];
			else {
				// @ts-ignore
				const leagues = this.team.league_teams.map((team: any) => team.league);

				return leagues.reverse() || [];
			}
		},

		teamForm() {
			if (!this.team) return [];
			return (
				// @ts-ignore
				this.team.matches &&
				// @ts-ignore
				this.team.matches
					.filter((match: any) => match.home_score !== null && match.away_score !== null)
					.sort((a: any, b: any) => {
						return (
							new Date(`${b.date} ${b.kick_off_time}`).getTime() -
							new Date(`${a.date} ${a.kick_off_time}`).getTime()
						);
					})
					.slice(0, 6)
					.reduce((form: any, match: any) => {
						const result = getMatchResultByTeam((this as any).team.id, match);
						form.push(result);
						return form;
					}, [])
			);
		},

		teamStats() {
			if (!this.team) return {};
			return getTeamStats(
				(this as any).team.id,
				(this as any).team.matches.filter(
					(match: any) => match.home_score !== null && match.away_score !== null
				)
			);
		},
	},
	watch: {
		getRefreshApp: {
			handler() {
				// @ts-ignore
				return this.getTeamData();
			},
		},
	},

	methods: {
		async getTeamData() {
			try {
				this.loading = true;
				const teamId = (this as any).$route.params.id;
				if (!teamId) return this.$router.push('/');
				this.teamData = await this.$store.dispatch('getTeamData', teamId);
				if (!this.teamData) this.teamData = null;
			} catch (error) {
				return this.$router.push('/clubhouse');
			} finally {
				this.loading = false;
			}
		},
	},

	async created() {
		// @ts-ignore
		await this.getTeamData();
	},

	components: {
		BaseLayout,
		TeamInfoTab,
		TeamLeaguesTab,
		TeamSquadTab,
	},
});
</script>
