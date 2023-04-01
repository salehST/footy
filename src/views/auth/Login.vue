<template>
	<AuthFlowLayout @clearSignupType="$router.push('/')">
		<div class="card">
			<h1 class="mb-16">{{ $t('global.login') }}</h1>
			<form v-on:submit.prevent="onSubmit" ref="form">
				<p class="text-sm text-red mb-16" v-show="error">{{ error }}</p>
				<div>
					<label for="login-email">{{ $t('global.emailaddress') }}</label>
					<input
						id="login-email"
						type="email"
						required="true"
						v-model="email"
						autocomplete="username email"
					/>
				</div>
				<div class="mt-16">
					<label for="login-password">{{ $t('global.password') }}</label>
					<input
						id="login-password"
						type="password"
						required="true"
						v-model="password"
						autocomplete="current-password"
					/>
				</div>
				<div class="flex flex-col">
					<button class="button button--login mt-16" type="submit" :disabled="loading">
						<img v-if="loading" :src="loadingImage" class="h-4" />
						{{ loading ? '' : $t('global.login') }}
					</button>
					<router-link class="button button--link button--wide mt-8" to="/forgot-password">{{
						$t('auth.login_forgot_password')
					}}</router-link>
				</div>
			</form>
			<div class="flex justify-center">
				<div class="w-full" style="max-width: 440px">
					<div class="flex flex-col">
						<button
							@click="loginWithFacebook"
							class="button button--auth button--wide mb-3"
							type="button"
						>
							<BaseSvgIcon icon="icon-facebook" />
							{{ $t('auth.log_in_facebook') }}
						</button>
						<button
							@click="loginWithGoogle"
							class="button button--auth button--wide mb-3"
							type="button"
						>
							<BaseSvgIcon icon="icon-google" />
							{{ $t('auth.log_in_google') }}
						</button>
						<button
							@click="loginWithTwitter"
							class="button button--auth button--wide mb-3"
							type="button"
						>
							<BaseSvgIcon icon="icon-twitter" />
							{{ $t('auth.log_in_twitter') }}
						</button>
					</div>
				</div>
			</div>
		</div>
	</AuthFlowLayout>
</template>

<script lang="ts">
import AuthFlowLayout from '@/layouts/auth/AuthFlowLayout.vue';
import BaseSvgIcon from '@/layouts/icons/BaseSvgIcon.vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import Vue from 'vue';

export default Vue.extend({
	name: 'Home',

	components: {
		AuthFlowLayout,
		BaseSvgIcon,
	},

	data: () => ({
		email: '',
		error: '',
		fieldIcon: require('@/assets/images/field.png'),
		footyLogo: require('@/assets/images/footy_logo_dark.png'),
		forgottenPassword: false,
		loading: false,
		message: '',
		password: '',
		teamInvite: null as string | null,
	}),

	computed: {
		loadingImage() {
			return require('@/assets/loading.gif');
		},
	},

	methods: {
		async onSubmit() {
			this.loading = true;

			if (!this.email) {
				this.error = 'Please provide a valid email address';
				return;
			}

			if (!this.password) {
				this.error = 'Please provide a password of 6 or more characters';
				return;
			}

			const firebaseResponse: any = await firebase
				.auth()
				.signInWithEmailAndPassword(this.email, this.password)
				.catch((error) => {
					const errorMessage = error.message;
					this.error = errorMessage;
					this.clearError();
				});

			if (firebaseResponse !== null && this.teamInvite) {
				await this.handleTeamInvite(firebaseResponse);
				this.loading = false;
				return;
			}

			if (firebaseResponse && firebaseResponse.user) {
				try {
					const data = await this.$store.dispatch(
						'appInit',
						this.getAppInitPayload(firebaseResponse.user)
					);
					if (data) {
						this.error = data;
						this.loading = false;
						return;
					}
					this.$router.push({ path: '/clubhouse' });
					this.loading = false;
					return;
				} catch (error) {
					return false;
				}
			}

			this.loading = false;
		},

		async handleForgotPassword() {
			if (!this.email) {
				return (this.error = 'Please provide a valid email address');
			}

			await firebase
				.auth()
				.sendPasswordResetEmail(this.email)
				.catch((err) => {
					const errorMessage = err.message;
					this.error = errorMessage;
					this.clearError();
				});

			this.message = "Thanks, we've sent you a password reset email";

			this.clearError();

			return;
		},

		async handleTeamInvite(firebaseResponse: any) {
			const firebaseId = firebaseResponse.user.uid;

			const { data } = await this.$store
				.dispatch('getPlayerByFirebaseId', firebaseId)
				.catch((err) => {
					throw new Error('Unable to find footy user');
				});
			const player = data.players[0];
			if (!player) {
				this.error = 'No Footy account found, please Sign Up first.';
				return;
			}

			const teams = player.join_players_teams.map((j: any) => j.teamObj.id);
			if (!teams.includes(this.teamInvite)) {
				if (!(await (this as any).isTeamFull(this.teamInvite))) {
					await this.$store.dispatch('registerPlayerWithTeam', {
						player: player.id,
						team: this.teamInvite,
					});
				}
			}
			const isLoginError = await this.$store.dispatch(
				'appInit',
				this.getAppInitPayload(firebaseResponse.user)
			);
			if (isLoginError) return (this.error = isLoginError);
			this.$router.push({ name: 'clubhouse' });
			return;
		},

		async loginWithGoogle() {
			await this.socialLogin('google');
		},

		async loginWithFacebook() {
			await this.socialLogin('facebook');
		},

		async loginWithTwitter() {
			await this.socialLogin('twitter');
		},

		getAppInitPayload(firebaseUser: any) {
			return {
				firebaseId: firebaseUser.uid,
				signupMethod: firebaseUser.providerData?.[0]?.providerId,
			};
		},

		async socialLogin(socialProvider: string) {
			let provider: any;

			switch (socialProvider) {
				case 'facebook':
					provider = new firebase.auth.FacebookAuthProvider();
					break;
				case 'google':
					provider = new firebase.auth.GoogleAuthProvider();
					break;
				case 'twitter':
					provider = new firebase.auth.TwitterAuthProvider();
					break;
			}

			const firebaseResponse: any = await firebase
				.auth()
				.signInWithPopup(provider)
				.catch((error) => {
					this.error = error.message;
					return;
				});

			if (firebaseResponse !== null) {
				if (firebaseResponse.user && firebaseResponse.additionalUserInfo) {
					const firebaseUser = firebaseResponse.user;
					const additionalUserInfo = firebaseResponse.additionalUserInfo;

					if (additionalUserInfo.isNewUser) {
						await firebaseUser.delete().then(() => {
							this.error = 'No Footy account found, please Sign Up first.';
							return;
						});
					}
				}

				if (this.teamInvite) {
					await this.handleTeamInvite(firebaseResponse);
				} else {
					const data = await this.$store.dispatch(
						'appInit',
						this.getAppInitPayload(firebaseResponse.user)
					);
					if (data) return (this.error = data);
					this.$router.push({ path: '/clubhouse' });
					return;
				}
			}
		},

		clearError() {
			setTimeout(() => {
				this.error = '';
			}, 3000);
		},

		async isTeamFull(teamId: any) {
			const team = await this.$store.dispatch('getTeamById', teamId);
			return !team.players_limit || team.players_limit > team.players.length ? false : true;
		},
	},

	async mounted() {
		(this as any).$refs.form.focus();
		const invite = this.$route.query.team_invite;
		if (invite) {
			(this as any).teamInvite = invite;
		}
	},
});
</script>
