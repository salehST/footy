import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Auth from '@/store/auth/auth.module';
import Player from '@/store/players/players.module';
import Team from '@/store/teams/teams.module';
import City from '@/store/cities/cities.module';
import Global from '@/store/global/global.module';
import Matches from '@/store/matches/matches.module';
import Fixtures from '@/store/fixtures/fixtures.module';
import Results from '@/store/results/results.module';
import Standings from '@/store/standings/standings.module';
import Leagues from '@/store/leagues/leagues.module';
const store = new Vuex.Store({
	modules: {
		Auth,
		Player,
		Team,
		City,
		Global,
		Matches,
		Fixtures,
		Results,
		Standings,
		Leagues,
	},
});

export default store;
