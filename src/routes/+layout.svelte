<script lang="ts">
  import "../app.css";
  import { beforeUpdate } from 'svelte';
	import { onMount } from "svelte";
	import NavBar from '../components/NavBar.svelte';
	import { TolgeeProvider } from '@tolgee/svelte';
	import { nightMode } from '$lib/stores/nightMode';
	import { mainClass } from '$lib/stores/mainClass';
	import { pageTitle } from "$lib/stores/pageTitle";
	import localeEn from '../i18n/en.json';
	import localeEs from '../i18n/es.json';
	import localeDe from '../i18n/de.json';
	import Footer from "../components/Footer.svelte";
	import PageTransitions from "../components/PageTransitions.svelte";
	/** @type {import('./$types').LayoutData} */
	export let data:any;

	let initialized = false;
	let showMenu = false;
	let showHeader = false;

	beforeUpdate(() => (showMenu = false));
	beforeUpdate(() => (showHeader = false));
	
	onMount(() => {
		if (nightMode.userPrefersDark()) {
			nightMode.setDarkMode(true);
		}
		initialized = true;
	});
	

	const tolgeeConfig = {
		preloadFallback: true,
		staticData: {
			en: localeEn,
			es: localeEs,
			de: localeDe
		},
		apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
		apiKey: import.meta.env.VITE_TOLGEE_API_KEY
	};

	// scrollbar
	let timer:any;

  function handleScroll(e:any) {
    let el = e.target;
    el.classList.add("scroll");
    clearTimeout(timer);
    timer = setTimeout(() => {
      el.classList.remove("scroll");
    }, 100);
  }
</script>

{#if initialized}
	<TolgeeProvider config={tolgeeConfig}>
		<NavBar {showMenu} />
		<main on:scroll={handleScroll} style="display:grid"
		class="inner min-h-screen min-h-screen-ios pt-24 md:pt-28 relative mx-auto bg-primary-50 dark:bg-primary-900 transition-colors duration-300">
			<h1
			class="transition-all py-0 md:py-3 md:top-6 top-5 absolute md:left-44 left-24 duration-300 pl-0 text-3xl md:text-4xl text-left font-sans font-bold"
			>
			{$pageTitle}
			</h1>
			<PageTransitions pathname={data.pathname}>
				<div class="{$mainClass} mx-4 md:ml-44 ">
					<slot />
				</div>
			</PageTransitions>
			<Footer/>
		</main>

	</TolgeeProvider>
{/if}

<style>
  /* .inner {
    overflow-x: hidden;
		overflow-y: overlay;
    width: 100vw;
  } */
  .scroll {
    overflow-y: auto;
  }
</style>