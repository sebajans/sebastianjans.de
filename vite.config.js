import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	ssr: {
    noExternal: ['three', 'troika-three-text'],
  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
