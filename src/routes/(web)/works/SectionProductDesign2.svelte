<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import { T } from '@tolgee/svelte'; // change import statement
	import { fade } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';

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

	let selected = $state('perspective');
	let imageVisible = $state(false);
	let selectedItem = $derived(options.find((x) => x.value == selected));

	let element: HTMLElement | undefined = $state();
	let intersecting: boolean | undefined = $state();
</script>

<IntersectionObserver once threshold={0.5} {element} bind:intersecting>
	<section bind:this={element} id="productdesign" class="relative flex flex-col">
		<div
			class="my-auto flex h-works max-h-[56rem] w-full flex-row-reverse items-center justify-center px-4 md:h-worksmd md:flex-row"
		>
			<div
				class="flex h-full w-full max-w-4xl flex-col items-center justify-center space-y-4 sm:w-full md:space-y-8"
			>
				<h1
					class="	{intersecting ? '' : 'translate-y-2/3 opacity-0'} text-center font-sans
				text-2xl font-bold transition-all duration-500 md:pb-4 md:pl-0 md:pt-3 md:text-left md:text-4xl"
				>
					<T keyName="Cat-Bench" defaultValue="Cat Bench" />
				</h1>
				<div class=" flex w-[calc(100vw_-_2rem)] flex-row flex-wrap md:w-auto md:flex-nowrap">
					<div
						class="	{intersecting ? '' : '-translate-x-1/3 opacity-0'} relative flex w-full
					-translate-y-6 scale-[0.8] items-center justify-center transition-all delay-300 duration-500 md:w-4/5 md:scale-100"
					>
						<div
							class=" 
					{imageVisible ? 'translate-x-[74px] opacity-0' : ''}
					 relative
					h-[216px] w-auto translate-y-[4px] dark:text-primary-100 md:my-10"
							style="perspective: 25rem; perspective-origin: 50% 50%; transition-property: opacity, transform; 
					{imageVisible
								? 'transition-duration: 1s, 500ms; transition-delay: 800ms, 0ms;'
								: 'transition-duration: 500ms, 300ms; transition-delay: 0ms, 0ms;'}"
						>
							<div
								style="transform-style: preserve-3d; transform: translateZ(-100px) {selectedItem?.transform};"
								class=" relative h-[216px] w-[400px] transform transition-all duration-1000"
							>
								<div
									style="transform: rotateY(-15.11deg) translateX(-90px) translateZ(79px) translateY(8px);"
									class="absolute h-[200px] w-[413px]"
								>
									<BenchFront imgClass="scale-y-[110%] scale-x-[112%]" />
								</div>
								<div
									style="transform: rotateY(0deg) translateX(-106px) translateZ(-108px) translateY(8px);"
									class="absolute h-[200px] w-[413px]"
								>
									<BenchFront imgClass="scale-x-[108%] scale-y-[111%]" />
								</div>
								<div
									style="transform: rotateY( 90deg) translateZ(192px) translateY(8px);"
									class="absolute h-[200px] w-[216px]"
								>
									<BenchSideR imgClass="scale-x-[108%] scale-y-[111%]" />
								</div>
								<div
									style="transform: rotateY(-90deg) translateZ(154px) translateX(-54px) translateY(8px);"
									class="absolute h-[200px] w-[108px]"
								>
									<BenchSideL imgClass="scale-x-[200%] scale-y-[208%] translate-x-1/2" />
								</div>
								<div
									style="transform: rotateX( 90deg) translateX(-100px) translateZ(100px);"
									class="absolute h-[216px] w-[400px]"
								>
									<BenchTop imgClass="scale-[108%] -translate-x-0.5" />
								</div>
								<div
									style="transform: rotateX( 90deg) translateX(-100px) translateZ(-57px);"
									class="absolute h-[216px] w-[400px]"
								>
									<BenchTop imgClass="scale-[108%] -translate-x-0.5" />
								</div>
								<div
									style="transform: rotateX( 90deg) translateX(-100px) translateZ(-90px);"
									class="absolute h-[216px] w-[400px]"
								>
									<BenchBottom imgClass="scale-[108%] -translate-x-0.5" />
								</div>
							</div>
						</div>
						{#if imageVisible}
							<div
								class="absolute top-1/2 flex h-[240px] w-[366px] -translate-y-1/2 items-center overflow-hidden opacity-100 dark:opacity-70 md:left-1/2 md:-translate-x-1/2"
							>
								<img
									width="366"
									height="366"
									in:fade|global={{ delay: 1000, duration: 500 }}
									out:fade|global={{ delay: 100, duration: 300 }}
									src="/productdesign/bench_edited.webp"
									class="aspect-auto w-full"
									alt="bench"
								/>
							</div>
						{/if}
					</div>

					<div
						class="	{intersecting ? '' : 'translate-x-1/3 opacity-0'} box-content flex h-auto
					w-full flex-auto flex-row flex-wrap items-stretch justify-between font-sans font-medium uppercase transition-all delay-500 duration-500 md:ml-4 md:h-fit md:w-1/5 md:flex-col md:flex-nowrap"
					>
						{#each options.slice(0, 5) as option}
							<div class=" mb-0.5 text-sm md:mb-2">
								<input
									onkeydown={bubble('keydown')}
									onclick={() => (imageVisible = false)}
									id={option.value}
									type="radio"
									name="rotate-cube-side"
									bind:group={selected}
									value={option.value}
									class="md:mt-2"
								/>
								<label for={option.value} class=" standardButton w-full pr-4 font-normal">
									<span class="radio-button"></span>
									<T keyName="option-{option.value}" defaultValue={option.value} />
								</label>
							</div>
						{/each}
						<div
							class="mx-auto mt-2 h-px w-full bg-primary-900/50 dark:bg-primary-50/50 md:mt-1"
						></div>
						<button
							class="mt-3 {imageVisible
								? 'bg-primary-900 !text-primary-50 dark:bg-primary-50 dark:!text-primary-900'
								: ''} standardButton mt-1 w-full px-3 py-1 uppercase transition-all duration-150 md:py-1.5"
							onclick={showResult}
						>
							<T keyName="result" defaultValue="result" />
						</button>
					</div>
				</div>
				<p
					class="{intersecting ? '' : 'translate-y-1/3 opacity-0'} mt-4 text-sm transition-all
			delay-700 duration-500 md:text-base"
				>
					<T
						keyName="description-product-design-1"
						defaultValue="This bench is a project that i created with the intention of having multiple purposes. It had to fit a tight corner on my balcony and also serve as a sleeping spot for my cat."
					/>
				</p>
			</div>
		</div>
	</section>
</IntersectionObserver>

<style>
	.standardButton {
		@apply box-border flex h-auto items-center justify-center rounded-lg border border-primary-900/10 bg-gradient-to-tr from-primary-900/30 to-primary-900/20 px-2 py-1.5 text-center font-light text-primary-900 transition-all duration-300 ease-in hover:cursor-pointer hover:border-primary-900/50 hover:from-primary-900/30 hover:to-primary-900/40 dark:border-primary-50/10 dark:from-primary-50/40 dark:to-primary-50/30 dark:text-primary-50 dark:hover:border-primary-50/50 dark:hover:from-primary-50/20 dark:hover:to-primary-50/30 md:backdrop-blur-sm;
	}

	input[type='radio']:checked + label {
		@apply bg-primary-900 text-primary-50 dark:bg-primary-50 dark:text-primary-900;
	}

	input[type='radio'] {
		opacity: 0;
		position: fixed;
		width: 0;
	}
</style>
