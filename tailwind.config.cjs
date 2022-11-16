/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'north-blue': '#001c47',
				'footer-link': '#fff0d8',
				'footer-link-hover': '#dd9933',
				'footer-btn-hover': '#fff8ec',
			},
		},
	},
	plugins: [],
}
