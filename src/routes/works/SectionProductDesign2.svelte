<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';
	import WorksHeader from '../../components/WorksHeader.svelte';
	import BenchFront from './vectors/BenchFront.svelte';
	import BenchSideL from './vectors/BenchSideL.svelte';
	import BenchSideR from './vectors/BenchSideR.svelte';
	import BenchTop from './vectors/BenchTop.svelte';
	let scroll: number = 0;
	let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 6, windowHeight);
	let showProduct: boolean = false;
	$: if (sectionScroll >= 0.75 && scroll > 1) {
		showProduct = true;
	}
	let moveToRight: boolean = false;
	let moveToLeft: boolean = false;
	
	let options = [
	{
		value: 'front',
		transform: 'rotateY(   0deg)'
	}, {
		value: 'left',
		transform: 'rotateY(  90deg)'
	}, { 
		value: 'right',
		transform: 'rotateY( -90deg)'
	}, {
	 	value: 'top',
		transform: 'rotateX( -90deg)'
	}]
	let selected = 'left'
	
	$: selectedItem = options.find(x => x.value == selected);
	// $: visibleSide = selected.class
	// $: visibleTitle = selected.value

</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<!-- bg-primary-500/50 dark:bg-primary-400/50 -->
<section
	id="productdesign2"
	class=" w-full relative h-screen h-screen-ios overflow-hidden flex flex-col "
