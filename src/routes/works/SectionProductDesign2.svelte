<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { fade } from 'svelte/transition';
	import BenchBottom from './vectors/BenchBottom.svelte';
	import BenchFront from './vectors/BenchFront.svelte';
	import BenchSideL from './vectors/BenchSideL.svelte';
	import BenchSideR from './vectors/BenchSideR.svelte';
	import BenchTop from './vectors/BenchTop.svelte';
	
	function showResult() {
		imageVisible = true
		selected = 'angleview'
	}

	let options = [
	{
		value: 'front',
		transform: 'rotateY(   0deg) translateX(80px)'
	}, {
		value: 'left',
		transform: 'rotateY(  90deg) translateX(150px)'
	}, { 
		value: 'right',
		transform: 'rotateY( -90deg) '
	}, {
	 	value: 'top',
		transform: 'rotateX( -90deg) translateX(100px)'
	}, {
		value: 'perspective',
		transform: 'rotateX( -20deg) rotateY( -50deg)'
	}, {
		value: 'angleview',
		transform: ' translateY(-20px) rotateX( -26deg) rotateY( -3deg) '
	}
	// translateZ(-5px) translateY(25px)
]
	let selected = 'perspective'
	let imageVisible = false
	$: selectedItem = options.find(x => x.value == selected);
</script>

<section
	id="productdesign2"
	style="background:radial-gradient(at left bottom, var(--tw-gradient-from) 0%, transparent 30%);"
	class="bg-gradient-to-bl from-primary-500/50 w-full relative h-screen min-h-screen min-h-screen-ios overflow-hidden flex flex-col "
>
	<div class="flex flex-row-reverse md:flex-row h-full max-h-[56rem] w-full justify-center items-center">
		<div class="md:pl-44 px-4  flex justify-center flex-col items-center max-w-4xl w-full sm:w-full h-full md:space-y-8 space-y-4">
			<h1 class="pt-3 pb-4 md:pl-0 text-3xl md:text-4xl text-center md:text-left font-sans font-bold">
				<T keyName="Cat-Bench" defaultValue='Cat Bench' />
			</h1>
			<div class="flex  flex-row flex-wrap md:flex-nowrap w-full">
				<div class="scale-[0.8] md:scale-100  flex w-full md:w-4/5 justify-center items-center relative">
					<div class="
					{imageVisible ? 'translate-x-[74px] opacity-0 delay -[0ms]' : 'delay -[800ms]'} 
					duration- 1000 
					translate-y-[4px] h-[216px] w-auto my-10 relative"  
					style="perspective: 25rem; perspective-origin: 50% 50%; transition-property: opacity, transform; 
					{imageVisible ? 'transition-duration: 1s, 500ms; transition-delay: 800ms, 0ms;':'transition-duration: 500ms, 300ms; transition-delay: 0ms, 0ms;'}"
					>
					<!-- {selected === 'angleview' ? 'translate-x-[74px] transition-all md:translate -x-[110px]' : ''}  -->
						<div  style="transform-style: preserve-3d; transform: translateZ(-100px) {selectedItem?.transform};"
								class=" relative w-[400px] h-[216px] transition-all transform duration-1000 ">
							<div style="transform: rotateY(-15.11deg) translateX(-90px) translateZ(79px) translateY(8px);" class="absolute w-[413px] h-[200px]">
								<BenchFront imgClass="scale-y-[110%] scale-x-[112%]" />
							</div>
							<div style="transform: rotateY(0deg) translateX(-106px) translateZ(-108px) translateY(8px);" class="absolute w-[413px] h-[200px]">
								<BenchFront imgClass="scale-x-[108%] scale-y-[111%]" />
							</div>
							<div style="transform: rotateY( 90deg) translateZ(192px) translateY(8px);" class="absolute w-[216px] h-[200px]">
								<BenchSideR imgClass="scale-x-[108%] scale-y-[111%]" />
							</div>
							<div style="transform: rotateY(-90deg) translateZ(154px) translateX(-54px) translateY(8px);" class="absolute w-[108px] h-[200px]">
								<BenchSideL imgClass="scale-x-[200%] scale-y-[208%] translate-x-1/2" />
							</div>
							<div style="transform: rotateX( 90deg) translateX(-100px) translateZ(100px);" class="absolute w-[400px] h-[216px]">
								<BenchTop imgClass="scale-[108%] -translate-x-0.5" />
							</div>
							<div style="transform: rotateX( 90deg) translateX(-100px) translateZ(-57px);" class="absolute w-[400px] h-[216px]">
								<BenchTop imgClass="scale-[108%] -translate-x-0.5" />
							</div>
							<div style="transform: rotateX( 90deg) translateX(-100px) translateZ(-90px);" class="absolute w-[400px] h-[216px]">
								<BenchBottom imgClass="scale-[108%] -translate-x-0.5" />
							</div>
						</div>
					</div>

					{#if imageVisible}
						<div class="absolute opacity-100 dark:opacity-70 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2  w-[366px] h-[240px] items-center flex overflow-hidden" >
							<img in:fade={{delay: 1000, duration: 500}} out:fade={{delay: 100, duration: 300}} 
							src="/productdesign/bench_edited.webp" 
							class="w-full aspect-auto" alt="bench">
							<!-- style="transform:  rotateX( 4deg) rotateY( -2deg) rotateZ( 0deg) scaleX(95%) translate(1.2rem, 1rem) skewX(4deg);" -->
						</div>
					{/if}
			</div>

			<div class="w-full flex-wrap md:flex-nowrap flex-auto md:w-1/5 md:ml-4 font-sans self-center flex flex-row md:flex-col bg-primary-900/10 dark:bg-primary-50/10 p-4 rounded-md  uppercase font-medium justify-center h-auto md:h-fit ">
				{#each options.slice(0,5) as option}
				<div class="md:space-y-2 space-x-2 flex flex-row justify-start items-center md:justify-start md:w-full text-sm mb-2">
					<input on:keydown on:click={() => imageVisible = false} id="{option.value}" type="radio" name="rotate-cube-side" bind:group={selected} value="{option.value}" class="md:mt-2" /> 
					<label for="{option.value}" class="font-normal pr-4">
						<T keyName="option-{option.value}" defaultValue="{option.value}" />
					</label>
				</div>
				{/each}
				<button class="w-full uppercase mt-2 py-1.5 px-3 border-2 border-primary-400 transition-all duration-150 hover:bg-primary-400 text-primary-400 hover:text-primary-50 rounded-md" 
				on:click={showResult}><T keyName="result" defaultValue="result" /></button>
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
