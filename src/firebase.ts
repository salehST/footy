import firebase from 'firebase/app';
import 'firebase/auth';
import store from './store';

const configOptions = {
	apiKey: 'AIzaSyAC8jStLY7SjLQ7LVEP_dpqsBx-ZL7GNzc',
	authDomain: 'footy-users.firebaseapp.com',
	databaseURL: 'https://footy-users.firebaseio.com',
	projectId: 'footy-users',
	storageBucket: 'footy-users.appspot.com',
	messagingSenderId: '477202226247',
	appId: '1:477202226247:web:8aa35886136b539744a562',
	measurementId: 'G-Q5K2913J7M',
};

firebase.initializeApp(configOptions);

// @ts-ignore
firebase.getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			unsubscribe();
			resolve(user);
		}, reject);
	});
};

export const resetPassword = async (email: string) => {
	let response = 'Password Reset Email Successfully Sent. Please check your inbox';
	try {
		await firebase.auth().sendPasswordResetEmail(email);
	} catch (err) {
		// @ts-ignore
		response = err.message;
	}
	return response;
};

firebase.auth().onAuthStateChanged((firebaseUser) => {
	if (firebaseUser) return;
	if (!firebaseUser) store.commit('setPlayer', null);
});
