<template>
	<div class="pane">
		<h2 class="pane__title">{{ $t('profile.ringer_settings') }}</h2>
		<div class="pane__body">
			<div>
				<input class="sr-only" id="ringer_checkbox" type="checkbox" v-model="selection" />
				<label for="ringer_checkbox">{{ $t('profile.ringer_label') }}</label>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
	name: 'RingerSettings',

	data: () => ({
		active: false,
		city: 'amsterdam',
		player_type: 'm',
	}),

	computed: {
		...mapGetters(['getPlayer']),

		selection: {
			get() {
				if (!this.getPlayer) return false;
				return this.getPlayer.ringer;
			},

			async set(value) {
				try {
					await this.$store.dispatch('updateRinger', value);
					this.$store.commit('updateRingerStatus', value);
				} catch (error) {
					return error;
				}
			},
		},
	},
});
</script>
