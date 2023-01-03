<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';
	import { LogoItems } from './logoitems';
	import { nightMode } from '$lib/stores/nightMode';
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
	let id
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="logodesign"
	class="bg-primary-300/50 dark:bg-primary-600/50 w-full flex flex-col items-end h-screen h-screen-ios overflow-hidden"
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
	<div class="my-auto mx-auto h-auto max-w-4xl flex flex-col items-center justify-center">
		<div class="md:ml-40 flex justify-center">
			<p class="max-w-4xl my-4 px-3 md:mx-auto md:text-center text-left w-full">
				<T
				keyName="logo-design-paragraph"
				defaultValue="These logotypes show some of my previous logo design works."
				/>
			</p>
		</div>
		<div class="max-h-[calc(100vh_-_5.5rem)] w-full gap-5 grid grid-rows-3 grid-cols-3 justify-center">
			<!-- style:transform={`translate3d(calc(${row.movement} * ${sectionScroll}%),0, 0)`} -->
					{#each (LogoItems.sort(() => Math.random())) as logo, i}
						<div bind:this={id} on:keydown on:click={() => centerImage =! centerImage}
							style:background-image={$nightMode ? `url('${logo.imageDark}')` : `url('${logo.image}')`}
							class="{logo.class} {centerImage ? 'absolute' : '[&:not(:last-child)]:bg-primary-400'} group opacity-50 hover:opacity-100 group-hover:bg-primary-400 transform hover:shadow-inner bg-contain bg-no-repeat bg-center bg-origin-content rounded-md shadow- lg w-[20vh] h-[20vh] aspect-square p-2 md:p-4 duration-200 transition-all"
						/>
						<!-- <div>{id}{i}</div> -->
					{/each}
					<!-- ON CLICK: -->
					<!-- position absolute center -->
					<!-- check if ID is the same otherwise -->
		</div>
	</div>
</section>
