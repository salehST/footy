<template>
	<p>{{ showText }}</p>
</template>
<script>
export default {
	data() {
		return {
			showText: 'Redirecting',
		};
	},
	async created() {
		const first = this.$route.query.fipf;
		const second = this.$route.query.fips;
		const third = this.$route.query.fipt;
		const id = `${first}${second}${third}`;
		const data = await this.$store.dispatch('appInit', {
			firebaseId: id,
			signupMethod: 'password',
		});
		if (data) {
			this.showText = data;
			return;
		}
		console.log('temp commit');
		console.log('first = ', first);
		const path = this.$route.query.rd === 'clubhouse' ? '/clubhouse' : '/profile';
		this.$router.push({ path: path });
	},
};
</script>
