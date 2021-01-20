<template>
	<v-container
		fluid
		class="d-flex justify-center flex-wrap flex-sm-row flex-sm-column px-6 py-6"
	>
		<h2 class="d-flex align-self-center">Welcome to Guarded Route!</h2>
		<Welcome class="d-flex align-self-center" />
	</v-container>
</template>

<script>
import Welcome from "./auth/svg/Welcome";
export default {
	components: {
		Welcome,
	},
};
</script>

<style>
</style>