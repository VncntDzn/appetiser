<template>
	<v-container
		fluid
		class="d-flex justify-center flex-wrap flex-sm-row flex-sm-column px-6 py-6"
	>
		<v-btn color="red" class="white--text" @click="logout">Logout</v-btn>
		<h2 class="d-flex align-self-center">Welcome to Guarded Route!</h2>
		<Welcome class="d-flex align-self-center" />
	</v-container>
</template>

<script>
import { mapActions } from "vuex";
import Welcome from "./auth/svg/Welcome";
export default {
	components: {
		Welcome,
	},
	methods: {
		...mapActions("appt", ["doLogout"]),
		logout() {
			this.doLogout().then(() => {
				this.$router.push("/");
			});
		},
	},
};
</script>

<style>
</style>