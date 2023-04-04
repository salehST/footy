<template>
	<BaseLayout>
		<template slot="content">
            
               <h1>Hi.....</h1>
            
		</template>
	</BaseLayout>
</template>
<style scoped>
.tabs ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.tabs ul li {
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ccc;
}

.tabs ul li.active {
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
}

.tab-content {
  margin-top: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
<script lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';
import Vue from 'vue';

export default Vue.extend({	
    name: 'ProfileBilling',
	components: {
		BaseLayout,
	},  
    data: {
    // activeTab: 0,
    // tabs: [
    //   {
    //     title: 'Tab 1',
    //     content: 'This is the content for Tab 1.'
    //   },
    //   {
    //     title: 'Tab 2',
    //     content: 'This is the content for Tab 2.'
    //   },
    //   {
    //     title: 'Tab 3',
    //     content: 'This is the content for Tab 3.'
    //   }
    // ]
  }
});
</script>
