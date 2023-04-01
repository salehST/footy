<template>
	<BaseLayout :pageTitle="$t('global.fixtures')">
		<template slot="header">
			<TeamSelect />
			<LeagueSelect />
		</template>

		<template slot="content">
			<template v-if="loading">
				<div class="pt-64 w-full flex justify-center">
					<span class="text-2xl text-gray-800">
						<img :src="require('@/assets/loading.gif')" alt="loading gif" />
					</span>
				</div>
			</template>

			<template v-if="selectedFinals && !loading">
				<div class="tabs tabs--wide" role="tablist">
					<button
						:class="`tab ${activeTab === 'group' ? 'is-active' : ''}`"
						type="button"
						role="tab"
						@click="activeTab = 'group'"
					>
						{{ $t('global.group_phase') }}
					</button>
					<button
						:class="`tab ${activeTab === 'knockout' ? 'is-active' : ''}`"
						type="button"
						role="tab"
						@click="activeTab = 'knockout'"
					>
						{{ $t('global.knockout_phase') }}
					</button>
				</div>

				<div v-if="activeTab === 'group'">
					<div v-if="Object.keys(finalsGroupsFixtures).length">
						<FeedGroup
							v-for="(group, index) in finalsGroupsFixtures"
							:key="`group-stage-fixtures-${index}`"
							:firstItem="group[0]"
						>
							<FeedItem v-for="match in group" :key="match.id" :feedItem="match" />
						</FeedGroup>
					</div>
					<div v-else class="pt-64 w-full flex justify-center">
						<span class="text-2xl text-gray-800">{{ $t('fixtures.no_fixtures') }}</span>
					</div>
				</div>

				<div v-if="activeTab === 'knockout'">
					<div v-if="Object.keys(finalsKnockoutsFixtures).length">
						<FeedGroup
							v-for="(group, index) in finalsKnockoutsFixtures"
							:key="`knockout-stage-fixtures-${index}`"
							:firstItem="group[0]"
						>
							<FeedItem v-for="match in group" :key="match.id" :feedItem="match" />
						</FeedGroup>
					</div>
					<div v-else-if="finalsIsFinished" class="pt-64 w-full flex justify-center">
						<span class="text-2xl text-gray-800">This finals has finished</span>
					</div>
					<div v-else class="pt-64 w-full flex justify-center">
						<span class="text-2xl text-gray-800">{{ $t('fixtures.no_fixtures') }}</span>
					</div>
				</div>
			</template>

			<template v-else-if="!selectedFinals && !loading">
				<div v-if="Object.keys(leagueFixtures).length">
					<div v-for="(group, index) in leagueFixtures" :key="`fixtures-${index}`">
						<div
							v-if="
								group &&
								group[0] &&
								!deletedTeams.includes(group[0].home_team && group[0].home_team.id) &&
								group &&
								group[0] &&
								!deletedTeams.includes(group[0].away_team && group[0].away_team.id)
							"
							class="mt-2"
						>
							<FeedGroup :firstItem="group[0]">
								<FeedItem :feedItem="match" v-for="match in group" :key="match.id" />
							</FeedGroup>
						</div>
					</div>
				</div>
				<div v-else-if="leagueIsFinished" class="pt-64 w-full flex justify-center">
					<span class="text-2xl text-gray-800">This league has finished</span>
				</div>
				<div v-else class="pt-64 w-full flex justify-center">
					<span class="text-2xl text-gray-800">{{ $t('fixtures.no_fixtures') }}</span>
				</div>
			</template>

			<template v-else-if="selectedTeam && !loading">
				<div v-if="Object.keys(teamFixtures).length">
					<FeedGroup
						v-for="(group, index) in teamFixtures"
						:key="`fixtures-${index}`"
						:firstItem="group[0]"
					>
						<FeedItem v-for="match in group" :key="match.id" :feedItem="match" />
					</FeedGroup>
				</div>
				<div v-else class="pt-64 w-full flex justify-center">
					<span class="text-2xl text-gray-800">{{ $t('fixtures.no_fixtures') }}</span>
				</div>
			</template>
		</template>
	</BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseLayout from '@/layouts/BaseLayout.vue';
import FeedItem from '@/components/feeds/FeedItem.vue';
import FeedGroup from '@/components/feeds/FeedGroup.vue';
import TeamSelect from '@/components/select/TeamSelect.vue';
import LeagueSelect from '@/components/select/LeagueSelect.vue';
import { mapGetters } from 'vuex';
import { groupMatchesByDate, groupMatchesByKnockoutStage } from '@/helpers';
import getCurrentDate from '@/date';

