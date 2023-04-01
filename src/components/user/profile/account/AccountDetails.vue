<template>
	<div class="pane" v-if="user">
		<h2 class="pane__title">{{ $t('profile.account_details') }}</h2>
		<div class="pane__body">
			<div class="pane__field">
				<button
					v-if="user.signupMethod === 'password'"
					class="pane__edit"
					type="button"
					v-on:click="editingEmail = !editingEmail"
				>
					{{ editingEmail ? $t('interface.done') : $t('interface.edit') }}
				</button>
				<label for="account_email">{{ $t('profile.account_email') }}</label>
				<input id="account_email" type="email" :readonly="!editingEmail" :value="user.email" />
			</div>

			<div v-if="user.signupMethod === 'password'" class="pane__field">
				<button class="pane__edit" type="button" @click="updatePassword">
					{{ editingPassword ? $t('interface.done') : $t('interface.edit') }}
				</button>
				<button
					v-if="editingPassword"
					class="pane__edit"
					style="margin-right: 40px"
					type="button"
					@click="updatePassword($event, true)"
				>
					Cancel
				</button>
				<span
					v-if="updatePasswordError"
					style="display: inline-block; max-width: 75%; padding-right: 20px; word-break: break-word"
				>
					{{ updatePasswordError }}
				</span>
				<label for="account_password">{{ $t('profile.account_password') }}</label>
				<input
					id="account_password"
					type="password"
					:readonly="!editingPassword"
					v-model="password"
					:placeholder="$t('profile.account_password')"
				/>
				<label for="account_password" v-if="editingPassword">{{
					$t('profile.account_password_confirm')
				}}</label>
				<input
					v-if="editingPassword"
					id="account_password"
					type="password"
					:readonly="!editingPassword"
					v-model="confirm_password"
					:placeholder="$t('profile.account_password_confirm')"
				/>
			</div>
			<div v-else class="pane__field">
				<label for="provider_id">{{ $t('profile.account_social_login_provider') }}</label>
				<div id="provider_id">
					<!-- <BaseSvgIcon :icon="socialProvider.icon" /> -->
					{{ socialProvider.name }}
				</div>
			</div>

			<div class="pane__field">
				<button v-if="!editingPhone" class="pane__edit" type="button" @click="editingPhone = true">
					{{ $t('interface.edit') }}
				</button>
				<label for="account_phone">{{ $t('profile.account_phone') }}</label>
				<input v-if="editingPhone" id="account_phone" type="text" v-model="phone" />
				<div v-else>
					<div id="account_phone" class="font-bold">
						{{ phone }}
					</div>
				</div>

				<div v-if="editingPhone" class="flex justify-end mt-4">
					<div>
						<button
							class="button button--cancel button--small mr-4"
							type="button"
							@click="cancelEditPhone"
							:disabled="savingPhone"
						>
							{{ $t('interface.cancel') }}
						</button>
					</div>
					<div>
						<button
							class="button button--primary button--small"
							type="button"
							@click="savePhone"
							:disabled="savingPhone"
						>
							{{ $t('interface.save') }}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
	name: 'AccountDetails',

	data: () => ({
		editingEmail: false,
		editingPassword: false,
		editingPhone: false,
		phone: '',
		savingPhone: false,
		password: 'password',
		updatePasswordError: '' as any,
		confirm_password: '',
	}),

	computed: {
		...mapGetters(['getPlayer']),

		user(): any {
			if (!this.getPlayer) return this.getPlayer;
			// eslint-disable-next-line
			this.phone = this.getPlayer.phone_number;
			return this.getPlayer;
		},

		socialProvider() {
			switch (this.user.signupMethod) {
				case 'facebook.com':
					return { icon: 'icon-facebook', name: 'Facebook' };
				case 'google.com':
					return { icon: 'icon-google', name: 'Google' };
				case 'twitter.com':
					return { icon: 'icon-twitter', name: 'Twitter' };
				case 'password':
				default:
					return { icon: '', name: '' };
			}
		},
	},

	methods: {
		cancelEditPhone() {
			this.editingPhone = false;
			this.phone = this.user.phone_number;
		},

		async savePhone() {
			this.savingPhone = true;

			this.user.phone_number = this.phone;

			await this.$store
				.dispatch('updatePlayer', {
					id: this.user.id,
					phone_number: this.phone,
				})
				.then(() => {
					this.editingPhone = false;
					this.savingPhone = false;
				})
				.catch((err) => {
					throw new Error('Unable to update phone number in Footy db');
				});
		},
		setPassword(password: string) {
			this.password = password;
		},
		async updatePassword(_: any, val?: boolean) {
			if (val) {
				this.setPassword('password');
				this.confirm_password = '';
				this.updatePasswordError = '';
				return (this.editingPassword = false);
			}
			if (!this.editingPassword) {
				this.setPassword('');
				return (this.editingPassword = true);
			}
			if (!this.password || !this.confirm_password)
				return (this.updatePasswordError = !this.password
					? this.$t('profile.enter_password')
					: this.$t('profile.enter_confirm_password'));
			if (this.password !== this.confirm_password)
				return (this.updatePasswordError = this.$t('profile.no_match_password_confirm_password'));
			const data = await this.$store.dispatch('updatePassword', this.password);
			if (data.error) {
				this.updatePasswordError = data.message;
				setTimeout(() => (this.updatePasswordError = ''), 5000);
			} else {
				this.updatePasswordError = '';
				this.editingPassword = false;
				this.confirm_password = '';
				this.setPassword('password');
			}
		},
	},
});
</script>
