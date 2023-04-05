<template>
	<div class="profile-billing flex flex-col justify-center w-full p-4 bg-white rounded shadow mb-7">
		<h3 class="text-20 text-brand text-center font-700 mt-4 mb-6">Welcome back, Wadud khan</h3>
		<div class="btn-area flex items-center justify-evenly">
			<router-link to="/profile" class="flex w-1/2  text-20 font-semibold justify-center pb-4 text-brand" >Profile</router-link>
			<router-link to="/billing" class="flex w-1/2 text-20 font-semibold justify-center text-center pb-4 text-brand" >Billing & Payment method</router-link>
		</div>
	</div>
</template>
<style scoped>
.profile-billing .btn-area .router-link-exact-active.router-link-active {
    border-bottom: 2px solid #E99648;
}
.profile-billing .btn-area a {
	border-bottom: 2px solid #fff;
	transition: 300ms;
}
.profile-billing .btn-area a:hover {
	border-bottom: 2px solid #E99648;
}
</style>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({	
  
	
});
</script>
