/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'footer-link': '#fff0d8',
				'footer-link-hover': '#dd9933',
			},
		},
	},
	plugins: [],
}
