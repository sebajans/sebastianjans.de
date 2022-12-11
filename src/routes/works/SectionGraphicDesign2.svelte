<script type="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';

	let scroll: number = 0;
	let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 4, windowHeight);
	// let srcRenaImg1 = 'img/website-rena-front-1.webp';
	// let srcRenaImg2 = 'img/website-rena-front-2.webp';
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="graphicdesign2"
	class="bg-primary-400/50 dark:bg-primary-900 w-full relative h-screen h-screen-ios overflow-hidden"
>
	<div class="md:ml-52 ml-6 mr-8 flex h-full md:flex-row flex-col items-center justify-center">
		<!-- <div class="w-full md:w-1/2 max-h-40 "> -->
		<img
			style:transform={`translate3d(calc(-100% + ${sectionScroll} * 100%),0, 0)`}
			alt="graphic-design-shirts"
			class="mb-4 object-contain rounded-lg w-auto h-auto max-h-[60%] md:max-h-[70%] max-w-[80%]"
			src="/graphicdesign/especimen-tipografico.webp"
		/>
		<!-- </div> -->

		<div
			class=" h-auto bottom-[10%] w-full md:w-1/2  text-justify"
			style:transform={`translate3d(calc(100% - ${sectionScroll} * 100%),0, 0)`}
		>
			<T
				keyName="works-p-especimen"
				defaultValue="This is a type specimen i made as a project for my university. The idea was to display a font type in a flattering way, in order to capture the essence of the font."
			/>
		</div>
	</div>
</section>
