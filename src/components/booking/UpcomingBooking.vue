<template>
  <div>
<div  class="bg-white w-full p-4 rounded-md shadow mb-7">
    <div class="inner-info flex items-start flex-col md:flex-row justify-between gap-4 w-full">
        <div class="img hidden md:block w-52 h-36 min-w-max overflow-hidden rounded">
            <img src="" class=" object-cover w-full h-full" alt="">
        </div>
        <div class="text-area w-full">
            <h3 @click="toggleDiv(1)" class=" text-brand text-2xl font-700 mb-0 flex w-full items-center justify-between"><span class="flex-wrap w-2/3">{{ dates.pitch.location.name }}</span>  <button :class="[activeClass, { activeBtn: showDiv === 1 }]"><img src="/img/icons/icon-arrow.svg" class=" h-32 w-32 flex md:hidden" alt="arrow-icon"></button></h3>
            <div class="booking-more-info overflow-hidden mt-3 md:mt-0" v-show="showDiv === 1">
                <p class=" text-brand  text-18 md:text-20 font-semibold mb-3">{{ dates.display_date }} on Field </p>
                <ul>
                    <li class="flex items-center gap-2 justify-start text-brand text-base mb-2">
                        <img src="/img/icons/icon-pin.svg" class=" h-6 w-6" alt="icon"> <span></span>
                    </li>
                    <li class="flex items-center gap-2 justify-start text-brand text-base">
                        <img src="/img/icons/icon-pitch.svg" class=" h-6 w-6" alt="icon"> <span>Field 2 (6 vs. 6)</span>
                    </li>
                </ul>            
                <div class="btn-a flex md:hidden w-full min-w-max lg:w-1/4 mt-6 text-right justify-end">
                    <a href="" class="org-btn-2">Edit booking</a>
                </div>
            </div>
        </div>
        <div class="btn-a hidden md:flex w-full min-w-max lg:w-1/4 text-right justify-start md:justify-end">
            <a href="" class="org-btn-2">Edit booking</a>
        </div>
    </div>
</div> 

</div>

</template>
<script lang="ts">

import Vue from 'vue';
// import { mapGetters } from 'vuex';

export default Vue.extend({
	data() {
  return {
    showDiv: 1 as number | null,
    isMobile: false,
    };
  },	
  computed: {
		// ...mapGetters(['getplayerBookings']),
		// dates() {
		// 	const currentDate = new Date(); // This will give you the current date and time
		// 	const today = currentDate.toISOString().slice(0, 10); // This will give you the date in the YYYY-MM-DD format
		// 	const upcomingDates = this.getplayerBookings
		// 		.filter((ele: any) => ele.date > today)
		// 		.sort((a: any, b: any) => {
		// 			const dateA: any = new Date(a.date);
		// 			const dateB: any = new Date(b.date);
		// 			return dateA - dateB;
		// 		});
		// 	return upcomingDates[0];
		// },
        activeClass(): string {
      return this.showDiv !== null ? 'active' : '';
    },
	},
  methods: {
    toggleDiv(divNumber: number): void {
      if (this.showDiv === divNumber) {
        this.showDiv = null;
      } else {
        this.showDiv = divNumber as number | null;
      }
    },
  },
});
</script>
<style scoped>
.text-area img {
    transform: rotate(0deg);
    transition: 300ms;
}
.active.activeBtn img {
    transform: rotate(180deg);
}
@media only screen and (min-width: 767.99px) {
.booking-more-info{
    display: block!important;
}
}
</style>