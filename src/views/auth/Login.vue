<template>
	<v-container fluid class="container px-10 py-10">
		<h1>Appetiser Task</h1>
		<h1>Welcome Back!</h1>
		<h3>Below is the form to use for login.</h3>
		<v-form widt>
			<v-text-field
				outlined
				label="Enter your Email / Username"
				color="orange"
				type="text"
			/>
			<v-text-field
				outlined
				label="Enter your Password"
				color="orange"
				type="password"
			/>

			<v-row class="d-flex px-3">
				<v-btn
					@click="$router.push('/register').catch((err) => {})"
					class="mr-1"
					large
					width="30%"
					>Sign up</v-btn
				>
				<v-btn class="ml-1 white--text" color="orange" large width="30%"
					>Login
					<v-icon>mdi-exit-to-app</v-icon>
				</v-btn>
			</v-row>
		</v-form>
	</v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media only screen and(min-width: 768px) {
}
</style>