<template>
	<div class="profile-page">
		<BaseLayout :headerPull="'lg'" :pageTitle="$t('global.Profile Billing')">
			<template slot="content">
				<h1 class="text-white text-2xl mb-64 font-700 relative md:hidden text-center uppercase"><router-link to="/menu"><img src="/img/icons/arrow-white.svg" class=" absolute inset-0" alt=""></router-link> Profile & Billing</h1>
				<div class="profile-billing hidden md:flex flex-col justify-center w-full p-4 bg-white rounded shadow mb-7">
					<h3 class="text-20 text-brand text-center font-700 mt-4 mb-6">Welcome back, {{user.first_name}} {{user.last_name}}</h3>
					<div class="btn-area flex flex-col md:flex-row items-center justify-evenly">
						<button @click="toggleDiv(1)" :class="[activeClass, { activeTab: showDiv === 1 }]"
							class="flex w-1/2 text-20 font-semibold border-b-2 border-transparent justify-center pb-4 text-brand">Profile</button>
						<button @click="toggleDiv(2)" :class="[activeClass, { activeTab: showDiv === 2 }]"
							class="flex w-1/2 text-20 font-semibold border-b-2 border-transparent justify-center text-center pb-4 text-brand">Billing
							& Payment method</button>
					</div>
				</div>
				<div class="pane">
					<button id="pro-btn" @click="toggleDiv(1)" :class="[activeClass, { activeTab: showDiv === 1 }]"
						class="flex md:hidden w-1/2 text-14 font-bold justify-start text-left pb-4 text-brand mobile-btn">Profile</button>
					<div 
						id="profile" 
						style="display: none;" 
						:class="{ 'hidden': showDiv === 1, 'block': showDiv !== 1 }"
						class=" md:block show-panel" v-show="showDiv === 1 && !isMobile"
					>
						<ProfileDetails />
						<RingerSettings />
						<UserTeams />
						<AccountDetails />
						<CommunicationPreferences />
						<AccountRemoval />
					</div>

					<button id="bill-btn" @click="toggleDiv(2)" :class="[activeClass, { activeTab: showDiv === 2 }]"
						class="flex md:hidden  w-1/2 text-14 font-bold justify-start text-left pb-4 text-brand mobile-btn">Billing
						& Payment method</button>
					<div id="billing" class="show-panel md:block" :class="{ 'hidden': showDiv === 2, 'block': showDiv !== 2 }"
						v-show="showDiv === 2 && !isMobile">
						<BillingAddress />
						<PaymentMethod />
					</div>

				</div>
			</template>
		</BaseLayout>
	</div>
</template>
<style>
@media only screen and (max-width: 1024px) {
.profile-page .pane__title {
	color: #000000;
}
.profile-page .page-header.has-pull + .page__content{
	margin-top: -60px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
	position: relative;
	z-index: 2;
}
.profile-page .page__content:after{
	content: "";
	position: absolute;
	background: #ddd8d8;
	top: 45px;
	left: 0;
	height: 100%;
	width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
	z-index: -1;
}
.profile-page .page-header{
	min-height: 10.75rem;
}
.profile-page .page-header::after{
	display: none!important;
}
.mobile-btn {
    color: #000;
}
}
</style>
<style scoped>
.mobile-btn {
	width: 100%;
	background: #fff;
	margin: 15px auto;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 10px;
	position: relative;
	
}

