<template>
  <div>
<div class="bg-white w-full p-4 rounded-md shadow mb-7">
    <div class="inner-info flex items-start flex-col md:flex-row justify-between gap-4 w-full">
        <div class="img hidden md:block w-52 h-36 min-w-max overflow-hidden rounded">
            <img src="/img/image-01.jpg" class=" object-cover w-full h-full" alt="">
        </div>
        <div class="text-area w-full">
            <h3 @click="toggleDiv(1)" class=" text-brand text-2xl font-700 mb-0 flex w-full items-center justify-between"><span class="flex-wrap w-2/3">Footy Park Amsterdam</span>  <button :class="[activeClass, { activeBtn: showDiv === 1 }]"><img src="/img/icons/icon-arrow.svg" class=" h-32 w-32 flex md:hidden" alt="arrow-icon"></button></h3>
            <div class="booking-more-info overflow-hidden mt-3 md:mt-0" v-show="showDiv === 1">
                <p class=" text-brand  text-18 md:text-20 font-semibold mb-3">August 11, 13.00-15:00 on Field 2</p>
                <ul>
                    <li class="flex items-center gap-2 justify-start text-brand text-base mb-2">
                        <img src="/img/icons/icon-pin.svg" class=" h-6 w-6" alt="icon"> <span>Sportpark Spieringhorn 11, 1043 AA, Amsterdam</span>
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
<div class="bg-white w-full p-4 rounded-md shadow mb-7">
    <div class="inner-info flex items-start flex-col md:flex-row justify-between gap-4 w-full">
        <div class="img hidden md:block w-52 h-36 min-w-max overflow-hidden rounded">
            <img src="/img/image-02.jpg" class=" object-cover w-full h-full" alt="">
        </div>
        <div class="text-area w-full">
            <h3 @click="toggleDiv(2)" class=" text-brand text-2xl font-700 mb-0 flex w-full items-center justify-between"><span class="flex-wrap w-2/3">Footy Park Amsterdam</span>  <button :class="[activeClass, { activeBtn: showDiv === 2 }]"><img src="/img/icons/icon-arrow.svg" class=" h-32 w-32 flex md:hidden" alt="arrow-icon"></button></h3>
            <div class="booking-more-info overflow-hidden mt-3 md:mt-0" v-show="showDiv === 2">
                <p class=" text-brand text-18 md:text-20 font-semibold mb-3">August 11, 13.00-15:00 on Field 2</p>
                <ul>
                    <li class="flex items-center gap-2 justify-start text-brand text-base mb-2">
                        <img src="/img/icons/icon-pin.svg" class=" h-6 w-6" alt="icon"> <span>Sportpark Spieringhorn 11, 1043 AA, Amsterdam</span>
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


export default Vue.extend({
	data() {
  return {
    showDiv: 1 as number | null,
    isMobile: false,
    };
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
  computed: {
    activeClass(): string {
      return this.showDiv !== null ? 'active' : '';
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