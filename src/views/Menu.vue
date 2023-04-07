<template>
	<div class="menu-page">
	<BaseLayout :headerPull="'lg'" :pageTitle="$t('global.menu')">
		
		<template slot="content">
			<nav class="menu">
				<div class="menu__group">
					<!-- <h2 class="menu__title text-white">{{ $t('menu.profile-billing') }}</h2> -->
					<router-link class="menu__link flex items-center justify-between profile" to="/profile-billing"><span>{{ $t('Profile Billing') }}</span> <img class="profile-details__photo h-10 w-10" src="/img/avatar.png" alt="avatar" /></router-link>
					<!-- <router-link class="menu__link" to="/find-fixtures">{{
						$t('menu.find_fixtures')
					}}</router-link> -->
					
					<a class="menu__link">Join a league</a>
					<a class="menu__link">My bookings</a>

					<a href="https://www.playfooty.com/contact/" target="_blank" class="menu__link">Contact Footy</a>
				</div>
				<div class="menu__group">
					<h2 class="menu__title hidden">{{ $t('menu.change_language') }}</h2>
					<LanguageSwitch class="hidden" />
					<a class="menu__link" v-on:click="signOut">{{ $t('menu.log_out') }}</a>
				</div>
			</nav>
		</template>
	</BaseLayout>
	
</div>
</template>
<style>
@media only screen and (max-width: 1024px) {
.menu-page .page-header.has-pull + .page__content{
	margin-top: -40px;
	background: #ddd8d8;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding-top: 48px;
}
.menu-page .page-header{
	min-height: 10.75rem;
}
.menu-page .page-header::after{
	display: none!important;
}

}
.menu .menu__link{
	display: flex;
}
.menu__link.profile{
	padding: 0.5rem 1rem;
}
.menu .profile-details__photo{
	width: 40px;
	height: 40px;
}
</style>
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
