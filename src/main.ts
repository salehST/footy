import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { apolloProvider } from '@/graphql';
import i18n from '@/i18n';

import '@/firebase';

import './assets/styles/tailwind.css';
import './assets/styles/app.scss';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
new Vue({
	router,
	store,
	apolloProvider,
	i18n,
	render: (h) => h(App),
}).$mount('#app');
