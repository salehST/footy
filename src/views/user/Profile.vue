<template>
	<BaseLayout :headerPull="'lg'" :pageTitle="$t('global.profile')">
		<template slot="content">
			<ProfileDetails />
			<RingerSettings />
			<UserTeams />
			<AccountDetails />
			<CommunicationPreferences />
			<AccountRemoval />
		</template>
	</BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseLayout from '@/layouts/BaseLayout.vue';
import CommunicationPreferences from '@/components/user/profile/communication/CommunicationPreferences.vue';
import UserTeams from '@/components/user/profile/teams/UserTeams.vue';
import AccountRemoval from '@/components/user/profile/account/AccountRemoval.vue';
import AccountDetails from '@/components/user/profile/account/AccountDetails.vue';
import ProfileDetails from '@/components/user/profile/account/ProfileDetails.vue';
import RingerSettings from '@/components/user/profile/account/RingerSettings.vue';

export default Vue.extend({
	name: 'Profile',
	components: {
		BaseLayout,
		AccountDetails,
		AccountRemoval,
		CommunicationPreferences,
		ProfileDetails,
		RingerSettings,
		UserTeams,
	},
});
</script>
