<template>
	<BaseLayout :headerPull="'lg'" :pageTitle="$t('global.menu')">
		<template slot="content">
			<nav class="menu">
				<div class="menu__group">
					<h2 class="menu__title text-white">{{ $t('menu.profile') }}</h2>
					<router-link class="menu__link" to="/profile">{{ $t('menu.profile') }}</router-link>
					<router-link class="menu__link" to="/find-fixtures">{{
						$t('menu.find_fixtures')
					}}</router-link>
				</div>
				<div class="menu__group">
					<h2 class="menu__title">{{ $t('menu.change_language') }}</h2>
					<LanguageSwitch />
					<a class="menu__link" v-on:click="signOut">{{ $t('menu.log_out') }}</a>
				</div>
			</nav>
		</template>
	</BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseLayout from '@/layouts/BaseLayout.vue';
import LanguageSwitch from '@/components/language/LanguageSwitch.vue';

export default Vue.extend({
	name: 'Menu',
	components: {
    BaseLayout,
    LanguageSwitch,
},
	methods: {
		async signOut() {
			await (this as any).$store.dispatch('signOut');
			this.$store.commit('resetMatchState');
			this.$store.commit('resetPlayerState');
			this.$store.commit('resetResultState');
			this.$store.commit('resetFixturesState');
			this.$store.commit('resetStandingState');
			this.$router.push({ name: 'welcome' });
		},
	},
});
</script>
