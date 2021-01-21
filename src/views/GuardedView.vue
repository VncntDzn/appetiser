<template>
	<div>
		<v-app-bar absolute color="white" elevate-on-scroll>
			<v-toolbar-title>Appetiser Task</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn color="red" class="white--text" @click="logout"
				>Logout</v-btn
			>
		</v-app-bar>

		<v-container
			fluid
			class="d-flex justify-center flex-wrap flex-sm-row flex-sm-column my-10 pa-10"
		>
			<h3 class="d-flex align-self-center">Welcome to Guarded Route!</h3>
			<Welcome class="d-flex align-self-center" />
		</v-container>
	</div>
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