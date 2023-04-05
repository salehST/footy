<template>
	<div class="pane">
		<h2 class="pane__title text-white">{{ $t('profile.your_details') }}</h2>
		<div
			:class="`pane__body profile-details ${editing || editingPhoto ? 'is-editing' : 'is-idle'}`"
		>
			<button
				v-if="!editing && !editingPhoto"
				class="pane__edit"
				type="button"
				v-on:click="editDetails"
			>
				{{ $t('interface.edit') }}
			</button>
			<div v-if="!editing" class="text-center edit-btn-c">
				<img class="profile-details__photo" :src="profilePhoto" alt="" v-if="!editingPhoto" />
				<button
					class="profile-details__photo-btn"
					v-if="!editingPhoto"
					type="button"
					v-on:click="editingPhoto = true"
				>
					<!-- {{ $t('profile.photo_change') }} -->
					<img src="/img/icons/icon-camera.svg" class=" h-9 w-9" alt="icon">
				</button>
			</div>
			<div v-if="editingPhoto">
				<ProfilePhotoUpload @photo-uploaded="photoUploaded" @cancel="cancelChangePhoto" />
			</div>
			<div v-if="!editingPhoto" class="profile-details__data">
				<div v-if="editing" class="profile-details__name">
					<div>
						<label for="account_first_name">{{ $t('profile.account_first_name') }}</label>
						<input id="account_first_name" type="text" v-model="firstName" />
					</div>
					<div>
						<label for="account_last_name">{{ $t('profile.account_last_name') }}</label>
						<input id="account_last_name" type="text" v-model="lastName" />
					</div>
				</div>
				<div v-else>
					<label for="account_full_name">{{ $t('profile.account_name') }}</label>
					<input id="account_full_name" type="text" :readonly="!editing" :value="fullName" />
				</div>

				<!-- City -->
				<div v-if="editing" :class="{ 'text-gray-400': !cityId }">
					<label for="account_city">
						{{ $t('profile.account_city') }}
					</label>
					<select id="account_city" v-model="cityId.id">
						<option value="" disabled>{{ $t('global.select') }}...</option>
						<option v-for="c in cities" :key="c.id" :value="c.id">
							{{ c.name }}
						</option>
					</select>
				</div>
				<div v-else>
					<label for="account_city">{{ $t('profile.account_city') }}</label>
					<div id="account_city" class="font-bold">
						{{ city }}
					</div>
				</div>

				<!-- Player type (gender in the db) -->
				<div v-if="editing" :class="{ 'text-gray-400': !genderId }">
					<label for="account_gender">{{ $t('profile.account_gender') }}</label>
					<select id="account_gender" v-model="genderId">
						<option :value="null" disabled>{{ $t('global.select') }}...</option>
						<option v-for="g in genders" :key="g.id" :value="g.id">
							{{ g.name }}
						</option>
					</select>
				</div>
				<div v-else>
					<label for="account_gender">{{ $t('profile.account_gender') }}</label>
					<div id="account_gender" class="font-bold">
						{{ gender }}
					</div>
				</div>
			</div>

			<div v-if="editing" class="flex justify-end mt-4">
				<div>
					<button
						class="button button--cancel button--small mr-4"
						type="button"
						@click="cancelEdit"
						:disabled="saving"
					>
						{{ $t('interface.cancel') }}
					</button>
				</div>
				<div>
					<button
						class="button button--primary button--small"
						type="button"
						@click="save"
						:disabled="saving"
					>
						{{ $t('interface.save') }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
input[type=checkbox] + label{
	font-size: 16px;
}
.edit-btn-c {
    position: relative;
}

.edit-btn-c .profile-details__photo-btn {
    position: absolute;
    top: 40px;
    background: transparent;
    right: -10px;
}
</style>
<script lang="ts">
/* eslint-disable */
import Vue from 'vue';
import { mapGetters } from 'vuex';
import ProfilePhotoUpload from '@/components/user/profile/account/ProfilePhotoUpload.vue';

export default Vue.extend({
	name: 'ProfileDetails',

	components: {
		ProfilePhotoUpload,
	},

	data: () => ({
		cities: [],
		cityId: {} as any,
		editing: false,
		editingPhoto: false,
		firstName: '',
		genderId: null,
		genders: [] as any[],
		lastName: '',
		saving: false,
	}),

	beforeMount() {
		const genders: any[] = [
			{ id: 'man', name: (this as any).$t('profile.account_gender_man') },
			{ id: 'woman', name: (this as any).$t('profile.account_gender_woman') },
		];

		this.genders.push(...genders);
	},

	computed: {
		...mapGetters(['getPlayer']),

		user(): any {
			if (!this.getPlayer) return;

			// @ts-ignore
			this.firstName = this.getPlayer.first_name;
			// @ts-ignore
			this.lastName = this.getPlayer.last_name;
			// @ts-ignore
			this.cityId = this.getPlayer.city;
			// @ts-ignore
			this.genderId = this.getPlayer.gender;

			return this.getPlayer;
		},

		city() {
			const city: any = this.cities.find((c: any) => c.id === this.cityId.id);
			return city?.name ? city.name : '';
		},

		fullName() {
			return `${this.firstName} ${this.lastName}`;
		},

		gender() {
			const gender = this.genders.find((g: any) => g.id === this.genderId);
			return gender?.name ? gender.name : '';
		},

		profilePhoto() {
			const avatar = require('@/assets/images/avatar.png');

			// @ts-ignore
			return this.user?.photo_url || avatar;
		},
	},

	methods: {
		cancelChangePhoto() {
			this.editingPhoto = false;
		},

		cancelEdit() {
			if (!this.user) return;
			this.editing = false;
			// @ts-ignore
			this.firstName = this.user.first_name;
			// @ts-ignore
			this.lastName = this.user.last_name;
			// @ts-ignore
			this.cityId = this.user.city;
			// @ts-ignore
			this.genderId = this.user.gender;
		},

		editDetails() {
			this.editing = !this.editing;
			if (this.editingPhoto) this.editingPhoto = false;
		},

		photoUploaded() {
			// Update state to close the photo upload component
			this.editingPhoto = false;

			// Reload the photo URL to update the UI
			const headers = new Headers();
			headers.append('pragma', 'no-cache');
			headers.append('cache-control', 'no-cache');

			const init: RequestInit = {
				method: 'GET',
				headers: headers,
				mode: 'no-cors',
				cache: 'no-cache',
			};
			// @ts-ignore
			fetch(new Request(this.user.photo_url), init);
		},

		async save() {
			if (!this.user) return;
			this.saving = true;

			const { cityId, firstName, genderId, lastName } = this;

			// @ts-ignore
			this.user.city = cityId;
			// @ts-ignore
			this.user.first_name = firstName;
			// @ts-ignore
			this.user.gender = genderId;
			// @ts-ignore
			this.user.last_name = lastName;

			await this.$store
				.dispatch('updatePlayer', {
					// @ts-ignore
					id: this.user.id,
					city: cityId.id,
					first_name: firstName,
					gender: genderId,
					last_name: lastName,
				})
				.then(() => {
					this.editing = false;
					this.saving = false;
				})
				.catch(() => {
					throw new Error('Unable to update profile details in Footy db');
				});
		},
	},

	async created() {
		this.cities = await this.$store.dispatch('getCities');
	},
});
</script>
