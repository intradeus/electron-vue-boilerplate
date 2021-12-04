<template>
	<div class="home">
		<img alt="Vue logo" height="200" src="../assets/logo.svg" />
		<Counter message="Welcome to Your Electron - Vue 3 Application" />
	</div>
</template>

<script>
import Counter from "@/components/Counter.vue";

export default {
	name: "Home",
	components: {
		Counter,
	}
};
</script>
