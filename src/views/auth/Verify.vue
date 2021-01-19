<template>
	<v-container fluid>
		<v-text-field outlined color="orange" v-model="token" />
		<v-btn @click="verify">Verify</v-btn>
	</v-container>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			token: null,
		};
	},

	methods: {
		verify() {
			axios.post(
				"https://api.baseplate.appetiserdev.tech/api/v1/auth/verification/verify",
				{
					token: this.token,
					via: "email",
				}
			);
		},
	},
};
</script>

<style>
</style>