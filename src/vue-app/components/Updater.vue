<template>
	<div class="update-container">
		<h2>Updater : </h2>
		<h3 v-if="error != ''">{{ error }}</h3>
		<h3 v-if="newVersionURL != ''">New update available. <button @click="openLink()">Click here to download</button> </h3>
		<h3 v-else>There are no updates available</h3>
	</div>
</template>

<script>
"use strict";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { ipcRenderer } from "electron";

export default {
	name: "Updater",
	props: {
		message: String
	},
	setup() {
		var newVersionURL = "ha";
		var error = "";
		const store = useStore();
		
		onMounted(()=>{
			fetch("https://api.github.com/repos/intradeus/electron-vue-boilerplate/releases")
				.then(function(response) {
					return response.json();
				}).then(function(data) {
					console.log(data);
					var currentVersion = store.state.appVersion;
					for(var release of data){
						if(currentVersion != release.name){
							console.log("diff");
							console.log(newVersionURL);
							newVersionURL = release.html_url;
							break;
						}
					} 
				}).catch(function(err) {
					error = err;
				});
		});

		async function openLink(){
			console.log("trying to open web browser ...");
			ipcRenderer.send("open-url-in-default-browser", newVersionURL);
		}

		return { 
			error,
			newVersionURL,
			openLink
		};
	}
};
</script>
<style lang="scss" scoped>

.update-container {
	height: 100px;
	width: 100%;
	background-color: rgb(99, 99, 156);
}

</style>