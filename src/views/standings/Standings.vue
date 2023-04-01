<template>
	<BaseLayout :pageTitle="$t('global.standings')">
		<template slot="header">
			<TeamSelect />
			<LeagueSelect />
		</template>
		<template
			slot="content"
			v-if="getSelectedStandingLeague && leagueTable && leagueTable.length && !loading"
		>
			<div v-if="leagueTable && leagueTable.length">
				<div v-for="(table, index) in leagueTable" :key="index">
					<div v-if="table.length">
						<LeagueTable
							:selectedLeague="table[0].group ? table[0].group : getSelectedStandingLeague"
							:leagueTable="table"
							:qualificationPositions="[...finalQualifications, ...miniLeaguesQualification]"
							type="full"
							class="mb-6"
						/>
					</div>
				</div>
			</div>

			<div class="my-3" v-if="attachedFinals.length">
				<div class="flex flex-col shadow-xs bg-white rounded-md overflow-hidden">
					<div class="flex justify-center bg-blue-400 p-2">
						<span class="text-white uppercase font-semibold text-sm">
							{{ $t('menu.finals') }}
						</span>
					</div>
					<div class="flex flex-col px-4 py-3 text-xs">
						<ol v-if="attachedFinals.length" class="levels">
							<li
								v-for="({ final: finals }, finalsIndex) in attachedFinals"
								:key="'attached-finals-' + finalsIndex"
								class="level level--diamond cursor-pointer mb-2"
							>
								<div
									class="flex justify-center items-center bg-black w-24 h-24 rounded-full mr-3"
									:style="'background: ' + finals.color + ';'"
								>
									<span class="text-gray-900">
										<!-- {{ getFinalName(finals) | firstTwoChars }} -->
									</span>
								</div>
								<span class="text-gray-900">
									{{ getFinalName(finals) }} Finals - {{ getFinalsKickOfDate(finals.start_date) }}
								</span>
							</li>
						</ol>
					</div>
				</div>
			</div>

			<div class="my-3" v-if="attachedMiniLeagues.length">
				<div class="flex flex-col shadow-xs bg-white rounded-md overflow-hidden">
					<div class="flex justify-center bg-turquoise p-2">
						<span class="text-white uppercase font-semibold text-sm">Mini Leagues</span>
					</div>
					<div class="flex flex-col px-4 py-3 text-xs">
						<ol class="levels">
							<li
								v-for="({ mini_league: miniLeague }, mlIndex) in attachedMiniLeagues"
								:key="'attached-mini-league-' + mlIndex"
								class="level level--diamond cursor-pointer"
							>
								<div
									class="flex justify-center items-center bg-black w-24 h-24 rounded-full mr-3"
									:style="`background: ${miniLeague.color || '#3998e396'}`"
								>
									<span class="text-gray-900"> ML </span>
								</div>
								<span class="text-gray-900">
									{{ miniLeague.display_name }},
									{{ getFinalsKickOfDate(miniLeague.kick_off_date) }} -
									{{ getFinalsKickOfDate(miniLeague.end_date) }}
								</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
			<MotmTable :motmTable="motmForLeague" v-if="motmForLeague && motmForLeague.length" />
			<div
				v-if="
					getSelectedStandingLeague &&
					getSelectedStandingLeague.league_type &&
					parentLeagues.length &&
					getSelectedStandingLeague.league_type === 'mini-league'
				"
			>
				<div v-for="(league, index) in parentLeagues" :key="index">
					<LeagueTable
						:selectedLeague="{ name: league.name }"
						:leagueTable="league.table"
						type="full"
						class="mb-6"
					/>
				</div>
			</div>
		</template>
		<template v-else slot="content">
			<div class="pt-64 w-full flex justify-center" v-if="loading">
				<span class="text-2xl text-gray-800">
					<img :src="require('@/assets/loading.gif')" alt="loading gif" />
				</span>
			</div>
			<div class="card" v-if="!loading">
				<p>{{ $t('standings.empty_message') }}</p>
			</div>
		</template>
	</BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseLayout from '@/layouts/BaseLayout.vue';

import TeamSelect from '@/components/select/TeamSelect.vue';
import LeagueSelect from '@/components/select/LeagueSelect.vue';
import LeagueTable from '@/components/stats/LeagueTable.vue';
import MotmTable from '@/components/stats/MotmTable.vue';
import { sortMatchesByTime } from '@/helpers';
import getCurrentDate from '@/date';
import _ from 'lodash';

import { mapGetters } from 'vuex';

import { getLeagueTable } from '@/helpers';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
require('dayjs/locale/nl');

