<template>
	<div v-if="userTeams.length" class="pane">
		<h2 class="pane__title">{{ $t('profile.your_teams_title') }}</h2>
		<div class="pane__body">
			<div class="profile-team" v-for="team in userTeams" :key="team.id">
				<button class="leave_team" type="button" @click="confirmTeamLeave(team)">
					{{ $t('profile.leave_team') }}
				</button>
				<router-link :to="`team/${team.id}`">
					<img :src="team.logo_url || badge" :alt="team.name" />
					<p>{{ team.name }}</p>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
	name: 'UserTeams',

	data: () => ({
		badge: require('@/assets/images/footy_team_badge.png'),
	}),

	computed: {
		...mapGetters(['getPlayerTeams', 'getPlayer']),
		userTeams() {
			return this.getPlayerTeams;
		},
		player() {
			return this.getPlayer;
		},
	},
	methods: {
		confirmTeamLeave(team: any) {
			confirm(this.$t('profile.leave_team_confirmation') as string) &&
				(this as any).leaveTeam(team);
		},
		async leaveTeam(team: any) {
			this.$store.commit('toggleLoading', true);
			const data = {
				player_id: (this as any).player.id,
				team_id: team.id,
			};
			try {
				await this.$store.dispatch('removePlayerFromTeam', data);
				await (this as any).refershAppData();
			} catch (error) {
				this.$store.commit('toggleLoading', false);
			} finally {
				this.$store.commit('toggleLoading', false);
			}
		},
		async refershAppData(): Promise<void> {
			const firebaseUser = await this.$store.dispatch('getCurrentFirebaseUser');
			const signupMethod = firebaseUser.providerData?.[0]?.providerId;
			const appInitPayload = {
				signupMethod,
				firebaseId: firebaseUser.uid,
			};
			return this.$store.dispatch('appInit', appInitPayload);
		},
	},
});
</script>
