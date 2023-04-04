import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Welcome from '@/components/Welcome.vue';
import PlayFootyLogin from '@/components/PlayFootyLogin.vue';
import store from '@/store';
const routes = [
	{
		path: '/',
		name: 'welcome',
		component: Welcome,
		meta: {
			redirectIfLoggedIn: true,
		},
	},
	{
		path: '/playfooty-req',
		name: 'playfootyReq',
		component: PlayFootyLogin,
	},
	{
		path: '/signup:id?',
		name: 'signup',
		component: () => import('@/views/auth/Signup.vue'),
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: '/join/:id?',
		name: 'join',
		component: () => import('@/views/auth/Join.vue'),
		meta: {
			redirectIfLoggedIn: false,
		},
	},
	{
		path: '/login',
		name: 'signin',
		component: () => import('@/views/auth/Login.vue'),
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: '/clubhouse',
		name: 'clubhouse',
		component: () => import('@/views/home/ClubHouse.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/newclubhouse',
		name: 'newclubhouse',
		component: () => import('@/views/home/NewClubHouse.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/menu',
		name: 'menu',
		component: () => import('@/views/Menu.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	// {
	// 	path: '/profile-billing',
	// 	name: 'profile-billing',
	// 	component: () => import('@/views/user/ProfileBilling.vue'),
	// 	meta: {
	// 		requiresAuth: true,
	// 	},
	// },
	{
		path: '/forgot-password',
		name: 'forgot-password',
		component: () => import('@/views/auth/password/ForgotPassword.vue'),
	},
	{
		path: '/profile',
		name: 'profile',
		component: () => import('@/views/user/Profile.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/find-fixtures',
		name: 'find fixtures',
		component: () => import('@/views/fixtures/FindFixtures.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/fixtures',
		name: 'fixtures',
		component: () => import('@/views/fixtures/Fixtures.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/fixtures/:id',
		name: 'fixtures',
		component: () => import('@/views/fixtures/Fixtures.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/results',
		name: 'results',
		component: () => import('@/views/results/Results.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/results/:id',
		name: 'results',
		component: () => import('@/views/results/Results.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/standings',
		name: 'standings',
		component: () => import('@/views/standings/Standings.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/team/:id',
		name: 'team',
		component: () => import('@/views/team/Team.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '*',
		redirect: '/clubhouse',
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

router.beforeEach(async (to, from, next) => {
	if (from.name && from.path) {
		const payload = {
			name: from.name,
			path: from.path,
		};
		store.commit('updatePreviousRoute', payload);
	}

	// @ts-ignore
	let user = store.state.Player.player;
	let lsPlayer;
	if (localStorage.getItem('player') !== 'undefined') {
		// @ts-ignore
		lsPlayer = JSON.parse(localStorage.getItem('player'));
	}
	if (!user && lsPlayer && typeof lsPlayer === 'object') {
		// @ts-ignore
		await store.dispatch('getPlayerInfo', {
			firebaseId: lsPlayer.firebase_id,
			signupMethod: 'password',
		});
	}
	// @ts-ignore
	user = store.state.Player.player;
	// @ts-ignore

	if (!user) user = await store.dispatch('getCurrentFirebaseUser');

	// @ts-ignore
	if (to.meta.redirectIfLoggedIn && user) return next({ name: 'clubhouse', path: '/clubhouse' });
	// @ts-ignore
	if (!to.meta.redirectIfLoggedIn && user) return next();
	// @ts-ignore
	if (to.meta.requiresAuth && !user) return next({ name: 'signin', path: '/login' });
	// @ts-ignore
	if (!to.meta.requiresAuth && user) return next({ name: 'clubhouse', path: '/clubhouse' });
	next();
});

export default router;
