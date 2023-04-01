<template>
	<div class="cropper-wrapper">
		<Cropper
			class="cropper"
			ref="cropper"
			:src="image"
			:stencil-component="stencil"
			@change="onCropChange"
		/>
		<div class="text-sm text-gray-600 pt-0">Image size: {{ imageSize }}</div>
		<input
			type="file"
			accept="image/*"
			style="display: none"
			ref="imageInput"
			@change="loadImage($event)"
		/>
		<div class="error">
			{{ error }}
		</div>
		<div class="flex justify-end mt-4">
			<div>
				<button
					class="button button--cancel button--small mr-4"
					type="button"
					@click="$emit('cancel')"
				>
					{{ $t('interface.cancel') }}
				</button>
			</div>
			<div>
				<button
					class="button button--secondary button--small mr-4"
					type="button"
					@click="$refs.imageInput.click()"
				>
					{{ $t('profile.photo_choose') }}
				</button>
			</div>
			<div>
				<button
					class="button button--primary button--small"
					type="button"
					:disabled="!imageLoaded"
					@click="uploadImage"
				>
					{{ $t('interface.save') }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { CircleStencil, Cropper } from 'vue-advanced-cropper';
import axios from 'axios';
import firebase from 'firebase/app';

export default Vue.extend({
	name: 'ProfilePhotoUpload',

	components: {
		Cropper,
	},

	emits: ['cancel', 'photo-uploaded'],

	data: () => ({
		croppedImageSize: null,
		error: '',
		image: null,
		imageLoaded: false,
		stencil: CircleStencil,
	}),

	computed: {
		...mapGetters(['getPlayer']),

		user() {
			return this.getPlayer;
		},

		imageSize() {
			return this.croppedImageSize
				? Math.floor(this.croppedImageSize / 1024) + ' KB (max 200 KB)'
				: 'n/a';
		},
	},

	methods: {
		loadImage(event) {
			const input = event.target;

			if (input.files && input.files[0]) {
				const file = input.files[0];

				const reader = new FileReader();

				reader.onload = (e) => {
					this.image = e.target.result;
					this.imageLoaded = true;
				};

				reader.readAsDataURL(file);
			}
		},

		async onCropChange({ canvas }) {
			const image = await this.canvasToImage(canvas);
			this.croppedImageSize = image.size;
		},

		async canvasToImage(canvas) {
			if (canvas.width > 500) {
				const scaledCanvas = document.createElement('canvas');
				scaledCanvas.width = 500;
				scaledCanvas.height = 500;

				const ctx = scaledCanvas.getContext('2d');
				ctx.drawImage(canvas, 0, 0, scaledCanvas.width, scaledCanvas.height);

				const blob = await new Promise((resolve) => scaledCanvas.toBlob(resolve, 'image/jpeg'));
				return blob;
			} else {
				const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg'));
				return blob;
			}
		},

		async uploadImage() {
			const { canvas } = this.$refs.cropper.getResult();
			const fileName = `${this.user.id}.jpg`;

			const image = await this.canvasToImage(canvas);

			if (image.size > 200000) {
				this.error = 'The image is too large, it must be under 200 KB';
				this.clearError();
				return;
			}

			const response = await axios({
				method: 'GET',
				url: `${process.env.VUE_APP_SLS_URL}pwa/player-profile-photo-url/${fileName}`,
			});

			if (response && response.data && response.data.preSignedUrl) {
				const url = response.data.preSignedUrl.url;
				const fields = response.data.preSignedUrl.fields;

				const form = new FormData();
				form.append('Content-Type', image.type);

				Object.entries(fields).forEach(([k, v]) => {
					form.append(k, v);
				});

				form.append('file', image);

				const responseS3 = await axios.post(url, form);

				if (responseS3 && responseS3.status === 204) {
					const newPhotoURL = `${url}/${fileName}`;

					await this.$store
						.dispatch('updatePlayer', {
							id: this.user.id,
							photo_url: newPhotoURL,
						})
						.catch((err) => {
							throw new Error('Unable to update player');
						});

					const firebaseUser = firebase.auth().currentUser;

					firebaseUser.updateProfile({
						photoURL: newPhotoURL,
					});

					this.user.photo_url = newPhotoURL;

					this.$emit('photo-uploaded');
				}
			}
		},

		clearError() {
			setTimeout(() => {
				this.error = '';
			}, 5000);
		},
	},

	mounted() {
		this.$refs.imageInput.click();
	},
});
</script>

<style scoped>
.cropper-wrapper {
	align-items: center;
	display: flex;
	flex-direction: column;
}
.cropper {
	border: solid 1px #eee;
	height: 300px;
	width: 80%;
}
.error {
	color: red;
}
.inline-separator {
	margin: 0 10px;
	display: inline-block;
}
</style>
