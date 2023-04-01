<template>
	<div class="loading-spinner-container">
		<!-- <div class="lds-facebook"> -->
		<div class="spinner">
			<img :src="loadingImage" />
			<div>{{ $t('global.loading') }}...</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'LoadingSpinner',

	computed: {
		loadingImage() {
			return require('@/assets/loading.gif');
		},
	},
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.loading-spinner-container {
	position: fixed;
	background-color: rgb(255, 255, 255, 0.9);
	width: 100vw;
	height: 100vh;
	left: 0;
	top: 0;
	z-index: 200;
	display: flex;
	justify-content: center;
	align-items: center;
}

.spinner {
	display: flex;
	align-items: center;
	flex-direction: column;
}

.lds-facebook {
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
}

.lds-facebook div {
	display: inline-block;
	position: absolute;
	left: 8px;
	width: 16px;
	background: $color-red;
	animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.lds-facebook div:nth-child(1) {
	left: 8px;
	animation-delay: -0.24s;
}

.lds-facebook div:nth-child(2) {
	left: 32px;
	animation-delay: -0.12s;
}

.lds-facebook div:nth-child(3) {
	left: 56px;
	animation-delay: 0;
}
@keyframes lds-facebook {
	0% {
		top: 8px;
		height: 64px;
	}
	50%,
	100% {
		top: 24px;
		height: 32px;
	}
}
</style>