export default Vue.extend({
	components: {
		BaseLayout,
		FeedItem,
		FeedGroup,
		TeamSelect,
		LeagueSelect,
	},
	data: () => ({
		activeTab: 'group',
		deletedTeams: [] as any,
		selectedLeague: null,
		selectedTeam: null,
		leagueIsFinished: false,
		finalsIsFinished: false,
		leagueFixtures: {},
		finalsGroupsFixtures: {},
		finalsKnockoutsFixtures: {},
		loading: false,
	}),
	methods: {
		async getFixturesData(newVal: any): Promise<any> {
			try {
				// @ts-ignore
				this.resetState();
				if (!newVal) return;
				this.loading = true;
				console.log('type: ', newVal.type);
				if (newVal.type === 'leagues') {
					console.log('in here');
					const id = newVal.id;
					const fixtures = await this.$store.dispatch('getLeagueFixtures', id);
					// if (!fixtures || !fixtures.length) return (this.leagueFixtures = {});
					console.log('fixtures', fixtures);
					this.leagueFixtures = fixtures;
					console.log(this.leagueFixtures);
					// @ts-ignore
					const teams: any = [];
					fixtures.map((m: any) => {
						if (m.league) {
							if (m.league.league_teams) {
								m.league.league_teams.map((obj: any) => {
									if (!obj.placeholder_team) {
										if (obj.deleted_at != null) {
											console.log('ignored', obj.team_id);
											if (!teams.includes(obj.team_id)) {
												teams.push(obj.team_id);
											}
										} else {
											if (teams.includes(obj.team_id)) {
												teams.splice(teams.indexOf(obj.team_id));
											}
										}
									}
								});
							}
						}
					});
					this.deletedTeams = teams;
					console.log('deleted teams: ', this.deletedTeams);
					const filteredMatches: any = [];
					fixtures.map((match: any) => {
						if (match.placeholder_home_team && match.placeholder_home_team.type !== 'seed') return;
						if (match.placeholder_away_team && match.placeholder_away_team.type !== 'seed') return;
						if (this.deletedTeams.includes(match.away_team && match.away_team.id)) return;
						if (this.deletedTeams.includes(match.home_team && match.home_team.id)) return;
						filteredMatches.push(match);
					});
					console.log('filtered', filteredMatches);
					return (this.leagueFixtures = groupMatchesByDate(filteredMatches));
				}
				if (newVal.type === 'finals') {
					this.$store.commit('setIsFinalsSelected', true);
					const id = newVal.id;
					const finalFixtures = await this.$store.dispatch('getFinalFixtures', id);
					if (!finalFixtures.finals_groups && !finalFixtures.finals_knockouts) {
						this.finalsGroupsFixtures = {};
						this.finalsKnockoutsFixtures = {};
						return;
					}
					if (finalFixtures.finals_groups && finalFixtures.finals_groups.length) {
						let matches = finalFixtures.finals_groups.map((group: any) => group.matches);
						matches = matches.flat(1);
						const filteredMatches: any = [];
						matches.map((match: any) => {
							if (match.placeholder_home_team && match.placeholder_home_team.type !== 'seed')
								return;
							if (match.placeholder_away_team && match.placeholder_away_team.type !== 'seed')
								return;
							filteredMatches.push(match);
						});
						this.finalsGroupsFixtures = groupMatchesByDate(filteredMatches);
					}

					if (finalFixtures.finals_knockouts && finalFixtures.finals_knockouts.length) {
						this.finalsKnockoutsFixtures = groupMatchesByKnockoutStage(
							finalFixtures.finals_knockouts
						);
					}

					if (!Object.keys(this.finalsGroupsFixtures).length) this.activeTab = 'knockout';
				}
			} catch (error) {
				// @ts-ignore
				this.resetState();
				console.log('inside catch', error);
				return error;
			} finally {
				this.loading = false;
			}
		},
		resetState(): void {
			this.leagueFixtures = {};
			this.finalsKnockoutsFixtures = {};
			this.finalsGroupsFixtures = {};
			this.$store.commit('setIsFinalsSelected', false);
			return;
		},
		getDeletedTeams(matches: any) {
			const teams: any = [];
			matches.map((m: any) => {
				if (m.league) {
					if (m.league.league_teams) {
						m.league.league_teams.map((obj: any) => {
							if (!obj.placeholder_team) {
								if (obj.deleted_at != null) {
									console.log('ignored', obj.teams.id);
									if (!teams.includes(obj.team_id)) {
										teams.push(obj.team_id);
									}
								}
							}
						});
					}
				}
			});
			return teams;
		},
	},
	watch: {
		getSelectedFixtureLeague: {
			immediate: true,
			deep: true,
			async handler() {
				// @ts-ignore
				await this.getFixturesData(this.getSelectedFixtureLeague);
				return;
			},
		},
		getRefreshApp: {
			async handler(): Promise<void> {
				const league =
					this.getSelectedFixtureLeague &&
					this.getSelectedFixtureLeague.id &&
					(await this.$store.dispatch('getLeagueById', this.getSelectedFixtureLeague.id));
				if (league && league.published) {
					// @ts-ignore
					await this.getFixturesData(this.getSelectedFixtureLeague);
				} else if (this.getSelectedFixtureTeam && this.getSelectedFixtureTeam.id) {
					const currentDate = getCurrentDate();
					const payload = {
						teamId: this.getSelectedFixtureTeam.id,
						query: { _gte: currentDate },
						orderBy: 'asc',
					};
					const upcomingLeague = await this.$store.dispatch('getUpcomingLeague', payload);
					if (upcomingLeague) {
						this.$store.commit('setFixtureLeague', upcomingLeague);
						// @ts-ignore
						await this.getFixturesData();
					} else {
						this.$store.commit('setFixtureLeague', null);
						this.$store.commit('setIsFinalsSelected', false);
						// @ts-ignore
						await this.getFixturesData();
					}
				}
				return;
			},
		},
	},

	computed: {
		...mapGetters([
			'getIsFinalsSelected',
			'getSelectedFixtureLeague',
			'getRefreshApp',
			'getSelectedFixtureTeam',
		]),
		selectedFinals() {
			return this.getIsFinalsSelected;
		},
	},
	async created() {
		const id = this.$route.params.id;
		if (id) {
			const payload = {
				id,
				route: this.$route.name,
			};
			this.$store.commit('setRouteTeamId', payload);
		}
	},
});
</script>
