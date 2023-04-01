import { apolloClient } from '@/graphql';
import GetClubhouseMatches from '@/graphql/matches/GetClubhouseMatches.gql';
import { GetClubhouseMatchesQuery } from '@/graphql/generated';
import { isTeamAttachedToPlayer } from '@/helpers';
import { sortMatchesByTime } from '@/helpers';
import getCurrentDate from '@/date';
import GetMatchesByLeagueId from '@/graphql/matches/GetMatchesByLeagueId.gql';
import GetMatchesByFinalId from '@/graphql/matches/GetMatchesByFinalId.gql';

interface ClubhouseMatches {
	upcomingMatches: any[];
	completedMatches: any[];
}

interface MatchState {
	clubhouseMatches: ClubhouseMatches;
}

const leaguePayloadGenerator = (
	{ league, knockout, group }: { league: any; knockout: any; group: any },
	commit?: any,
	commitAction?: string
) => {
	let payload = {};
	if (league?.id) {
		payload = {
			id: league?.id,
			name: league?.display_name,
			type: league?.__typename || 'leagues',
			league_type: league.league_type,
		};
	}
	if (knockout?.final && knockout?.final.id) {
		payload = {
			id: knockout.final.id,
			name: knockout.final.display_name,
			type: knockout.final.__typename || 'finals',
		};
		commit && commitAction && commit(commitAction, true);
	}
	if (group?.final && group?.final.id) {
		payload = {
			id: group.final.id,
			name: group.final.display_name,
			type: knockout?.final.__typename || 'finals',
		};
		commit && commitAction && commit(commitAction, true);
	}
	// @ts-ignore
	if (!payload) {
		payload = {
			id: league?.id,
			name: league?.display_name,
			type: league?.__typename || 'leagues',
		};
	}
	return payload;
};

const getDefaultState = (): MatchState => ({
	clubhouseMatches: {} as ClubhouseMatches,
});

const state: MatchState = getDefaultState();

const getters = {
	getClubhouseMatches: (state: MatchState) => state.clubhouseMatches,
};

