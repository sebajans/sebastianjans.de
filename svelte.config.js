import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	// preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		inlineStyleThreshold: Infinity,
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	prerender: {
		crawl: true,
		enabled: true,
		force: true,
		pages: ['*'],
	},
};

// export default {
//   kit: {
//     adapter: adapter()
//   }
// };
export default config;
