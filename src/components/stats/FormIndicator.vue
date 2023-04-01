<template>
	<div class="form-indicator">
		<div
			class="form-indicator__match"
			:class="resultClass(result)"
			v-for="(result, index) in form"
			:key="`form-${index}`"
		>
			{{ result }}
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'FormIndicator',
	props: {
		form: {
			required: true,
			type: Array,
		},
	},
	methods: {
		resultClass(result: any) {
			return {
				'is-draw': result === 'D',
				'is-loss': result === 'L',
				'is-win': result === 'W',
			};
		},
	},
});
</script>
