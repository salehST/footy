<template>
	<svg class="icon" :class="{ 'icon-spin': spin }">
		<use :xlink:href="`#${icon}`" />
	</svg>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			required: true,
		},
		spin: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style>
svg.icon-spin {
	animation: icon-spin 2s infinite linear;
}
@keyframes icon-spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(359deg);
	}
}
</style>
