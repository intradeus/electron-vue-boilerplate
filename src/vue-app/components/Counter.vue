<template>
	<h1>{{ message }}</h1>
	<button class="btn btn-primary" role="button" @click.prevent="addCount()">count is: {{ count }}</button>
	<p>Edit <code>components/Counter.vue</code> to test hot module replacement.</p>
	<p>Bootstrap css/js library implemented</p>
</template>

<script>
"use strict";
import { ref } from "vue";

export default {
	name: "Counter",
	props: {
		message: String
	},
	setup() {
		const count = ref(0);
		function addCount(){
			this.count++;
		}

		return { 
			count,
			addCount
		};
	}
};
</script>
<style lang="scss" scoped>
h1 {
	margin-bottom: 30px;
}

button {
	margin-bottom: 50px;
}
</style>