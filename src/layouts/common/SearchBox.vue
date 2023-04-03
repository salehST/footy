<template>
	<div class="search-box">
		<label class="search-box__label">{{ label ? label : $t('global.search') }}</label>
		<input
			class="search-box__input"
			type="search"
			:value="value"
			v-on:input="inputHandler($event.target.value)"
			v-on:focus="$emit('focus')"
			placeholder="Search Team"
		/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'SearchBox',
	props: {
		label: {
			type: String,
		},
		value: {
			type: String,
		},
	},
	methods: {
		inputHandler(value: String) {
			(this as any).$emit('focus');
			(this as any).$emit('input', value);
		},
	},
});
</script>