.mobile-btn:after {
	content: "";
	position: absolute;
	right: 20px;
	transform: rotate(0deg);
	transition: 300ms;
	background: url('/img/icons/icon-arrow.svg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 24px;
	width: 24px;
}

.activeTab.mobile-btn:after {
	transform: rotate(180deg);
}

.profile-billing .btn-area .activeTab {
	border-bottom: 2px solid #E99648;
}

.profile-billing .btn-area a {
	border-bottom: 2px solid #fff;
	transition: 300ms;
}

.profile-billing .btn-area a:hover {
	border-bottom: 2px solid #E99648;
}

@media only screen and (max-width: 1024px) {

	.hidden.show-panel {
		display: block !important;
	}

}

.billing-tab.profile {
	color: #000;
}

.profile-details__data label {
	font-size: 16px;
	font-weight: 600;
	text-transform: capitalize;
}

.profile-details__data input[type=text][readonly] {
	font-size: 18px;
	font-weight: 700;
}

.page-header__back {
	margin-bottom: 30px;
}

.billing-tab-content .delete_card {
	position: relative;
	padding: 15px 0 0;
	color: #E99648;
	text-decoration: underline;
}

.billing-row {
	display: flex;
}

.billing-row .billing-col {
	flex: 1;
}

.billing-row .billing-col:last-child {
	margin-left: 1em;
}

/* Accordion styles */
.billing-tab input[type=radio] {
	display: none;
}

.billing-tab {
	width: 100%;
	color: white;
	overflow: hidden;
	margin-bottom: 24px;
}

.billing-tab-label {
	display: flex;
	justify-content: space-between;
	padding: 1em;
	background: #fff;
	font-weight: bold;
	cursor: pointer;
	border: 1px solid #fff;
	transition: 300ms;
	border-radius: 5px;
	margin-bottom: 0;
	/* Icon */
}

.billing-tab-label:hover {
	border: 1px solid #E99648;
}

.billing-tab-label::after {
	content: "";
	width: 1em;
	height: 1em;
	text-align: center;
	transition: all 0.35s;
	background-image: url('/img/icons/icon-arrow.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

.billing-tab-content {
	max-height: 0;
	transition: all 0.35s;
}

.billing-tab-close {
	display: flex;
	justify-content: flex-end;
	padding: 1em;
	font-size: 0.75em;
	background: #2c3e50;
	cursor: pointer;
}

.billing-tab-close:hover {
	background: #1a252f;
}

.billing-method input:checked+.billing-tab-label {
	background: #fff;
	border: 1px solid #E99648;
}

.billing-method input:checked+.billing-tab-label::after {
	transform: rotate(90deg);
}

.billing-method input:checked~.billing-tab-content {
	max-height: 100vh;
	margin-top: 20px;
}

.billing-tab-label::before {
	content: "";
	width: 12px;
	height: 12px;
	position: absolute;
	top: 20px;
	left: 18px;
	background: #fff;
	border-radius: 50%;
	border: 3px solid transparent;
	box-shadow: 0 0 0px 2px #000;
}

.billing-tab-label {
	position: relative;
	padding-left: 40px;
	font-size: 16px;
	color: #000;
}

.billing-method input:checked+.billing-tab-label::before {
	background: #000;
	border-color: #fff;
}

.card-2 {
	left: 22%;
}

.cards {
	position: absolute;
}

.billing-tab-content .pane__edit {
	position: relative;
	left: auto;
	right: 0;
	line-height: inherit;
	padding: 15px 0 0;
	display: block;
	top: auto;
}

@media only screen and (max-width: 1024px) {}

@media only screen and (min-width: 1024px) {
	

}

@media only screen and (min-width: 768px) {

	#bill-btn,
	#pro-btn {
		display: none;
	}

}
</style>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import BaseLayout from '@/layouts/BaseLayout.vue';
import CommunicationPreferences from '@/components/user/profile/communication/CommunicationPreferences.vue';
import UserTeams from '@/components/user/profile/teams/UserTeams.vue';
import AccountRemoval from '@/components/user/profile/account/AccountRemoval.vue';
import AccountDetails from '@/components/user/profile/account/AccountDetails.vue';
import ProfileDetails from '@/components/user/profile/account/ProfileDetails.vue';
import RingerSettings from '@/components/user/profile/account/RingerSettings.vue';
import BillingAddress from '@/components/user/billing/BillingAddress.vue';
import PaymentMethod from '@/components/user/billing/PaymentMethod.vue';
// import ProfileBilling from '@/components/user/ProfileBilling.vue';

export default Vue.extend({
	name: 'Profile Billing',
	components: {
		BaseLayout,
		AccountDetails,
		AccountRemoval,
		CommunicationPreferences,
		ProfileDetails,
		RingerSettings,
		UserTeams,
		BillingAddress,
		PaymentMethod,
		// ProfileBilling,
	},
	data() {
  return {
    showDiv: 1 as number | null,
    isMobile: false,
  };
},
created() {
  // Check if the viewport is mobile on component creation
  this.checkMobile();
},
methods: {
  toggleDiv(divNumber: number): void {
    if (this.showDiv === divNumber) {
      this.showDiv = null;
    } else {
      this.showDiv = divNumber as number | null;
    }
  },
  checkMobile(): void {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    this.isMobile = mediaQuery.matches;
    if (this.isMobile) {
      this.showDiv = null;
    } else if (this.showDiv === null) {
      this.showDiv = 1 as number | null;
    }
  },
},
mounted() {
  // Recheck the viewport on resize
  window.addEventListener('resize', this.checkMobile);
},
beforeDestroy() {
  // Remove the resize event listener when the component is destroyed
  window.removeEventListener('resize', this.checkMobile);
},
computed: {
	...mapGetters([ 'getPlayer']),
    user() {
      	return this.getPlayer;
    },
  activeClass(): string {
		return this.showDiv !== null ? 'active' : '';
		},
	},
});
</script>
