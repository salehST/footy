<template>
	<AuthFlowLayout
		:background="background"
		@clearSignupType="signupType ? (signupType = null) : $router.push('/')"
		:signupType="signupType"
	>
		<div class="flex justify-center">
			<div class="card w-full" style="max-width: 440px">
				<div v-if="!signupType" class="flex flex-col">
					<h1 class="mb-16">{{ $t('global.signup') }}</h1>
					<button
						@click="signupType = 'email'"
						class="button button--auth button--wide mb-3"
						type="button"
					>
						<BaseSvgIcon :icon="'icon-envelope'" />
						{{ $t('auth.sign_up_email') }}
					</button>
					<button
						@click="signupWithFacebook"
						class="button button--auth button--wide mb-3"
						type="button"
					>
						<BaseSvgIcon icon="icon-facebook" />
						{{ $t('auth.sign_up_facebook') }}
					</button>
					<button
						@click="signupWithGoogle"
						class="button button--auth button--wide mb-3"
						type="button"
					>
						<BaseSvgIcon icon="icon-google" />
						{{ $t('auth.sign_up_google') }}
					</button>
					<button
						@click="signupWithTwitter"
						class="button button--auth button--wide mb-3"
						type="button"
					>
						<BaseSvgIcon icon="icon-twitter" />
						{{ $t('auth.sign_up_twitter') }}
					</button>
				</div>

				<div v-if="signupType" class="w-full">
					<div class="flex flex-row justify-between items-center">
						<span class="text-lg pl-2 font-semibold text-gray-800">{{
							$t('auth.create_an_account')
						}}</span>
						<span class="text-sm pr-2">*{{ $t('global.required') }}</span>
					</div>

					<form class="px-8 pt-6 pb-8 mb-4">
						<!-- First Name -->
						<div class="mb-2">
							<label class="block text-gray-700 text-sm font-bold mb-1" for="first_name">
								{{ $t('profile.account_first_name') }} *
							</label>
							<input
								v-model="first_name"
								class="
									shadow
									appearance-none
									border
									rounded
									w-full
									py-2
									px-3
									text-gray-700
									leading-tight
									focus:outline-none focus:shadow-outline
								"
								id="first_name"
								type="text"
								:placeholder="$t('profile.account_first_name_placeholder')"
								@input="clearFirstNameErrorIfValid"
							/>
							<div v-if="errorMessageFirstName" class="text-sm text-red italic">
								{{ $t(errorMessageFirstName) }}
							</div>
						</div>

						<!-- Last Name -->
						<div class="mb-2">
							<label class="block text-gray-700 text-sm font-bold mb-1" for="last_name">
								{{ $t('profile.account_last_name') }} *
							</label>
							<input
								v-model="last_name"
								class="
									shadow
									appearance-none
									rounded
									w-full
									py-2
									px-3
									text-gray-700
									leading-tight
									border-2 border-gray-400
								"
								id="last_name"
								type="text"
								:placeholder="$t('profile.account_last_name_placeholder')"
								@input="clearLastNameErrorIfValid"
							/>
							<div v-if="errorMessageLastName" class="text-sm text-red italic">
								{{ $t(errorMessageLastName) }}
							</div>
						</div>

						<!-- City -->
						<div class="mb-2" :class="{ 'text-gray-400': !cityId }">
							<label class="block text-gray-700 text-sm font-bold mb-1" for="city">
								{{ $t('profile.account_city') }} *
							</label>
							<select id="city" v-model="cityId" @change="changeCity">
								<option :value="''" disabled>{{ $t('global.select') }}...</option>
								<option v-for="c in cities" :key="c.id" :value="c.id">
									{{ c.name }}
								</option>
							</select>
							<div v-if="errorMessageCity" class="text-sm text-red italic">
								{{ $t(errorMessageCity) }}
							</div>
						</div>

						<!-- Phone number -->
						<div class="mb-2">
							<label class="block text-gray-700 text-sm font-bold mb-1" for="phone_number">
								{{ $t('profile.account_phone') }} *
							</label>
							<input
								v-model="phone_number"
								class="
									shadow
									appearance-none
									border
									rounded
									w-full
									py-2
									px-3
									text-gray-700
									leading-tight
									focus:outline-none focus:shadow-outline
								"
								id="phone_number"
								type="text"
								:placeholder="$t('profile.account_phone_placeholder')"
								@input="clearPhoneErrorIfValid"
							/>
							<div v-if="errorMessagePhone" class="text-sm text-red italic">
								{{ $t(errorMessagePhone) }}
							</div>
						</div>

						<!-- Email address -->
						<div class="mb-2">
							<label class="block text-gray-700 text-sm font-bold mb-1" for="email">
								{{ $t('profile.account_email') }} *
							</label>
							<input
								v-model="email"
								class="
									shadow
									appearance-none
									border
									rounded
									w-full
									py-2
									px-3
									text-gray-700
									leading-tight
									focus:outline-none focus:shadow-outline
								"
								id="email"
								type="text"
								:placeholder="$t('profile.account_email_placeholder')"
								:disabled="signupType !== 'email'"
								@input="clearEmailErrorIfValid"
							/>
							<div v-if="errorMessageEmail" class="text-sm text-red italic">
								{{ $t(errorMessageEmail) }}
							</div>
						</div>

						<!-- Password -->
						<div v-if="signupType === 'email'" class="mb-2">
							<label class="block text-gray-700 text-sm font-bold mb-1" for="password">
								{{ $t('profile.account_password') }} *
							</label>
							<input
								v-model="password"
								class="
									shadow
									appearance-none
									border
									rounded
									w-full
									py-2
									px-3
									text-gray-700
									leading-tight
									focus:outline-none focus:shadow-outline
								"
								id="password"
								type="password"
								placeholder=""
								@input="clearPasswordErrorIfValid"
							/>
							<div v-if="errorMessagePassword" class="text-sm text-red italic">
								{{ $t(errorMessagePassword) }}
							</div>
						</div>

						<!-- Confirm Password -->
						<div v-if="signupType === 'email'" class="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-1" for="confirm-password">
								{{ $t('profile.account_password_confirm') }} *
							</label>
							<input
								v-model="confirmPassword"
								class="
									shadow
									appearance-none
									border
									rounded
									w-full
									py-2
									px-3
									text-gray-700
									leading-tight
									focus:outline-none focus:shadow-outline
								"
								id="confirm-password"
								type="password"
								placeholder=""
								@input="clearConfirmPasswordErrorIfValid"
							/>
							<div v-if="errorMessageConfirmPassword" class="text-sm text-red italic">
								{{ $t(errorMessageConfirmPassword) }}
							</div>
						</div>

						<!-- Ringer -->
						<div class="mb-4 pt-3 pb-6 px-6 bg-gray-300 rounded-10">
							<label class="inline-flex items-center mt-3">
								<input
									type="checkbox"
									class="form-checkbox h-5 w-5 text-gray-600"
									v-model="ringer"
								/>
								<span class="ml-2 text-gray-800 font-semibold text-lg">
									{{ $t('profile.ringer_label') }}
								</span>
							</label>
							<p class="text-xs">{{ $t('profile.ringer_label_extra') }}</p>
						</div>

						<div class="flex justify-center">
							<button
								@click="createAccount"
								class="button button--login w-full focus:outline-none"
								type="button"
								:disabled="loading"
							>
								<img v-if="loading" :src="loadingImage" class="h-4" />
								{{ loading ? '' : $t('auth.create_account') }}
							</button>
						</div>
						<div v-if="errorMessage" class="text-sm text-red italic mt-2">
							{{ $t(errorMessage) }}
						</div>
					</form>
					<p class="mb-4 text-center text-gray-500 text-xs">
						{{ $t('auth.terms_and_conditions_text') }}
						<a class="text-blue-600" :href="$t('auth.terms_and_conditions_url')" target="_blank">
							{{ $t('auth.terms_and_conditions_linked_text') }}
						</a>
						<span class="-ml-1">.</span>
					</p>
					<p class="text-center text-gray-500 text-xs">
						&copy;{{ year }} Footy BV. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	</AuthFlowLayout>
