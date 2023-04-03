<template>
	<header :class="cssClasses" :style="style">
		<div class="page-header__top">
			<TopNav />
			<img class="page-header__logo block lg:hidden" :src="footyLogo" alt="Footy" />
			<h1 class="page-header__title flex lg:hidden">{{ title }}</h1>
			<div
				v-if="previousRoute && previousRoute.name && !backBtnDisable"
				@click="goToPreviousRoute"
				class="page-header__back cursor-pointer"
			>
				<BaseSvgIcon icon="icon-arrow-left" />
				{{ $t('interface.back') }}
			</div>
			
		</div>
		<slot></slot>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';

import { mapGetters } from 'vuex';
import BaseSvgIcon from '@/layouts/icons/BaseSvgIcon.vue';
import TopNav from './TopNav.vue';


export default Vue.extend({
	name: 'PageHeader',
	components: {
    BaseSvgIcon,
    TopNav,
},
	props: {
		pull: {
			default: 'sm',
			type: String,
			validator(value: any) {
				return ['', 'sm', 'md', 'lg'].indexOf(value) > -1;
			},
		},
		sticky: {
			default: false,
			type: Boolean,
		},
		title: {
			required: true,
			type: String,
		},
		joinTeam: {
			type: Boolean,
		},
	},
	data: () => ({
		backgroundImage: require('@/assets/images/backgrounds/bg-page-header.png'),
		footyLogo: require('@/assets/images/logo_footy@2x.png'),
		backBtnDisable: false,
		currentRoute: '',
	}),
	computed: {
		...mapGetters(['previousRoute']),
		style() {
			return {
				backgroundImage: `url(${this.backgroundImage}), linear-gradient(135deg, #029f8a 0%, #193860 100%)`,
			};
		},
		cssClasses() {
			return {
				'page-header': true,
				'is-sticky': (this as any).sticky,
				'has-pull': (this as any).pull,
				'has-pull-sm': (this as any).pull === 'sm',
				'has-pull-md': (this as any).pull === 'md',
				'has-pull-lg': (this as any).pull === 'lg',
			};
		},
	},
	methods: {
		goToPreviousRoute() {
			const currentRouteName = this.$route.name;
			if (currentRouteName === this.previousRoute.name) {
				this.$emit('go-to-clubhouse');
			} else {
				this.$router.push(this.previousRoute);
			}
		},
	},
	watch: {
		currentRoute(route) {
			this.backBtnDisable =
				(route == 'clubhouse' && this.joinTeam) || route == 'profile' ? false : true;
		},
		joinTeam(value) {
			this.backBtnDisable = value ? false : true;
		},
	},
	created() {
		(this as any).currentRoute = this.$route.name;
	},
});
</script>
