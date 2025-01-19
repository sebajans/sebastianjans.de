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
		: 'w-10'} group relative flex h-10 flex-row items-center justify-center overflow-hidden rounded-md bg-primary-900/20 font-sans text-primary-50 transition-all duration-300 hover:bg-primary-900 dark:bg-primary-50/20 dark:hover:bg-primary-50"
>
	<!-- {#if !langExpanded} -->

	<button aria-label="Open Language Switcher" class="  " onclick={expandMenu} onfocus={expandMenu}>
		<div
			class="duration-250 px-1 text-lg uppercase text-primary-900 transition-all group-hover:text-primary-500 dark:text-primary-50 dark:hover:text-primary-500"
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
					class="duration-250 w-5 cursor-pointer px-0.5 uppercase transition-all hover:scale-110 hover:!text-primary-500 group-hover:text-primary-200 dark:text-primary-900 dark:hover:text-primary-400 dark:group-hover:text-primary-700"
				>
					{language.lang}
				</div>
			{/if}
		{/each}
	{/if}
</div>
