<template>
	<div class="home">
		<img alt="Vue logo" height="200" src="../assets/logo.svg" />
		<HelloWorld message="Welcome to Your Electron/Vue.js App" />
	</div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "Home",
	components: {
		HelloWorld,
	},
	mounted(){
		console.log("test");
	}
};
</script>
