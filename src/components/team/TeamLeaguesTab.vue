<template>
	<div>
		<template v-for="(league, idx) in leagues">
			<TeamLeaguesTabTable :key="idx" :league="league.league" />
		</template>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import TeamLeaguesTabTable from '@/components/stats/TeamLeaguesTabTable.vue';

export default Vue.extend({
	props: {
		leagues: {
			required: true,
			type: Array,
		},
	},

	components: {
		TeamLeaguesTabTable,
	},
});
</script>
