<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';

	let scroll: number = 0;
	let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 3, windowHeight);
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="graphicdesign"
	class=" bg-primary-400/50 dark:bg-primary-500/50 w-full flex flex-col items-end h-screen h-screen-ios overflow-hidden "
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
		class="w-full px-3 max-w-4xl mt-4 h-[calc(100vh_-_6rem)] max-h-[56rem] mx-auto my-auto grid grid-cols-9 grid-rows-12 md:grid-cols-12 md:grid-rows-9 gap-6"
	>
		<div
			style:transform={`translate3d(calc(-100% + ${sectionScroll} * 100%),calc(75% - ${sectionScroll} * 75%), 0)`}
			class="md:row-[1_/_span_5] md:col-[1_/_span_6] row-[4_/_span_6] col-[1_/_span_7] w-full"
		>
			<img
				alt="graphic-design-shirts"
				class="object-contain rounded-lg"
				src="/graphicdesign/graphic-shirts.webp"
			/>
		</div>
		<div
			style:transform={`translate3d(0,calc(-20% + ${sectionScroll} * 20%), 0)`}
			class="self-center row-[9_/_span_3] col-[1_/_span_9] w-full md:row-[6_/_span_6] md:col-[3_/_span_9]"
		>
			<img class="scale-125 md:scale-100" alt="graphic-design-table" src="/graphicdesign/table.svg" />
		</div>
		<div
			style:transform={`translate3d(calc(100% - ${sectionScroll} * 100%),0, 0)`}
			class="row-[7_/_span_5] col-[2_/_span_4] md:row-[6_/_span_4] md:col-[4_/_span_4] w-full self-center md:self-start"
		>
			<img
				alt="graphic-design-innerside"
				class="object-contain self-start rounded-lg"
				src="/graphicdesign/graphic-innerside.webp"
			/>
		</div>
		<div
			style:transform={`translate3d(calc(-100% + ${sectionScroll} * 100%),0, 0)`}
			class="row-[5_/_span_5] self-end col-[6_/_span_3] md:row-[4_/_span_4] md:col-[8_/_span_3] w-full sm:self-end"
		>
			<img
				alt="graphic-design-outerside"
				class="object-contain rounded-lg"
				src="/graphicdesign/graphic-outerside.webp"
			/>
		</div>
		<div
			class="row-[1_/_span_3] col-[1_/_span_9] transform md:row-[1_/_span_2] md:col-[8_/_span_5] w-full text-justify"
			style:transform={`translate3d(0,calc(100% - ${sectionScroll} * 100%), 0)`}
		>
			<T
				keyName="works-p-fachschaft"
				defaultValue="This flyer was made for my student union in order to attract more people into the world of materials science. The University branding guidelines "
			/>
		</div>
	</div>
</section>
