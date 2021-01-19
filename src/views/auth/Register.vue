<template>
	<v-container fluid class="px-10 py-10">
		<p class="title py-0 my-0">Start for free</p>
		<h1 class="my-2">Create Account</h1>
		<v-form>
			<v-text-field
				filled
				label="Email"
				v-model="email"
				color="orange"
				type="email"
				:rules="[rules.required, rules.email]"
			/>
			<v-text-field
				v-model="fullName"
				filled
				label="Full Name"
				color="orange"
				type="text"
				:rules="[rules.required]"
			/>
			<v-row>
				<v-col>
					<v-text-field
						filled
						label="Password"
						color="orange"
						v-model="password"
						:rules="[rules.required, rules.passwordRule]"
						:type="show ? 'text' : 'password'"
						:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="show = !show"
					/>
				</v-col>
				<v-col>
					<v-text-field
						filled
						v-model="confirmPassword"
						label="Confirm Password"
						color="orange"
						:rules="[rules.required, rules.confirmPasswordRule]"
						:type="showConfPass ? 'text' : 'password'"
						:append-icon="showConfPass ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="showConfPass = !showConfPass"
					/>
				</v-col>
			</v-row>
			<v-row no-gutters>
				<v-btn
					class="white--text"
					block
					rounded
					large
					color="orange"
					@click="register()"
					>Register</v-btn
				>
				<p class="py-3 px-2">
					Already have an account?
					<router-link exact to="/" style="color: orange"
						>Sign in</router-link
					>
				</p>
			</v-row>
		</v-form>

		<v-dialog v-model="showDialog" max-width="600">
			<v-card>
				<v-card-title class="headline grey lighten-3"
					>Read me!</v-card-title
				>
				<v-card-title class="px-2">{{ statusGetter }}</v-card-title>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	data() {
		return {
			showDialog: false,
			showConfPass: false,
			show: false,
			email: null,
			fullName: null,
			password: null,
			confirmPassword: null,
			rules: {
				required: (value) => !!value || "Required.",
				passwordRule: (value) =>
					(value && value.length >= 8) || "minimum 8 characters",
				confirmPasswordRule: (value) =>
					value === this.password ||
					"The password confirmation does not match.",
				email: (value) => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

					return pattern.test(value) || "Invalid e-mail.";
				},
			},
		};
	},
	computed: {
		...mapGetters("appt", ["statusGetter"]),
	},
	methods: {
		...mapActions("appt", ["doRegister"]),
		register() {
			// register
			let formData = new FormData();
			formData.append("email", "asd@gmail.com");
			formData.append("first_name", "asd");
			formData.append("last_name", "asd");
			formData.append("password", "1234567890");
			formData.append("password_confirmation", "1234567890");

			this.doRegister(formData);
			this.showDialog = !this.showDialog;
			// if success then do setTimeout for 3 seconds then router.push
		},
	},
};
</script>

<style>
</style>