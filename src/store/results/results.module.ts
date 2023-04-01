import { apolloClient } from '@/graphql';
import GetResultLeagues from '@/graphql/results/GetResultLeagues.gql';
import GetResultLeaguesForAllTeams from '@/graphql/results/all/GetResultLeaguesForAllTeams.gql';
import GetResultFixtures from '@/graphql/results/GetResultFixtures.gql';
import GetAllResultFixtures from '@/graphql/results/all/GetAllResultFixtures.gql';
import GetFinalResults from '@/graphql/results/GetFinalResults.gql';
import GetAllFinalResults from '@/graphql/results/all/GetAllFinalResults.gql';
import { GetResultFixturesQuery, GetResultFinalsQuery } from '@/graphql/generated';
import getCurrentDate from '@/date';
interface TeamLeague {
	id: string;
	name: string;
}
interface ResultState {
	selectedResultTeam: TeamLeague | null;
	selectedResultLeague: TeamLeague | null;
	isFinalsSelected: boolean;
}

const getDefaultState = (): ResultState => ({
	selectedResultTeam: null,
	selectedResultLeague: null,
	isFinalsSelected: false,
});

const state: ResultState = getDefaultState();

const getters = {
	getSelectedResultTeam: (state: ResultState) => state.selectedResultTeam,
	getSelectedResultLeague: (state: ResultState) => state.selectedResultLeague,
	getIsResultFinalsSelected: (state: ResultState) => state.isFinalsSelected,
};

const actions = {
	async getResultLeagues({ state, commit, dispatch, rootState }: any, teamId: string) {
		const query = teamId ? GetResultLeagues : GetResultLeaguesForAllTeams;
		const playerTeamIds = rootState.Player.playerTeamIds;
		const { data } = await apolloClient.query({
			query,
			variables: {
				teamId: teamId ? teamId : playerTeamIds,
			},
		});
		if (!state.selectedResultLeague) {
			const currentDate = getCurrentDate();
			const payload = {
				teamId: teamId ? [teamId] : playerTeamIds,
				query: { _lte: currentDate },
				orderBy: 'desc',
			};
			const upcomingLeague = await dispatch('getUpcomingLeague', payload);
			if (upcomingLeague) {
				commit('setResultLeague', upcomingLeague);
			} else {
				commit('setResultLeague', data.leagues[0]);
			}
		}
		return [...data.leagues, ...data.finals];
	},

	async getResultFixtures({ state }: any, leagueId: string) {
		try {
			const currentDate = getCurrentDate();
			const teamId = state.selectedResultTeam?.id;
			if (teamId) {
				const { data }: { data: GetResultFixturesQuery } = await apolloClient.query({
					query: GetResultFixtures,
					variables: {
						leagueId,
						teamId,
						currentDate,
					},
				});
				return data.matches && data.matches.length ? data.matches : [];
			} else {
				const { data }: { data: GetResultFixturesQuery } = await apolloClient.query({
					query: GetAllResultFixtures,
					variables: {
						leagueId,
						currentDate,
					},
				});
				return data.matches && data.matches.length ? data.matches : [];
			}
		} catch (error) {
			return [];
		}
	},

	async getFinalResults({ state }: any, finalId: string) {
		try {
			const currentDate = getCurrentDate();
			const teamId = state.selectedResultTeam?.id;
			let finals = null;
			if (teamId) {
				const { data }: { data: GetResultFinalsQuery } = await apolloClient.query({
					query: GetFinalResults,
					variables: {
						finalId,
						teamId,
						currentDate,
					},
				});
				finals = data.finals[0];
			} else {
				const { data }: { data: GetResultFinalsQuery } = await apolloClient.query({
					query: GetAllFinalResults,
					variables: {
						finalId,
						currentDate,
					},
				});
				finals = data.finals[0];
			}
			if (finals) {
				const payload = {} as any;
				if (finals.finals_groups && finals.finals_groups.length)
					payload.finals_groups = finals.finals_groups;
				if (finals.finals_knockouts && finals.finals_knockouts.length)
					payload.finals_knockouts = finals.finals_knockouts[0].matches;
				return payload;
			} else return {};
		} catch (error) {
			return {};
		}
	},
};

const mutations = {
	setResultTeam: (state: ResultState, payload: TeamLeague) => (state.selectedResultTeam = payload),
	setResultLeague: (state: ResultState, payload: TeamLeague) =>
		(state.selectedResultLeague = payload),
	setIsResultFinalsSelected: (state: ResultState, payload: boolean) =>
		(state.isFinalsSelected = payload),
	resetResultState: (state: ResultState) => Object.assign(state, getDefaultState()),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
