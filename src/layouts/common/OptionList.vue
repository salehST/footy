<template>
	<div class="option-list">
		<p v-if="title" class="option-list__title">{{ title }}</p>
		<template v-if="options">
			<slot></slot>
			<div class="option-list__option" v-for="option in options" :key="'option-' + option.id">
				
				<input
					type="radio"
					:id="`option-list-${_uid}-${option.id}`"
					:name="`option-list-${_uid}`"
					:value="option"
					:checked="value && value.id && value.id === option.id"
					v-on:change="$emit('input', option)"
				/>
				<!-- <img class="match-card__team-logo" :src="feedItem.home_team.logo_url || badge" /> -->
				<label :for="`option-list-${_uid}-${option.id}`">{{ option.name }}</label>
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
