<template>
	<BaseLayout :headerPull="'lg'" :pageTitle="$t('find_fixtures.title')" :headerSticky="true">
		<template slot="content">
			<div class="card">
				<p>{{ $t('find_fixtures.intro') }}</p>
				<div class="mt-16">
					<SearchBox v-model="searchTerm" />
					<OptionList
						v-if="searchTerm"
						:title="'Teams'"
						:options="filteredTeams"
						v-model="selectedTeam"
						v-on:input="teamChangeHandler"
					/>
				</div>
			</div>
		</template>
	</BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';
import OptionList from '@/layouts/common/OptionList.vue';
import SearchBox from '@/layouts/common/SearchBox.vue';
import Vue from 'vue';

export default Vue.extend({
	data: () => ({
		searchTerm: '',
		selectedTeam: null,
		filteredTeams: [],
	}),
	watch: {
		searchTerm: {
			async handler(newVal) {
				if (!newVal) return (this.filteredTeams = []);
				this.filteredTeams = await this.$store.dispatch('getSearchTeam', newVal);
			},
		},
	},
	methods: {
		teamChangeHandler(team: any) {
			this.$store.commit('setFixtureTeam', team);
			this.$store.commit('setFixtureLeague', null);
			this.$router.push(`/fixtures`);
		},
	},
	components: {
		BaseLayout,
		OptionList,
		SearchBox,
	},
});
</script>
