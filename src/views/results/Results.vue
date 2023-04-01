<template>
	<BaseLayout :pageTitle="$t('global.results')">
		<template slot="header">
			<TeamSelect />
			<LeagueSelect />
		</template>

		<template slot="content" v-if="!loading">
			<!-- If selectedFinals -->
			<template v-if="selectedFinals">
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

				<!-- If group phase tab is selected -->
				<div v-if="activeTab === 'group'">
					<!-- If groups has results -->
					<div v-if="Object.keys(finalsGroupsResults).length">
						<FeedGroup
							v-for="(group, index) in finalsGroupsResults"
							:key="`group-stage-results-${index}`"
							:firstItem="group[0]"
						>
							<FeedItem v-for="match in group" :key="match.id" :feedItem="match" />
						</FeedGroup>
					</div>
					<div v-else class="pt-64 w-full flex justify-center">
						<span class="text-2xl text-gray-800 pt-64">{{
							$t('fixtures.no_results_to_show')
						}}</span>
					</div>
				</div>

				<!-- If knockout phase tab is selected -->
				<div v-if="activeTab === 'knockout'">
					<!-- If knockouts has results -->
					<div v-if="Object.keys(finalsKnockoutsResults).length">
						<FeedGroup
							v-for="(group, index) in finalsKnockoutsResults"
							:key="`knockout-stage-results-${index}`"
							:firstItem="group[0]"
						>
							<FeedItem v-for="match in group" :key="match.id" :feedItem="match" />
						</FeedGroup>
					</div>
					<div v-else class="pt-64 w-full flex justify-center">
						<span class="text-2xl text-gray-800">{{ $t('fixtures.no_results_to_show') }}</span>
					</div>
				</div>
			</template>

			<!-- If selectedLeague -->
			<template v-else-if="getSelectedResultLeague">
				<div v-if="Object.keys(leagueResults).length">
					<FeedGroup
						v-for="(group, index) in leagueResults"
						:key="`results-${index}`"
						:firstItem="group[0]"
					>
						<FeedItem v-for="match in group" :key="match.id" :feedItem="match" />
					</FeedGroup>
				</div>
				<div v-else class="pt-4 w-full flex justify-center">
					<span class="text-2xl text-gray-800 pt-64">{{ $t('fixtures.no_results_to_show') }}</span>
				</div>
			</template>

			<!-- If selectedLeague -->
			<template v-else>
				<div v-if="Object.keys(teamResults).length">
					<FeedGroup
						v-for="(group, index) in teamResults"
						:key="`results-${index}`"
						:firstItem="group[0]"
					>
						<FeedItem v-for="match in group" :key="match.id" :feedItem="match" />
					</FeedGroup>
				</div>
				<div v-else class="pt-4 w-full flex justify-center">
					<span class="text-2xl text-gray-800 pt-64">{{ $t('fixtures.no_results_to_show') }}</span>
				</div>
			</template>
		</template>
		<template slot="content" v-if="loading">
			<template>
				<div class="pt-64 w-full flex justify-center">
					<span class="text-2xl text-gray-800">
						<img :src="require('@/assets/loading.gif')" alt="loading gif" />
					</span>
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
		teamResults: {},
		loading: false,
		leagueResults: {},
		finalsGroupsResults: {},
		finalsKnockoutsResults: {},
	}),
	methods: {
		async getResultsData(newVal: any) {
			try {
				// @ts-ignore
				this.resetState();
				if (!newVal) return;
				this.loading = true;
				if (newVal.type === 'leagues') {
					const id = newVal.id;
					const fixtures = await this.$store.dispatch('getResultFixtures', id);
					if (!fixtures || !fixtures.length) return (this.leagueResults = {});
					return (this.leagueResults = groupMatchesByDate(fixtures, true));
				}
				if (newVal.type === 'finals') {
					const id = newVal.id;
					const finalFixtures = await this.$store.dispatch('getFinalResults', id);
					if (!finalFixtures.finals_groups && !finalFixtures.finals_knockouts) {
						this.finalsGroupsResults = {};
						this.finalsKnockoutsResults = {};
						return;
					}
					if (finalFixtures.finals_groups) {
						const matches = finalFixtures.finals_groups.map((group: any) => group.matches);
						this.finalsGroupsResults = groupMatchesByDate(matches.flat(1), true);
					}

					if (finalFixtures.finals_knockouts)
						this.finalsKnockoutsResults = groupMatchesByKnockoutStage(
							finalFixtures.finals_knockouts,
							true
						);

					if (!Object.keys(this.finalsGroupsResults).length) this.activeTab = 'knockout';
				}
			} catch (error) {
				// @ts-ignore
				this.resetState();
				return error;
			} finally {
				this.loading = false;
			}
		},
		resetState() {
			this.leagueResults = {};
			this.finalsKnockoutsResults = {};
			this.finalsGroupsResults = {};
		},
	},
	watch: {
		getSelectedResultLeague: {
			deep: true,
			immediate: true,
			async handler(newVal) {
				// @ts-ignore
				this.getResultsData(newVal);
				return;
			},
		},
		getRefreshApp: {
			async handler() {
				const league = this.getSelectedResultLeague
					? await this.$store.dispatch('getLeagueById', this.getSelectedResultLeague.id)
					: false;
				if (league && league.published) {
					// @ts-ignore
					await this.getResultsData(this.getSelectedResultLeague);
				} else if (this.getSelectedResultTeam && this.getSelectedResultTeam.id) {
					const currentDate = getCurrentDate();
					const payload = {
						teamId: this.getSelectedResultTeam.id,
						query: { _lte: currentDate },
						orderBy: 'desc',
					};
					const upcomingLeague = await this.$store.dispatch('getUpcomingLeague', payload);
					if (upcomingLeague) {
						this.$store.commit('setResultLeague', upcomingLeague);
						// @ts-ignore
						await this.getResultsData();
					} else {
						this.$store.commit('setResultLeague', null);
						this.$store.commit('setIsResultFinalsSelected', false);
						// @ts-ignore
						await this.getResultsData();
					}
				}
				return;
			},
		},
	},
	computed: {
		...mapGetters([
			'getIsResultFinalsSelected',
			'getSelectedResultLeague',
			'getRefreshApp',
			'getSelectedResultTeam',
		]),
		selectedFinals() {
			return this.getIsResultFinalsSelected;
		},
	},
	created() {
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
