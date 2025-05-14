<script lang="ts">
	import { getTolgee } from '@tolgee/svelte';
	import { onMount } from 'svelte';

	const tolgee = getTolgee(['language']);

	let availableLangs = [
		{ lang: 'de', fullLanguage: 'Deutsch' },
		{ lang: 'en', fullLanguage: 'English' },
		{ lang: 'es', fullLanguage: 'Español' }
	];

	interface Props {
		langExpanded?: boolean;
	}

	let { langExpanded = $bindable(false) }: Props = $props();

	onMount(() => {
		langExpanded = false;
	});

	function expandMenu() {
		langExpanded = !langExpanded;
	}
</script>

<div
	class="{langExpanded
		? 'w-[5.5rem]'
		: 'w-10'} group bg-primary-900/20 text-primary-50 hover:bg-primary-900 dark:bg-primary-50/20 dark:hover:bg-primary-50 relative flex h-10 flex-row items-center justify-center overflow-hidden rounded-md font-sans transition-all duration-300"
>
	<!-- {#if !langExpanded} -->

	<button aria-label="Open Language Switcher" class="  " onclick={expandMenu} onfocus={expandMenu}>
		<div
			class="text-primary-900 group-hover:text-primary-500 dark:text-primary-50 dark:hover:text-primary-500 px-1 text-lg uppercase transition-all duration-250"
		>
			{$tolgee.getLanguage()}
		</div>
	</button>
	<!-- {:else} -->
	{#if langExpanded}
		{#each availableLangs as language}
			{#if language.lang != $tolgee.getLanguage()}
				<span class="dark:text-primary-900"> / </span>
				<div
					role="button"
					tabindex="0"
					aria-label="Open Language Switcher (Currently selected language: {$tolgee.getLanguage()})"
					onclick={() => {
						$tolgee.changeLanguage(language.lang);
					}}
					onkeypress={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							$tolgee.changeLanguage(language.lang);
						}
					}}
					class="hover:text-primary-500! group-hover:text-primary-200 dark:text-primary-900 dark:hover:text-primary-400 dark:group-hover:text-primary-700 w-5 cursor-pointer px-0.5 uppercase transition-all duration-250 hover:scale-110"
				>
					{language.lang}
				</div>
			{/if}
		{/each}
	{/if}
</div>
