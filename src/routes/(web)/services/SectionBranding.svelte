<script lang="ts">
	import { T } from '@tolgee/svelte';
	import type { MainService } from './services';
	// import { services } from "./services";
	import ServiceComponent from './ServiceComponent.svelte';
	import type { Snippet } from 'svelte';
	import Button from '@/components/ui/button/button.svelte';
	import { fly } from 'svelte/transition';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	const { service }: { service: MainService } = $props();

	const plugin = Autoplay({ delay: 1000, stopOnInteraction: false });
	const opts = {
		loop: true,
		duration: 4000,
		easing: 'linear'
	};

	let activeIndex: number = $state(1);

	let paused: boolean = $state(false);

	let interval = 6000;
	$effect(() => {
		const intervalId = setInterval(() => {
			if (!paused) {
				activeIndex = (activeIndex + 1) % 4;
				if (activeIndex === 0) {
					fancyClass = !fancyClass;
				}
			}
		}, interval);
		return () => clearInterval(intervalId);
	});

	let fancyClass = $state(false);

	function togglePause() {
		paused = !paused;
	}
</script>

{#snippet colors()}
	<span in:fly={{ x: 20, duration: 500 }}> Colors </span>
	<div
		in:fly={{ x: 15, duration: 800, delay: 200 }}
		class="flex h-full w-full flex-col justify-between gap-2"
	>
		<div class="flex h-full w-full">
			<div class="bg-primary-500 mr-2 w-12 rounded-md"></div>
			<div class="flex w-full overflow-clip rounded-md">
				<div class="bg-primary-50 w-full"></div>
				<div class="bg-primary-100 w-full"></div>
				<div class="bg-primary-200 w-full"></div>
				<div class="bg-primary-300 w-full"></div>
				<div class="bg-primary-400 w-full"></div>
				<div class="bg-primary-500 w-full"></div>
				<div class="bg-primary-600 w-full"></div>
				<div class="bg-primary-700 w-full"></div>
				<div class="bg-primary-800 w-full"></div>
				<div class="bg-primary-900 w-full"></div>
			</div>
		</div>
		<div class="flex h-full w-full">
			<div class="bg-fountain-blue-500 mr-2 w-12 rounded-md"></div>
			<div class="w flex w-full overflow-clip rounded-md">
				<div class="bg-fountain-blue-50 w-full"></div>
				<div class="bg-fountain-blue-100 w-full"></div>
				<div class="bg-fountain-blue-200 w-full"></div>
				<div class="bg-fountain-blue-300 w-full"></div>
				<div class="bg-fountain-blue-400 w-full"></div>
				<div class="bg-fountain-blue-500 w-full"></div>
				<div class="bg-fountain-blue-600 w-full"></div>
				<div class="bg-fountain-blue-700 w-full"></div>
				<div class="bg-fountain-blue-800 w-full"></div>
				<div class="bg-fountain-blue-900 w-full"></div>
			</div>
		</div>
		<div class="flex h-full w-full">
			<div class="mr-2 w-12 rounded-md bg-gray-500"></div>
			<div class="w flex w-full overflow-clip rounded-md">
				<div class="w-full bg-gray-50"></div>
				<div class="w-full bg-gray-100"></div>
				<div class="w-full bg-gray-200"></div>
				<div class="w-full bg-gray-300"></div>
				<div class="w-full bg-gray-400"></div>
				<div class="w-full bg-gray-500"></div>
				<div class="w-full bg-gray-600"></div>
				<div class="w-full bg-gray-700"></div>
				<div class="w-full bg-gray-800"></div>
				<div class="w-full bg-gray-900"></div>
			</div>
		</div>
	</div>
{/snippet}

{#snippet typography()}
	<span in:fly={{ x: 20, duration: 500 }}> Typography </span>
	<div
		class="flex h-full w-full flex-col justify-between gap-2"
		in:fly={{ x: 15, duration: 800, delay: 200 }}
	>
		<div class="flex w-full items-end gap-1">
			<span class="font-sans text-2xl leading-none font-semibold">Title</span>
			<span class="bg-primary-900 dark:bg-primary-50 h-px w-full"></span>
			<span class="font-sans text-xs leading-none">30rem</span>
		</div>

		<div class="flex w-full items-end gap-1">
			<span class="font-sans text-xl leading-none">Subtitle</span>
			<span class="bg-primary-900 dark:bg-primary-50 h-px w-full"></span>
			<span class="font-sans text-xs leading-none">20rem</span>
		</div>

		<div class="flex w-full items-end gap-1">
			<span class="font-sans text-base leading-none font-light">Body</span>
			<span class="bg-primary-900 dark:bg-primary-50 h-px w-full"></span>
			<span class="font-sans text-xs leading-none">15rem</span>
		</div>

		<div class="flex w-full items-end gap-1">
			<span class="font-sans text-xs leading-none">Caption</span>
			<span class="bg-primary-900 dark:bg-primary-50 h-px w-full"></span>
			<span class="font-sans text-xs leading-none">12rem</span>
		</div>
	</div>
{/snippet}
{#snippet logos()}
	<span in:fly={{ x: 20, duration: 500 }}>Logo</span>
	<div
		in:fly={{ x: 15, duration: 800, delay: 200 }}
		class="grid h-full w-full grid-flow-col grid-cols-3 grid-rows-2 flex-wrap gap-2 *:flex *:items-center *:justify-center"
	>
		<div
			class="bg-primary-900/80 text-primary-50 dark:bg-primary-50/80 dark:text-primary-900 h-full gap-1 rounded-md"
		>
			<svg class="size-8" viewBox="0 0 100 100">
				<polygon
					points="50,15 90,85 10,85"
					stroke="currentColor"
					fill="transparent"
					stroke-width="8"
				/>
			</svg>
		</div>
		<div class="bg-primary-900/5 dark:bg-primary-50/10 h-full rounded-md">
			<svg class="size-8" viewBox="0 0 100 100">
				<polygon
					points="50,15 90,85 10,85"
					stroke="currentColor"
					fill="transparent"
					stroke-width="8"
				/>
			</svg>
		</div>
		<div class="bg-primary-900/5 dark:bg-primary-50/10 h-full gap-1 rounded-md">
			<svg class="size-8" viewBox="0 0 100 100">
				<polygon
					points="50,15 90,85 10,85"
					stroke="currentColor"
					fill="transparent"
					stroke-width="8"
				/>
			</svg>
			<span class="text-center font-sans text-lg font-medium tracking-wider uppercase">Logo</span>
		</div>
		<div
			class="bg-primary-900/80 text-primary-50 dark:bg-primary-50/80 dark:text-primary-900 h-full gap-1 rounded-md"
		>
			<svg class="size-8" viewBox="0 0 100 100">
				<polygon
					points="50,15 90,85 10,85"
					stroke="currentColor"
					fill="transparent"
					stroke-width="8"
				/>
			</svg>
			<span class="text-center font-sans text-lg font-medium tracking-wider uppercase">Logo</span>
		</div>
		<div
			class="bg-primary-900/80 text-primary-50 dark:bg-primary-50/80 dark:text-primary-900 h-full flex-col rounded-md"
		>
			<svg class="size-6" viewBox="0 0 100 100">
				<polygon
					points="50,15 90,85 10,85"
					stroke="currentColor"
					fill="transparent"
					stroke-width="10"
				/>
			</svg>
			<span class="text-center font-sans text-lg font-medium tracking-wider uppercase">Logo</span>
		</div>
		<div class="bg-primary-900/5 dark:bg-primary-50/10 h-full flex-col rounded-md">
			<svg class="size-6" viewBox="0 0 100 100">
				<polygon
					points="50,15 90,85 10,85"
					stroke="currentColor"
					fill="transparent"
					stroke-width="10"
				/>
			</svg>
			<span class="text-center font-sans text-lg font-medium tracking-wider uppercase">Logo</span>
		</div>
	</div>
{/snippet}

{#snippet patterns()}
	<span in:fly={{ x: 20, duration: 500 }}>Patterns</span>
	<div
		in:fly={{ x: 15, duration: 800, delay: 200 }}
		class="grid h-full w-full grid-cols-2 grid-rows-2 flex-wrap gap-2"
	>
		<div class="pattern-1 bg-primary-900/5 dark:bg-primary-50/10 h-full rounded-md"></div>
		<div class="pattern-2 bg-primary-900/5 dark:bg-primary-50/10 h-full rounded-md"></div>
		<div class="pattern-3 bg-primary-900/5 dark:bg-primary-50/10 h-full rounded-md"></div>
		<div class="pattern-4 bg-primary-900/5 dark:bg-primary-50/10 h-full rounded-md"></div>
	</div>
{/snippet}
<section
	class="h-works md:h-worksmd col-start-1 row-start-1 flex w-full flex-col items-center justify-center px-2 transition-all duration-500 md:max-h-[56rem]"
>
	<div class="flex flex-col gap-y-8">
		<div class="flex w-full flex-col">
			<h2>
				<T keyName="h-services-branding" defaultValue="Create your brand from scratch!" />
			</h2>
			<p>
				<T
					keyName="p-branding-intro"
					defaultValue="Did you just create your new company or are you seeking to adapt your existing business to the ever changing market dynamics? Or do you perhaps just want to attract new clients?"
				/>
			</p>
		</div>
		<div class="flex w-full items-center justify-center gap-6">
			<Carousel.Root
				plugins={[plugin]}
				{opts}
				on:mousenter={() => plugin.stop}
				on:mouseleave={() => plugin.reset}
				orientation="vertical"
				class="w-full px-4 md:px-0"
			>
				<Carousel.Content class="h-[24rem] sm:h-[24rem] md:h-[28rem] ">
					{#each service.subServices as item}
						<Carousel.Item class="dark:text-primary-50 w-full basis-1/2 sm:basis-1/3 ">
							<div
								class="md:bg-transp arent bg-primaryO! riginal-200 bg-opacity-0! hover:border-primary-900/5 hover:bg-opacity-100! dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 dark:hover:border-primary-50/10 md:from-primary-900/10 md:to-primary-900/5 relative flex h-full min-h-[8rem] w-full flex-col items-start justify-start border-transparent px-2 py-2 backdrop-blur-md transition-all md:rounded-md md:border md:px-3 md:py-3 md:hover:bg-linear-to-br dark:border-transparent"
							>
								<ServiceComponent
									name={item.component ? item.component : ''}
									class="h-12 text-5xl"
								/>
								<h3 class=" z-10 flex items-start justify-start text-start">
									<T keyName="h3-{item.name}" defaultValue={item.name} />
								</h3>
								<span class=" z-10 flex items-start justify-start text-start text-sm">
									<T keyName="span-{item.name}-description" defaultValue={item.description} />
								</span>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
			</Carousel.Root>
			<div class="w-full">
				<div
					class="{fancyClass
						? 'scale-90 rotate-[12deg] skew-x-12 '
						: ''} flex flex-col items-center transition-transform"
				>
					<div
						class="
        {fancyClass
							? ' border-primary-200 dark:border-primary-700 border-[8px] '
							: ' border border-transparent dark:border-transparent'} 
         border-primary-900/5 dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 md:from-primary-900/10 md:to-primary-900/5 relative flex aspect-video h-full w-full flex-col items-start justify-start gap-4 px-2 py-2 transition-all md:rounded-md md:bg-linear-to-br md:px-3 md:py-3"
					>
						{#if activeIndex === 0}
							{@render colors()}
						{:else if activeIndex === 1}
							{@render typography()}
						{:else if activeIndex === 2}
							{@render patterns()}
						{:else if activeIndex === 3}
							{@render logos()}
						{/if}
					</div>
					<div
						class="{fancyClass
							? 'max-h-16 opacity-100'
							: 'max-h-0 opacity-0'} bg-primary-300 dark:bg-primary-800 h-14 w-24 rounded-br-lg transition-all"
					></div>
					<div
						class="{fancyClass
							? 'max-h-8 opacity-100 duration-75'
							: 'max-h-0 opacity-0'} bg-primary-300 dark:bg-primary-800 h-4 w-[5.8rem] -translate-x-4 -translate-y-px skew-x-[-60deg] rounded-br-md rounded-bl-md transition-all"
					></div>
				</div>
				<div class="mt-8 flex flex-row gap-2">
					<Button
						variant="ghost"
						size="lg"
						class="border-primary-900/5 hover:bg-primary-900 hover:text-primary-50 dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 dark:hover:bg-primary-50 dark:hover:text-primary-900 md:from-primary-900/10 md:to-primary-900/5 h-10 w-fit bg-linear-to-br px-2 py-2 font-sans transition-all md:px-3 md:py-3"
						on:click={() => {
							fancyClass = !fancyClass;
						}}
					>
						View them on your real devices
					</Button>
					<Button
						variant="ghost"
						size="icon"
						class="border-primary-900/5 hover:bg-primary-900 hover:text-primary-50 dark:border-primary-50/10  dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 dark:hover:bg-primary-50 dark:hover:text-primary-900 md:from-primary-900/10 md:to-primary-900/5 bg-linear-to-br font-sans transition-all"
						on:click={togglePause}
					>
						<span class="sr-only">
							{paused ? 'Resume' : 'Pause'}
						</span>
						{#if !paused}
							<iconify-icon icon="material-symbols:play-arrow-rounded" class="text-2xl text-current"
							></iconify-icon>
						{:else}
							<iconify-icon icon="material-symbols:pause-rounded" class="text-2xl text-current"
							></iconify-icon>
						{/if}
					</Button>
				</div>
			</div>
		</div>
		<Button variant="default" class="w-fit " href="/works#logodesign">
			<T keyName="services-branding-cta" defaultValue="See some of my works!" />
		</Button>
	</div>
</section>

<style>
	.pattern-1 {
		background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='35.584' height='30.585' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23ffffff00'/><path d='M36.908 9.243c-5.014 0-7.266 3.575-7.266 7.117 0 3.376 2.45 5.726 5.959 5.726 1.307 0 2.45-.463 3.244-1.307.744-.811 1.125-1.903 1.042-3.095-.066-.811-.546-1.655-1.274-2.185-.596-.447-1.639-.894-3.162-.546-.48.1-.778.58-.662 1.06.1.48.58.777 1.06.661.695-.149 1.274-.066 1.705.249.364.265.546.645.562.893.05.679-.165 1.308-.579 1.755-.446.48-1.125.744-1.936.744-2.55 0-4.188-1.538-4.188-3.938 0-2.466 1.44-5.347 5.495-5.347 2.897 0 6.008 1.888 6.388 6.058.166 1.804.067 5.147-2.598 7.034a.868.868 0 00-.142.122c-1.311.783-2.87 1.301-4.972 1.301-4.088 0-6.123-1.952-8.275-4.021-2.317-2.218-4.7-4.518-9.517-4.518-4.094 0-6.439 1.676-8.479 3.545.227-1.102.289-2.307.17-3.596-.496-5.263-4.567-7.662-8.159-7.662-5.015 0-7.265 3.574-7.265 7.116 0 3.377 2.45 5.727 5.958 5.727 1.307 0 2.449-.463 3.243-1.308.745-.81 1.126-1.903 1.043-3.095-.066-.81-.546-1.654-1.274-2.184-.596-.447-1.639-.894-3.161-.546-.48.1-.778.58-.662 1.06.099.48.579.777 1.059.66.695-.148 1.275-.065 1.705.25.364.264.546.645.563.893.05.679-.166 1.307-.58 1.754-.447.48-1.125.745-1.936.745-2.549 0-4.188-1.539-4.188-3.939 0-2.466 1.44-5.345 5.495-5.345 2.897 0 6.008 1.87 6.389 6.057.163 1.781.064 5.06-2.504 6.96-1.36.864-2.978 1.447-5.209 1.447-4.088 0-6.124-1.952-8.275-4.021-2.317-2.218-4.7-4.518-9.516-4.518v1.787c4.088 0 6.123 1.953 8.275 4.022 2.317 2.218 4.7 4.518 9.516 4.518 4.8 0 7.2-2.3 9.517-4.518 2.151-2.069 4.187-4.022 8.275-4.022s6.124 1.953 8.275 4.022c2.318 2.218 4.701 4.518 9.517 4.518 4.8 0 7.2-2.3 9.516-4.518 2.152-2.069 4.188-4.022 8.276-4.022s6.123 1.953 8.275 4.022c2.317 2.218 4.7 4.518 9.517 4.518v-1.788c-4.088 0-6.124-1.952-8.275-4.021-2.318-2.218-4.701-4.518-9.517-4.518-4.103 0-6.45 1.683-8.492 3.556.237-1.118.304-2.343.184-3.656-.497-5.263-4.568-7.663-8.16-7.663z'  stroke-width='1' stroke='none' fill='%23ffb561ff'/><path d='M23.42 41.086a.896.896 0 01-.729-.38.883.883 0 01.215-1.242c2.665-1.887 2.764-5.23 2.599-7.034-.38-4.187-3.492-6.058-6.389-6.058-4.055 0-5.495 2.88-5.495 5.346 0 2.4 1.639 3.94 4.188 3.94.81 0 1.49-.265 1.936-.745.414-.447.63-1.076.58-1.755-.017-.248-.2-.629-.547-.893-.43-.315-1.026-.398-1.704-.249a.868.868 0 01-1.06-.662.868.868 0 01.662-1.059c1.523-.348 2.566.1 3.161.546.729.53 1.209 1.374 1.275 2.185.083 1.191-.298 2.284-1.043 3.095-.794.844-1.936 1.307-3.244 1.307-3.508 0-5.958-2.35-5.958-5.726 0-3.542 2.25-7.117 7.266-7.117 3.591 0 7.663 2.4 8.16 7.663.347 3.79-.828 6.868-3.344 8.656a.824.824 0 01-.53.182zm0-30.585a.896.896 0 01-.729-.38.883.883 0 01.215-1.242c2.665-1.887 2.764-5.23 2.599-7.034-.381-4.187-3.493-6.058-6.389-6.058-4.055 0-5.495 2.88-5.495 5.346 0 2.4 1.639 3.94 4.188 3.94.81 0 1.49-.266 1.936-.746.414-.446.629-1.075.58-1.754-.017-.248-.2-.629-.547-.894-.43-.314-1.026-.397-1.705-.248A.868.868 0 0117.014.77a.868.868 0 01.662-1.06c1.523-.347 2.566.1 3.161.547.729.53 1.209 1.374 1.275 2.185.083 1.191-.298 2.284-1.043 3.095-.794.844-1.936 1.307-3.244 1.307-3.508 0-5.958-2.35-5.958-5.726 0-3.542 2.25-7.117 7.266-7.117 3.591 0 7.663 2.4 8.16 7.663.347 3.79-.828 6.868-3.344 8.656a.824.824 0 01-.53.182zm29.956 1.572c-4.8 0-7.2-2.3-9.517-4.518-2.151-2.069-4.187-4.022-8.275-4.022S29.46 5.486 27.31 7.555c-2.317 2.218-4.7 4.518-9.517 4.518-4.8 0-7.2-2.3-9.516-4.518C6.124 5.486 4.088 3.533 0 3.533s-6.124 1.953-8.275 4.022c-2.317 2.218-4.7 4.518-9.517 4.518-4.8 0-7.2-2.3-9.516-4.518-2.152-2.069-4.188-4.022-8.276-4.022V1.746c4.8 0 7.2 2.3 9.517 4.518 2.152 2.069 4.187 4.022 8.275 4.022s6.124-1.953 8.276-4.022C-7.2 4.046-4.816 1.746 0 1.746c4.8 0 7.2 2.3 9.517 4.518 2.151 2.069 4.187 4.022 8.275 4.022s6.124-1.953 8.275-4.022c2.318-2.218 4.7-4.518 9.517-4.518 4.8 0 7.2 2.3 9.517 4.518 2.151 2.069 4.187 4.022 8.275 4.022s6.124-1.953 8.275-4.022c2.317-2.218 4.7-4.518 9.517-4.518v1.787c-4.088 0-6.124 1.953-8.275 4.022-2.317 2.234-4.717 4.518-9.517 4.518z'  stroke-width='1' stroke='none' fill='hsla(4.1,89.6%,58.4%,1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
	}

	.pattern-2 {
		background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='60' height='60' patternTransform='scale(0.5) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23ffffff00'/><path d='M0 0v19.563c3.22 0 5.766-1.242 7.008-4.829 1.034-3.103.417-5.793-1.653-8C3.337 4.716 2.495 2.313 2.527 0H0zm57.473 0c-.001 2.395-.95 4.806-2.88 6.873-2.068 2.207-2.62 5.105-1.585 8.209.896 2.69 3.757 4.48 6.992 4.48V0h-2.527zM30 10.438c-3.235 0-6.096 1.79-6.992 4.48-1.035 3.104-.483 6.002 1.586 8.209 1.93 2.067 2.877 4.478 2.879 6.873-.001 2.395-.95 4.806-2.88 6.873-2.068 2.207-2.62 5.105-1.585 8.209.896 2.69 3.757 4.48 6.992 4.48 3.22 0 5.766-1.241 7.008-4.828 1.034-3.103.417-5.793-1.653-8-2.018-2.018-2.86-4.421-2.828-6.734-.033-2.313.81-4.716 2.828-6.734 1.294-1.38 2.019-2.948 2.13-4.688.066-1.044-.09-2.15-.477-3.314-1.242-3.587-3.787-4.826-7.008-4.826zm30 30c-3.235 0-6.096 1.79-6.992 4.48-1.035 3.104-.483 6.002 1.586 8.209 1.93 2.067 2.877 4.478 2.879 6.873H60V40.437zm-60 .001V60h2.527c-.033-2.313.81-4.716 2.828-6.734 1.294-1.38 2.019-2.948 2.13-4.688.066-1.044-.09-2.15-.477-3.314C5.766 41.677 3.22 40.439 0 40.439z'  stroke-width='1' stroke='none' fill='%23ffb561ff'/><path d='M10.438 0c0 3.22 1.241 5.766 4.828 7.008 3.103 1.034 5.793.417 8-1.653 2.018-2.018 4.421-2.86 6.734-2.828 2.313-.033 4.716.81 6.734 2.828 1.38 1.294 2.948 2.019 4.688 2.13 1.044.066 2.15-.09 3.314-.477C48.323 5.766 49.562 3.22 49.562 0zm1.265 22.51c-1.8.09-3.45.79-4.83 2.084C4.806 26.524 2.395 27.47 0 27.473v5.054c2.313-.033 4.716.81 6.734 2.828 1.38 1.294 2.948 2.019 4.688 2.13 1.044.066 2.15-.09 3.314-.477 3.587-1.242 4.827-3.787 4.827-7.008 0-3.235-1.791-6.096-4.481-6.992-1.164-.388-2.298-.553-3.379-.498zm35.776 0a9.62 9.62 0 00-2.561.498c-2.69.896-4.48 3.757-4.48 6.992 0 3.22 1.241 5.766 4.828 7.008 3.103 1.034 5.793.417 8-1.653 2.018-2.018 4.421-2.86 6.734-2.828v-5.054c-2.395-.001-4.806-.95-6.873-2.88-1.38-1.292-3.027-1.992-4.828-2.083a8.191 8.191 0 00-.82 0zm-30 30a9.62 9.62 0 00-2.561.498c-2.69.896-4.48 3.757-4.48 6.992h39.124c0-3.235-1.79-6.096-4.48-6.992-3.104-1.035-6.002-.483-8.209 1.586-2.067 1.93-4.478 2.877-6.873 2.879-2.395-.001-4.806-.95-6.873-2.88-1.38-1.292-3.027-1.992-4.828-2.083a8.191 8.191 0 00-.82 0z'  stroke-width='1' stroke='none' fill='hsla(4.1,89.6%,58.4%,1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
	}
	.pattern-3 {
		background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='60' height='120' patternTransform='scale(0.5) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23ffffff00'/><path d='M3.78 59.68c-.63 0-1.25.12-1.88.32-1.25.4-1.9 1.05-1.9 1.9 0 .85.4 1.65 1.25 2.5l2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5c.85.85 1.9 1.45 3.15 1.9 1.25.45 2.5.4 3.75 0a7.72 7.72 0 003.15-1.9l2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 1.2-1.2v-7.6l-1.2-1.2-2.5-2.5-2.5-2.5c-.85-.85-1.65-1.25-2.5-1.25-.85 0-1.65.4-2.5 1.25l-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5c-.85.85-1.65 1.25-2.5 1.25-.85 0-1.65-.4-2.5-1.25l-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5A8.31 8.31 0 005.65 60a5.33 5.33 0 00-1.87-.32zM60 61.53c-.03.12-.05.24-.05.37 0 .17.02.33.05.49zM0 73.1v7.6l1.3-1.3c.85-.85 1.25-1.65 1.25-2.5 0-.85-.4-1.65-1.25-2.5zm6.25 32.55c-.85 0-1.65.4-2.5 1.25l-2.5 2.5c-.85.85-1.25 1.65-1.25 2.5 0 .85.65 1.45 1.9 1.9 1.25.45 2.7.65 4.4.65 1.65 0 3.15-.2 4.4-.65 1.25-.45 1.9-1.05 1.9-1.9 0-.85-.4-1.65-1.25-2.5-.95-.85-1.75-1.65-2.6-2.5-.85-.85-1.65-1.25-2.5-1.25z'  stroke-width='1' stroke='none' fill='%23ffb561ff'/><path d='M31.15 4.35c-1.55.05-3.05.25-4.3.65s-1.9 1.05-1.9 1.9c0 .85.4 1.65 1.25 2.5l2.5 2.5c.85.85 1.65 1.25 2.5 1.25.85 0 1.65-.4 2.5-1.25l2.5-2.5c.85-.85 1.25-1.65 1.25-2.5 0-.85-.65-1.45-1.9-1.9-1.25-.4-2.7-.65-4.4-.65zM8.72 24.7c-.62 0-1.25.1-1.87.3a7.73 7.73 0 00-3.15 1.9l-2.5 2.5L0 30.6v10.05l1.25-1.25 2.5-2.5c.85-.85 1.65-1.25 2.5-1.25.85 0 1.65.4 2.5 1.25l2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5c.85.85 1.65 1.25 2.5 1.25.85 0 1.65-.4 2.5-1.25l2.5-2.5c.85-.85 1.25-1.65 1.25-2.5 0-.85-.4-1.65-1.25-2.5l-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5A8.31 8.31 0 0010.6 25c-.63-.2-1.25-.3-1.88-.3zM60 30.5l-1.35 1.35-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5c-.85.85-1.25 1.65-1.25 2.5 0 .85.65 1.45 1.9 1.9 1.3.45 2.55.45 3.8 0a7.73 7.73 0 003.15-1.9l2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5L60 40.6zM31.25 64.4c-1.65 0-3.15.2-4.4.65-1.25.45-1.9 1.05-1.9 1.9 0 .85.4 1.65 1.25 2.5l2.5 2.5c.85.85 1.65 1.25 2.5 1.25.85 0 1.65-.4 2.5-1.25l2.5-2.5c.85-.85 1.25-1.65 1.25-2.5 0-.85-.65-1.45-1.9-1.9a12.54 12.54 0 00-4.3-.65zM8.72 84.68A7.73 7.73 0 003.7 86.9l-2.5 2.5L0 90.6v10.05l1.25-1.25 2.5-2.5c.85-.85 1.65-1.25 2.5-1.25.85 0 1.65.4 2.5 1.25l2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5c.85.85 1.65 1.25 2.5 1.25.85 0 1.65-.4 2.5-1.25l2.5-2.5c.85-.85 1.25-1.65 1.25-2.5 0-.85-.4-1.65-1.25-2.5l-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5A8.31 8.31 0 0010.6 85a5.36 5.36 0 00-1.88-.32zM60 90.5l-1.35 1.35-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5c-.85.85-1.25 1.65-1.25 2.5 0 .85.65 1.45 1.9 1.9 1.25.45 2.55.45 3.8 0a7.73 7.73 0 003.15-1.9l2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5L60 100.6z'  stroke-width='1' stroke='none' fill='hsla(4.1,89.6%,58.4%,1)'/><path d='M1.9 0C.65.4 0 1.05 0 1.9c0 .85.4 1.65 1.25 2.5l2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5 2.5c.85.85 1.9 1.45 3.15 1.9a6 6 0 003.75 0 7.72 7.72 0 003.15-1.9l2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 1.2-1.2v-7.6l-1.2-1.2-2.5-2.5-2.5-2.5c-.85-.85-1.65-1.25-2.5-1.25-.85 0-1.65.4-2.5 1.25l-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5-2.5 2.5c-.85.85-1.65 1.25-2.5 1.25-.85 0-1.65-.4-2.5-1.25l-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5-2.5A8.31 8.31 0 005.65 0zM60 1.53c-.03.12-.05.24-.05.37s.03.26.05.38zM0 13.1v7.6l1.3-1.3c.85-.85 1.25-1.65 1.25-2.5 0-.85-.4-1.65-1.25-2.5zm6.25 32.55c-.85 0-1.65.4-2.5 1.25l-2.5 2.5C.4 50.25 0 51.05 0 51.9c0 .85.65 1.45 1.9 1.9 1.25.4 2.7.65 4.4.65 1.65 0 3.15-.2 4.4-.65 1.25-.4 1.9-1.05 1.9-1.9 0-.85-.4-1.65-1.25-2.5-.95-.85-1.75-1.65-2.6-2.5-.85-.85-1.65-1.25-2.5-1.25zm-2.47 74.03c-.63 0-1.25.12-1.88.32h3.75a5.33 5.33 0 00-1.87-.32z'  stroke-width='1' stroke='none' fill='%23ffb561ff'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
	}
	.pattern-4 {
		background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.5) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23ffffff00'/><path d='M40 45a5 5 0 110-10 5 5 0 010 10zM0 45a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm40 0a5 5 0 110-10 5 5 0 010 10z'  stroke-width='1' stroke='none' fill='%23ffb561ff'/><path d='M20 25a5 5 0 110-10 5 5 0 010 10z'  stroke-width='1' stroke='none' fill='hsla(4.1,89.6%,58.4%,1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
	}
</style>
