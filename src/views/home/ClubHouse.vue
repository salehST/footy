<template>
	<BaseLayout
	  :joinTeam="isJoinTeam"
	  :headerPull="'lg'"
	  :pageTitle="$t('global.clubhouse')"
	  @go-to-clubhouse="isJoinTeam = !isJoinTeam"
	>
	  <template slot="content">
		<template v-if="!playerTeamIds.length && user">
		  <div class="flex items-center justify-between">
			<h2 class="text-section-title text-white" v-if="isJoinTeam">
			  {{ $t('clubhouse.find_team') }}
			</h2>
  
			<div class="btn-area"></div>
		  </div>
		  <div class="card">
			<p>
			  {{ isJoinTeam ? $t('clubhouse.join_team_message') : $t('clubhouse.no_team_message') }}
			</p>
			<div class="mt-16">
			  <div v-if="isJoinTeam">
				<SearchBox
				  @focus="scrollToSearch"
				  class="md:w-auto md:ml-1 col-span-3"
				  id="search"
				  v-model="searchTeam"
				/>
				<OptionList
				  v-if="searchTeam"
				  :title="'Teams'"
				  :options="filteredTeams"
				  v-model="selectedTeam"
				  v-on:input="joinTeam"
				/>
			  </div>
			  <div class="gap-4 items-stretch" v-if="!isJoinTeam">
				<router-link
				  to="/find-fixtures"
				  class="w-full mb-2 mt-2 button button--primary clubhouse-button self-start"
				>
				  {{ $t('global.search') }}
				</router-link>
				<button
				  class="w-full button button--primary clubhouse-button self-start rounded-5"
				  @click="showJoinTeamSection"
				>
				  {{ $t('clubhouse.join_team_button') }}
				</button>
				<a
				  :href="getPlayFootyURL()"
				  class="w-full mt-2 mb-2 button button--primary self-start clubhouse-button"
				>
				  {{ $t('clubhouse.create_team_button') }}
				</a>
			  </div>
			</div>
		  </div>
		</template>
		<template v-else>
		  <div class="flex mb-32 items-start flex-col sm:flex-row justify-start sm:justify-between">
			<h2 class="uppercase font-bold text-28 text-whitee mb-6 md:mb-0">Upcoming Booking</h2>
			<div class="btn-area flex flex-row gap-4 justify-between items-center w-full md:w-auto">
			  <router-link
				:to="`/pick-location/${country}?`"
				class="org-btn mr-0 md:mr-4 w-1/2 md:w-auto justify-center flex"
				>Book a field</router-link
			  >
			  <a href="" class="outline-btn w-1/2 md:w-auto justify-center flex">View all</a>
			</div>
		  </div>
		  <UpcomingBooking class="mb-7" />
		  <div v-if="fixtures.length > 0" class="">
		  <template v-if="fixtures">
			<div class="flex items-start justify-between">
			  <h2 class="text-section-title text-brand">{{ $t('clubhouse.next_fixtures') }}</h2>
			  <div class="btn-area flex items-center min-w-max">
				<a href="" class="outline-btn-2">View all</a>
			  </div>
			</div>
			<FeedGroup
			  v-for="(group, index) in fixtures"
			  :key="`next-fixtures-${index}`"
			  :firstItem="group[0]"
			>
			  <FeedItem v-for="match in group" :key="match.id" :feedItem="match" />
			</FeedGroup>
		  </template>
		  <template v-if="results">
			<div class="flex items-start justify-between mt-32">
			  <h2 class="text-section-title">{{ $t('clubhouse.recent_results') }}</h2>
			  <div class="btn-area flex items-start min-w-max">
				<a href="" class="outline-btn-2">View all</a>
			  </div>
			</div>
			<FeedGroup
			  class="recent-results"
			  v-for="(group, index) in results"
			  :key="`latest-results-${index}`"
			  :firstItem="group[0]"
			>
			  <FeedItem v-for="match in group" :key="match.id" :feedItem="match" />
			</FeedGroup>
		  </template>
		</div>
        <div v-else>            
              <button
                class="w-full button button--primary clubhouse-button self-start rounded-5"
              >
                Join new league
              </button></div>
		</template>
	  </template>
	</BaseLayout>
  </template>
  
  <script lang="ts">
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import BaseLayout from '@/layouts/BaseLayout.vue';
  import FeedItem from '@/components/feeds/FeedItem.vue';
  import FeedGroup from '@/components/feeds/FeedGroup.vue';
  import { groupMatchesByDate } from '@/helpers';
  import OptionList from '@/layouts/common/OptionList.vue';
  import SearchBox from '@/layouts/common/SearchBox.vue';
  import UpcomingBooking from '@/components/booking/UpcomingBooking.vue';
  import firebase from 'firebase';
  import store from '@/store';
  
  export default Vue.extend({
	data: () => ({
	  searchTeam: '',
	  selectedTeam: null,
	  filteredTeams: [],
	  isJoinTeam: false,
	  deletedTeams: [] as any,
	}),
	components: {
	  BaseLayout,
	  FeedItem,
	  FeedGroup,
	  OptionList,
	  SearchBox,
	  UpcomingBooking,
	},
	watch: {
	  searchTeam: {
		async handler(newVal) {
		  if (!newVal) return (this.filteredTeams = []), (this.selectedTeam = null);
		  const payload = {
			searchTerm: newVal,
			countryId: this.getPlayer.city.country.id,
		  };
		  this.filteredTeams = await this.$store.dispatch('searchCountryTeam', payload);
		  let ids = [] as any;
		  this.filteredTeams.map((team: any) => {
			ids.push(team.city.country.name);
		  });
		},
	  },
	},
	computed: {
	  ...mapGetters(['getClubhouseMatches', 'getPlayer', 'getLoadingStatus', 'getPlayerTeamIds']),
	  user() {
		return this.getPlayer;
	  },
	  country() {
		return this.getPlayer.city.country.id;
	  },
	  fixtures() {
		const upcommingMatches = this.getClubhouseMatches.upcomingMatches;
		const filteredMatches: any = [];
		if (upcommingMatches) {
		  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
		  this.deletedTeams = (this as any).getDeletedTeams(upcommingMatches);
		  upcommingMatches.map((match: any) => {
			if (this.deletedTeams.includes(match.away_team && match.away_team.id)) return;
			if (this.deletedTeams.includes(match.home_team && match.home_team.id)) return;
			filteredMatches.push(match);
		  });
		}
		return groupMatchesByDate(filteredMatches);
	  },
	  results() {
		return groupMatchesByDate(this.getClubhouseMatches.pastMatches, true);
	  },
	  playerTeamIds() {
		return this.getPlayerTeamIds;
	  },
	},
	methods: {
	  async joinTeam() {
		try {
		  if (!(await (this as any).isTeamFull((this as any).selectedTeam.id))) {
			this.$store.commit('toggleLoading', true);
			await this.$store.dispatch('registerPlayerWithTeam', {
			  player: this.getPlayer.id,
			  team: (this as any).selectedTeam.id,
			});
			const playerZendeskId = parseInt(this.getPlayer.zendesk_id);
			const teamZendeskId = parseInt((this as any).selectedTeam.zendesk_id);
			const payload = {
			  zendesk_id: playerZendeskId,
			  data: {
				contact_id: teamZendeskId,
			  },
			};
			await this.$store.dispatch('updateTeamInZendesk', payload);
			this.$store.commit('refreshApp');
			await (this as any).bootstrapApp();
		  } else {
			alert(this.$t('clubhouse.team_full_message'));
		  }
		} catch (error) {
		  this.$store.commit('toggleLoading', false);
		} finally {
		  this.$store.commit('toggleLoading', false);
		}
	  },
	  scrollToSearch() {
		if (window.window.innerWidth < 450) {
		  this.$nextTick(() => {
			const SearchBox: any = document.getElementById('search');
			SearchBox.scrollIntoView();
		  });
		}
	  },
	  async bootstrapApp() {
		try {
		  this.searchTeam = '';
		  this.selectedTeam = null;
		  this.filteredTeams = [];
		  const user = await this.$store.dispatch('getCurrentFirebaseUser');
		  const signupMethod = user.providerData?.[0]?.providerId;
		  const appInitPayload = {
			signupMethod,
			firebaseId: user.uid,
		  };
		  if (!user) return;
		  await this.$store.dispatch('appInit', appInitPayload);
		} catch (error) {
		  return error;
		}
	  },
	  showJoinTeamSection() {
		const payload = {
		  name: 'clubhouse',
		  path: '/',
		};
		this.$store.commit('updatePreviousRoute', payload);
		this.isJoinTeam = true;
	  },
	  getPlayFootyURL() {
		const playerLocation = this.getPlayer.city.country.code;
		const baseURL = 'https://www.playfooty.com';
		if (playerLocation === 'us') {
		  return `${baseURL}/us/register-now?player=${this.getPlayer.id}`;
		} else {
		  return `${baseURL}/nu-aanmelden?player=${this.getPlayer.id}`;
		}
	  },
	  async isTeamFull(teamId: any) {
		const team = await this.$store.dispatch('getTeamById', teamId);
		return !team.players_limit || team.players_limit > team.players.length ? false : true;
	  },
	  getDeletedTeams(matches: any) {
		const teams: any = [];
		matches.map((m: any) => {
		  if (m.league) {
			m.league.league_teams.map((obj: any) => {
			  if (!obj.placeholder_team) {
				if (obj.deleted_at) {
				  if (!teams.includes(obj.team_id)) {
					teams.push(obj.team_id);
				  }
				}
			  }
			});
		  }
		});
		return teams;
	  },
	},
	mounted() {
	  var user = store.dispatch('getCurrentFirebaseUser');
	  console.log('user->', user);
	},
  });
  </script>
  