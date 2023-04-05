<template>
    <BaseLayout :headerPull="'lg'" :pageTitle="$t('global.billing')">
        <template slot="content">
            
            <ProfileBilling />
            <BillingAddress />
            <PaymentMethod />
        </template>
    </BaseLayout>

</template>
<script type="ts">
/* eslint-disable */
import Vue from 'vue';
import BaseLayout from '@/layouts/BaseLayout.vue';
import ProfileBilling from '@/components/user/ProfileBilling.vue';
import BillingAddress from '@/components/user/billing/BillingAddress.vue';
import PaymentMethod from '@/components/user/billing/PaymentMethod.vue';
export default Vue.extend({
    name: 'Billing',
    components:{
        BaseLayout,
		ProfileBilling,
        BillingAddress,
        PaymentMethod,
    }
})
</script>