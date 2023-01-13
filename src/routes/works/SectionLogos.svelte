<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';
	import { LogoItems } from './logoitems';
	import { nightMode } from '$lib/stores/nightMode';
	import { fly } from 'svelte/transition';
	let scroll: number = 0;
	let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 3, windowHeight);

	const rows = [
		{
			movement: '-10% + 10',
			randomnumber: 0.5
		},
		{
			movement: '0% - 10',
			randomnumber: 0.55
		},
		{
			movement: '-10% + 10',
			randomnumber: 0.45
		}
	];
	let centerImage:boolean = false
	


	function centerTheImage(i:number, id:number) {
		if (i === id) {
			return centerImage = !centerImage
		}
	}
	function centerTheImage2() {
			centerImage = !centerImage
	}

</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="logodesign"
	class="bg-primary-300/50 dark:bg-primary-600/50 w-full flex flex-col items-end h-screen h-screen-ios overflow-hidden md:pl-52"
>
	<div class="w-full h-auto flex flex-row mt-4 md:mt-24">
		<div class="w-[calc(100vw_-_56rem)] h-auto" />
		<div class="max-w-4xl w-full">
			<h2
				class="bg-primary-300 dark:bg-primary-600 md:text-right w-fit ml-auto text-left pr-8 pl-3 rounded-l-md font-sans py-3 text-4xl "
			>
				<T keyName="works-logodesign" defaultValue="Logo Design" />
			</h2>
		</div>
		<div class="w-[calc(100vw_-_56rem)] h-auto bg-primary-300 dark:bg-primary-600" />
	</div>
	<div class="relative my-auto mx-auto h-auto max-w-4xl w-full flex flex-col items-end justify-center">
			<p class="max-w-4xl my-4 px-3 md:text-right text-left w-full">
				<T
				keyName="logo-design-paragraph"
				defaultValue="These logotypes show some of my previous logo design works."
				/>
			</p>
		<ul class="max-h-[calc(100vh_-_5.5rem)] h-full group w-auto gap-5 grid grid-rows-3 grid-cols-3 justify-center items-center transition-all duration-150">
					{#each (LogoItems.sort(() => Math.random())) as logo, i}
					<li in:fly={{delay: i*50, y: 20, duration: 50}} class="transition-all duration-200">

						<button on:keydown on:click
							style:background-image={$nightMode ? `url('${logo.imageDark}')` : `url('${logo.image}')`}
							class=" {centerImage ? 'absolute left-0 top-0' : 'relative'} bg-contain bg-no-repeat bg-center bg-origin-content w-[15vh] md:w-[20vh] aspect-square p-2 md:p-4 duration-200 transition-all"
							/>
							{#if centerImage}
							<div class="absolute bg-primary-400 w-full left-1/2 top-1/2">
								test
							</div>
							{/if}
						</li>

					{/each}
					<!-- ON CLICK: -->
					<!-- position absolute center -->
					<!-- check if ID is the same otherwise -->
					</ul>
	</div>
</section>

<style>
	ul:hover li {
		@apply blur-[2px] opacity-60 scale-90

	}
	ul li:hover {
		@apply blur-0 opacity-100 scale-100
	}
</style>