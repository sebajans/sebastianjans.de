import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(),
	tailwindcss(),
	],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
};

export default config;
