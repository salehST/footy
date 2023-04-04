import { apolloClient } from '@/graphql';

import GetFixtureLeagues from '@/graphql/fixtures/GetFixtureLeagues.gql';
import GetAllLeagueFixtures from '@/graphql/fixtures/all/GetAllLeagueFixtures.gql';
import GetAllFinals from '@/graphql/fixtures/all/GetAllFinals.gql';
import GetLeaguesForAllTeams from '@/graphql/fixtures/all/GetLeaguesForAllTeams.gql';
import GetLeagues from '@/graphql/fixtures/GetLeagues.gql';
import GetFinals from '@/graphql/fixtures/GetFinals.gql';

import { GetLeagueFixturesQuery, GetFixtureFinalsQuery } from '@/graphql/generated';
import getCurrentDate from '@/date';
interface TeamLeague {
	id: string;
	name: string;
	badge : string
}
interface FixtureState {
	selectedFixtureTeam: TeamLeague | null;
	selectedFixtureLeague: TeamLeague | null;
	isFinalsSelected: boolean;
}

const getDefaultState = (): FixtureState => ({
	selectedFixtureTeam: null,
	selectedFixtureLeague: null,
	isFinalsSelected: false,
});

const state: FixtureState = getDefaultState();

const getters = {
	getSelectedFixtureTeam: (state: FixtureState) => state.selectedFixtureTeam,
	getSelectedFixtureLeague: (state: FixtureState) => state.selectedFixtureLeague,
	getIsFinalsSelected: (state: FixtureState) => state.isFinalsSelected,
};

const actions = {
	async getFixtureLeagues({ state, commit, dispatch, rootState }: any, teamId: string) {
		try {
			const query = teamId ? GetFixtureLeagues : GetLeaguesForAllTeams;
			const playerTeamIds = rootState.Player.playerTeamIds;
			const { data } = await apolloClient.query({
				query,
				variables: {
					teamId: teamId ? teamId : playerTeamIds,
				},
			});
			if (!state.selectedFixtureLeague) {
				const currentDate = getCurrentDate();
				const payload = {
					teamId: teamId ? [teamId] : playerTeamIds,
					query: { _gte: currentDate },
					orderBy: 'asc',
				};
				const upcomingLeague = await dispatch('getUpcomingLeague', payload);
				if (upcomingLeague) {
					commit('setFixtureLeague', upcomingLeague);
				} else {
					commit('setFixtureLeague', data.leagues[0]);
				}
			}
			return [...data.leagues, ...data.finals];
		} catch (error) {
			return [];
		}
	},

	async getLeagueFixtures({ state }: any, leagueId: string) {
		try {
			const currentDate = getCurrentDate();
			const teamId = state.selectedFixtureTeam?.id;
			if (teamId) {
				const { data }: { data: GetLeagueFixturesQuery } = await apolloClient.query({
					query: GetLeagues,
					variables: {
						leagueId,
						teamId,
						currentDate,
					},
				});
				return data.matches && data.matches.length ? data.matches : [];
			} else {
				const { data }: { data: any } = await apolloClient.query({
					query: GetAllLeagueFixtures,
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

	async getFinalFixtures({ state }: any, finalId: string) {
		try {
			const currentDate = getCurrentDate();
			const teamId = state.selectedFixtureTeam?.id;
			let finals = null;
			if (teamId) {
				const { data }: { data: GetFixtureFinalsQuery } = await apolloClient.query({
					query: GetFinals,
					variables: {
						finalId,
						teamId,
						currentDate,
					},
				});
				finals = data.finals[0];
			} else {
				const { data }: { data: GetFixtureFinalsQuery } = await apolloClient.query({
					query: GetAllFinals,
					variables: {
						finalId,
						currentDate,
					},
				});
				finals = data.finals[0];
			}
			if (finals) {
				finals.finals_groups;
				const payload = {} as any;
				if (finals.finals_groups && finals.finals_groups.length)
					payload.finals_groups = finals.finals_groups;
				if (finals.finals_knockouts && finals.finals_knockouts.length)
					payload.finals_knockouts = finals.finals_knockouts[0].matches;
				return payload;
			}
		} catch (error) {
			return {};
		}
	},
};

const mutations = {
	setFixtureTeam: (state: FixtureState, payload: TeamLeague) =>
		(state.selectedFixtureTeam = payload),
	setFixtureLeague: (state: FixtureState, payload: TeamLeague) =>
		(state.selectedFixtureLeague = payload),
	setIsFinalsSelected: (state: FixtureState, payload: boolean) =>
		(state.isFinalsSelected = payload),
	resetFixturesState: (state: FixtureState) => Object.assign(state, getDefaultState()),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
