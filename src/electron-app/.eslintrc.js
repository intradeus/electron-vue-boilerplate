"use strict";

module.exports = {
	"root":true,
	"env": {
		"commonjs": true,
		"es2021": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"PRODUCTION_BUILD": "readonly"
	},
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"ecmaVersion": 12,
		"requireConfigFile": false
	},
	"rules": {
		"indent": [
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
	}
};
