import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

const httpLink = createHttpLink({
	uri: process.env.VUE_APP_GRAPHQL_API,
	headers: {
		'content-type': 'application/json',
		'x-hasura-admin-secret': process.env.VUE_APP_GRAPHQL_API_SECRET,
	},
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
	link: httpLink,
	cache,
	defaultOptions: {
		query: {
			fetchPolicy: 'no-cache',
		},
		watchQuery: {
			fetchPolicy: 'no-cache',
		},
	},
});

export const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
	defaultOptions: {
		$query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all',
		},
	},
});
