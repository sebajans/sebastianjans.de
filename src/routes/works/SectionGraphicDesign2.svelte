<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';

	let scroll: number = 0;
	let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 4, windowHeight);
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />
<!-- bg-primary-400/50 dark:bg-primary-900 -->
<section
	id="graphicdesign2"
	class=" w-full relative h-screen h-screen-ios overflow-hidden md:pl-44 px-6"
>
	<div class=" max-w-4xl flex w-full h-full md:px-0 md:flex-row sm:mx-auto flex-col my-auto items-center justify-center">
		<!-- <div class="w-full md:w-1/2 max-h-40 "> -->
		<img
			style:transform={`translate3d(calc(-100% + ${sectionScroll} * 100%),0, 0)`}
			alt="especimen-tipografico"
			class="mb-4 md:mr-4 object-contain rounded-lg w-1/2 h-auto max-h-[60%] md:max-h-[70%] max-w-[80%]"
			src="/graphicdesign/especimen-tipografico.webp"
		/>


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
