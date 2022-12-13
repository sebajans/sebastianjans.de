<script type="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';

	let scroll: number = 0;
	let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 3, windowHeight);
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="graphicdesign"
	class=" bg-primary-400/50 dark:bg-primary-500/50 w-full relative h-screen h-screen-ios overflow-hidden md:pl-44 pl-6"
>
	<div class="w-full h-auto flex flex-row mt-4 md:mt-24">
		<div class="w-[calc(100vw_-_56rem)] h-auto" />
		<div class="max-w-4xl w-full">
			<h2
				class="bg-primary-400 dark:bg-primary-500 md:text-right w-fit ml-auto text-left pr-8 pl-3 rounded-l-md font-sans py-3 text-4xl "
			>
				<T keyName="works-graphicdesign" defaultValue="Graphic Design" />
			</h2>
		</div>
		<div class="w-[calc(100vw_-_56rem)] h-auto bg-primary-400 dark:bg-primary-500" />
	</div>

	<div
		class="relative flex flex-col h-[calc(100vh_-_10rem)] mx-auto my-auto justify-center max-w-4xl "
	>
		<div
			class=" z-0 h-auto top-28 mr-0 ml-auto mt-4 px-8 md:w-2/5 max-w-2xl text-justify"
			style:transform={`translate3d(0,calc(100% - ${sectionScroll} * 100%), 0)`}
		>
			<T
				keyName="works-p-fachschaft"
				defaultValue="This flyer was made for my student union in order to attract more people into the world of materials science. The University branding guidelines "
			/>
		</div>
		<div
			style:transform={`translate3d(calc(-100% + ${sectionScroll} * 100%),calc(75% - ${sectionScroll} * 75%), 0)`}
			class="bottom-[35%] md:bottom-[30%] w-3/4 sm:w-2/3 sm:bottom-[25%] md:w-[60%] md:left-8 absolute"
		>
			<img
				alt="graphic-design-shirts"
				class="object-contain rounded-lg"
				src="/graphicdesign/graphic-shirts.webp"
			/>
		</div>
		<div class=" w-full ml-auto h-full md:w-3/4  relative">
			<div
				style:transform={`translate3d(calc(-100% + ${sectionScroll} * 100%),0, 0)`}
				class="bottom-[25%] w-1/3 max-w-xs max-h-md md:w-[30%] md:right-[10%] right-[10%] absolute z-20"
			>
				<img
					alt="graphic-design-outerside"
					class="object-contain rounded-lg"
					src="/graphicdesign/graphic-outerside.webp"
				/>
			</div>
			<div
				style:transform={`translate3d(calc(100% - ${sectionScroll} * 100%),0, 0)`}
				class="bottom-[24%] w-1/2 max-w-lg md:left-[10%] left-[6%] absolute z-10"
			>
				<img
					alt="website-rena-front-1"
					class="object-contain rounded-lg"
					src="/graphicdesign/graphic-innerside.webp"
				/>
			</div>

			<div
				style:transform={`translate3d(0,calc(-20% + ${sectionScroll} * 20%), 0)`}
				class="-bottom-[2%] w-full right-[3%] absolute"
			>
				<img alt="website-rena-front-1" src="/graphicdesign/table.svg" />
			</div>
		</div>
	</div>
</section>
