<!-- @migration-task Error while migrating Svelte code: Identifier 'm' has already been declared
https://svelte.dev/e/js_parse_error -->
<!-- TODO migration-task -->
<script lang="ts">
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

	let activeNumber: number = -1;

	let element: HTMLElement;
	let intersecting: boolean;

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
			on:click={() => (activeNumber = -1)}
			on:keydown={() => (activeNumber = -1)}
			class="absolute inset-0 z-[1] cursor-default bg-transparent"
		></div>
	{/if}
	<section
		bind:this={element}
		aria-label="Logo Design Section"
		id="logodesign"
		class="relative flex flex-col px-4"
	>
		<div
			class="{intersecting ? '' : '-translate-x-1/2 opacity-0'} relative mx-auto
		my-auto flex h-works w-full max-w-4xl flex-col items-center justify-center transition-all duration-500 md:h-worksmd md:flex-row"
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
					on:keydown|stopPropagation
					on:click|stopPropagation
					class="logo-main {activeNumber === -1
						? ''
						: 'pointer-events-none translate-x-20 scale-75 opacity-30 !blur-[2px]'} trans form max-w-3/5 group grid aspect-square max-h-[calc(100vh_-_5.5rem)] w-full grid-cols-3 grid-rows-3 items-center justify-center gap-5 transition-all duration-300"
				>
					{#each $activeLocalLogoItems as logo, i}
						<div
							transition:scale
							class="logo-individual flex items-center justify-center transition-all duration-200"
						>
							<button
								aria-label="Logo Design"
								role="gridcell"
								on:keydown
								on:click={() => (activeNumber = i)}
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
					on:keydown|stopPropagation
					on:click|stopPropagation
					transition:fly|global={{ x: -300, duration: 300 }}
					class="{logoItems[activeNumber]
						? 'translate-x-0'
						: 'translate-x-full'} md:right-2/5 absolute left-0 z-[11] flex h-4/5 max-h-[calc(100vh_-_5.5rem)] w-4/5 cursor-default flex-col items-center justify-between rounded-xl bg-primary-300 p-4 shadow-md shadow-primary-900/30 dark:bg-primary-600 md:w-3/5"
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
						class="group group absolute right-4 top-4 z-20 h-6 w-6 font-sans hover:text-primary-500"
						on:click={() => (activeNumber = -1)}
					>
						<span
							class="duration-250 block h-0.5 w-6 rotate-45 bg-primary-900 transition-all group-hover:rotate-[135deg] group-hover:bg-primary-600 dark:bg-primary-400 dark:group-hover:bg-primary-100"
						></span>
						<span
							class="duration-250 block h-0.5 w-6 -translate-y-0.5 -rotate-45 bg-primary-900 transition-all group-hover:rotate-45 group-hover:bg-primary-600 dark:bg-primary-400 dark:group-hover:bg-primary-100"
						></span>
					</button>
				</div>
			{/if}
		</div>
	</section>
</IntersectionObserver>

<style>
	.logo-main:hover .logo-individual {
		@apply scale-90 opacity-60 blur-[2px];
	}
	.logo-main .logo-individual:hover {
		@apply scale-100 opacity-100 blur-0;
	}
</style>
