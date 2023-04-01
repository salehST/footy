<template>
	<AuthFlowLayout>
		<div class="card">
			<img class="avatar" v-if="team" :src="team.logoURL || badge" :alt="title" />
			<h1 class="mb-16">{{ title }}</h1>
			<p v-if="user && isTeamFull">{{ $t('auth.team_full_text') }}</p>
			<p v-else-if="!user && isTeamFull">{{ $t('auth.team_full_join_text') }}</p>
			<p v-else>{{ $t('auth.join_text') }}</p>
			<div v-if="team">
				<div v-if="user" class="flex flex-col mt-32">
					<!-- class="button button--primary" -->
					<button
						class="button button--login mt-16"
						@click="joinTeam"
						:disabled="loading || isJoinButtonDisabled || isTeamFull"
					>
						<img v-if="loading" :src="loadingImage" class="h-4" />
						{{ loading ? '' : 'Join Team' }}
					</button>
					<router-link class="button button--link" to="/clubhouse">Go to Clubhouse</router-link>
				</div>
				<div v-else class="flex flex-col mt-32">
					<router-link class="button button--primary" :to="'/login?team_invite=' + team.id">{{
						$t('global.login')
					}}</router-link>
					<router-link class="button button--link" :to="'/signup?team_invite=' + team.id">{{
						$t('global.signup')
					}}</router-link>
				</div>
			</div>
		</div>
	</AuthFlowLayout>
</template>

<script lang="ts">
import AuthFlowLayout from '@/layouts/auth/AuthFlowLayout.vue';
import firebase from 'firebase/app';
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
	name: 'JoinView',

	data: () => ({
		team: {
			id: '',
			logoURL: '',
			name: '',
		},
		loadingImage: require('@/assets/loading.gif'),
		badge: require('@/assets/images/footy_team_badge.png'),
		user: null as any,
		error: '' as string,
		loading: false,
	}),

	computed: {
		...mapGetters(['getPlayerTeamIds', 'getPlayer']),
		title() {
			return this.team && this.team.name ? this.team.name : 'Unknown team';
		},
		isJoinButtonDisabled(): boolean {
			const teamId = (this as any).$route.params.id;
			if (!teamId || !this.getPlayerTeamIds.length) return false;
			if (this.getPlayerTeamIds.includes(teamId)) return true;
			else return false;
		},
		isTeamFull(): boolean {
			return !(this as any).team.players_limit ||
				(this as any).team.players_limit > (this as any).team.players.length
				? false
				: true;
		},
	},

	methods: {
		async joinTeam() {
			try {
				this.error = '';
				if (!this.getPlayer) return;
				this.loading = true;
				const teamId = this.$route.params.id;
				const player = this.getPlayer;
				await this.$store.dispatch('registerPlayerWithTeam', {
					player: player.id,
					team: teamId,
				});
				// @ts-ignore
				await this.refershAppData();
				this.$router.push({ name: 'clubhouse' });
				return;
			} catch (error) {
				this.error = 'Unable to join team please try again later';
			} finally {
				this.loading = false;
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

	async created() {
		const teamId = (this as any).$route.params.id;
		if (teamId) {
			const team = await this.$store.dispatch('getTeamById', teamId);
			(this as any).team = team && {
				id: team.id,
				name: team.name,
				logoURL: team.logo_url,
				players_limit: team.players_limit,
				players: team.players,
			};
		}
		// @ts-ignore
		const currentUser = await firebase.getCurrentUser();
		if (currentUser) this.user = currentUser;
		else this.user = null;
	},

	components: {
		AuthFlowLayout,
	},
});
</script>
