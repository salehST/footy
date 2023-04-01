<template>
	<AccordionBlock
		class="mt-16"
		:title="league.display_name"
		:color="'orange'"
		v-if="matches && leagueTable.length"
	>
		<table class="league-table">
			<thead>
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
			<tbody>
				<tr v-for="(team, idx) in leagueTable" :key="team.id">
					<td class="font-bold">{{ idx + 1 }}</td>
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
	</AccordionBlock>
</template>

<script lang="ts">
import Vue from 'vue';

import AccordionBlock from '@/layouts/common/AccordionBlock.vue';
import GetCarriedPoints from '@/graphql/GetCarriedPoints.gql';
import { getLeagueTable } from '@/helpers';

export default Vue.extend({
	name: 'TeamLeaguesTabTable',

	props: {
		league: {
			required: true,
			type: Object,
		},
		drawnCarried: {
			required: false,
			type: [Number || null],
			default: 0,
		},
		gdCarried: {
			required: false,
			type: [Number || null],
			default: 0,
		},
		gsCarried: {
			required: false,
			type: [Number || null],
			default: 0,
		},
		lostCarried: {
			required: false,
			type: [Number || null],
			default: 0,
		},
		playedCarried: {
			required: false,
			type: [Number || null],
			default: 0,
		},
		pointsCarried: {
			required: false,
			type: [Number || null],
			default: 0,
		},
		wonCarried: {
			required: false,
			type: [Number || null],
			default: 0,
		},
		gcCarried: {
			required: false,
			type: [Number || null],
			default: 0,
		},
	},

	apollo: {
		points: {
			query: GetCarriedPoints,
			variables() {
				return {
					id: (this as any).league.id,
				};
			},
		},
	},

	computed: {
		leagueTable() {
			let table: any = getLeagueTable((this as any).matches, []);
			// return table;
			if (!table.length && (this as any).points && (this as any).points.length) {
				table =
					// @ts-ignore
					this.points &&
					(this as any).points.map((pointData: any, idx: any) => {
						return {
							drawn: pointData.drawn_carried || 0,
							goalDiff: pointData.gd_carried || 0,
							goalsConceded: pointData.gc_carried || 0,
							goalsScored: pointData.gs_carried || 0,
							lost: pointData.lost_carried || 0,
							played: pointData.played_carried || 0,
							points: pointData.points_carried || 0,
							won: pointData.won_carried || 0,
							name: pointData.name.name,
							position: idx + 1,
						};
					});
			}
			if ((this as any).points && (this as any).points.length) {
				table.map((data: any, idx: any) => {
					(this as any).points.map((pointData: any) => {
						if (pointData.name.name === data.name) {
							table[idx].drawn = table[idx].drawn + pointData.drawn_carried || 0;
							table[idx].goalDiff = table[idx].goalDiff + pointData.gd_carried || 0;
							table[idx].goalsConceded = table[idx].goalsConceded + pointData.gc_carried || 0;
							table[idx].goalsScored = table[idx].goalsScored + pointData.gs_carried || 0;
							table[idx].lost = table[idx].lost + pointData.lost_carried || 0;
							table[idx].played = table[idx].played + pointData.played_carried || 0;
							table[idx].points = table[idx].points + pointData.points_carried || 0;
							table[idx].won = table[idx].won + pointData.won_carried || 0;
						}
					});
				});
			}
			return table.filter((table: any) => table.name);
		},
		matches() {
			return (this.league && this.league.matches && this.league.matches) || [];
		},
	},

	components: {
		AccordionBlock,
	},
});
</script>
