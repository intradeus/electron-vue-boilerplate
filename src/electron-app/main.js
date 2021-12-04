"use strict";

// Modules to control application life and create native browser window.
const { app, BrowserWindow, ipcMain, shell } = require("electron");
import installExtension, {VUEJS3_DEVTOOLS} from "electron-devtools-installer";
const { resolve } = require("path");

const createWindow = async () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1200,
		height: 840,
		icon: resolve(__dirname, "./assets/icon.png"),
		webPreferences: {
			contextIsolation: false,
			nodeIntegration: true
		}
	});

	// Remove menu from browser window.
	//mainWindow.setMenu(null);

	console.log("Running app version : ", app.getVersion());
	// Load the index.html of the app.

	mainWindow.webContents.on("dom-ready", () => {
		console.log(`Trying to send app version to renderer: ${app.getVersion()}`);
		mainWindow.webContents.send("app-version", app.getVersion());
	});

	mainWindow.loadURL(!PRODUCTION_BUILD ? " http://localhost:8080/index.html" : ("file://" + resolve(__dirname, "../vue-app/index.html")));

	// Open the DevTools.
	if(!PRODUCTION_BUILD) {
		try {
			await installExtension(VUEJS3_DEVTOOLS, {
				loadExtensionOptions: {
					allowFileAccess: true,
				},
			});
		} catch (e) {
			console.error("Vue Devtools failed to install:", e.toString());
		}
		mainWindow.webContents.openDevTools();
	}
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
	await createWindow();
});

// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
app.on("activate", () => BrowserWindow.getAllWindows().length === 0 && createWindow());

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => process.platform !== "darwin" && app.quit());


ipcMain.on("open-url-default-browser", (event, content) =>{
	console.log("URL received. Opening web browser to ", content);
	shell.openExternal(content);
});