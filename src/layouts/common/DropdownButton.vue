<template>
	<div :class="`dropdown ${isOpen ? 'is-open' : ''}`">
		<div class="dropdown__backdrop" role="presentation" v-if="isOpen" v-on:click="close"></div>
		<button class="dropdown__button" v-on:click="clickHandler">{{ buttonText }}</button>
		<transition name="popover">
			<div class="popover" v-show="isOpen" ref="popover">
				<div class="popover__inner" ref="popoverInner">
					<button
						class="popover__close"
						type="button"
						v-on:click="close"
						:title="$t('interface.close')"
					>
						<BaseSvgIcon icon="icon-times" />
					</button>
					<slot v-bind:close="close" />
				</div>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseSvgIcon from '@/layouts/icons/BaseSvgIcon.vue';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default Vue.extend({
	components: {
		BaseSvgIcon,
	},
	props: {
		buttonText: {
			required: true,
			type: String,
			default: 'Passed Nothing',
		},
	},
	data: () => ({
		isOpen: false,
	}),
	methods: {
		open(button: any) {
			const bounding = button.getBoundingClientRect();
			(this as any).offset = bounding.y + bounding.height + 74 + 32;
			(this as any).isOpen = true;
			disableBodyScroll(this.$refs.popover);
		},
		close() {
			(this as any).isOpen = false;
			clearAllBodyScrollLocks();
		},
		clickHandler(e: any) {
			(this as any).isOpen ? (this as any).close() : (this as any).open(e.target);
		},
	},
});
</script>
