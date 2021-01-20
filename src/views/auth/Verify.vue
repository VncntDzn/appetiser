<template>
	<v-container style="height: 100vh; padding-top: 10vh">
		<v-card
			class="d-flex justify-center flex-wrap flex-sm-row flex-sm-column px-6 py-6"
			shaped
			elevation="4"
		>
			<VerificationLogo class="d-flex align-self-center" />

			<v-main
				class="d-flex align-self-center justify-center flex-wrap"
				style="width: 50vw"
			>
				<h1>Email Verification</h1>

				<v-text-field
					label="Enter token"
					autofocus
					v-model="token"
					filled
					color="orange"
				/>
				<p>Didn't receive the token? Resend Token</p>
				<v-card-actions class="d-flex justify-center">
					<v-btn
						class="white--text"
						large
						color="orange"
						elevation="3"
						@click="verify"
						>Verifiy & Proceed</v-btn
					>
				</v-card-actions>
			</v-main>
		</v-card>
		<v-dialog v-model="showDialog" max-width="600">
			<v-card>
				<v-card-title class="headline grey lighten-3"
					>Read me!</v-card-title
				>
				<v-card-title class="px-2"> {{ statusGetter }} </v-card-title>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import VerificationLogo from "../auth/svg/VerificationLogo";

import { mapActions, mapGetters } from "vuex";
export default {
	components: {
		VerificationLogo,
	},
	data() {
		return {
			showDialog: false,
			token: "00000",
		};
	},
	computed: {
		...mapGetters("appt", ["statusGetter", "tokenGetter", "userGetter"]),
	},
	methods: {
		...mapActions("appt", ["doVerification"]),
		verify() {
			const payload = {
				accessToken: this.tokenGetter,
				token: this.token,
			};
			this.showDialog = !this.showDialog;

			this.doVerification(payload);
			setTimeout(() => {
				if (this.statusGetter === "Success!") {
					this.$router.push("/");
					console.log(this.tokenGetter);
				} else {
					return null;
				}
			}, 2000);
			/* ADD TO THE DIALOG THIS EMAIL IS ALREADY BEEN VERIFIED */
		},
	},
};
</script> 