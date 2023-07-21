<script lang="ts">
	import T from '@tolgee/svelte/T.svelte'; // change import statement
	import { fade } from 'svelte/transition';


	import BenchBottom from './product-items/BenchBottom.svelte';
	import BenchFront from './product-items/BenchFront.svelte';
	import BenchSideL from './product-items/BenchSideL.svelte';
	import BenchSideR from './product-items/BenchSideR.svelte';
	import BenchTop from './product-items/BenchTop.svelte';

	function showResult() {
		imageVisible = true;
		selected = 'angleview';
	}

	let options = [
		{
			value: 'front',
			transform: 'rotateY(   0deg) translateX(80px)'
		},
		{
			value: 'left',
			transform: 'rotateY(  90deg) translateX(150px)'
		},
		{
			value: 'right',
			transform: 'rotateY( -90deg) '
		},
		{
			value: 'top',
			transform: 'rotateX( -90deg) translateX(100px)'
		},
		{
			value: 'perspective',
			transform: 'rotateX( -20deg) rotateY( -50deg)'
		},
		{
			value: 'angleview',
			transform: ' translateY(-20px) rotateX( -26deg) rotateY( -3deg) '
		}
	];

	let selected = 'perspective';
	let imageVisible = false;
	$: selectedItem = options.find((x) => x.value == selected);
</script>


