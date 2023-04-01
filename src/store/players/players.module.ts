import { apolloClient } from '@/graphql';
import apiService from '@/api/axios';

import getPlayerByEmail from '@/graphql/players/GetPlayerByEmail.gql';
import UpdatePlayer from '@/graphql/players/UpdatePlayer.gql';
import CreateNewPlayer from '@/graphql/players/CreateNewPlayer.gql';
import RegisterPlayerWithTeam from '@/graphql/players/RegisterPlayerWithTeam.gql';
import RemovePlayerFromTeam from '@/graphql/players/RemovePlayerFromTeam.gql';
import GetPlayerInfo from '@/graphql/players/GetPlayerInfo.gql';
import UpdatePlayerLanguage from '@/graphql/players/UpdatePlayerLanguage.gql';
import UpdateRingerStatus from '@/graphql/players/UpdateRingerStatus.gql';
import {
	GetPlayerByEmailQuery,
	CreateNewPlayerMutation,
	RegisterPlayerWithTeamMutation,
	GetPlayerInfoQuery,
} from '@/graphql/generated';
import i18n from '@/i18n';
import gql from 'graphql-tag';

const getDefaultState = () => ({
	player: null,
	playerTeams: [],
	playerTeamIds: [],
});

const state = getDefaultState();

const getters = {
	getPlayer: (state: any) => state.player,
	getPlayerTeams: (state: any) => state.playerTeams,
	getPlayerTeamIds: (state: any) => state.playerTeamIds,
};

const actions = {
	async createZendeskPlayer(_: any, player: any) {
		try {
			const res = await apiService.post('pwa/create-zendesk-player', player);
			return res.data;
		} catch (err) {
			return null;
		}
	},
	async updateTeamInZendesk(_: any, payload: any) {
		try {
			await apiService.put('lm/zendesk_contact', payload);
		} catch (error) {
			return false;
		}
	},

	async getPlayerByEmail(_: any, email: string) {
		try {
			const { data }: { data: GetPlayerByEmailQuery } = await apolloClient.query({
				query: getPlayerByEmail,
				variables: {
					email,
				},
			});
			return data.players && data.players.length ? data.players[0] : null;
		} catch (error) {
			return 'error';
		}
	},

	async updatePlayer(_: any, player: any) {
		try {
			const { data } = await apolloClient.mutate({
				mutation: UpdatePlayer,
				variables: {
					id: player.id,
					object: player,
				},
			});

			if (!data) throw new Error('Unable to update player');

			return data;
		} catch (error) {
			return 'error';
		}
	},

	async createNewPlayer(_: any, players: any) {
		try {
			const res = await apolloClient.mutate({
				mutation: CreateNewPlayer,
				variables: {
					player: [players],
				},
			});
			const player: CreateNewPlayerMutation = res.data;
			return player.insert_players?.returning && player.insert_players?.returning[0]
				? player.insert_players?.returning[0]
				: 'error';
		} catch (error) {
			return 'error';
		}
	},

	async registerPlayerWithTeam(_: any, { player, team }: any) {
		try {
			const res = await apolloClient.mutate({
				mutation: RegisterPlayerWithTeam,
				variables: {
					player,
					team,
				},
			});
			const updatedPlayer: RegisterPlayerWithTeamMutation = res.data;
			return updatedPlayer.insert_join_players_teams?.returning.length
				? updatedPlayer.insert_join_players_teams?.returning[0]
				: false;
		} catch (error) {
			return false;
		}
	},

	async getPlayerInfo(
		{ dispatch, commit, state }: any,
		{ firebaseId, signupMethod }: { firebaseId: string; signupMethod: string }
	) {
		try {
			const { data }: { data: GetPlayerInfoQuery } = await apolloClient.query({
				query: GetPlayerInfo,
				variables: {
					firebaseId,
				},
			});
			const player = data.players[0];
			localStorage.setItem('player', JSON.stringify(player));
			if (!player) return 'No Player Found';
			// @ts-ignore
			player.signupMethod = signupMethod;
			commit('setPlayer', player);
			commit('setPlayerTeams', player.join_players_teams.length ? player.join_players_teams : []);
			const playerTeamIds = state.playerTeamIds || state.user.playerTeamIds;
			playerTeamIds.length && dispatch('getClubhouseMatches', playerTeamIds);
			player.language && commit('setUserLanguage', player.language);
		} catch (error) {
			return false;
		}
	},

	async updatePlayerLanguage({ state, commit }: any, language: string) {
		const userId = state.player.id;
		return apolloClient
			.mutate({
				mutation: UpdatePlayerLanguage,
				variables: {
					userId,
					language,
				},
			})
			.then(() => commit('setUserLanguage', language));
	},

	async updateRinger({ state }: any, payload: boolean) {
		const userId = state.player.id;
		return apolloClient.mutate({
			mutation: UpdateRingerStatus,
			variables: {
				userId,
				status: payload,
			},
		});
	},

	async getPlayerByFirebaseId(_: any, firebaseId: string) {
		return apolloClient.query({
			query: gql`
				query getPlayerByFirebaseId($firebaseId: String!) {
					players(where: { firebase_id: { _eq: $firebaseId } }) {
						id
						firebase_id
						join_players_teams {
							teamObj: teamByTeam {
								id
							}
						}
					}
				}
			`,
			variables: {
				firebaseId,
			},
		});
	},
	async removePlayerFromTeam({ dispatch }: any, object: any) {
		const { player_id, team_id } = object;
		return apolloClient.mutate({
			mutation: RemovePlayerFromTeam,
			variables: {
				player_id,
				team_id,
			},
		});
	},
};

const mutations = {
	setPlayer: (state: any, payload: any) => (state.player = payload),
	setPlayerTeams: (state: any, payload: any) => {
		const playerTeams = payload.map(({ team }: any) => team);
		state.playerTeams = playerTeams;
		state.playerTeamIds = playerTeams.map((team: any) => team.id);
	},
	setUserLanguage: (state: any, payload: string) => {
		state.player.language = payload;
		i18n.locale = payload;
	},
	updateRingerStatus: (state: any, payload: boolean) => (state.player.ringer = payload),
	resetPlayerState: (state: any) => Object.assign(state, getDefaultState()),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
