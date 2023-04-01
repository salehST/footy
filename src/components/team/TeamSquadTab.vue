<template>
	<div>
		<div v-if="!loading && players.length" class="players-layout mt-32">
			<div class="card text-center" v-for="player in players" :key="player.id">
				<img
					class="avatar mb-16 mr-auto ml-auto"
					:src="player.photo_url || avatar"
					:alt="player.name"
				/>
				<p class="text-label" v-if="player.id === (team && team.captain)">
					{{ $t('team.captain') }}
				</p>
				<p class="text-label" v-if="player.id === (team && team.vice_captain)">
					{{ $t('team.vice_captain') }}
				</p>
				<p class="text-value">{{ `${player.first_name} ${player.last_name}` }}</p>
			</div>
		</div>
		<div v-if="!players.length" style="display: grid; place-items: center; margin-top: 3rem">
			No players Found
		</div>
		<div v-if="loading" style="display: grid; place-items: center; margin-top: 3rem">
			<img :src="loadingGif" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
	name: 'TeamSquadTab',
	props: ['team'],
	data: () => ({
		avatar: require('@/assets/images/avatar.png'),
		players: [],
		loading: false,
		loadingGif: require('@/assets/loading.gif'),
	}),

	computed: mapGetters(['getRefreshApp']),

	methods: {
		async getTeamPlayers(): Promise<void | boolean> {
			try {
				this.loading = true;
				const teamId = this.$route.params.id;
				this.players = await this.$store.dispatch('getTeamPlayers', teamId);
			} catch {
				return false;
			} finally {
				this.loading = false;
			}
		},
	},
	watch: {
		getRefreshApp: {
			handler() {
				// @ts-ignore
				return this.getTeamPlayers();
			},
		},
	},

	async created() {
		// @ts-ignore
		await this.getTeamPlayers();
	},
});
</script>
