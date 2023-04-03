<template>
	
	<div class="main-nav flex lg:hidden">
		<router-link class="main-nav__button" to="/clubhouse">
			<BaseSvgIcon icon="icon-clubhouse" />
			<span>{{ $t('global.clubhouse') }}</span>
		</router-link>
		<router-link class="main-nav__button" to="/fixtures">
			<BaseSvgIcon icon="icon-fixtures" />
			<span>{{ $t('global.fixtures') }}</span>
		</router-link>
		<router-link class="main-nav__button" to="/results">
			<BaseSvgIcon icon="icon-results" />
			<span>{{ $t('global.results') }}</span>
		</router-link>
		<router-link class="main-nav__button" to="/standings">
			<BaseSvgIcon icon="icon-standings" />
			<span>{{ $t('global.standings') }}</span>
		</router-link>
		<router-link class="main-nav__button" to="/menu">
			<BaseSvgIcon icon="icon-menu" />
			<span>{{ $t('global.menu') }}</span>
		</router-link>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseSvgIcon from '@/layouts/icons/BaseSvgIcon.vue';
export default Vue.extend({
	components: {
		BaseSvgIcon,
	},
});
</script>
