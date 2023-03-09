import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapter(),
		inlineStyleThreshold: Infinity,
		output: {
			dir: 'build'
		},
		target: '#svelte',
	},

	prerender: {
		crawl: true,
		enabled: true,
		force: true,
		pages: ['*'],
	},
};

export default config;
