<template>
	<AuthFlowLayout :background="background" :logoSize="'large'">
		<p class="text-lg text-white mr-20 ml-20 mt-16">{{ $t('welcome.introduction') }}</p>
		<div class="card mt-16">
			<h1 class="mb-16">Footy {{ $t('global.clubhouse') }}</h1>
			<p>{{ $t('welcome.instruction') }}</p>
			<div class="flex flex-col mt-32">
				<router-link class="button button--primary" to="/login">{{
					$t('global.login')
				}}</router-link>
				<router-link class="button button--link" to="/signup">{{
					$t('global.signup')
				}}</router-link>
			</div>
		</div>
	</AuthFlowLayout>
</template>

<script lang="ts">
import Vue from 'vue';

import AuthFlowLayout from '@/layouts/auth/AuthFlowLayout.vue';

export default Vue.extend({
	name: 'Welcome',

	data: () => ({
		background: require('@/assets/images/backgrounds/bg-coaches.jpg'),
	}),

	components: {
		AuthFlowLayout,
	},
});
</script>
