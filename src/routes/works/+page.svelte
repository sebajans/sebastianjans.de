<script type="ts">
	import { mainClass } from '$lib/stores/mainClass';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { T, getTranslate } from '@tolgee/svelte';
	import ProgressBarWorks from '../../components/progressBarWorks.svelte';
	import { fly } from 'svelte/transition';
	import { sectionNames } from './sectionNames';
	import SectionWebRJ from './SectionWebRJ.svelte';
	import SectionWebKamado from './SectionWebKamado.svelte';
	import SectionLogos from './SectionLogos.svelte';
	import SectionGraphicDesignStuttgart from './SectionGraphicDesignStuttgart.svelte';
	import SectionGraphicDesign2 from './SectionGraphicDesign2.svelte';
	import SectionProductDesign from './SectionProductDesign.svelte';
	import SectionProductDesign2 from './SectionProductDesign2.svelte';

	// Tolgee t translation
	const t = getTranslate();

	// settings for Layout main class and Title
	pageTitle.set($t({ key: 'works-title', defaultValue: 'Works' }));
	mainClass.set('pt-0 pr-0 pl-0 md:pl-0');

	// function to scroll section ankerpoint into view
	function scrollIntoView({ target }: { target: any }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<section
	id="start"
	class="relative w-full md:pl-44 pt-28 flex flex-col md:flex-row items-center justify-center overflow-x-hidden min-h-screen h-screen h-screen-ios pb-24"
>
	<h2 class="text-left mx-4 md:ml-0 md:w-1/3 text-base mb-4 md:mb-0">
		<T
			keyName="intro-works"
			defaultValue="This section serves as a showcase of some of my previous works. My volatile past has allowed me to work in different areas of Design and gain experience throughout the industry."
		/>
	</h2>
	<div
		class="md:w-2/3 pl-4 md:pl-8 text-2xl md:text-3xl w-full font-sans space-y-4 mb-auto md:my-auto"
	>
		{#each sectionNames as item, i}
			<button
				on:click|preventDefault={scrollIntoView}
				in:fly={{ x: 100, duration: 400, delay: 100 * i }}
				href="#{item.id}"
				alt={item.id}
				class="md:py-4 py-2 backdrop-blur-md  duration-300 delay-[50] rounded-l-lg text-left w-full pl-3 transition-all {item.color} "
			>
				<T keyName="{item.text}-works" defaultValue={item.text} />
			</button>
		{/each}
	</div>
</section>

<SectionWebRJ />
<SectionWebKamado />
<SectionLogos />
<SectionGraphicDesignStuttgart />
<SectionGraphicDesign2 />
<SectionProductDesign />
<SectionProductDesign2 />
