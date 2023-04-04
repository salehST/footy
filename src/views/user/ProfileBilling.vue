<template>
	<BaseLayout :headerPull="'lg'" :pageTitle="$t('global.profile-billing')">
		<template slot="content">
			<nav class="menu">
				<div class="menu__group">
					<h2 class="menu__title text-white">{{ $t('menu.profile') }}</h2>
					<router-link class="menu__link" to="/profile">{{ $t('menu.profile') }}</router-link>
					<router-link class="menu__link" to="/find-fixtures">{{
						$t('menu.find_fixtures')
					}}</router-link>
				</div>
			</nav>
            <div class="tabs">
                <ul>
                    <li v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }" @click="activeTab = index">{{ tab.title }}</li>
                </ul>
                <div class="tab-content">
                    <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
                        {{ tab.content }}
                    </div>
                </div>
            </div>

		</template>
	</BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseLayout from '@/layouts/BaseLayout.vue';

export default Vue.extend({
	name: 'profile-billing',
	components: {
		BaseLayout,
	},  
    data: {
    activeTab: 0,
    tabs: [
      {
        title: 'Tab 1',
        content: 'This is the content for Tab 1.'
      },
      {
        title: 'Tab 2',
        content: 'This is the content for Tab 2.'
      },
      {
        title: 'Tab 3',
        content: 'This is the content for Tab 3.'
      }
    ]
  }
});
</script>
