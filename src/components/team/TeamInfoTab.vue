<template>
	<div>
		<div class="card mt-32">
			<p class="text-label">{{ $t('team.founded') }}</p>
			<p class="text-value">{{ founded }}</p>
			<p class="text-label mt-3">{{ $t('team.recent_form') }}</p>
			<FormIndicator :form="form" />
		</div>
		<div class="mt-32">
			<h2 class="text-section-title">{{ $t('team.all_time_record') }}</h2>
			<StatisticsTable :stats="stats" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import FormIndicator from '@/components/stats/FormIndicator.vue';
import StatisticsTable from '@/components/stats/StatisticsTable.vue';

export default Vue.extend({
	props: {
		form: {
			required: true,
			type: Array,
		},
		stats: {
			required: true,
			type: Object,
		},
		founded: {
			required: true,
			type: String,
		},
	},

	components: {
		FormIndicator,
		StatisticsTable,
	},
});
</script>
