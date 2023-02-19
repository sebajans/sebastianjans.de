<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';

	export let scroll: number;
	export let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 4, windowHeight);
</script>

<section
	id="graphicdesign2"
	class="w-full relative h-screen h-screen-ios overflow-hidden md:pl-44 px-6"
>
	<div
		class="max-w-4xl flex w-full h-works md:h-worksmd md:px-0 md:flex-row sm:mx-auto flex-col mx-auto my-auto items-center justify-center"
	>
		<!-- style:transform={`translate3d(calc(-100% + ${sectionScroll} * 100%),0, 0)`} -->
		<p class=" h-auto w-full pr-4 md:w-1/2 text-justify">
			<T
				keyName="works-p-especimen"
				defaultValue="This is a type specimen i made as a project for my university. The idea was to display a font type in a flattering way, in order to capture the essence of the font."
			/>
		</p>
		<div
			class="w-1/3 h-1/3"
			style="perspective: 8rem; perspective-origin: 50% 50%; transition-property: opacity, transform;"
		>
			<div
				style="transform-style: preserve-3d; transform: translateZ(20px);"
				class=" relative w-full h-full transition-all transform duration-1000 "
			>
				<div
					style="transform: translateZ(-10px) translateY(940%) rotateY(-5deg) rotateX(90deg)"
					class="bg-gradient-to-t from-primary-800/40 via-primary-800/90 to-primary-800/40 blur-[6px] absolute h-8 z-0 w-full"
				/>
				<img
					style="transform: rotateY(-5deg)"
					alt="especimen-tipografico"
					class="absolute object-contain h-full z-10"
					src="/graphicdesign/Ceramic-tile.webp"
				/>
			</div>
		</div>
		<!-- style:transform={`translate3d(calc(100% - ${sectionScroll} * 100%),0, 0)`} -->
	</div>
</section>