const actions = {
	async getClubhouseMatches({ commit, rootState, dispatch }: any, ids: string[]) {
		const currentDate = getCurrentDate();
		const { data }: { data: GetClubhouseMatchesQuery } = await apolloClient.query({
			query: GetClubhouseMatches,
			variables: {
				ids,
				currentDate,
			},
		});
		if (data.upcomingMatches.length) {
			const matches = sortMatchesByTime(data.upcomingMatches);
			const firstTwoDates: any = [];
			const upcomingMatches: any = [];
			matches.map((match: any) => {
				if (match.placeholder_home_team && match.placeholder_home_team.type !== 'seed') return;
				if (match.placeholder_away_team && match.placeholder_away_team.type !== 'seed') return;
				upcomingMatches.push(match);
			});
			for (const i in upcomingMatches) {
				const match = upcomingMatches[i];
				if (!firstTwoDates.includes(match.date)) firstTwoDates.push(match.date);
				if (firstTwoDates.length == 2) break;
			}
			const firstTwoDatesMatches: any = [];
			upcomingMatches.map((match: any) => {
				if (firstTwoDates.includes(match.date)) firstTwoDatesMatches.push(match);
			});
			data.upcomingMatches = firstTwoDatesMatches;
		}
		const routeTeam = rootState.Global.routeTeam;
		if (!rootState.Fixtures.selectedFixtureTeam) {
			if (data.upcomingMatches.length || routeTeam) {
				if (routeTeam && routeTeam.id && routeTeam.route && routeTeam.route === 'fixtures') {
					const team = await dispatch('getTeamById', routeTeam.id);
					if (team) {
						commit('setFixtureTeam', team);
						commit('setFixtureLeague', null);
					}
				} else if (
					data.upcomingMatches.length &&
					(!routeTeam ? true : routeTeam.route !== 'fixtures')
				) {
					const matchIndex: number = data.upcomingMatches[0].is_friendly ? 1 : 0;
					const team = isTeamAttachedToPlayer(data.upcomingMatches[matchIndex].home_team?.id)
						? data.upcomingMatches[matchIndex].home_team
						: data.upcomingMatches[matchIndex].away_team;
					const league = data.upcomingMatches[matchIndex].league;
					const knockout = data.upcomingMatches[matchIndex].finals_knockout;
					const group = data.upcomingMatches[matchIndex].finals_group;
					const teamPayload = {
						id: team?.id,
						name: team?.name,
					};
					const leaguePayload = leaguePayloadGenerator(
						{ league, knockout, group },
						commit,
						'setIsFinalsSelected'
					);
					commit('setFixtureTeam', teamPayload);
					commit('setFixtureLeague', leaguePayload);
				}
			} else {
				const teams = rootState.Player.playerTeams;
				if (!teams && !teams.length) return;
				const teamPayload = {
					id: teams[0]?.id,
					name: teams[0]?.name,
				};
				commit('setFixtureTeam', teamPayload);
			}
		}

		if (!rootState.Results.selectedResultTeam) {
			if (data.pastMatches.length || routeTeam) {
				if (routeTeam && routeTeam.id && routeTeam.route && routeTeam.route === 'results') {
					const team = await dispatch('getTeamById', routeTeam.id);
					if (team) {
						commit('setResultTeam', team);
						commit('setResultLeague', null);
					}
				} else if (data.pastMatches.length && (!routeTeam ? true : routeTeam.route !== 'results')) {
					const matchIndex: number = data.pastMatches[0].is_friendly ? 1 : 0;
					const team = isTeamAttachedToPlayer(data.pastMatches[matchIndex].home_team?.id)
						? data.pastMatches[matchIndex].home_team
						: data.pastMatches[matchIndex].away_team;
					const league = data.pastMatches[matchIndex].league;
					const knockout = data.pastMatches[matchIndex].finals_knockout;
					const group = data.pastMatches[matchIndex].finals_group;
					const teamPayload = {
						id: team?.id,
						name: team?.name,
					};
					const leaguePayload = leaguePayloadGenerator(
						{ league, knockout, group },
						commit,
						'setIsResultFinalsSelected'
					);
					commit('setResultTeam', teamPayload);
					commit('setResultLeague', leaguePayload);
				}
			} else {
				const teams = rootState.Player.playerTeams;
				if (!teams && !teams.length) return;
				const teamPayload = {
					id: teams[0]?.id,
					name: teams[0]?.name,
				};
				commit('setResultTeam', teamPayload);
			}
		}

		if (!rootState.Standings.selectedStandingTeam) {
			if (routeTeam && routeTeam.id && routeTeam.route && routeTeam.route === 'standings') {
				const team = await dispatch('getTeamById', routeTeam.id);
				commit('setStandingTeam', team);
				commit('setStandingLeague', null);
			} else {
				const fixtureData = rootState.Fixtures;
				commit('setStandingTeam', fixtureData.selectedFixtureTeam);
				commit('setStandingLeague', fixtureData.selectedFixtureLeague);
			}
		}
		commit('setClubhouseMatches', data);
	},
	async getMatchesByLeagueId(_: any, id: string) {
		try {
			const { data } = await apolloClient.query({
				query: GetMatchesByLeagueId,
				variables: {
					id,
				},
			});
			if (data.leagues && data.leagues.length) {
				return data.leagues[0];
			}
			return null;
		} catch (error) {
			return null;
		}
	},
	async getMatchesByFinalId(_: any, id: string) {
		try {
			const { data } = await apolloClient.query({
				query: GetMatchesByFinalId,
				variables: {
					id,
				},
			});
			const matches: any = [];
			if (data.finals_groups && data.finals_groups.length) {
				data.finals_groups.map((round: any) => {
					round.matches.map((match: any) => {
						matches.push(match);
					});
				});
			}
			if (data.finals_knockouts && data.finals_knockouts.length) {
				data.finals_knockouts.map((knockout: any) => {
					knockout.matches.map((match: any) => {
						matches.push(match);
					});
				});
			}
			if (matches.length) return matches;
			return null;
		} catch (error) {
			return null;
		}
	},
};

const mutations = {
	setClubhouseMatches: (state: MatchState, payload: any) => (state.clubhouseMatches = payload),
	resetMatchState: (state: MatchState) => Object.assign(state, getDefaultState()),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
