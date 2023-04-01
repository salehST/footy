import firebase from 'firebase/app';
import 'firebase/auth';

const state = {};

const getters = {};

const actions = {
	async createFirebaseUser(_: any, { email, password }: { email: string; password: string }) {
		try {
			const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
			return res.user;
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				return {
					error: true,
					msg: 'EMAIL_EXISTS',
				};
			}
			// @ts-ignore
			throw new Error(error.code);
		}
	},

	async signOut({ commit }: any) {
		try {
			localStorage.clear();
			await firebase.auth().signOut();
		} catch (error) {
			return 'error';
		}
	},

	async updatePassword(_: any, payload: any) {
		try {
			await (firebase as any).auth().currentUser.updatePassword(payload);
			return {
				error: false,
				msg: 'Password updated successfully',
			};
		} catch (error) {
			return {
				error: true,
				message: error,
			};
		}
	},
};

const mutations = {
	resetAuthState(state: any) {
		state.user = null;
		localStorage.clear();
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