</template>

<script lang="ts">
import AuthFlowLayout from '@/layouts/auth/AuthFlowLayout.vue';
import BaseSvgIcon from '@/layouts/icons/BaseSvgIcon.vue';
import Vue from 'vue';

import firebase from 'firebase/app';
import axios from 'axios';

export default Vue.extend({
	name: 'SignUpView',

	components: {
		AuthFlowLayout,
		BaseSvgIcon,
	},

	data: () => ({
		background: require('@/assets/images/backgrounds/bg-ball.jpg'),
		cities: [],
		city: {
			id: '',
			name: '',
			country: {
				id: '',
				name: '',
			},
		},
		cityId: '',
		confirmPassword: '',
		email: '',
		errorMessage: '',
		errorMessageCity: '',
		errorMessageConfirmPassword: '',
		errorMessageEmail: '',
		errorMessageFirstName: '',
		errorMessageLastName: '',
		errorMessagePassword: '',
		errorMessagePhone: '',
		firebaseUser: null as any,
		first_name: '',
		last_name: '',
		loading: false,
		password: '',
		phone_number: '',
		photo_url: '' as string,
		ringer: false,
		signupType: null as string | null,
		supportedCountried: ['nl', 'us'],
		teamInfo: {},
	}),

	computed: {
		loadingImage() {
			return require('@/assets/loading.gif');
		},

		year() {
			var d = new Date();
			return d.getFullYear();
		},
	},

	methods: {
		changeCity(event: any) {
			const city = this.cities.find((c: any) => c.id === event.target.value);
			if (city) this.city = city;
			this.clearCityErrorIfValid();
		},

		clearCityErrorIfValid() {
			if (this.errorMessageCity && this.cityIsValid()) this.errorMessageCity = '';
		},

		clearEmailErrorIfValid() {
			if (this.errorMessageEmail && this.emailIsValid()) this.errorMessageEmail = '';
		},

		clearFirstNameErrorIfValid() {
			if (this.errorMessageFirstName && this.firstNameIsValid()) this.errorMessageFirstName = '';
		},

		clearLastNameErrorIfValid() {
			if (this.errorMessageLastName && this.lastNameIsValid()) this.errorMessageLastName = '';
		},

		clearPhoneErrorIfValid() {
			if (this.errorMessagePhone && this.phoneIsValid()) this.errorMessagePhone = '';
		},

		clearPasswordErrorIfValid() {
			if (this.errorMessagePassword && this.passwordIsValid()) this.errorMessagePassword = '';
		},

		clearConfirmPasswordErrorIfValid() {
			if (this.errorMessageConfirmPassword && this.confirmPasswordIsValid())
				this.errorMessageConfirmPassword = '';
		},

		cityIsValid() {
			if (!this.city.id) {
				this.errorMessageCity = 'profile.error_city_required';
				return false;
			}
			return true;
		},

		emailIsValid() {
			if (!this.email) {
				this.errorMessageEmail = 'profile.error_email_required';
				return false;
			}
			return true;
		},

		firstNameIsValid() {
			if (!this.first_name) {
				this.errorMessageFirstName = 'profile.error_first_name_required';
				return false;
			}
			return true;
		},

		lastNameIsValid() {
			if (!this.last_name) {
				this.errorMessageLastName = 'profile.error_last_name_required';
				return false;
			}
			return true;
		},

		phoneIsValid() {
			if (!this.phone_number) {
				this.errorMessagePhone = 'profile.error_phone_required';
				return false;
			}
			return true;
		},

		passwordIsValid() {
			if (this.signupType === 'email') {
				if (!this.password) {
					this.errorMessagePassword = 'profile.error_password_required';
					return false;
				}
			}
			return true;
		},

		confirmPasswordIsValid() {
			if (this.signupType === 'email') {
				if (!this.confirmPassword) {
					this.errorMessageConfirmPassword = 'profile.error_confirm_password_required';
					return false;
				}

				if (this.password && this.confirmPassword && this.password !== this.confirmPassword) {
					this.errorMessageConfirmPassword = 'profile.error_passwords_dont_match';
					return false;
				}
			}
			return true;
		},

		async createAccount() {
			try {
				this.loading = true;

				// prettier-ignore
				const {
				city,
				email,
				first_name,
				last_name,
				password,
				phone_number,
				ringer,
			} = this;

				const photoURL = this.photo_url;

				const formIsValid = (): boolean => {
					this.errorMessage = '';

					const validCity = this.cityIsValid();
					const validEmail = this.emailIsValid();
					const validFirstName = this.firstNameIsValid();
					const validLastName = this.lastNameIsValid();
					const validPhone = this.phoneIsValid();
					const validPassword = this.passwordIsValid();
					const validConfirmPassword = this.confirmPasswordIsValid();

					const validForm =
						validCity &&
						validEmail &&
						validFirstName &&
						validLastName &&
						validPhone &&
						validPassword &&
						validConfirmPassword;

					if (validForm) return true;

					this.errorMessage = 'profile.error_on_form';
					return false;
				};

				if (formIsValid()) {
					let firebaseUser = this.firebaseUser;

					if (!firebaseUser) {
						firebaseUser = await this.$store
							.dispatch('createFirebaseUser', { email, password })
							.catch((err) => {
								this.errorMessage = 'profile.error_on_form';
								err = err.toString().split(':')[1].trim();
								if (err === 'auth/invalid-email') {
									this.errorMessageEmail = 'profile.error_email_invalid';
								} else if (err === 'auth/email-already-in-use') {
									this.errorMessageEmail = 'profile.error_email_in_use';
								} else {
									throw new Error('Signup Failed');
								}
							});
					}

					if (!firebaseUser) return (this.loading = false);

					const zendeskContact = await this.$store.dispatch('createZendeskPlayer', {
						first_name,
						last_name,
						city: city.name,
						country: city.country.name,
						email,
						ringer,
						phone: phone_number,
						is_organization: false,
						contact_id: (this as any).teamInfo.zendesk_id
							? parseInt((this as any).teamInfo.zendesk_id)
							: null,
					});

					const zendeskId = zendeskContact.id || zendeskContact.user.id;

					let footyPlayer: any;

					const existingPlayer = await this.$store.dispatch('getPlayerByEmail', email);
					if (existingPlayer === 'error') throw new Error('Error in getting player');

					if (existingPlayer) {
						footyPlayer = existingPlayer;
						await this.$store.dispatch('updatePlayer', {
							id: existingPlayer.id,
							firebase_id: firebaseUser.uid,
							zendesk_id: zendeskId + '',
						});
					} else {
						const newPlayer = {
							city: city.id,
							email,
							firebase_id: firebaseUser.uid,
							first_name,
							gender: null,
							language: this.$i18n.locale,
							last_name,
							phone_number,
							ringer,
							status: 'active',
							whatsapp: false,
							zendesk_id: zendeskId + '',
						};

						footyPlayer = await this.$store.dispatch('createNewPlayer', newPlayer);
						if (footyPlayer === 'error') throw new Error('Unable to create new Player');

						if (firebaseUser && this.signupType && this.signupType !== 'email') {
							const newPhotoURL = await this.uploadSocialProfilePhoto(footyPlayer.id, photoURL);

							await this.$store.dispatch('updatePlayer', {
								id: footyPlayer.id,
								photo_url: newPhotoURL,
							});

							await firebaseUser.updateProfile({
								photoURL: newPhotoURL,
							});
						}
					}

					const teamInvite = this.$route.query.team_invite;
					const notAlreadyRegistered =
						footyPlayer.join_players_teams.length &&
						footyPlayer.join_players_teams
							.map((j: any) => j.teamObj.id)
							.includes(this.$route.query.team_invite);

					if (teamInvite) {
						if (!notAlreadyRegistered) {
							if (!(await (this as any).isTeamFull(teamInvite))) {
								await this.$store.dispatch('registerPlayerWithTeam', {
									player: footyPlayer.id,
									team: this.$route.query.team_invite,
								});
							}
						}
					}
					const appInitPayload = {
						firebaseId: firebaseUser.uid,
						signupMethod: firebaseUser.providerData?.[0]?.providerId,
					};

					await this.$store.dispatch('appInit', appInitPayload);
					this.loading = false;
					await this.$router.push({ name: 'clubhouse' });
				}
			} catch (error) {
				this.errorMessage = 'Signup Failed';
			} finally {
				this.loading = false;
			}
		},

		async uploadSocialProfilePhoto(playerId: string, url: string) {
			const responseProvider = await axios.get(url, { responseType: 'blob' });
			if (responseProvider.status !== 200) return null;

			const image = responseProvider.data;

			// @ts-ignore
			if (image.size > 200000) {
				return null;
			}

			let fileName;

			// @ts-ignore
			switch (image.type) {
				case 'image/jpeg':
				case 'image/jpg':
					fileName = `${playerId}.jpg`;
					break;
				case 'image/png':
					fileName = `${playerId}.png`;
					break;
				default:
					alert('Image type is not supported');
			}

			const responseAPI = await axios({
				method: 'GET',
				url: `${process.env.VUE_APP_SLS_URL}/pwa/player-profile-photo-url/${fileName}`,
			});

			// @ts-ignore
			if (responseAPI && responseAPI.data && responseAPI.data.preSignedUrl) {
				// @ts-ignore
				const url = responseAPI.data.preSignedUrl.url;
				// @ts-ignore
				const fields = responseAPI.data.preSignedUrl.fields;

				const form = new FormData();
				// @ts-ignore
				form.append('Content-Type', image.type);

				Object.keys(fields).forEach((key) => {
					form.append(key, fields[key]);
				});

				form.append('file', image);

				const responseS3 = await axios.post(url, form);

				if (responseS3 && responseS3.status === 204) {
					return `${url}/${fileName}`;
				} else {
					return null;
				}
			} else {
				return null;
			}
		},

		async getCitiedByIpAddress() {
			try {
				const url = 'https://api.db-ip.com/v2/free/self';
				const { data } = await axios.get(url);
				// @ts-ignore
				return data.countryCode && this.supportedCountried.includes(data.countryCode.toLowerCase())
					? // @ts-ignore
					  this.setCities(data.countryCode.toLowerCase())
					: this.setCities('nl');
			} catch (error) {
				return this.setCities('nl');
			}
		},

		setCities(countryCode: string) {
			return (this.cities = this.cities.filter((city: any) => city.country.code === countryCode));
		},

		async signupWithFacebook() {
			var provider = new firebase.auth.FacebookAuthProvider();
			const firebaseResponse: any = await firebase
				.auth()
				.signInWithPopup(provider)
				.catch((error) => {
					this.errorMessage = error.message;
					return;
				});

			if (firebaseResponse.user) {
				this.email = firebaseResponse.user.email;
				this.firebaseUser = firebaseResponse.user;
				const token = firebaseResponse.credential.accessToken;
				this.photo_url = firebaseResponse.user.photoURL + '?type=large&access_token=' + token;
				this.signupType = 'facebook';
			}

			if (firebaseResponse.additionalUserInfo && firebaseResponse.additionalUserInfo.profile) {
				this.first_name = firebaseResponse.additionalUserInfo.profile.first_name || '';
				this.last_name = firebaseResponse.additionalUserInfo.profile.last_name || '';
			}
		},

		async signupWithGoogle() {
			var provider = new firebase.auth.GoogleAuthProvider();
			const firebaseResponse: any = await firebase
				.auth()
				.signInWithPopup(provider)
				.catch((error) => {
					this.errorMessage = error.message;
					return;
				});

			if (firebaseResponse.user) {
				this.email = firebaseResponse.user.email;
				this.firebaseUser = firebaseResponse.user;
				this.photo_url = firebaseResponse.user.photoURL;
				this.signupType = 'google';
			}

			if (firebaseResponse.additionalUserInfo && firebaseResponse.additionalUserInfo.profile) {
				this.first_name = firebaseResponse.additionalUserInfo.profile.given_name || '';
				this.last_name = firebaseResponse.additionalUserInfo.profile.family_name || '';
			}
		},

		async signupWithTwitter() {
			var provider = new firebase.auth.TwitterAuthProvider();
			const firebaseResponse: any = await firebase
				.auth()
				.signInWithPopup(provider)
				.catch((error) => {
					this.errorMessage = error.message;
					return;
				});

			if (firebaseResponse.user) {
				this.email = firebaseResponse.user.email;
				this.firebaseUser = firebaseResponse.user;
				this.photo_url = firebaseResponse.user.photoURL;
				this.signupType = 'twitter';

				const words = firebaseResponse.user.displayName.split(' ');
				this.first_name = words[0] || '';
				this.last_name = words[1] || '';
			}
		},
		async isTeamFull(teamId: any) {
			const team = await this.$store.dispatch('getTeamById', teamId);
			return !team.players_limit || team.players_limit > team.players.length ? false : true;
		},
	},

	async mounted(): Promise<any> {
		this.cities = await this.$store.dispatch('getCities');
		if (this.$route.query.team_invite) {
			const { team_invite } = this.$route.query;
			this.teamInfo = await this.$store.dispatch('getCountryCode', team_invite);
			// @ts-ignore
			const city = this.teamInfo.city;
			return city.country && city.country.code
				? (this as any).setCities(city.country.code)
				: (this as any).setCities('nl');
		} else return await (this as any).getCitiedByIpAddress();
	},
});
</script>

<style lang="scss" scoped>
.city-select {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	// display: block;
	width: 100%;
	height: 3rem;
	padding: 0 1.25rem;
	border: 2px solid #ddd8d8;
	border-radius: 0.3125rem;
	background-color: #fff;
	-webkit-box-shadow: none;
	box-shadow: none;
}
</style>
