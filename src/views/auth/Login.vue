<template>
	<v-container fluid class="container px-10 py-10">
		<h1 class="my-5 py-0">Appetiser Task</h1>

		<v-form widt>
			<v-text-field
				outlined
				label="Enter your Email / Username"
				color="orange"
				type="text"
				v-model="email"
			/>
			<v-text-field
				outlined
				label="Enter your Password"
				color="orange"
				:type="show ? 'text' : 'password'"
				:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
				@click:append="show = !show"
				v-model="password"
			/>

			<v-row class="d-flex px-3">
				<v-btn
					@click="$router.push('/register').catch((err) => {})"
					class="mr-1"
					large
					width="30%"
					>Sign up</v-btn
				>
				<v-btn
					class="ml-1 white--text"
					color="orange"
					large
					width="30%"
					@click="login"
					>Login
					<v-icon>mdi-exit-to-app</v-icon>
				</v-btn>
			</v-row>
		</v-form>
		<v-dialog v-model="showDialog" max-width="600">
			<v-card>
				<v-card-title class="headline grey lighten-3"
					>Read me!</v-card-title
				>
				<v-card-title class="px-2">{{ statusGetter }} </v-card-title>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	data() {
		return {
			show: false,
			showDialog: false,
			email: null,
			password: null,
		};
	},
	computed: {
		...mapGetters("appt", ["statusGetter", "tokenGetter"]),
	},
	methods: {
		...mapActions("appt", ["doLogin"]),
		login() {
			const payload = {
				username: this.email,
				password: this.password,
			};
			this.doLogin(payload);
			this.showDialog = !this.showDialog;
			setTimeout(() => {
				if (this.statusGetter === "Success!") {
					this.$router.push("/guarded-route");
				} else {
					console.log("Failed to login");
				}
			}, 2000);
		},
	},
};
</script>

<style lang="scss" scoped>
@media only screen and(min-width: 768px) {
}
</style>