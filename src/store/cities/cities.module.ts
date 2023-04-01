import { apolloClient } from '@/graphql';

import SignupCities from '@/graphql/city/SignupCities.gql';
import GetTeamCountryCode from '@/graphql/team/GetTeamCountryCode.gql';

import { GetSignupCitiesQuery } from '@/graphql/generated';
import { GetTeamCountryCodeQuery } from '@/graphql/generated';
const state = {};

const getters = {};

const actions = {
	async getCities() {
		try {
			const { data }: { data: GetSignupCitiesQuery } = await apolloClient.query({
				query: SignupCities,
			});
			return data.cities ? data.cities : [];
		} catch {
			return [];
		}
	},

	async getCountryCode(_: any, id: any) {
		try {
			const { data }: { data: GetTeamCountryCodeQuery } = await apolloClient.query({
				query: GetTeamCountryCode,
				variables: {
					id,
				},
			});
			return data.teams && data.teams[0] ? data.teams[0] : null;
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
