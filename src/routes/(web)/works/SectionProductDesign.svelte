<script lang="ts">
	import { run } from 'svelte/legacy';

	import { T } from '@tolgee/svelte'; // change import statement

	import { scrollInSection } from '$lib/functions/scrollInSection';
	import TableFront from './product-items/TableFront.svelte';
	import TableSide from './product-items/TableSide.svelte';
	import TableTop from './product-items/TableTop.svelte';

	let moveToRight: boolean = $state(false);

	let scroll: number = $state(0);
	let windowHeight: number | undefined = $state();
	let sectionScroll = $derived(scrollInSection(scroll, 5, windowHeight ?? 0));
	let showProduct: Boolean = $state(false);
	$effect(() => {
		if (sectionScroll >= 0.75 && scroll > 1) {
			showProduct = true;
		}
	});
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="productdesign"
	style="background:radial-gradient(at right top, var(--tw-gradient-from) 0%, transparent 30%);"
	class="relative flex h-screen w-full flex-col overflow-hidden bg-gradient-to-bl from-primary-500/50 h-screen-ios dark:from-primary-400/30"
>
	<div class="mt-4 flex h-auto w-full flex-row md:mt-24">
		<div class="h-auto w-[calc(100vw_-_56rem)]"></div>

		<div class="w-full max-w-4xl">
			<h2
				class="ml-auto w-fit rounded-l-md bg-primary-500 py-3 pl-3 pr-8 text-left font-sans text-4xl dark:bg-primary-400 md:text-right"
			>
				<T keyName="works-productdesign" defaultValue="Product Design" />
			</h2>
		</div>
		<div class="h-auto w-[calc(100vw_-_56rem)] bg-primary-500 dark:bg-primary-400"></div>
	</div>

	<div class="my-auto flex w-full flex-row-reverse items-center justify-center md:flex-row">
		<div
			class="grid w-full max-w-4xl grid-cols-2 grid-rows-[0.5fr_0.5fr_auto] gap-4 px-4 sm:w-full md:ml-44"
		>
			{#if showProduct}
				<div
					class="{moveToRight
						? '-translate-x-full opacity-0 sm:translate-x-0 sm:opacity-100'
						: 'translate-x-0 opacity-100'} relative transform duration-500"
				>
					<p
						class="absolute left-1/2 top-1/2 -translate-x-2/3 -translate-y-1/2 transform font-sans font-medium uppercase tracking-wide opacity-80"
					>
						<T keyName="front-view" defaultValue="Front View" />
					</p>
					<TableFront
						imgClass="w-full max-h-[40vh] text-primary-900 dark:text-primary-50 h-full "
					/>
				</div>
				<!-- outline-1 outline outline-primary-50 -->
				<div class="relative rounded-md">
					<img
						class="{moveToRight
							? 'opacity-100 '
							: 'translate-x-full opacity-0'} absolute z-10 m-4 h-auto w-full translate-y-3 rounded-xl bg-primary-300/50 object-contain pt-3 shadow-md shadow-primary-900/30 backdrop-blur-sm transition-all duration-500"
						src="/productdesign/table-img-2.webp"
						alt="bench"
					/>
					<div
						class="{moveToRight
							? '-translate-x-full sm:translate-x-0 sm:opacity-100'
							: 'translate-x-0 opacity-100 sm:opacity-100'} duration-500"
					>
						<p
							class="absolute left-1/2 top-1/2 -translate-x-1/3 -translate-y-1/2 transform font-sans font-medium uppercase tracking-wide opacity-80"
						>
							<T keyName="Side-view" defaultValue="Side View" />
						</p>
						<TableSide
							imgClass="duration-500 w-full transform text-primary-900 dark:text-primary-50 sm:max-w-[50vw] h-full max-h-[40vh]"
						/>
					</div>
				</div>
				<div class="relative">
					<span
						class="{moveToRight
							? '-translate-x-1/3 md:-translate-x-2/3'
							: '-translate-x-2/3'} absolute left-1/2 top-1/2 -translate-y-1/2 transform font-sans font-medium uppercase tracking-wide opacity-80 duration-500"
					>
						<T keyName="Top-view" defaultValue="Top View" />
					</span>
					<TableTop
						{moveToRight}
						imgClass="duration-500 w-full transform text-primary-900 dark:text-primary-50 sm:max-w-[50vw] h-auto max-h-[40vh]"
					/>
				</div>
				<button
					class="h-fit w-auto self-center rounded-lg bg-primary-800 px-6 py-2 font-sans uppercase text-primary-50 hover:bg-primary-700"
					onclick={() => (moveToRight = !moveToRight)}
				>
					<T keyName="change-view-button" defaultValue="View Images" />
				</button>
				<div
					class=" relative
					 col-span-2 flex w-full transform flex-col items-center justify-center self-start text-justify transition-all duration-500"
				>
					<p>
						<T
							keyName="description-product-design-2"
							defaultValue="This table was one of my first projects. I designed it myself and customized it to suit
						all my needs. With the organic cutout in the middle everything is reachable while
						maximizing space."
						/>
					</p>
				</div>
			{/if}
		</div>
	</div>
</section>
