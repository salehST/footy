<template>
	<div class="team-select">
		
		<p class="team-select__label">{{ $t('fixtures.choose_team') }}</p>
		
		<DropdownButton :buttonText="buttonText">
			<template v-slot:default="{ close }">
				<h1 class="mb-12 mt-1 text-2xl label-h">{{ $t('fixtures.select_team') }}</h1>
				<SearchBox v-model="search" :label="'Search all teams'" />				
				<OptionList
					v-if="search"
					:title="searchTeams.length ? 'Teams matching your search' : 'No search results'"
					:options="searchTeams"
					v-model="selection"
					v-on:input="close"
				/>
				<OptionList
					v-if="myTeams.length"
					:options="myTeams"
					:title="$t('fixtures.my_teams')"
					v-model="selection"
					v-on:input="close"
				/>
				<OptionList
					v-if="otherTeams.length && getShowOtherTeam()"
					:options="otherTeams"
					:title="otherTeamsTitle"
					v-model="selection"
					v-on:input="close"
				>
					<div class="option-list__option" v-if="myTeams && myTeams.length">
						<input
							type="radio"
							:id="`option-list-${_uid}-showallfixtures`"
							:name="`option-list-${_uid}`"
							:value="allTeamValue"
							v-model="selection"
							v-on:input="close"
						/>
						<label class="text-black" :for="`option-list-${_uid}-showallfixtures`">
							See all teams
						</label>
					</div>
				</OptionList>
			</template>
		</DropdownButton>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import OptionList from '@/layouts/common/OptionList.vue';
import SearchBox from '@/layouts/common/SearchBox.vue';
import DropdownButton from '@/layouts/common/DropdownButton.vue';
import { GetOtherTeamsPayload } from '@/store/teams/teams.module';

import { mapGetters } from 'vuex';
export default Vue.extend({
	components: {
		OptionList,
		SearchBox,
		DropdownButton,
	},
	data: () => ({
		search: '',
		selectedFinals: { name: null },
		selectedLeague: { name: null },
		otherTeams: [],
		searchTeams: [],
		allTeamValue: {
			id: null,
			name: 'All Teams',
		},
	}),
	methods: {
		async getOtherTeams(newVal: any) {
			const getOtherTeamPayload = {} as GetOtherTeamsPayload;
			getOtherTeamPayload.leagueId = newVal.id;
			getOtherTeamPayload.playerTeams = this.getPlayerTeamIds;
			getOtherTeamPayload.isFinal = newVal.type === 'leagues' ? false : true;
			if (getOtherTeamPayload.isFinal) {
				this.selectedFinals = { name: newVal.name };
				this.selectedLeague = { name: null };
			} else {
				this.selectedFinals = { name: null };
				this.selectedLeague = { name: newVal.name };
			}
			this.otherTeams = await this.$store.dispatch('getOtherTeams', getOtherTeamPayload);
		},
		getShowOtherTeam() {
			const route = this.$route.name;
			switch (route) {
				case 'fixtures':
					return this.getSelectedFixtureLeague ? true : false;
				case 'results':
					return this.getSelectedResultLeague ? true : false;
				case 'standings':
					return this.getSelectedStandingLeague ? true : false;
				default:
					return false;
			}
		},
	},
	watch: {
		getSelectedFixtureLeague: {
			immediate: true,
			deep: true,
			async handler(newVal) {
				if (!newVal) return (this.otherTeams = []);
				this.otherTeams = [];
				// @ts-ignore
				await this.getOtherTeams(newVal);
			},
		},
		getSelectedResultLeague: {
			immediate: true,
			deep: true,
			async handler(newVal) {
				if (!newVal) return (this.otherTeams = []);
				this.otherTeams = [];
				// @ts-ignore
				await this.getOtherTeams(newVal);
			},
		},
		getSelectedStandingLeague: {
			immediate: true,
			deep: true,
			async handler(newVal) {
				if (!newVal) return (this.otherTeams = []);
				this.otherTeams = [];
				// @ts-ignore
				await this.getOtherTeams(newVal);
			},
		},
		search: {
			immediate: true,
			async handler(newVal) {
				try {
					if (!newVal) return;
					this.searchTeams = await this.$store.dispatch('getSearchTeam', this.search);
				} catch (error) {
					return false;
				}
			},
		},
	},
	computed: {
		...mapGetters([
			'getPlayerTeams',
			'getSelectedFixtureTeam',
			'getSelectedResultTeam',
			'getSelectedStandingTeam',
			'getSelectedFixtureLeague',
			'getSelectedResultLeague',
			'getSelectedStandingLeague',
			'getPlayerTeamIds',
		]),
		myTeams() {
			return this.getPlayerTeams;
		},
		selection: {
			get(): any {
				const route = this.$route.name;
				switch (route) {
					case 'clubhouse':
						return this.getSelectedFixtureTeam;
					case 'fixtures':
						return this.getSelectedFixtureTeam;
					case 'results':
						return this.getSelectedResultTeam;
					case 'standings':
						return this.getSelectedStandingTeam;
					default:
						return '';
				}
			},

			set(value: any): any {
				if (!value) return;
				this.$store.commit('setFixtureLeague', value.id ? null : this.getSelectedFixtureLeague);
				this.$store.commit('setResultLeague', value.id ? null : this.getSelectedResultLeague);
				this.$store.commit('setStandingLeague', value.id ? null : this.getSelectedStandingLeague);
				this.$store.commit('setFixtureTeam', value);
				this.$store.commit('setResultTeam', value);
				this.$store.commit('setStandingTeam', value);
				if (!value.id) this.$store.commit('refreshApp');
			},
		},
		buttonText() {
			if (!this.selection) return this.$t('fixtures.select_team');
			// @ts-ignore
			return this.selection && this.selection.name ? this.selection.name : this.selection;
		},
		otherTeamsTitle() {
			let title = this.$t('fixtures.other_teams');

			if (this.selectedFinals.name) {
				title += ` in ${this.selectedFinals.name}`;
			} else if (this.selectedLeague.name) {
				title += ` in ${this.selectedLeague.name}`;
			}

			return title;
		},
	},
});
</script>