>
	<WorksHeader backgroundColor="bg-primary-500 dark:bg-primary-400">
		<T keyName="works-productdesign" defaultValue="Product Design" />
	</WorksHeader>

	<!-- w-400 = 100% 
	<div style="perspective: 400px;" class="h-[400px] w-[400px] m-20 flex justify-items-center border-2 border-primary-300/50">
				<div style:transform={selectedItem?.transform} style="transform-style: preserve-3d; transform: translateZ(-25%);" 
								class="relative w-[100%] h-[54%] mx-[25%] transition-all duration-1000">
					<div style="transform: rotateY(-15.11deg) translateX(-22.25%) translateZ(19.75%) translateY(2%);" class="absolute w-[103.25%] h-[50%] bg-primary-500/50">front</div>
					<div style="transform: rotateY( 90deg) translateZ(48%) translateY(2%);" class="absolute w-[54%] h-[50%] bg-primary-500/30">right</div>
					<div style="transform: rotateY(-90deg) translateZ(38.5%) translateX(-13.5%) translateY(2%);" class="absolute w-[27%] h-[50%] bg-primary-500/30">left</div>
					<div style="transform: rotateX( 90deg) translateX(-25%) translateZ(25%);" class="absolute w-[100%] h-[54%] bg-primary-500/50">top</div>
				</div>
			</div>
	-->
	<div class="flex flex-row-reverse md:flex-row w-full justify-center items-center my-auto">
		<div class=" md:pl-44 px-4 flex justify-center flex-col items-center max-w-4xl w-full sm:w-full">
			<div class="font-sans uppercase font-medium ">{selectedItem?.value}</div>
			
			<div style="perspective: 400px;" class="h-[216px] w-[400px] m-20 flex justify-items-center border-2 border-primary-300/50">
				<div  style="transform-style: preserve-3d; transform: translateZ(-100px) {selectedItem?.transform};"
								class="relative w-[400px] h-[216px] mx-[100px] transition-all transform duration-1000">
					<div style="transform: rotateY(-15.11deg) translateX(-89px) translateZ(79px) translateY(8px);" class="absolute w-[413px] h-[200px] bg-primary- 500/50">
						<!-- front -->
						<BenchFront imgClass="scale-[112%] translate- y-2" {moveToRight} />

					</div>
					<div style="transform: rotateY( 90deg) translateZ(192px) translateY(8px);" class="absolute w-[216px] h-[200px] bg-primary- 500/30">
						<!-- right -->
						<BenchSideR imgClass="scale-x-[108%] scale-y-[111%] translate-x -0.5" {moveToRight} />

					</div>
					<div style="transform: rotateY(-90deg) translateZ(154px) translateX(-54px) translateY(8px);" class="absolute w-[108px] h-[200px] bg-primary- 500/30">
						<!-- left -->
						<BenchSideL imgClass="scale-x-[108%] scale-y-[111%] translate-x -0.5" {moveToRight} />

					</div>
					<div style="transform: rotateX( 90deg) translateX(-100px) translateZ(100px);" class="absolute w-[400px] h-[216px] bg-primary- 500/50">
						<!-- top					 -->
						<BenchTop imgClass="scale-[108%] -translate-x-0.5" {moveToRight} />

					</div>
				</div>
			</div>
			<p class="radio-group">
				{#each options as option}
					<label>
						<input type="radio" name="rotate-cube-side" bind:group={selected} value="{option.value}" /> {option.value}
					</label>
				{/each}
			</p>

			<!-- <button on:click={() => selected = 'right'}>test</button> -->
			
			<!-- {#if showProduct}
				<div
					class="self-center {moveToRight
						? 'translate-y-full translate-x-2 rotate-90'
						: ''} duration-[2000ms] ease-out transform relative">
					<p
						class="absolute font-sans tracking-wide  w-full text-center font-medium opacity-80 uppercase top-1/2 -translate-y-1/2 transform left-1/2 -translate-x-1/2"
					>
						<T keyName="Left-view" defaultValue="Left View" />
					</p>
					<BenchSideL imgClass="self-center w-full text-primary-900 dark:text-primary-50 h-full" {moveToRight} />
				</div>
				
				<div class="relative col-span-2">
					<div class="{moveToRight ? 'scale-x-0 translate-x-[25%] origin-left' : ''} {moveToLeft ? 'scale-x-0 -translate-x-[25%] origin-right' : ''}  duration-[2000ms] ease-linear">
						<p
						class="opacity-80 absolute font-sans tracking-wide w-full text-center font-medium uppercase top-1/2 -translate-y-1/2 transform left-1/2 -translate-x-1/2"
						>
						<T keyName="Front-view" defaultValue="Front View" />
					</p>
					<BenchFront imgClass="" {moveToRight} />
						
					</div>
				</div>
				<div
					class="relative {moveToRight
						? ' scale-x-100 -translate-x-[150%]'
						: 'scale-x-0 -translate-x-[105%]'} origin-right transition-all duration-[1800ms] delay-200 ease-in"
				>
					<p
						class="absolute font-sans tracking-wide w-full text-center font-medium opacity-80 uppercase top-1/2 -translate-y-1/2 transform left-1/2 -translate-x-1/2"
					>
						<T keyName="Right-view" defaultValue="Right View" />
					</p>
					<BenchSideR imgClass="self-center" {moveToRight} />
					
				</div>
				<div class="relative col-start-2 col-span-2">
					<p
						class="absolute font-sans tracking-wide w-full text-center font-medium opacity-80 uppercase top-1/2 -translate-y-1/2 transform left-1/2 -translate-x-1/2"
					>
						<T keyName="Top-view" defaultValue="Top View" />
					</p>
					<BenchTop imgClass="self-center" {moveToRight} />
					
					
				</div>

				<div
					class="row-start-3 col-span-4
					 w-full text-justify transform transition-all duration-500 ease-linear relative items-center flex flex-col justify-center"
				>
					<p
						style="-webkit-hyphens: auto;
					-ms-hyphens: auto;
					hyphens: auto;"
					>
						<T
							keyName="description-product-design-1"
							defaultValue="This bench is a project that i created with the intention of having multiple purposes. It had to fit a tight corner on my balcony and also serve as a sleeping spot for my cat."
						/>
					</p>
					<button
						class="uppercase font-sans bg-primary-800 w-auto mt-4 px-6 py-2 rounded-lg hover:bg-primary-700 text-primary-50"
						on:click={() => (moveToRight = !moveToRight)}
					>
						<T keyName="rotateRight" defaultValue="Rotate right" />
					</button>
					<button
						class="uppercase font-sans bg-primary-800 w-auto mt-4 px-6 py-2 rounded-lg hover:bg-primary-700 text-primary-50"
						on:click={() => (moveToLeft = !moveToLeft)}
					>
						<T keyName="rotateLeft" defaultValue="Rotate left" />
					</button>
				</div>
			{/if} -->
		</div>
	</div>
</section>
