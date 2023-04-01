<template>
	<div class="card">
		<div class="language-switch">
			<label for="language-select">{{ $t('global.language') }}</label>
			<select v-model="language" @change="onChange">
				<option v-for="(language, i) in languages" :key="`language-${i}`" :value="language.value">
					{{ language.label }}
				</option>
			</select>
		</div>
	</div>
</template>

<script lang="ts">
import { languageOptions } from '@/i18n';
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
	name: 'LanguageSwitch',

	data: () => ({
		// language: '',
		languages: languageOptions,
	}),

	computed: {
		...mapGetters(['getPlayer']),
		language: {
			get() {
				return this.getPlayer && this.getPlayer.language;
			},
			async set(value) {
				await this.$store.dispatch('changeLanguage', value);
			},
		},
	},

	methods: {
		async onChange() {},
	},
});
</script>
