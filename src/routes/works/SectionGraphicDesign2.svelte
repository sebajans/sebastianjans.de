<script lang="ts">
	import T from '@tolgee/svelte/T.svelte'; // change import statement

	import { scrollInSection } from '../../components/scrollInSection';

	export let scroll: number;
	export let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 4, windowHeight);
</script>

<section id="graphicdesign2" class="relative">
	<div
		class="max-w-4xl flex w-full h-works md:h-worksmd md:flex-row mx-auto flex-col my-auto items-center justify-center"
	>
		<img
			width="448"
			height="640"
			alt="especimen-tipografico"
			class="mb-4 md:mr-4 object-contain rounded-lg w-1/2 h-auto"
			src="/graphicdesign/especimen-tipografico.webp"
		/>
		<p class=" h-auto w-full md:w-1/2 text-justify">
			<T
				keyName="works-p-especimen"
				defaultValue="This is a type specimen i made as a project for my university. The idea was to display a font type in a flattering way, in order to capture the essence of the font."
			/>
		</p>
	</div>
</section>
