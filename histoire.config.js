import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	plugins: [HstSvelte()],
	theme: {
		title: 'Histoire',
		logo: {
			square: '/favicons/favicon.png',
			light: '/favicons/favicon.png',
			dark: '/favicons/favicon.png'
		},
		favicon: './static/favicons/favicon.ico',
		colors: {
			primary: 'rgb(98, 160, 234)', // --color-primary-500
			secondary: 'rgb(53, 132, 228)', // --color-secondary-500
			tertiary: 'rgb(28, 113, 216)', // --color-tertiary-500
			success: 'rgb(54, 150, 11)', // --color-success-500
			warning: 'rgb(234, 179, 8)', // --color-warning-500
			error: 'rgb(192, 28, 40)', // --color-error-500
			surface: 'rgb(28, 113, 216)' // --color-surface-500 (Fallback to primary color as surface is transparent)
		}
	}
});
