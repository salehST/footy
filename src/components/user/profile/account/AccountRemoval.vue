<template>
	<div class="pane">
		<h2 class="pane__title">{{ $t('profile.delete_account_title') }}</h2>
		<div class="pane__body">
			<p class="text-base">{{ $t('profile.delete_account_explanation') }}</p>
			<p class=" text-18 font-bold mt-16">{{ $t('profile.delete_account_warning') }}</p>
			<button
				class="button button--danger button--wide button--small mt-16 text-20"
				type="button"
				@click="deleteAccount"
			>
				{{ $t('profile.delete_account_button') }}
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'AccountRemoval',

	methods: {
		deleteAccount() {
			window.alert(this.$t('profile.delete_account_temp_message'));
		},
	},
});
</script>
