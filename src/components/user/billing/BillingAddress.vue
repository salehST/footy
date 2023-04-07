<template>
    	<div class="pane">
		<h2 class="pane__title text-white ">Billing Address</h2>
		<div class="pane__body">
			<div class="pane__field">
				<button @click="editTrue(1)" type="button" :class="{ 'hidden': showForm === 1, 'block': showForm !== 1 }" class="pane__edit"> Edit </button>
				<div :class="{ 'hidden': showForm === 1, 'block': showForm !== 1 }" id="account_address" class="text-black text-14 md:text-18 font-500 w-3/4 md:w-1/3">Sportpark Spieringhorn 10
1043 AA, Amsterdam, Netherlands</div>
				<div  v-show="showForm === 1" class="update-address">
					<div class="form-area">
						<input type="text" name="name" class=" text-grey-dark text-14 font-500 py-2 px-3 border border-gray-500 hover:outline-none focus:outline-none hover:border-gray-600 transition focus:ring-0 focus:border-gray-500 mb-1"  id="name" placeholder="Naam op factuur" >
						<input type="text" name="street" class=" text-grey-dark text-14 font-500 py-2 px-3 border border-gray-500 hover:outline-none focus:outline-none hover:border-gray-600 transition focus:ring-0 focus:border-gray-500 mb-1"  id="street" placeholder="Straatnaam en nummer" >
						<input type="text" name="postcode" class=" text-grey-dark text-14 font-500 py-2 px-3 border border-gray-500 hover:outline-none focus:outline-none hover:border-gray-600 transition focus:ring-0 focus:border-gray-500 mb-1"  id="Postcode" placeholder="Postcode" >
						<input type="text" name="country" class=" text-grey-dark text-14 font-500 py-2 px-3 border border-gray-500 hover:outline-none focus:outline-none hover:border-gray-600 transition focus:ring-0 focus:border-gray-500 mb-1"  id="country" placeholder="Netherlands" >
						<input type="text" name="city" class=" text-grey-dark text-14 font-500 py-2 px-3 border border-gray-500 hover:outline-none focus:outline-none hover:border-gray-600 transition focus:ring-0 focus:border-gray-500 mb-1"  id="city" placeholder="Amsterdam" >

						<button @click="editTrue(1)" type="submit" class="org-btn w-full">Save</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
.hidden.pane__edit{
	display: none;
}
.update-address input{
	border-color: #DDD8D8;
}
.update-address input:focus{
	border-color: #DDD8D8;
}
</style>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({	
	data() {
  return {
    showForm: null as number | null,
    };
  },
  methods: {
    editTrue(divNumber: number): void {
      if (this.showForm === divNumber) {
        this.showForm = null;
      } else {
        this.showForm = divNumber as number | null;
      }
    },
  },
	
});
</script>