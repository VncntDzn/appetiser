<template>
	<v-container fluid>
		<v-row>
			<div class="moon">
				<Moon />
			</div>
			<v-col
				class="d-flex justify-center align-center"
				style="height: 100vh"
				lg="7"
				sm="5"
			>
				<ComputerLogo />
			</v-col>
			<v-col class="d-flex justify-center align-center" lg="5" sm="7">
				<v-card raised shaped height="500" width="900">
					<router-view />
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import ComputerLogo from "./svg/ComputerLogo";
import Moon from "./svg/Moon";
export default {
	components: {
		ComputerLogo,
		Moon,
	},
};
</script>

<style lang="scss" scoped>
.moon {
	position: absolute;
	right: 4vw;
	top: 5vh;
}
</style>