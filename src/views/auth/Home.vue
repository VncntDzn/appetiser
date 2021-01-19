<template>
	<v-container fluid>
		<v-row>
			<v-col
				class="d-flex justify-center align-center"
				style="background-color: black; height: 100vh"
				lg="7"
				sm="5"
			>
				<ComputerLogo />
			</v-col>
			<v-col class="d-flex justify-center align-center" lg="5" sm="7">
				<v-card raised shaped width="900">
					<router-view />
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import ComputerLogo from "./svg/ComputerLogo";
export default {
	components: {
		ComputerLogo,
	},
};
</script>

<style>
</style>