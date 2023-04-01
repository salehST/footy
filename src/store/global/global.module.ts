import firebase from 'firebase/app';

interface PreviousRoute {
	name: string;
	path: string;
}

interface RouteTeam {
	id: string;
	route: string;
}
interface GlobalState {
	loading: boolean;
	previousRoute: PreviousRoute;
	routeTeam: RouteTeam | null;
	refreshApp: number;
}

const state: GlobalState = {
	loading: false,
	previousRoute: {} as PreviousRoute,
	routeTeam: null,
	refreshApp: 0,
};

const getters = {
	getLoadingStatus: (state: GlobalState) => state.loading,
	previousRoute: (state: GlobalState) => state.previousRoute,
	getRefreshApp: (state: GlobalState) => state.refreshApp,
};

const actions = {
	getCurrentFirebaseUser() {
		// @ts-ignore
		return firebase.getCurrentUser();
	},

	async appInit(
		{ dispatch }: { state: GlobalState; dispatch: any },
		{ firebaseId, signupMethod }: { firebaseId: string; signupMethod: string }
	) {
		try {
			let user = null;
			if (!firebaseId || !signupMethod) user = await dispatch('getCurrentFirebaseUser');
			if (!user && !firebaseId) return false;
			const payload = {
				firebaseId: firebaseId ? firebaseId : user.uid,
				signupMethod: signupMethod ? signupMethod : user.providerData?.[0]?.providerId,
			};
			const data = await dispatch('getPlayerInfo', payload);
			if (data) return data;
		} catch (error) {
			throw new Error('Failed to load the app');
		}
	},

	async changeLanguage({ dispatch }: any, language: string) {
		try {
			await dispatch('updatePlayerLanguage', language);
		} catch (error) {
			return error;
		}
	},
	async refreshApp({ rootState, dispatch, commit }: any) {
		const selectedFixtureTeam = rootState.Fixtures.selectedFixtureTeam;
		const selectedResultTeam = rootState.Results.selectedResultTeam;
		const selectedStandingTeam = rootState.Standings.selectedStandingTeam;
		await dispatch('getFixtureLeagues', selectedFixtureTeam && selectedFixtureTeam.id);
		await dispatch('getResultLeagues', selectedResultTeam && selectedResultTeam.id);
		await dispatch('getStandingLeagues', selectedStandingTeam && selectedStandingTeam.id);
		commit('refreshApp');
	},
};

const mutations = {
	toggleLoading: (state: GlobalState, payload: boolean = false) => (state.loading = payload),
	updatePreviousRoute: (state: GlobalState, payload: PreviousRoute) =>
		(state.previousRoute = payload),
	setRouteTeamId: (state: GlobalState, payload: RouteTeam) => (state.routeTeam = payload),
	refreshApp: (state: GlobalState) => (state.refreshApp += 1),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
