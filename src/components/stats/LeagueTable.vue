<template>
	<table class="league-table">
		<thead>
			<tr
				v-if="selectedLeague"
				class="league-table__title"
				:class="type === 'mini' ? selectedLeague.colorClass : ''"
			>
				<th colspan="9">{{ selectedLeague.name || selectedLeague.display_name }}</th>
			</tr>
			<tr class="league-table__heading">
				<th></th>
				<th>Team</th>
				<th>P</th>
				<th>W</th>
				<th>D</th>
				<th>L</th>
				<th>GS</th>
				<th>GD</th>
				<th>PTS</th>
			</tr>
		</thead>
		<tbody v-if="type === 'full'">
			<tr
				v-for="(team, index) in leagueTable"
				:key="team.id"
				:class="
					index !== leagueTable.length - 1 ? 'bg-white border-b-2 border-gray-100' : 'bg-white'
				"
			>
				<td class="font-bold" :style="{ 'background-color': getQualificationColor(team.position) }">
					{{ team.position }}
				</td>
				<td>{{ team.name }}</td>
				<td>{{ team.played }}</td>
				<td>{{ team.won }}</td>
				<td>{{ team.drawn }}</td>
				<td>{{ team.lost }}</td>
				<td>{{ team.goalsScored }}</td>
				<td>{{ team.goalDiff }}</td>
				<td>{{ team.points }}</td>
			</tr>
		</tbody>
		<tbody v-if="type === 'mini'">
			<tr
				v-for="(team, index) in leagueTable"
				:key="team.id"
				:class="
					index !== leagueTable.length - 1 ? 'bg-white border-b-2 border-gray-100' : 'bg-white'
				"
			>
				<td class="font-bold">{{ team.position }}</td>
				<td>{{ team.name }}</td>
				<td>{{ team.played }}</td>
				<td>{{ team.won }}</td>
				<td>{{ team.drawn }}</td>
				<td>{{ team.lost }}</td>
				<td>{{ team.goalsScored }}</td>
				<td>{{ team.goalDiff }}</td>
				<td>{{ team.points }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		selectedLeague: Object,
		leagueTable: Array,
		type: String,
		qualificationPositions: Array,
	},

	data: () => ({
		positions: {},
	}),

	watch: {
		qualificationPositions: {
			deep: true,
			immediate: true,
			handler(newVal) {
				(this as any).positions = {};
				newVal &&
					newVal.length &&
					newVal.map((position: any) => {
						(this as any).positions[position.position] = position;
					});
			},
		},
	},

	methods: {
		getQualificationColor(teamIndex: number) {
			const isColored = (this as any).positions[teamIndex];
			const color =
				isColored &&
				(this as any).positions[teamIndex] &&
				(this as any).positions[teamIndex].color &&
				(this as any).positions[teamIndex].color.toLowerCase();
			return color ? isColored.color : 'bg-white';
		},
	},
});
</script>
