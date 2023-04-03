<template>
<div class="bg-white w-full p-4 rounded-md shadow">
    <div class="inner-info flex items-start flex-col md:flex-row justify-between gap-4 w-full">
        <div class="img block w-52 h-36 min-w-max overflow-hidden rounded">
            <img src="/img/image-01.jpg" class=" object-cover w-full h-full" alt="">
        </div>
        <div class="text-area w-full">
            <h3 class=" text-brand text-2xl font-700 mb-0">Footy Park Amsterdam</h3>
            <p class=" text-brand text-20 font-semibold mb-3">August 11, 13.00-15:00 on Field 2</p>
            <ul>
                <li class="flex items-center gap-2 justify-start text-brand text-base mb-2">
                    <img src="/img/icons/icon-pin.svg" class=" h-6 w-6" alt="icon"> <span>Sportpark Spieringhorn 11, 1043 AA, Amsterdam</span>
                </li>
                <li class="flex items-center gap-2 justify-start text-brand text-base">
                    <img src="/img/icons/icon-pitch.svg" class=" h-6 w-6" alt="icon"> <span>Field 2 (6 vs. 6)</span>
                </li>
            </ul>
        </div>
        <div class="btn-a flex w-full min-w-max lg:w-1/4 text-right justify-start md:justify-end">
            <a href="" class="org-btn-2">Edit booking</a>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>