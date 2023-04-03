<template>
	
	<div class="base-layout relative">
		<SideBar />
		<div class="right-content w-full lg:pl-smd">
			<div class="page page--default" :style="style">				
				<PageHeader
					:pull="headerPull"
					:sticky="headerSticky"
					:title="pageTitle"
					:joinTeam="joinTeam"
					@go-to-clubhouse="$emit('go-to-clubhouse')"
				>
					<slot name="header" />
				</PageHeader>
				<div class="page__content">
					<slot name="content" />
					<MainNav />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import MainNav from '@/layouts/common/MainNav.vue';
import PageHeader from '@/layouts/common/PageHeader.vue';
import SideBar from '@/layouts/common/SideBar.vue';
import Vue from 'vue';

export default Vue.extend({
	name: 'BaseLayout',
	props: {
		pageTitle: {
			required: true,
			type: String,
		},
		headerPull: {
			default: 'sm',
			type: String,
		},
		headerSticky: {
			default: false,
			type: Boolean,
		},
		joinTeam: {
			type: Boolean,
		},
	},
	computed: {
		style() {
			let pull;
			switch ((this as any).headerPull) {
				case 'sm':
					pull = '-48px';
					break;
				case 'md':
					pull = '-104px';
					break;
				case 'lg':
					pull = '-144px';
					break;
				default:
					pull = '0';
			}
			return {
				'--content-pull': pull,
			};
		},
	},
	components: {
    MainNav,
    PageHeader,
    SideBar
},
});
</script>
