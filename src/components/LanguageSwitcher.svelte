<script lang="ts">
	import { getLanguageStore } from '@tolgee/svelte';
	import { onMount } from 'svelte';
	const languageStore = getLanguageStore();
	let availableLangs = [{ lang: 'de' }, { lang: 'en' }, { lang: 'es' }];

	export let langExpanded = false;

	onMount(() => (langExpanded = false));

	function expandMenu() {
		langExpanded = !langExpanded;
	}
	console.log($languageStore)
</script>

<!-- <select bind:value={$languageStore} class="lang-selector">
	<option value="en">🇬🇧 English</option>
	<option value="de">🇩🇪 Deutsch</option>
</select> -->

<button
	class="{langExpanded
		? 'w-24'
		: 'w-10'} group overflow-hidden duration-300 transition-all items-center justify-center h-10 font-sans flex flex-row relative rounded-md text-primary-50 bg-primary-900 dark:bg-primary-50"
	on:mouseenter={expandMenu}
	on:focus={expandMenu}
	on:mouseleave={expandMenu}
>

<div
		class="px-1 transition-all uppercase duration-250 text-lg hover:text-primary-500 dark:hover:text-primary-500 dark:text-primary-700"
	>
		{$languageStore}
	</div>
	{#if langExpanded}
		{#each availableLangs as language}
			{#if language.lang != $languageStore}
				<span class="dark:text-primary-900 "> / </span>
				<div
					on:click={() => ($languageStore = language.lang)} on:keydown
					class="px-1 transition-all uppercase duration-250 group-hover:text-primary-200 hover:!text-primary-500 dark:hover:text-primary-500  dark:text-primary-900"
				>
					{language.lang}
				</div>
			{/if}
		{/each}
	{/if}
</button>
