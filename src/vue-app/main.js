"use strict";

import { createApp } from "vue";
import App from "@/App.vue";
import "@/index.scss";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);
app.use(router);
app.use(store);
app.provide("ipcRenderer", window.require("electron").ipcRenderer);
app.mount("#app");

// Receive data sent from Electron through ipcRenderer
// See electron-app/main.js to see how app-version is sent
window.require("electron").ipcRenderer.on("app-version", (event, args) => {
	store.state.appVersion = args;
});