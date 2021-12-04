<template>
	<div class="main-container">
		<div id="nav">
			<router-link @click.prevent="test()" to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
			<span>hey : {{pretty}}</span>
		</div>
		<router-view />
		<div class="bottom">
			<span>Version #{{$store.state.appVersion}}</span>
		</div>
	</div>
</template>

<script>
"use strict";

export default {
	components: {

	},
	data() {
		return {
			pretty: "halo"
		};
	},
	mounted() {
		this.prettye = "halo";
	},
	computed: {
		versionValue() { 
			console.log("test");
			console.log(this.$store.state.appVersion);
			return this.$store.state.appVersion; 
		}
	},
	methods: {
		test() {
			console.log("test");
		}
	}
};
</script>

<style lang="scss">
@charset "utf-8";
@import "@/styles/variables";

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
	width: 100%;
}

.main-container {
	height: 100%;
	width: 100%;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

.bottom {
	position:fixed;
	bottom:0;
	left:0;
	width: 100%;
	text-align: right;
	padding-right: 30px;
}

.vue-logo {
	max-width: 10rem;
}
</style>

