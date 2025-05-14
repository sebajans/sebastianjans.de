<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { T } from '@tolgee/svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	import { logoItems } from '$lib/lists/logoItems';
	import { settingsState } from '$lib/stores/settingsState';
	import { writable } from 'svelte/store';
	import { fly, scale } from 'svelte/transition';

	let activeId: number = -1;
	let element: HTMLElement | undefined;
	let intersecting: boolean = false;

	const localLogoItems = writable(logoItems.slice(0, 9));
	const discardedLogoItems = writable(logoItems.slice(9));

	let interval: number | undefined;

	onMount(() => {
		interval = setInterval(() => {
			if (activeId !== -1) return;

			localLogoItems.update((activeItems) => {
				if (activeItems.length < 9) return activeItems;

				const newActiveItems = [...activeItems];
				let newDiscardedItems = [];

				discardedLogoItems.update((discardedItems) => {
					newDiscardedItems = [...discardedItems];

					const randomActiveIndex = Math.floor(Math.random() * newActiveItems.length);
					const randomDiscardedIndex = Math.floor(Math.random() * newDiscardedItems.length);

					const [movedItem] = newDiscardedItems.splice(
						randomDiscardedIndex,
						1,
						newActiveItems[randomActiveIndex]
					);
					newActiveItems[randomActiveIndex] = movedItem;

					return newDiscardedItems;
				});

				return newActiveItems;
			});
		}, 3000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<IntersectionObserver once threshold={0.5} {element} bind:intersecting>
	{#if activeId !== -1}
		<button
			onclick={() => (activeId = -1)}
			class="absolute inset-0 z-1 cursor-default bg-transparent"
		>
			<span class="sr-only">
				<T keyName="close" defaultValue="Close" />
			</span>
		</button>
	{/if}
	<section
		bind:this={element}
		aria-label="Logo Design Section"
		id="logodesign"
		class="relative flex flex-col px-4"
	>
		<div
			class="{intersecting ? '' : '-translate-x-1/2 opacity-0'} h-works md:h-worksmd
		relative mx-auto my-auto flex w-full max-w-4xl flex-col items-center justify-center transition-all duration-500 md:flex-row"
		>
			<p class="my-4 box-content max-w-4xl px-3 text-left sm:w-2/5">
				<T
					keyName="logo-design-paragraph"
					defaultValue="These logotypes show some of my previous logo design works. Click on them to check out a little bit more about the project."
				/>
			</p>
			<div
				class="{intersecting
					? ''
					: 'translate-x-1/4 scale-75 opacity-0'} w-full transition-all delay-500 duration-500"
			>
				<div
					id="logos"
					role="grid"
					tabindex="0"
					class="logo-main {activeId === -1
						? ''
						: 'pointer-events-none translate-x-20 scale-75 opacity-30 blur-[2px]!'} mx-auto trans form group grid aspect-square max-h-[calc(100vh_-_5.5rem)] w-full max-w-3/5 grid-cols-3 grid-rows-3 items-center justify-center gap-5 transition-all duration-300"
				>
					{#each $localLogoItems as logo (logo.id)}
						<div
							in:scale|global={{ duration: 300 }}
							class="logo-individual flex items-center justify-center transition-all duration-200"
						>
							<button
								aria-label="Logo Design"
								role="gridcell"
								onclick={() => (activeId = logo.id)}
								style:background-image={$settingsState.darkMode
									? `url('${logo.imageDark ? logo.imageDark : logo.image}')`
									: `url('${logo.image}')`}
								class="aspect-square w-full rounded-lg overflow-clip max-w-[120px] bg-contain bg-center bg-no-repeat bg-origin-content p-2 transition-all duration-200 md:max-w-[160px]"
							></button>
						</div>
					{/each}
				</div>
			</div>

			{#if $localLogoItems.find((logo) => logo.id === activeId)}
				<div
					transition:fly|global={{ x: -300, duration: 300 }}
					class="bg-primary-300 shadow-primary-900/30 dark:bg-primary-600 absolute left-0 z-11 flex h-4/5 max-h-[calc(100vh_-_5.5rem)] w-4/5 cursor-default flex-col items-center justify-between rounded-xl p-4 shadow-md md:right-2/5 md:w-3/5"
				>
					<div
						style:background-image={$settingsState.darkMode
							? `url('${$localLogoItems.find((logo) => logo.id === activeId)?.imageDark ? $localLogoItems.find((logo) => logo.id === activeId)?.imageDark : $localLogoItems.find((logo) => logo.id === activeId)?.image}')`
							: `url('${$localLogoItems.find((logo) => logo.id === activeId)?.image}')`}
						class="my-auto aspect-square w-full h-1/2 bg-contain bg-center bg-no-repeat bg-origin-content p-2 transition-all duration-200 md:p-4"
					></div>
					<div class="pb-4">
						<h2 class="pb-2 text-center font-sans text-3xl">
							<T
								keyName="logo-design-{$localLogoItems.find((logo) => logo.id === activeId)?.title}"
								defaultValue={$localLogoItems.find((logo) => logo.id === activeId)?.title}
							/>
						</h2>
						<p class="text-center">
							<T
								keyName="logo-design-{$localLogoItems.find((logo) => logo.id === activeId)
									?.title}-text"
								defaultValue={$localLogoItems.find((logo) => logo.id === activeId)?.text}
							/>
						</p>
					</div>

					<button
						aria-label="Close"
						class="group group hover:text-primary-500 absolute top-4 right-4 z-20 h-6 w-6 font-sans"
						onclick={() => (activeId = -1)}
					>
						<span
							class="bg-primary-900 group-hover:bg-primary-600 dark:bg-primary-400 dark:group-hover:bg-primary-100 block h-0.5 w-6 rotate-45 transition-all duration-250 group-hover:rotate-[135deg]"
						></span>
						<span
							class="bg-primary-900 group-hover:bg-primary-600 dark:bg-primary-400 dark:group-hover:bg-primary-100 block h-0.5 w-6 -translate-y-0.5 -rotate-45 transition-all duration-250 group-hover:rotate-45"
						></span>
					</button>
				</div>
			{/if}
		</div>
	</section>
</IntersectionObserver>

<style>
	@reference "tailwindcss"

	.logo-main:hover .logo-individual {
		@apply scale-90 opacity-60 blur-[2px];
	}
	.logo-main .logo-individual:hover {
		@apply scale-100 opacity-100 blur-none;
	}
</style>
