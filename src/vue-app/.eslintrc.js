"use strict";

module.exports = {
	"root":true,
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/vue3-essential"
	],
	"parser": "vue-eslint-parser",
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module",
		"parser": "@babel/eslint-parser",
		"requireConfigFile": false
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"vue/script-indent": [
			"error",
			"tab"
		],
		"vue/html-indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			process.platform === "win32" ? "windows" : "unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	},
	"overrides": [
		{
			"files": ["*.vue"],
			"rules": {
				"indent": "off"
			}
		}
	]
};