<section id="productdesign" class="relative  flex flex-col ">
	<div
		class="px-4  flex my-auto flex-row-reverse md:flex-row h-works md:h-worksmd max-h-[56rem] w-full justify-center items-center"
	>
		<div
			class="flex  justify-center flex-col items-center max-w-4xl w-full sm:w-full h-full md:space-y-8 space-y-4"
		>
			<h1
				class="md:pt-3 md:pb-4 md:pl-0 text-2xl md:text-4xl text-center md:text-left font-sans font-bold"
			>
				<T keyName="Cat-Bench" defaultValue="Cat Bench" />
			</h1>
			<div class=" flex flex-row flex-wrap md:flex-nowrap w-[calc(100vw_-_2rem)] md:w-auto ">
				<div
					class="scale-[0.8] -translate-y-6 md:scale-100 flex w-full md:w-4/5 justify-center items-center relative"
				>
					<div
						class=" 
					{imageVisible ? 'translate-x-[74px] opacity-0' : ''}
					 dark:text-primary-100
					translate-y-[4px] h-[216px] w-auto md:my-10 relative"
						style="perspective: 25rem; perspective-origin: 50% 50%; transition-property: opacity, transform; 
					{imageVisible
							? 'transition-duration: 1s, 500ms; transition-delay: 800ms, 0ms;'
							: 'transition-duration: 500ms, 300ms; transition-delay: 0ms, 0ms;'}"
					>
						<div
							style="transform-style: preserve-3d; transform: translateZ(-100px) {selectedItem?.transform};"
							class=" relative w-[400px] h-[216px] transition-all transform duration-1000 "
						>
							<div
								style="transform: rotateY(-15.11deg) translateX(-90px) translateZ(79px) translateY(8px);"
								class="absolute w-[413px] h-[200px]"
							>
								<BenchFront imgClass="scale-y-[110%] scale-x-[112%]" />
							</div>
							<div
								style="transform: rotateY(0deg) translateX(-106px) translateZ(-108px) translateY(8px);"
								class="absolute w-[413px] h-[200px]"
							>
								<BenchFront imgClass="scale-x-[108%] scale-y-[111%]" />
							</div>
							<div
								style="transform: rotateY( 90deg) translateZ(192px) translateY(8px);"
								class="absolute w-[216px] h-[200px]"
							>
								<BenchSideR imgClass="scale-x-[108%] scale-y-[111%]" />
							</div>
							<div
								style="transform: rotateY(-90deg) translateZ(154px) translateX(-54px) translateY(8px);"
								class="absolute w-[108px] h-[200px]"
							>
								<BenchSideL imgClass="scale-x-[200%] scale-y-[208%] translate-x-1/2" />
							</div>
							<div
								style="transform: rotateX( 90deg) translateX(-100px) translateZ(100px);"
								class="absolute w-[400px] h-[216px]"
							>
								<BenchTop imgClass="scale-[108%] -translate-x-0.5" />
							</div>
							<div
								style="transform: rotateX( 90deg) translateX(-100px) translateZ(-57px);"
								class="absolute w-[400px] h-[216px]"
							>
								<BenchTop imgClass="scale-[108%] -translate-x-0.5" />
							</div>
							<div
								style="transform: rotateX( 90deg) translateX(-100px) translateZ(-90px);"
								class="absolute w-[400px] h-[216px]"
							>
								<BenchBottom imgClass="scale-[108%] -translate-x-0.5" />
							</div>
						</div>
					</div>
					{#if imageVisible}
						<div
							class="absolute opacity-100 dark:opacity-70 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2  w-[366px] h-[240px] items-center flex overflow-hidden"
						>
							<img
								width="366"
								height="366"
								in:fade|global={{ delay: 1000, duration: 500 }}
								out:fade|global={{ delay: 100, duration: 300 }}
								src="/productdesign/bench_edited.webp"
								class="w-full aspect-auto"
								alt="bench"
							/>
						</div>
					{/if}
				</div>

				<div
					class="w-full flex flex-row md:flex-col flex-wrap md:flex-nowrap flex-auto md:w-1/5 md:ml-4 font-sans  box-content uppercase font-medium items-stretch justify-between h-auto md:h-fit "
				>
					{#each options.slice(0, 5) as option}
						<div
							class=" text-sm mb-0.5 md:mb-2"
						>
							<input
								on:keydown
								on:click={() => (imageVisible = false)}
								id={option.value}
								type="radio"
								name="rotate-cube-side"
								bind:group={selected}
								value={option.value}
								class="md:mt-2"
							/>
							<label for={option.value} class=" standardButton w-full font-normal pr-4">
								<span class="radio-button"></span>
								<T keyName="option-{option.value}" defaultValue={option.value} />
							</label>
						</div>
					{/each}
					<div class="h-px mt-2 md:mt-1 mx-auto w-full  bg-primary-900/50 dark:bg-primary-50/50"></div>
					<button
						class="mt-3 {imageVisible ? 'bg-primary-900 !text-primary-50 dark:bg-primary-50 dark:!text-primary-900' : ''} standardButton w-full uppercase mt-1 py-1 md:py-1.5 px-3 transition-all duration-150"
						on:click={showResult}
					>
						<T keyName="result" defaultValue="result" />
					</button>
				</div>
			</div>
			<p class="mt-4 text-sm md:text-base">
				<T
					keyName="description-product-design-1"
					defaultValue="This bench is a project that i created with the intention of having multiple purposes. It had to fit a tight corner on my balcony and also serve as a sleeping spot for my cat."
				/>
			</p>
		</div>
	</div>
</section>

<style>
	.standardButton {
		@apply items-center justify-center text-center text-primary-900 dark:text-primary-50 dark:from-primary-50/40 dark:to-primary-50/30 from-primary-900/30 to-primary-900/20 dark:border-primary-50/10 border-primary-900/10 font-light  bg-gradient-to-tr box-border py-1.5 px-2 h-auto md:backdrop-blur-sm flex border transition-all ease-in duration-300 rounded-lg hover:from-primary-900/30 hover:to-primary-900/40
				dark:hover:from-primary-50/20 dark:hover:to-primary-50/30 
				hover:border-primary-900/50 dark:hover:border-primary-50/50 hover:cursor-pointer;
				
	}

	input[type="radio"]:checked + label {
		@apply bg-primary-900 text-primary-50 dark:bg-primary-50 dark:text-primary-900 ;
	}

	input[type="radio"] {
		opacity: 0;
		position: fixed;
		width: 0;
	}
</style>
