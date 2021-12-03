"use strict";

module.exports = {
	extends: "stylelint-config-recommended-scss",
	plugins: [
		"stylelint-scss"
	],
	rules: {
		"indentation": "tab",
		"linebreaks": process.platform === "win32" ? "windows" : "unix",
		"string-quotes": "double",
		"declaration-block-trailing-semicolon": "always"
	}
};
