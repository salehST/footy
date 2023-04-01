<template>
	<div class="accordion-block" :class="cssClasses" ref="accordion">
		<h3 class="accordion-block__title">
			<button
				class="accordion-block__button"
				:id="`accordion-control-${_uid}`"
				type="button"
				:aria-controls="`accordion-panel-${_uid}`"
				:aria-expanded="isOpen"
				v-on:click="clickHandler"
			>
				{{ title }}
				<BaseSvgIcon class="accordion-block__icon" icon="icon-chevron-down" />
			</button>
		</h3>
		<div
			class="accordion-block__panel"
			:id="`accordion-panel-${_uid}`"
			:aria-labelledby="`accordion-control-${_uid}`"
			ref="accordionPanel"
		>
			<div class="accordion-block__inner">
				<slot />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseSvgIcon from '@/layouts/icons/BaseSvgIcon.vue';

export default Vue.extend({
	components: {
		BaseSvgIcon,
	},
	props: {
		color: {
			default: 'blue',
			type: String,
		},
		initiallyOpen: {
			default: true,
			type: Boolean,
		},
		title: {
			required: true,
			type: String,
		},
	},
	data: () => ({
		isOpen: false,
	}),
	computed: {
		cssClasses() {
			return {
				'accordion-block--blue': (this as any).color === 'blue',
				'accordion-block--orange': (this as any).color === 'orange',
				'accordion-block--green': (this as any).color === 'green',
				'is-open': (this as any).isOpen,
			};
		},
	},
	methods: {
		clickHandler() {
			(this as any).isOpen = !(this as any).isOpen;
			(this as any).$refs.accordion.style.setProperty(
				'--accordion-max-height',
				(this as any).$refs.accordionPanel.scrollHeight + 'px'
			);
		},
	},
	created() {
		if ((this as any).initiallyOpen) {
			(this as any).isOpen = true;
		}
	},
});
</script>
