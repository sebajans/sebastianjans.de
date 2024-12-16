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
	class="bg-gradient-to-bl from-primary-500/50 dark:from-primary-400/30 w-full relative h-screen h-screen-ios overflow-hidden flex flex-col "
>
	<div class="w-full h-auto flex flex-row mt-4 md:mt-24">
		<div class="w-[calc(100vw_-_56rem)] h-auto"></div>

		<div class="max-w-4xl w-full">
			<h2
				class="bg-primary-500 dark:bg-primary-400 md:text-right w-fit ml-auto text-left pr-8 pl-3 rounded-l-md font-sans py-3 text-4xl "
			>
				<T keyName="works-productdesign" defaultValue="Product Design" />
			</h2>
		</div>
		<div class="w-[calc(100vw_-_56rem)] h-auto bg-primary-500 dark:bg-primary-400"></div>
	</div>

	<div class="flex flex-row-reverse md:flex-row w-full justify-center items-center my-auto">
		<div
			class="md:ml-44 px-4 grid max-w-4xl w-full sm:w-full grid-cols-2 grid-rows-[0.5fr_0.5fr_auto] gap-4"
		>
			{#if showProduct}
				<div
					class="{moveToRight
						? '-translate-x-full sm:translate-x-0 opacity-0 sm:opacity-100'
						: 'translate-x-0 opacity-100'} duration-500  transform relative"
				>
					<p
						class="absolute font-sans tracking-wide font-medium opacity-80 uppercase top-1/2 -translate-y-1/2 transform left-1/2 -translate-x-2/3"
					>
						<T keyName="front-view" defaultValue="Front View" />
					</p>
					<TableFront
						imgClass="w-full max-h-[40vh] text-primary-900 dark:text-primary-50 h-full "
					/>
				</div>
				<!-- outline-1 outline outline-primary-50 -->
				<div class="relative rounded-md  ">
					<img
						class="{moveToRight
							? 'opacity-100 '
							: 'opacity-0 translate-x-full'} pt-3 translate-y-3 z-10 absolute shadow-md shadow-primary-900/30 backdrop-blur-sm bg-primary-300/50 rounded-xl w-full h-auto m-4 object-contain transition-all duration-500"
						src="/productdesign/table-img-2.webp"
						alt="bench"
					/>
					<div
						class="{moveToRight
							? '-translate-x-full sm:translate-x-0 sm:opacity-100'
							: 'translate-x-0 opacity-100 sm:opacity-100'} duration-500"
					>
						<p
							class="opacity-80 absolute font-sans tracking-wide  font-medium uppercase top-1/2 -translate-y-1/2 transform left-1/2 -translate-x-1/3"
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
							: '-translate-x-2/3'} absolute duration-500 font-sans tracking-wide font-medium opacity-80 uppercase top-1/2 -translate-y-1/2 transform left-1/2 "
					>
						<T keyName="Top-view" defaultValue="Top View" />
					</span>
					<TableTop
						{moveToRight}
						imgClass="duration-500 w-full transform text-primary-900 dark:text-primary-50 sm:max-w-[50vw] h-auto max-h-[40vh]"
					/>
				</div>
				<button
					class="uppercase h-fit self-center font-sans bg-primary-800 w-auto px-6 py-2 rounded-lg hover:bg-primary-700 text-primary-50"
					onclick={() => (moveToRight = !moveToRight)}
				>
					<T keyName="change-view-button" defaultValue="View Images" />
				</button>
				<div
					class=" col-span-2
					 w-full self-start text-justify transform transition-all duration-500 relative items-center flex flex-col justify-center"
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
