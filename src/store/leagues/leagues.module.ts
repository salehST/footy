import { apolloClient } from '@/graphql';
import GetLeagueById from '@/graphql/league/GetLeagueById.gql';
const state = {};

const getters = {};

const actions = {
	async getLeagueById(_: any, leagueId: string) {
		try {
			const { data } = await apolloClient.query({
				query: GetLeagueById,
				variables: {
					leagueId,
				},
			});
			if (data.leagues && data.leagues.length) {
				return data.leagues[0];
			}
			if (data.finals && data.finals.length) {
				return data.finals[0];
			}
			return null;
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
