<script lang="ts">
	import '../app.css';
	import { beforeUpdate } from 'svelte';
	import { onMount } from 'svelte';
	// import { TolgeeProvider } from '@tolgee/svelte';
	import { TolgeeProvider, Tolgee, DevTools, FormatSimple } from '@tolgee/svelte';
	import { nightMode } from '$lib/stores/nightMode';
	import { pageTitle } from '$lib/stores/pageTitle';
	import NavBar from '../components/NavBar.svelte';

	import localeEn from '../i18n/en.json';
	import localeEs from '../i18n/es.json';
	import localeDe from '../i18n/de.json';
	import Footer from '../components/Footer.svelte';
	import PageTransitions from '../components/PageTransitions.svelte';
	import { Svrollbar } from 'svrollbar';
	import Blob from '../components/Blob.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data: any;

	let initialized = false;
	let showMenu = false;
	let showHeader = false;

	beforeUpdate(() => ((showMenu = false), (showHeader = false)));

	onMount(() => {
		if (nightMode.userPrefersDark()) {
			nightMode.setDarkMode(true);
		}
		initialized = true;
	});

	let viewport: Element;
	let contents: Element;

	const tolgee = Tolgee()
		.use(DevTools())
		.use(FormatSimple())
		.init({
			language: 'en',

			apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
			apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
			staticData: {
				en: localeEn,
				es: localeEs,
				de: localeDe
			}
		});

	// const tolgeeConfig = {
	// 	preloadFallback: true,
	// 	staticData: {
	// 		en: localeEn,
	// 		es: localeEs,
	// 		de: localeDe
	// 	},
	// 	apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
	// 	apiKey: import.meta.env.VITE_TOLGEE_API_KEY
	// };
</script>

<div id="blob-motion" class="motion-reduce:hidden">
	<Blob />
</div>
{#if initialized}
	<TolgeeProvider {tolgee}>
		<NavBar {showMenu} />
		<main
			bind:this={viewport}
			style="display:grid"
			class=" viewport min-h-[100svh] w-screen min-h-screen-ios pt-24 md:pt-28 relative mx-auto bg-primary-50 dark:bg-primary-900 transition-colors duration-300"
		>
			<h1
				class="z-[3] transition-all py-0 md:py-3 md:top-12 top-5 absolute md:left-44 left-24 duration-300 pl-0 text-3xl md:text-4xl text-left font-sans font-bold"
			>
				{$pageTitle}
			</h1>
			<PageTransitions pathname={data.pathname}>
				<div bind:this={contents} class="my-auto mx-4 md:ml-44 ">
					<slot />
				</div>
			</PageTransitions>
			<Footer />
			<Svrollbar {viewport} {contents} />
		</main>
	</TolgeeProvider>
{/if}
