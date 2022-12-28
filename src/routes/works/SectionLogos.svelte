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
	<div class="my-auto h-auto w-screen">
		<div class="md:ml-40 flex justify-center">
			<p class="max-w-4xl my-4 px-3 md:mx-auto md:text-right text-left w-full ">
				<T
				keyName="logo-design-paragraph"
				defaultValue="These logotypes show some of my previous logo design works."
				/>
			</p>
		</div>
		<div class="h-[calc(100vh_-_5.5rem)] w-full grid grid-rows-3 justify-center">
			{#each rows as row, i}
			<!-- style:transform={`translate3d(calc(${row.movement} * ${sectionScroll}%),0, 0)`} -->
				<div
					class="relative flex gap-5 md:gap-10 "
				>
					{#each (LogoItems.slice(i*3,(i*3)+3).sort(() => row.randomnumber - Math.random())) as logo}
						<div
							style:background-image={$nightMode ? `url('${logo.imageDark}')` : `url('${logo.image}')`}
							class="{logo.class} transform bg-contain bg-no-repeat bg-center bg-origin-content rounded-md shadow-lg shadow-primary-400/60 dark:shadow-primary-600/50 w-[25vh] h-[25vh] aspect-square p-4 md:p-8"
						/>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>
