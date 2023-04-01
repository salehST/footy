import { apolloClient } from '@/graphql';
import GetStandingLeagues from '@/graphql/standings/GetStandingLeagues.gql';
import GetStandingLeaguesForAllTeams from '@/graphql/standings/all/GetStandingLeaguesForAllTeams.gql';
import GetAttachedFinalAndMiniLeagues from '@/graphql/standings/GetAttachedFinalAndMiniLeagues.gql';
import GetParentLeagueData from '@/graphql/standings/GetParentLeagueData.gql';
import GetMOMGroupData from '@/graphql/standings/GetMOMGroupData.gql';

import { GetParentLeagueDataQuery } from '@/graphql/generated';
import getCurrentDate from '@/date';

interface TeamLeague {
	id: string;
	name: string;
}
interface StandingState {
	selectedStandingTeam: TeamLeague | null;
	selectedStandingLeague: TeamLeague | null;
	isFinalsSelected: boolean;
}

const getDefaultState = (): StandingState => ({
	selectedStandingTeam: null,
	selectedStandingLeague: null,
	isFinalsSelected: false,
});

const state: StandingState = getDefaultState();

const getters = {
	getSelectedStandingTeam: (state: StandingState) => state.selectedStandingTeam,
	getSelectedStandingLeague: (state: StandingState) => state.selectedStandingLeague,
	getIsStandingsFinalsSelected: (state: StandingState) => state.isFinalsSelected,
};

const actions = {
	async getStandingLeagues({ rootState, commit, state, dispatch }: any, teamId: string) {
		try {
			const query = teamId ? GetStandingLeagues : GetStandingLeaguesForAllTeams;
			const playerTeamIds = rootState.Player.playerTeamIds;
			const { data } = await apolloClient.query({
				query,
				variables: {
					teamId: teamId ? teamId : playerTeamIds,
				},
			});
			if (!state.selectedStandingLeague) {
				const currentDate = getCurrentDate();
				const payload = {
					teamId: teamId ? [teamId] : playerTeamIds,
					query: { _lte: currentDate },
					orderBy: 'desc',
				};
				const upcomingLeague = await dispatch('getUpcomingLeague', payload);
				if (upcomingLeague) {
					commit('setStandingLeague', upcomingLeague);
				} else {
					commit('setStandingLeague', data.leagues[0]);
				}
			}
			return [...data.leagues, ...data.finals];
		} catch (error) {
			return [];
		}
	},

	async getAttachedLeagues(_: any, leagueId: string) {
		try {
			const { data } = await apolloClient.query({
				query: GetAttachedFinalAndMiniLeagues,
				variables: {
					leagueId,
				},
			});
			return data;
		} catch (error) {
			return {
				attachedMiniLeagues: [],
				attachedFinals: [],
			};
		}
	},

	async getParentLeagueData(_: any, leagueId: string) {
		const { data }: { data: GetParentLeagueDataQuery } = await apolloClient.query({
			query: GetParentLeagueData,
			variables: {
				leagueId,
			},
		});
		const matches = data.join_leagues_mini_leagues.map((league) => {
			return {
				name: league.league.display_name,
				matches: league.league.matches,
			};
		});
		return matches;
	},

	async getMOMGroupData(_: any, leagueId: string) {
		try {
			const { data } = await apolloClient.query({
				query: GetMOMGroupData,
				variables: {
					leagueId,
				},
			});
			return data.join_man_of_the_matches_leagues;
		} catch (error) {
			return {
				attachedMiniLeagues: [],
				attachedFinals: [],
			};
		}
	},
};

const mutations = {
	setStandingTeam: (state: StandingState, payload: any) => (state.selectedStandingTeam = payload),
	setStandingLeague: (state: StandingState, payload: any) =>
		(state.selectedStandingLeague = payload),
	setIsStandingsFinalsSelected: (state: StandingState, payload: boolean) =>
		(state.isFinalsSelected = payload),
	resetStandingState: (state: StandingState) => Object.assign(state, getDefaultState()),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
