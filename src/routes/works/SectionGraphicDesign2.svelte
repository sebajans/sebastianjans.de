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
	class="bg-primary-400/50 dark:bg-primary-500/50 w-full relative h-screen h-screen-ios overflow-hidden "
>
	<div class="md:ml-52 ml-6 mr-6 flex h-full md:flex-row flex-col items-center justify-center">
		<div class="w-full md:w-1/2">
			<img
				alt="graphic-design-shirts"
				class="object-contain rounded-lg"
				src="/graphicdesign/especimen-tipografico.webp"
			/>
		</div>

		<div
			class=" h-auto right-0 bottom-[10%] px-12 w-full md:w-1/2  text-justify"
			style:transform={`translate3d(0,calc(100% - ${sectionScroll} * 100%), 0)`}
		>
			<T
				keyName="works-p-especimen"
				defaultValue="This is a type specimen i made as a project for my university. The idea was to display a font type in a flattering way, in order to capture the essence of the font."
			/>
		</div>
	</div>
</section>
