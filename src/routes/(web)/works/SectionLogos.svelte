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
  let intersecting:boolean;


	let localLogoItems = writable(logoItems.slice(0, 9));

	let activeLocalLogoItems = writable(logoItems.slice(0, 9));
	let discardedLogoItems = writable(logoItems.slice(9));

	function updateLocalLogoItems() {
		setInterval(() => {
			activeLocalLogoItems.update(activeItems => {
				if (activeItems.length < 9) return activeItems;

				const newActiveItems = [...activeItems];
				let newDiscardedItems = [];

				discardedLogoItems.update(discardedItems => {
					newDiscardedItems = [...discardedItems];

					const randomActiveIndex = Math.floor(Math.random() * newActiveItems.length);
					const randomDiscardedIndex = Math.floor(Math.random() * newDiscardedItems.length);

					const [movedItem] = newDiscardedItems.splice(randomDiscardedIndex, 1, newActiveItems[randomActiveIndex]);
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

<IntersectionObserver once threshold={0.5} element={element} bind:intersecting={intersecting}
>	
{#if activeNumber !== -1}
<div 
role="button"
tabindex="0"
on:click={() => (activeNumber = -1)}
on:keydown={() => (activeNumber = -1)}
class="absolute inset-0 z-[1] bg-transparent cursor-default">
</div>
{/if}
<section bind:this={element}
	aria-label="Logo Design Section"
	id="logodesign"
	class="flex flex-col px-4 relative "
	>
	<div 
		class="{intersecting ? '' : '-translate-x-1/2 opacity-0' } transition-all duration-500
		relative my-auto mx-auto h-works md:h-worksmd max-w-4xl w-full  flex flex-col md:flex-row items-center justify-center"
	>
		<p class="max-w-4xl box-content my-4 px-3 text-left sm:w-2/5">
			<T
				keyName="logo-design-paragraph"
				defaultValue="These logotypes show some of my previous logo design works. Click on them to check out a little bit more about the project."
			/>
		</p>
		<div 
			class="{intersecting ? '' : 'scale-75 translate-x-1/4 opacity-0' } transition-all duration-500 delay-500 w-full"
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
					: 'scale-75 translate-x-20 opacity-30 !blur-[2px] pointer-events-none'} trans form max-h-[calc(100vh_-_5.5rem)] aspect-square group w-full max-w-3/5 gap-5 grid grid-rows-3 grid-cols-3 justify-center items-center transition-all duration-300"
			>
				{#each $activeLocalLogoItems as logo, i }
					<div transition:scale class="logo-individual flex justify-center items-center transition-all duration-200">
						<button
						aria-label="Logo Design"
						role="gridcell"
							on:keydown
							on:click={() => (activeNumber = i)}
							style:background-image={$settingsState.darkMode
								? `url('${logo.imageDark}')`
								: `url('${logo.image}')`}
							class="bg-contain bg-no-repeat bg-center bg-origin-content w-full max-w-[120px] md:max-w-[160px] aspect-square p-2 duration-200 transition-all"
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
					: 'translate-x-full'} z-[11] cursor-default max-h-[calc(100vh_-_5.5rem)] rounded-xl shadow-primary-900/30 shadow-md bg-primary-300 dark:bg-primary-600 absolute flex flex-col w-4/5 md:w-3/5  h-4/5 p-4 items-center justify-between left-0 md:right-2/5"
			>
				<div
					style:background-image={$settingsState.darkMode
						? `url('${logoItems[activeNumber].imageDark}')`
						: `url('${logoItems[activeNumber].image}')`}
					class=" bg-contain bg-no-repeat bg-center bg-origin-content h-1/2 aspect-square p-2 md:p-4 duration-200 transition-all my-auto"
					></div>
				<div class="pb-4">
					<h2 class="font-sans text-3xl text-center pb-2">
						<T
				keyName="logo-design-{logoItems[activeNumber].title}"
				defaultValue="{logoItems[activeNumber].title}"
			/>
						<!-- {logoItems[activeNumber].title} -->
					</h2>
					<p class="text-center">
						<T
				keyName="logo-design-{logoItems[activeNumber].title}-text"
				defaultValue="{logoItems[activeNumber].text}"
			/>
						<!-- {logoItems[activeNumber].text} -->
					</p>
				</div>

				<button
				aria-label="Close"
					class="absolute z-20 group top-4 right-4 h-6 w-6 group font-sans hover:text-primary-500"
					on:click={() => (activeNumber = -1)}
				>
					<span
						class="transition-all group-hover:rotate-[135deg] rotate-45 block h-0.5 w-6 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 duration-250 "
					></span>
					<span
						class="transition-all -rotate-45 group-hover:rotate-45 -translate-y-0.5 block h-0.5 w-6 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 duration-250 "
					></span>
				</button>
			</div>
		{/if}
	</div>

</section>
</IntersectionObserver>	

<style>
	.logo-main:hover .logo-individual {
		@apply blur-[2px] opacity-60 scale-90;
	}
	.logo-main .logo-individual:hover {
		@apply blur-0 opacity-100 scale-100;
	}
</style>