dayjs.extend(advancedFormat);
export default Vue.extend({
	components: {
		BaseLayout,
		TeamSelect,
		LeagueSelect,
		LeagueTable,
		MotmTable,
	},
	data: () => ({
		leagueTable: null as any,
		motmForLeague: [] as any,
		attachedFinals: [] as any,
		attachedMiniLeagues: [] as any,
		finalQualifications: [] as any,
		miniLeaguesQualification: [] as any,
		parentLeagues: [] as any,
		loading: false,
		tempMOMMatchLeagues: [] as any,
	}),

	methods: {
		generateMotmTable(matches: any) {
			const manOfTheMatch: any = [];
			matches &&
				matches.length &&
				matches.forEach((match: any) => {
					if (!match.man_of_the_match) return;
					const player = match.man_of_the_match;
					let team = '';
					let teamId = null;
					for (let i = 0; i < player.team.length; i++) {
						const t = player.team[i];
						if (t.team === match.homeTeam.id) {
							team = match.homeTeam.name;
							teamId = match.homeTeam.id;
							break;
						}
						if (t.team === match.awayTeam.id) {
							team = match.awayTeam.name;
							teamId = match.awayTeam.id;
							break;
						}
					}
					const motm = {
						playerId: player.id,
						name: player.first_name + ' ' + player.last_name,
						team: team,
						teamId: teamId,
						awards: 1,
					};
					const idtoFind = teamId;
					const isManOfTheMatchExist = manOfTheMatch.findIndex(
						(motm: any) => motm.teamId === idtoFind && player.id === motm.playerId
					);
					if (isManOfTheMatchExist < 0 || !manOfTheMatch.length) {
						manOfTheMatch.push(motm);
					} else {
						manOfTheMatch[isManOfTheMatchExist] = {
							...manOfTheMatch[isManOfTheMatchExist],
							awards: manOfTheMatch[isManOfTheMatchExist].awards + 1,
						};
					}
				});
			this.motmForLeague = _.orderBy(manOfTheMatch, ['awards'], ['desc']);
			this.tempMOMMatchLeagues = [] as any[];
		},
		getFinalsKickOfDate(date: string) {
			const locale = this.$i18n.locale;
			switch (locale) {
				case 'en':
					return dayjs(date).format('dddd MMM. Do');
				case 'nl':
					dayjs.locale('nl');
					const nlDate = dayjs(date).format('dddd Do MMM.');
					dayjs.locale('en');
					return `${nlDate.split('.').join('')}.`;
				default:
					return date;
			}
		},
		async handleAttachedFinals(attachedFinals: any) {
			this.attachedFinals = _.orderBy(attachedFinals, ['created_at'], ['asc']);
			const finalPositions: any[] = [];
			const start = 0;
			const end = attachedFinals.length;
			for (let i = start; i < end; i++) {
				const final = attachedFinals[i].final;
				let matches = await this.$store.dispatch('getMatchesByFinalId', final.id);
				matches = sortMatchesByTime(matches, true);
				// console.log('checking here', matches);
				matches = [...matches].filter((m: any) => {
					if (m.deleted_at) return false;
					if (m.phHomeTeamObj && m.phHomeTeamObj.type === 'bye') return false;
					if (m.phAwayTeamObj && m.phAwayTeamObj.type === 'bye') return false;
					return m;
				});
				final.kick_off_date = matches[0].date;
				final.start_date = matches[matches.length - 1].date;
				const positions =
					final.join_finals_leagues[0] &&
					final.join_finals_leagues[0].qualification_positions.split(' ');
				const positionArr =
					positions &&
					positions.length &&
					positions.map((position: any) => {
						return {
							position: parseInt(position),
							color_name: final.color_name,
							id: final.id,
							display_name: final.display_name,
							color: final.color,
						};
					});
				positionArr && positionArr.length && finalPositions.push(positionArr);
			}
			this.finalQualifications = finalPositions.flat(1);
		},
		async handleAttachedMiniLeagues(attachedMiniLeagues: any) {
			this.attachedMiniLeagues = _.orderBy(attachedMiniLeagues, ['created_at'], ['asc']);
			// const positionArr = attachedMiniLeagues.map(async (miniLeague: any) => {
			// 	const league = await this.$store.dispatch(
			// 		'getMatchesByLeagueId',
			// 		miniLeague.mini_league.id
			// 	);
			// 	const matches = sortMatchesByTime(league.matches);
			// 	miniLeague.mini_league.kick_off_date = matches[0].date;
			// 	const positions = miniLeague.qualification_positions.split(',');
			// return positions.map((position: any) => {
			// 	return {
			// 		position: parseInt(position),
			// 		color_name: miniLeague.color_name,
			// 		id: miniLeague.mini_league.id,
			// 		display_name: miniLeague.mini_league.display_name,
			// 		color: miniLeague.color,
			// 	};
			// });
			// });
			const positionArr = [];
			const start = 0;
			const end = attachedMiniLeagues.length;
			for (let i = start; i < end; i++) {
				const miniLeague = attachedMiniLeagues[i];
				const league = await this.$store.dispatch(
					'getMatchesByLeagueId',
					miniLeague.mini_league.id
				);
				var matches = sortMatchesByTime(league.matches);
				// alert('here');
				console.log('checking here', matches);
				matches = [...matches].filter((m: any) => {
					if (m.deleted_at) return false;
					if (m.phHomeTeamObj && m.phHomeTeamObj.type === 'bye') return false;
					if (m.phAwayTeamObj && m.phAwayTeamObj.type === 'bye') return false;
					return m;
				});
				miniLeague.mini_league.end_date = matches[matches.length - 1].date;
				miniLeague.mini_league.kick_off_date = matches[0].date;
				const positions = miniLeague.qualification_positions.split(',');
				const payload = positions.map((position: any) => {
					return {
						position: parseInt(position),
						color_name: miniLeague.mini_league.color_name,
						id: miniLeague.mini_league.id,
						display_name: miniLeague.mini_league.display_name,
						color: miniLeague.mini_league.color,
					};
				});

				positionArr.push(payload);
			}
			// console.log('this.miniLeaguesQualification', positionArr);
			this.miniLeaguesQualification = positionArr.flat(1);
		},
		async handleMiniLeague(id: string) {
			const data = await this.$store.dispatch('getParentLeagueData', id);
			if (!data || !data.length) return (this.parentLeagues = []);
			const parentTable: any[] = [];
			data.map((leagueData: any) => {
				const table = getLeagueTable(leagueData.matches, []);
				parentTable.push({
					name: leagueData.name,
					table,
				});
			});
			this.parentLeagues = parentTable;
		},
		getNextMatch(matches: any[], type: string) {
			const filteredMatches = matches.filter((m: any) => {
				if (type === 'fixture' && m.home_score == null && m.away_score == null) return true;
				if (type === 'result' && m.home_score !== null && m.away_score !== null) return true;
			});
			return filteredMatches.reduce((acc: any, cur: any) => {
				if (acc === undefined || !acc) return;
				if (!acc.date) {
					acc = cur;
					return acc;
				}
				if (acc === undefined) return;
				if (cur === undefined) return;
				if (
					!acc ||
					!cur ||
					acc.date === undefined ||
					cur.date === undefined ||
					!acc.date ||
					!cur.date
				)
					return;
				const aDate = parseInt(acc.date.replaceAll('-', ''));
				const cDate = parseInt(cur.date.replaceAll('-', ''));
				if (cDate < aDate) acc = cur;
				return acc;
			}, {});
		},
		async getStandingsData(newVal: any) {
			try {
				this.resetState();
				const { matches, points, isMatchGroup } = await this.$store.dispatch(
					'getLeagueTeams',
					newVal.id
				);
				const { attachedMiniLeagues, attachedFinals } = await this.$store.dispatch(
					'getAttachedLeagues',
					newVal.id
				);
				for (var i = 0; i < attachedFinals.length; i++) {
					let matches: any[] = [];
					attachedFinals[i].final.finals_groups.map((group: { matches: any[] }) => {
						matches = [...matches, ...group.matches];
					});
					const kom = attachedFinals[i].final.finals_knockouts[0].matches;
					// avoid deleted matches
					matches = [...matches, ...kom].filter((m: any) => {
						if (m.deleted_at) return false;
						if (m.phHomeTeamObj && m.phHomeTeamObj.type === 'bye') return false;
						if (m.phAwayTeamObj && m.phAwayTeamObj.type === 'bye') return false;
						return m;
					});
					attachedFinals[i].matches = matches;
					attachedFinals[i].calculatedStartDate = this.getNextMatch(matches, 'fixture').date;
				}
				if (newVal.league_type && newVal.league_type === 'mini-league')
					this.handleMiniLeague(newVal.id);
				const manOfTheMatchGroup = await this.$store.dispatch('getMOMGroupData', newVal.id);
				this.tempMOMMatchLeagues = [] as any[];
				// console.log('manOfTheMatchGroup', manOfTheMatchGroup);
				if (manOfTheMatchGroup.length > 0) {
					const duplicateLeagueIds = [] as any[];
					manOfTheMatchGroup.map((mom: any) => {
						mom.manOfTheMatchByManOfTheMatch.join_league_manofthematch.map((momMatches: any) => {
							if (!momMatches.leagueByLeague) {
								return false;
							}
							if (momMatches.league != newVal.id) {
								momMatches.leagueByLeague.matches.map((momMatch: any) => {
									this.tempMOMMatchLeagues.push(momMatch);
								});
							}
							// if (momMatches.leagueByLeague.parentLeagues.length > 0) {
							// 	momMatches.leagueByLeague.parentLeagues.map((parentLeague: any) => {
							// 		if (!duplicateLeagueIds.includes(parentLeague.league.id)) {
							// 			parentLeague.league.matches.map((parentLeagueMatch: any) => {
							// 				this.tempMOMMatchLeagues.push(parentLeagueMatch);
							// 			});
							// 		}
							// 		duplicateLeagueIds.push(parentLeague.league.id);
							// 	});
							// }
						});
					});
				}
				const leagueType =
					this.getSelectedStandingLeague.league_type == 'mini-league'
						? 'mini'
						: this.getSelectedStandingLeague.type;

				attachedMiniLeagues &&
					attachedMiniLeagues.length &&
					this.handleAttachedMiniLeagues(attachedMiniLeagues);

				attachedFinals && attachedFinals.length && this.handleAttachedFinals(attachedFinals);
				let table = [];
				if (isMatchGroup) {
					for (let i = 0; i < matches.length; i++) {
						if (Array.isArray(matches[i])) {
							for (let j = 0; j < matches[i].length; j++) {
								const leagueTable = getLeagueTable(
									matches[i][j],
									leagueType === 'mini' && points ? points : []
								);
								leagueTable && leagueTable.length && table.push(leagueTable);
							}
						} else {
							const leagueTable = getLeagueTable(
								matches[i],
								leagueType === 'mini' && points ? points : []
							);
							leagueTable && leagueTable.length && table.push(leagueTable);
						}
					}
					this.leagueTable = table;
				} else {
					if (this.tempMOMMatchLeagues.length > 0) {
						this.generateMotmTable([...matches, ...this.tempMOMMatchLeagues]);
						// this.generateMotmTable(matches);
					} else {
						this.generateMotmTable(matches);
					}
					//this.generateMotmTable(matches);
					const leagueTable = getLeagueTable(
						matches,
						leagueType === 'mini' && points ? points : []
					);
					leagueTable && leagueTable.length && table.push(leagueTable);
					this.leagueTable = table && table.length ? table : [];
				}
				if (!this.leagueTable) {
					this.leagueTable = table;
				}
			} catch (error) {
				this.resetState();
				return error;
			} finally {
				this.loading = false;
			}
		},
		resetState() {
			this.leagueTable = [];
			this.motmForLeague = [];
			this.attachedFinals = [];
			this.attachedMiniLeagues = [];
			this.finalQualifications = [];
			this.miniLeaguesQualification = [];
		},
		getFinalName(finals: any) {
			const color = finals.color_name;
			const translation = `colors.${color}`;
			const translatedText = this.$t(translation);
			if (translation === translatedText) return color;
			return translatedText;
		},
	},
	watch: {
		getSelectedStandingLeague: {
			immediate: true,
			deep: true,
			async handler(newVal) {
				if (!newVal) return;
				this.loading = true;
				this.resetState();
				await this.getStandingsData(newVal);
			},
		},
		getRefreshApp: {
			async handler() {
				const league =
					this.getSelectedStandingLeague &&
					this.getSelectedStandingLeague.id &&
					(await this.$store.dispatch('getLeagueById', this.getSelectedStandingLeague.id));
				if (league && league.published) {
					await this.getStandingsData(this.getSelectedStandingLeague);
				} else if (this.getSelectedStandingTeam && this.getSelectedStandingTeam.id) {
					const currentDate = getCurrentDate();
					const payload = {
						teamId: this.getSelectedStandingTeam.id,
						query: { _lte: currentDate },
						orderBy: 'desc',
					};
					const upcomingLeague = await this.$store.dispatch('getUpcomingLeague', payload);
					if (upcomingLeague) {
						this.$store.commit('setStandingLeague', upcomingLeague);
						// @ts-ignore
						await this.getStandingsData();
					} else {
						this.$store.commit('setStandingLeague', null);
						// @ts-ignore
						await this.getStandingsData();
					}
				}
				return;
			},
		},
	},
	computed: {
		...mapGetters(['getSelectedStandingLeague', 'getRefreshApp', 'getSelectedStandingTeam']),
	},
	filters: {
		firstTwoChars(val: string) {
			if (!val) return '';
			return val === '10th Class' || val === '11th Class' || val === '12th Class'
				? val.substring(0, 2)
				: val.substring(0, 1);
		},
	},
});
</script>
