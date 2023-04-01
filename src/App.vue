<template>
	<div id="app">
		<div class="overlay">
			<div v-if="getLoadingStatus">
				<LoadingSpinner />
			</div>
		</div>
		<router-view />
		<SvgSprite />
		<SvgSpriteRaw />
	</div>
</template>
<script lang="ts">
import Vue from 'vue';

import SvgSprite from '@/components/svg/SvgSprite.vue';
import SvgSpriteRaw from '@/components/svg/SvgSpriteRaw.vue';
import LoadingSpinner from '@/layouts/common/LoadingSpinner.vue';

import { mapGetters } from 'vuex';
export default Vue.extend({
	components: {
		SvgSprite,
		SvgSpriteRaw,
		LoadingSpinner,
	},
	computed: {
		...mapGetters(['getLoadingStatus']),
	},
	methods: {
		async bootstrapApp() {
			try {
				this.$store.commit('toggleLoading', true);
				const user = await this.$store.dispatch('getCurrentFirebaseUser');
				const signupMethod = user.providerData?.[0]?.providerId;
				const appInitPayload = {
					signupMethod,
					firebaseId: user.uid,
				};
				if (!user) return;
				await this.$store.dispatch('appInit', appInitPayload);
			} catch (error) {
				return error;
			} finally {
				this.$store.commit('toggleLoading', false);
			}
		},
	},
	async mounted() {
		document.addEventListener('visibilitychange', async () => {
			if (document.visibilityState === 'visible') {
				await this.$store.dispatch('refreshApp');
				await this.bootstrapApp();
			}
		});
	},
	async created() {
		await this.bootstrapApp();
	},
});
</script>
