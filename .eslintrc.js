/*!
 * Zodit Editor (https://techzolab.net/zodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2021-2022 Nazrul Islam Nadeem. All rights reserved. https://techzolab.net
 */

module.exports = {
	root: true,
	parser: '@babel/eslint-parser',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended'
	],
	rules: {
		'prettier/prettier': ['off', { singleQuote: true }],
	},
	env: {
		browser: true,
		node: true
	}
};
