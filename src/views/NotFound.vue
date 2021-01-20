<template>
	<v-container
		fluid
		class="d-flex justify-center flex-wrap flex-sm-row flex-sm-column"
	>
		<h1 class="d-flex align-self-center py-10">Page Not Found</h1>
		<NotFoundIcon class="d-flex align-self-center my-10" />
	</v-container>
</template>

<script>
import NotFoundIcon from "./auth/svg/NotFoundIcon";
export default {
	components: {
		NotFoundIcon,
	},
};
</script>

<style>
</style>