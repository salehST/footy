import { apolloClient } from '@/graphql';
import GetTeamById from '@/graphql/team/GetTeamById.gql';
import GetSearchTeam from '@/graphql/team/GetSearchTeam.gql';
import GetCountryTeams from '@/graphql/team/GetCountryTeams.gql';
import GetOtherLeagueTeams from '@/graphql/team/GetOtherLeagueTeams.gql';
import GetOtherFinalTeams from '@/graphql/team/GetOtherFinalTeams.gql';
import GetTeamViewData from '@/graphql/team/GetTeamViewData.gql';
import GetPlayerByTeam from '@/graphql/players/GetPlayerByTeam.gql';
import GetLeagueTeams from '@/graphql/team/GetLeagueTeams.gql';
import GetDeletedTeams from '@/graphql/team/GetDeletedTeams.gql';
import GetUpcomingLeagueData from '@/graphql/team/GetUpcomingLeagueData.gql';
import {
	GetSearchTeamsQuery,
	TeamViewQuery,
	PlayersByTeamQuery,
	GetStandingsDataQuery,
	GetDeletedTeamsQuery,
	GetUpcomingLeagueQuery,
} from '@/graphql/generated';

export interface GetOtherTeamsPayload {
	isFinal: boolean;
	leagueId: string;
	playerTeams: string[];
}

const state = {};

const getters = {};

const actions = {
	async getTeamById(_: any, id: string) {
		try {
			const res = await apolloClient.query({
				query: GetTeamById,
				variables: {
					id,
				},
			});
			return res.data.teams[0];
		} catch (error) {
			return 'error';
		}
	},
	async getSearchTeam(_: any, searchTerm: string) {
		try {
			searchTerm = `%${searchTerm}%`;
			const { data }: { data: GetSearchTeamsQuery } = await apolloClient.query({
				query: GetSearchTeam,
				variables: {
					searchTerm,
				},
			});
			return data.teams.length ? data.teams : [];
		} catch (error) {
			return [];
		}
	},
	async searchCountryTeam(_: any, payload: any) {
		try {
			let searchTerm = payload.searchTerm;
			const countryId = payload.countryId;
			searchTerm = `%${searchTerm}%`;
			const { data }: { data: GetSearchTeamsQuery } = await apolloClient.query({
				query: GetCountryTeams,
				variables: {
					searchTerm,
					countryId,
				},
			});
			return data.teams.length ? data.teams : [];
		} catch (error) {
			return [];
		}
	},

	async getOtherTeams(_: any, payload: GetOtherTeamsPayload) {
		try {
			const { isFinal, playerTeams, leagueId } = payload;
			const query = isFinal ? GetOtherFinalTeams : GetOtherLeagueTeams;
			const { data } = await apolloClient.query({
				query,
				variables: {
					leagueId,
					playerTeams,
				},
			});
			const teams = data.teams.map(({ team }: any) => team);
			return teams && teams.length ? teams : false;
		} catch (error) {
			return false;
		}
	},

	async getTeamData(_: any, teamId: string) {
		try {
			const { data }: { data: TeamViewQuery } = await apolloClient.query({
				query: GetTeamViewData,
				variables: {
					teamId,
				},
			});
			// @ts-ignore
			data.teams[0].matches = [
				...data.teams[0].matchesByHomeTeam,
				...data.teams[0].matchesByAwayTeam,
			];
			return data.teams[0];
		} catch (error) {
			return false;
		}
	},

	async getTeamPlayers(_: any, teamId: string) {
		try {
			const { data }: { data: PlayersByTeamQuery } = await apolloClient.query({
				query: GetPlayerByTeam,
				variables: {
					teamId,
				},
			});
			return data.players;
		} catch (error) {
			return [];
		}
	},

	async getDeletedTeams(_: any, leagueId: string) {
		const { data }: { data: GetDeletedTeamsQuery } = await apolloClient.query({
			query: GetDeletedTeams,
			variables: {
				leagueId,
			},
		});
		return data.join_league_teams;
	},

	async getLeagueTeams({ dispatch }: any, leagueId: string) {
		try {
			const { data }: { data: GetStandingsDataQuery } = await apolloClient.query({
				query: GetLeagueTeams,
				variables: {
					leagueId,
				},
			});
			let filteredMatches = [];
			let matches = [];
			let isMatchGroup = false;
			data.matches && data.matches.length && matches.push(data.matches);
			data.finals &&
				data.finals.length &&
				data.finals[0].finals_knockouts &&
				matches.push(data.finals[0].finals_knockouts.map((final) => final.matches));
			if (
				data.finals &&
				data.finals.length &&
				data.finals[0].finals_groups &&
				data.finals[0].finals_groups.length
			) {
				matches.push(data.finals[0].finals_groups.map((final) => final.matches));
				isMatchGroup = true;
			}
			matches = isMatchGroup ? matches : matches.flat(4);
			const deletedTeams = await dispatch('getDeletedTeams', leagueId);
			if (deletedTeams && deletedTeams.length && !isMatchGroup) {
				// @ts-ignore
				filteredMatches = matches.reduce((initialValue: any, match: any) => {
					deletedTeams.map(({ team }: any) => {
						if (team.id === match.homeTeam.id || team.id === match.awayTeam.id) return;
						initialValue.push(match);
					});
					return initialValue;
				}, []);
				filteredMatches = [...new Set(filteredMatches)];
			} else {
				filteredMatches = matches;
			}
			return {
				matches: filteredMatches,
				points: data.points,
				isMatchGroup,
			};
		} catch (error) {
			return [];
		}
	},

	async getUpcomingLeague(_: any, { teamId, query, orderBy }: any) {
		try {
			const { data }: { data: GetUpcomingLeagueQuery } = await apolloClient.query({
				query: GetUpcomingLeagueData,
				variables: {
					teamId: teamId,
					query,
					orderBy,
				},
			});
			return data.matches[0].league || null;
		} catch (error) {
			return null;
		}
	},
};

const mutations = {};

export default {
	state,
	getters,
	actions,
	mutations,
};
