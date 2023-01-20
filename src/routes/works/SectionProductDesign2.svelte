<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { fade } from 'svelte/transition';
	import { scrollInSection } from '../../components/scrollInSection';
	import WorksHeader from '../../components/WorksHeader.svelte';
	import BenchBottom from './vectors/BenchBottom.svelte';
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
	
	function showResult() {
		imageVisible = !imageVisible
		selected = 'angleview'
	}

	let options = [
	{
		value: 'front',
		transform: 'rotateY(   0deg)'
	}, {
		value: 'left',
		transform: 'rotateY(  90deg) translateX(150px)'
	}, { 
		value: 'right',
		transform: 'rotateY( -90deg)'
	}, {
	 	value: 'top',
		transform: 'rotateX( -90deg)'
	}, {
		value: 'angle',
		transform: 'rotateX( -20deg) rotateY( -50deg)'
	}, {
		value: 'angleview',
		transform: 'rotateX( -20deg) rotateY( -3deg) translateZ(-5px) translateY(25px)'
	}
	//  	value: 'bottom',
	// 	transform: 'rotateX( 90deg)'
	// }, {
	// }, {
	//  	value: 'back',
	// 	transform: 'rotateY( 180deg)'
]
	let selected = 'angle'
	let imageVisible = false
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

	<div class="flex flex-row-reverse md:flex-row w-full justify-center items-center my-auto">
		<div class=" md:pl-44 px-4 flex justify-center flex-col items-center max-w-4xl w-full sm:w-full">
			<div class="flex flex-row flex-wrap md:flex-nowrap w-full ">
				<div class="h-auto w-full sm:w-4/5 justify-center items-center relative">
					<!-- <div class="font-sans uppercase font-medium mb-4">{selectedItem?.value} View</div> -->
					<div class="{imageVisible ? 'opacity-0' : ''} transition-opacity delay-500 duration-1000 h-[216px] w-full mx-8 my-10 relative"  style=" {imageVisible ? 'perspective: 24rem; perspective-origin: 37% 22%;' : 'perspective: 25rem; perspective-origin: 50% 50%;'}">
						<div  style="transform-style: preserve-3d; transform: translateZ(-100px) {selectedItem?.transform};"
								class=" relative w-[400px] h-[216px] mx-[100px] transition-all transform duration-1000">
							<div style="transform: rotateY(-15.11deg) translateX(-90px) translateZ(79px) translateY(8px);" class="absolute w-[413px] h-[200px] bg-primary- 500/50">
								<BenchFront imgClass="scale-y-[110%] scale-x-[112%]" />
							</div>
							<div style="transform: rotateY(0deg) translateX(-106px) translateZ(-108px) translateY(8px);" class="absolute w-[413px] h-[200px] bg-primary- 500/50">
								<BenchFront imgClass="scale-x-[108%] scale-y-[111%]" />
							</div>
							<div style="transform: rotateY( 90deg) translateZ(192px) translateY(8px);" class="absolute w-[216px] h-[200px] bg-primary- 500/30">
								<BenchSideR imgClass="scale-x-[108%] scale-y-[111%] translate-x -0.5" {moveToRight} />
							</div>
							<div style="transform: rotateY(-90deg) translateZ(154px) translateX(-54px) translateY(8px);" class="absolute w-[108px] h-[200px] bg-primary- 500/30">
								<BenchSideL imgClass="scale-x-[200%] scale-y-[208%] translate-x-1/2" />
							</div>
							<div style="transform: rotateX( 90deg) translateX(-100px) translateZ(100px);" class="absolute w-[400px] h-[216px] bg-primary- 500/50">
								<BenchTop imgClass="scale-[108%] -translate-x-0.5" />
							</div>
							<div style="transform: rotateX( 90deg) translateX(-100px) translateZ(-90px);" class="absolute w-[400px] h-[216px] bg-primary- 500/50">
								<BenchBottom imgClass="scale-[108%] -translate-x-0.5" {moveToRight} />
							</div>
						</div>
					</div>
					{#if imageVisible}
					<img in:fade={{delay: 300, duration: 1000}} src="/productdesign/bench.webp" class="z-30 absolute ml-10 opacity-50 -top-20 aspect-auto w-[400px] h-[400px]" alt="bench">
					{/if}
		</div>

			<div class="w-full md:w-1/5  m-4 font-sans self-center flex flex-row md:flex-col bg-primary-900/10 dark:bg-primary-50/10 p-4 rounded-md  uppercase font-medium justify-center h-fit">
				{#each options.slice(0,5) as option}
				<div on:keydown on:click={() => imageVisible = false} class="space-y-2 space-x-2 flex flex-row justify-evenly items-center md:justify-start">
					<input id="{option.value}" type="radio" name="rotate-cube-side" bind:group={selected} value="{option.value}" class="mt-1.5" /> 
					<label for="{option.value}" class="font-normal pr-4">
						{option.value}
					</label>
				</div>
				{/each}
				<button class="uppercase p-2 bg-primary-50/50 transition-all duration-150 hover:bg-primary-400 text-primary-50 rounded-md" 
				on:click={showResult}>result</button>
			</div>
		</div>
		<p class="mt-4">
						<T
							keyName="description-product-design-1"
							defaultValue="This bench is a project that i created with the intention of having multiple purposes. It had to fit a tight corner on my balcony and also serve as a sleeping spot for my cat."
						/>
					</p>
		</div>
	</div>
</section>
