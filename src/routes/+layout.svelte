<script lang="ts">
  import "../app.css";
  import { beforeUpdate } from 'svelte';
	import NavBar from '../components/NavBar.svelte';
	import { nightMode } from '$lib/stores/nightMode';
	import { mainClass } from '$lib/stores/mainClass';
	import { TolgeeProvider } from '@tolgee/svelte';
	import VanishingHeader from '../components/VanishingHeader.svelte';
	import localeEn from '../i18n/en.json';
	import localeEs from '../i18n/es.json';
	import localeDe from '../i18n/de.json';
	import { onMount } from "svelte";
	import Footer from "../components/Footer.svelte";
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
</script>

{#if initialized}
	<TolgeeProvider config={tolgeeConfig}>
		<VanishingHeader offset={100} tolerance={3} {showHeader} />
		<NavBar {showMenu} />
		<main class="{$mainClass} min-h-screen min-h-screen-ios px-4 relative md:pl-44 mx-auto bg-primary-50 dark:bg-primary-900 transition-colors duration-300">
			<slot />
			<Footer/>
		</main>
	</TolgeeProvider>
{/if}