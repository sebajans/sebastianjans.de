<script lang="ts">
	import '../app.css';
	import { settingsState } from '$lib/stores/settingsState';
	import 'iconify-icon';

	import localeEn from '../i18n/en.json';
	import localeEs from '../i18n/es.json';
	import localeDe from '../i18n/de.json';
	import {
		TolgeeProvider,
		Tolgee,
		DevTools,
		FormatSimple,
		LanguageStorage,
		LanguageDetector
	} from '@tolgee/svelte';
	import { onMount } from 'svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const tolgee = Tolgee()
		.use(DevTools())
		.use(FormatSimple())
		.use(LanguageStorage())
		.use(LanguageDetector())
		.init({
			// language: 'en',
			defaultLanguage: 'en',
			availableLanguages: ['en', 'es', 'de'],
			apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
			apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
			staticData: {
				en: localeEn,
				es: localeEs,
				de: localeDe
			}
		});

	// let initialized = false;

	// $: console.log(initialized);

	// onMount(() => {
	// 	initialized = true;
	// })
</script>

<div
	class="relative min-h-screen bg-primary-50 font-serif text-primary-900 antialiased min-h-screen-ios dark:bg-primary-900 dark:text-primary-50 {$settingsState.darkMode
		? 'dark'
		: 'light'}"
	style="display: contents; overflow:hidden;"
>
	<!-- {#if initialized} -->
	<TolgeeProvider {tolgee}>
		{@render children?.()}
	</TolgeeProvider>
	<!-- {/if} -->
</div>
