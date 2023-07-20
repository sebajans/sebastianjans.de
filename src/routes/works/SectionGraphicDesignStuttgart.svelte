<script lang="ts">
	import T from '@tolgee/svelte/T.svelte'; // change import statement

	import { scrollInSection } from '../../components/scrollInSection';
	export let scroll: number;
	export let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 3, windowHeight);
</script>

<!-- style="background:radial-gradient(at right top, var(--tw-gradient-from) 0%, transparent 30%);"
bg-gradient-to-bl overflow-hidden from-primary-400/50 dark:from-primary-500/30  -->
<section id="graphicdesign" class="flex flex-col items-end ">
	<div
		class="w-full p-4 max-w-4xl  h-works md:h-worksmd mx-auto my-auto grid grid-cols-9 grid-rows-12 md:grid-cols-12 md:grid-rows-9 gap-6"
	>
		<div
			style:transform={`translate3d(calc(-100% + ${sectionScroll} * 100%),calc(75% - ${sectionScroll} * 75%), 0)`}
			class="md:row-[1_/_span_5] md:col-[1_/_span_6] row-[4_/_span_6] col-[1_/_span_7] w-full"
		>
			<img
				width="420"
				height="390"
				alt="graphic-design-shirts"
				class="object-contain rounded-lg"
				src="/graphicdesign/graphic-shirts.webp"
			/>
		</div>
		<div
			style:transform={`translate3d(0,calc(-20% + ${sectionScroll} * 20%), 0)`}
			class="self-center row-[9_/_span_3] col-[1_/_span_9] w-full md:row-[6_/_span_6] md:col-[3_/_span_9]"
		>
			<img
				width="642"
				height="388"
				class="scale-125 md:scale-100"
				alt="graphic-design-table"
				src="/graphicdesign/table.svg"
			/>
		</div>
		<div
			style:transform={`translate3d(calc(100% - ${sectionScroll} * 100%),0, 0)`}
			class="row-[7_/_span_5] col-[2_/_span_4] md:row-[6_/_span_4] md:col-[4_/_span_4] w-full self-center md:self-start"
		>
			<img
				width="272"
				height="116"
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
				width="198"
				height="208"
				alt="graphic-design-outerside"
				class="object-contain rounded-lg"
				src="/graphicdesign/graphic-outerside.webp"
			/>
		</div>
		<p
			class="row-[1_/_span_3] col-[1_/_span_9] h-min box-content transform md:row-[1_/_span_2] md:col-[8_/_span_5] text-justify"
			style:transform={`translate3d(0,calc(100% - ${sectionScroll} * 100%), 0)`}
		>
			<T
				keyName="works-p-fachschaft"
				defaultValue="This flyer was made for my student union in order to attract more people into the world of materials science. The University branding guidelines "
			/>
		</p>
	</div>
</section>
