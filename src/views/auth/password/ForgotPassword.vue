<template>
	<AuthFlowLayout>
		<div class="card">
			<h1>Request new password</h1>
			<form ref="form" v-on:submit.prevent="submitHandler">
				<div class="mt-16">
					<label for="forgot-password-email">Email address</label>
					<input
						id="forgot-password-email"
						type="email"
						required
						v-model="email"
						autocomplete="username email"
					/>
				</div>
				<div class="mt-16">
					<button class="button button--primary" type="submit" :disabled="loading">Submit</button>
					<span v-if="message" class="pl-6">{{ message }}</span>
				</div>
			</form>
		</div>
	</AuthFlowLayout>
</template>

<script lang="ts">
import { resetPassword } from '@/firebase';
import AuthFlowLayout from '@/layouts/auth/AuthFlowLayout.vue';
import Vue from 'vue';

export default Vue.extend({
	data: () => ({
		email: '',
		message: '',
		loading: false,
	}),

	methods: {
		async submitHandler() {
			try {
				this.loading = true;
				const response = await resetPassword(this.email);
				if (response) this.message = response;
			} catch (error) {
				return false;
			} finally {
				this.loading = false;
			}
		},
	},
	components: {
		AuthFlowLayout,
	},
});
</script>
