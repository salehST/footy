<template>
	<div class="option-list">
		<p v-if="title" class="option-list__title">{{ title }}</p>
		<template v-if="options">
			<slot></slot>
			<div class="option-list__option" v-for="option in options" :key="'option-' + option.id">

				<!-- <img :src="option.badge ? option.badge:''"> -->
				<input
					type="radio"
					:id="`option-list-${_uid}-${option.id}`"
					:name="`option-list-${_uid}`"
					:value="option"
					:checked="value && value.id && value.id === option.id"
					v-on:change="$emit('input', option)"
				/>
				<label :for="`option-list-${_uid}-${option.id}`"  class="items-center gap-2 justify-start"><span class="logo-badge flex h-6 w-6 p-1 rounded-full overflow-hidden"><img :src="option.badge ? option.badge: '/img/icons/icon-football.svg'"  class="w-auto h-auto rounded-full overflow-hidden" alt="logo" ></span> {{ option.name }}</label>
			</div>
		</template>
		<p v-else class="text-sm">No results</p>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'OptionList',
	props: {
		options: {
			required: true,
			type: Array,
		},
		title: {
			type: String,
		},
		value: {
			type: Object,
		},
	},
});
</script>
