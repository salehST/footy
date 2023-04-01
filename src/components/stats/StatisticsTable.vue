<template>
	<div class="team-stats card card--not-padded">
		<img class="team-stats__image" :src="image" alt="" role="presentation" />
		<table class="team-stats__table">
			<thead>
				<th>P</th>
				<th>W</th>
				<th>D</th>
				<th>L</th>
			</thead>
			<tbody>
				<td>{{ stats.played }}</td>
				<td>{{ stats.won }}</td>
				<td>{{ stats.drawn }}</td>
				<td>{{ stats.lost }}</td>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		stats: {
			required: true,
			type: Object,
		},
	},
	data: () => ({
		image: require('@/assets/images/backgrounds/bg-team-stats.jpg'),
	}),
});
</script>
