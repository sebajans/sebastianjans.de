<script type="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';
	import { LogoItems } from './logoitems';

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
	<h1
		class="bg-primary-300 dark:bg-primary-600 md:text-right w-fit ml-auto text-left pr-8 pl-4 rounded-l-md font-sans py-3 text-4xl mt-4 md:mt-24"
	>
		Logo Design
	</h1>
	<p class="my-4 mr-8 md:w-2/3 md:text-right text-left w-full">
		<T
			keyName="logo-design-paragraph"
			defaultValue="These logotypes show some of my previous logo design works."
		/>
	</p>
	<div class=" h-full w-full grid grid-rows-3 gap-y-8 md:gap-y-20">
		{#each rows as row}
			<div
				style:transform={`translate3d(calc(${row.movement} * ${sectionScroll}%),0, 0)`}
				class="relative flex space-x-8 md:space-x-10 "
			>
				{#each LogoItems.sort(() => row.randomnumber - Math.random()) as logo}
					<div
						class="{logo.class} transform bg-contain bg-no-repeat bg-center bg-origin-content rounded-md shadow-lg shadow-primary-400/60 dark:shadow-primary-600/50 h-full aspect-square w-full md:w-[30vh] md:h-[30vh] p-4 md:p-8"
					/>
				{/each}
			</div>
		{/each}
	</div>
</section>
