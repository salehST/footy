<template>
	<div class="auth-flow-layout" :style="wrapperStyle">
		<img
			class="auth-flow-layout__logo"
			:src="logo"
			:style="logoStyle"
			alt="Footy"
			@click="$router.push({ name: 'welcome' })"
		/>
		<div
			class="auth-flow-layout__back"
			v-if="$route.path !== '/'"
			style="cursor: pointer"
			@click.prevent="$emit('clearSignupType')"
		>
			<BaseSvgIcon icon="icon-arrow-left" />
			{{ $t('interface.back') }}
		</div>
		<div class="auth-flow-layout__inner">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import BaseSvgIcon from '@/layouts/icons/BaseSvgIcon.vue';

export default Vue.extend({
	props: {
		background: {
			default: require('@/assets/images/backgrounds/bg-team.jpg'),
			type: String,
		},
		logoSize: {
			default: 'small',
			type: String,
		},
		signupType: {
			default: null,
			type: String,
		},
	},

	components: {
		BaseSvgIcon,
	},

	data: () => ({
		logo: require('@/assets/images/logo_footy@2x.png'),
	}),

	computed: {
		...mapState(['previousRoute']),

		logoStyle() {
			return {
				width: (this as any).logoSize === 'large' ? '260px' : '116px',
			};
		},

		showMiniLanguageSwitch() {
			return false;
		},

		wrapperStyle() {
			return {
				backgroundImage: `linear-gradient(-2.5deg, #ddd8d8 0%, #ddd8d8 212px, transparent 213px, transparent 100% ), url('${this.background}')`,
				'--backgroundImage': `url('${this.background}')`,
			};
		},
	},

	methods: {
		naviagteToHome() {},
	},
});
</script>

<style>
.miniswitch-wrapper {
	position: absolute;
	top: 1rem;
	right: 1rem;
}
</style>
