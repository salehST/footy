<template>
	<div class="pane">
		<h2 class="pane__title">{{ $t('profile.communication_preferences_title') }}</h2>
		<div class="pane__body">
			<div>
				<input class="sr-only" id="communication_preferences_email" type="checkbox" />
				<label for="communication_preferences_email">{{
					$t('profile.communication_preferences_email')
				}}</label>
			</div>
			<div class="mt-16">
				<input class="sr-only" id="communication_preferences_marketing" type="checkbox" />
				<label for="communication_preferences_marketing">{{
					$t('profile.communication_preferences_marketing')
				}}</label>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
