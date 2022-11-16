module.exports = {
	overrides: [
		{
			files: ['*.astro'],
			plugins: ['astro'],
			env: {
				node: true,
				'astro/astro': true,
				es2020: true,
				browser: true,
			},
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			rules: {
				'astro/no-conflict-set-directives': 'error',
				'astro/no-unused-define-vars-in-style': 'error',
				semi: 0,
				'astro/semi': 0,
				'prettier/prettier': [
					'warn',
					{
						trailingComma: 'all',
						useTabs: true,
						tabWidth: 2,
						semi: false,
						singleQuote: true,
						bracketSpacing: true,
						bracketSameLine: true,
						arrowParens: 'avoid',
						endOfLine: 'auto',
					},
				],
			},
		},
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/no-unused-vars': [
					'error',
					{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
				],
				'@typescript-eslint/no-non-null-assertion': 'off',
			},
		},
		{
			// Define the configuration for `<script>` tag.
			// Script in `<script>` is assigned a virtual file name with the `.js` extension.
			files: ['**/*.astro/*.js', '*.astro/*.js'],
			parser: '@typescript-eslint/parser',
		},
	],
	env: {
		node: true,
		es2022: true,
		browser: true,
	},
	extends: [
		'eslint:recommended',
		'airbnb-base',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'plugin:astro/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-tabs': 'off',
		'no-console': ['warn', { allow: ['warn'] }],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
}
