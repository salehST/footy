<template>
	<div class="my-3">
		<div class="flex flex-col shadow-xs bg-white rounded-md overflow-hidden">
			<div class="flex justify-center bg-green p-2">
				<span class="text-white uppercase font-semibold text-sm"> Man of the Match </span>
			</div>
			<div v-if="motmTable.length" class="flex flex-col px-4 py-3 text-xs">
				<!-- Table Header -->
				<div class="flex pb-3 font-semibold">
					<div class="flex" style="width: 5%"></div>
					<div class="flex" style="width: 45%">
						<span class="">Name</span>
					</div>
					<div class="flex" style="width: 45%">
						<span class="">Team</span>
					</div>
					<div class="flex justify-center" style="width: 5%">🏆</div>
				</div>
				<!-- Table Rows -->
				<div
					class="flex pb-2"
					v-for="(player, playerIndex) in firstFiveMotmTable"
					:key="'motom-row-' + playerIndex"
				>
					<div class="flex font-semibold" style="width: 5%">
						{{ playerIndex + 1 }}
					</div>
					<div class="flex pr-2" style="width: 45%">
						<span class="">{{ player.name }}</span>
					</div>
					<div class="flex pr-2" style="width: 45%">
						<span class="">{{ player.team }}</span>
					</div>
					<div class="flex justify-center" style="width: 5%">
						{{ player.awards }}
					</div>
				</div>
			</div>
			<div v-else class="flex justify-center px-4 py-3">
				<span class="text-gray-500">{{ $t('standings.no_awards_to_show') }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		motmTable: {
			required: true,
			type: Array,
		},
	},

	computed: {
		firstFiveMotmTable() {
			return this.motmTable.flat().slice(0, 10);
		},
	},
});
</script>
