<!-- @migration-task Error while migrating Svelte code: Identifier 'm' has already been declared
https://svelte.dev/e/js_parse_error -->
<!-- TODO migration-task -->
<script lang="ts">
	import { createBubbler, stopPropagation } from 'svelte/legacy';

	const bubble = createBubbler();
	import { onMount } from 'svelte';
	import { T } from '@tolgee/svelte'; // change import statement
	import IntersectionObserver from 'svelte-intersection-observer';

	import { logoItems } from '$lib/lists/logoItems';
	import { settingsState } from '$lib/stores/settingsState';
	import { fly, scale } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import { tick } from 'svelte';

	type M = { x: number; y: number };
	let m: M = { x: 0, y: 0 };
	let n = { x: 0, y: 0 };
	() => (n = getDivPosition());

	let offset = { x: 0, y: 0 };
	// function handleMousemove(event: any) {
	// 	m.x = event.clientX;
	// 	m.y = event.clientY;
	// 	n = getDivPosition();
	// 	offset.x = Math.round(n.x - m.x);
	// 	offset.y = Math.round(n.y - m.y);
	// }
	function getDivPosition() {
		let div: any = document.getElementById('logos');
		let rect = div.getBoundingClientRect();

		type n = { x: number; y: number };
		let n = {
			x: rect.x + rect.width / 2,
			y: rect.y + rect.height / 2
		};
		return n;
	}

	onMount(() => {
		let n = getDivPosition();
		return n;
	});

	let activeNumber: number = $state(-1);

	let element: HTMLElement = $state();
	let intersecting: boolean = $state();

	let localLogoItems = writable(logoItems.slice(0, 9));

	let activeLocalLogoItems = writable(logoItems.slice(0, 9));
	let discardedLogoItems = writable(logoItems.slice(9));

	function updateLocalLogoItems() {
		setInterval(() => {
			activeLocalLogoItems.update((activeItems) => {
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
			tick();
		}, 3000);
	}

	onMount(() => {
		updateLocalLogoItems();
	});
</script>

<IntersectionObserver once threshold={0.5} {element} bind:intersecting>
	{#if activeNumber !== -1}
		<div
			role="button"
			tabindex="0"
			onclick={() => (activeNumber = -1)}
			onkeydown={() => (activeNumber = -1)}
			class="absolute inset-0 z-1 cursor-default bg-transparent"
		></div>
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
				<!-- style:transform={`translate3d(calc(0.05*${offset.x}px), calc(0.05*${offset.y}px), 0)`} -->
				<div
					id="logos"
					role="grid"
					tabindex="0"
					onkeydown={stopPropagation(bubble('keydown'))}
					onclick={stopPropagation(bubble('click'))}
					class="logo-main {activeNumber === -1
						? ''
						: 'pointer-events-none translate-x-20 scale-75 opacity-30 blur-[2px]!'} trans form group grid aspect-square max-h-[calc(100vh_-_5.5rem)] w-full max-w-3/5 grid-cols-3 grid-rows-3 items-center justify-center gap-5 transition-all duration-300"
				>
					{#each $activeLocalLogoItems as logo, i}
						<div
							transition:scale
							class="logo-individual flex items-center justify-center transition-all duration-200"
						>
							<button
								aria-label="Logo Design"
								role="gridcell"
								onkeydown={bubble('keydown')}
								onclick={() => (activeNumber = i)}
								style:background-image={$settingsState.darkMode
									? `url('${logo.imageDark}')`
									: `url('${logo.image}')`}
								class="aspect-square w-full max-w-[120px] bg-contain bg-center bg-no-repeat bg-origin-content p-2 transition-all duration-200 md:max-w-[160px]"
							></button>
						</div>
					{/each}
				</div>
			</div>

			{#if $activeLocalLogoItems[activeNumber]}
				<div
					role="button"
					tabindex="0"
					onkeydown={stopPropagation(bubble('keydown'))}
					onclick={stopPropagation(bubble('click'))}
					transition:fly|global={{ x: -300, duration: 300 }}
					class="{logoItems[activeNumber]
						? 'translate-x-0'
						: 'translate-x-full'} bg-primary-300 shadow-primary-900/30 dark:bg-primary-600 absolute left-0 z-11 flex h-4/5 max-h-[calc(100vh_-_5.5rem)] w-4/5 cursor-default flex-col items-center justify-between rounded-xl p-4 shadow-md md:right-2/5 md:w-3/5"
				>
					<div
						style:background-image={$settingsState.darkMode
							? `url('${logoItems[activeNumber].imageDark}')`
							: `url('${logoItems[activeNumber].image}')`}
						class=" my-auto aspect-square h-1/2 bg-contain bg-center bg-no-repeat bg-origin-content p-2 transition-all duration-200 md:p-4"
					></div>
					<div class="pb-4">
						<h2 class="pb-2 text-center font-sans text-3xl">
							<T
								keyName="logo-design-{logoItems[activeNumber].title}"
								defaultValue={logoItems[activeNumber].title}
							/>
							<!-- {logoItems[activeNumber].title} -->
						</h2>
						<p class="text-center">
							<T
								keyName="logo-design-{logoItems[activeNumber].title}-text"
								defaultValue={logoItems[activeNumber].text}
							/>
							<!-- {logoItems[activeNumber].text} -->
						</p>
					</div>

					<button
						aria-label="Close"
						class="group group hover:text-primary-500 absolute top-4 right-4 z-20 h-6 w-6 font-sans"
						onclick={() => (activeNumber = -1)}
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
