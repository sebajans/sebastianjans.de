<script type="ts">
	import { mainClass } from '$lib/stores/mainClass';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { T, getTranslate } from '@tolgee/svelte';
	import { onMount } from 'svelte';
	import ProgressBarWorks from '../../components/progressBarWorks.svelte';
	// import viewport from '../../components/createViewportAction';
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

	// function to scroll section ankerpoint into view								-- put into component?
	function scrollIntoView({ target }: { target: any }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	// scroll animations
	// let scroll:any;
	// let windowHeight:number;
	// // $: windowHeight
	// onMount(async () => {
	// 	windowHeight = windowHeight;
	// 	return windowHeight;
	// });

	// https://stackoverflow.com/questions/23841494/how-do-i-use-both-math-max-and-math-min-to-bound-my-dragger
</script>

<!-- <svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} /> -->

<!-- {#each sectionNames as { text, start, end }}
	<ProgressBarWorks sectionTitle={text} {sectionHeight} {start} {end} />
{/each} -->

<section
	id="start"
	class="relative w-full pt-28 overflow-x-hidden h-screen h-screen-ios"
>
	<div class="md:pl-44 container mx-auto">
		<h2 class="text-justify mx-4 sm:ml-0 lg:w-1/2 text-base md:pb-10 pb-4 ">
			<T
				keyName="intro-works"
				defaultValue="This section serves as a showcase of some of my previous works. My volatile past has allowed me to work in different areas of Design and gain experience throughout the industry."
			/>
		</h2>
	</div>
	<div
		class="container ml-auto relative pl-4 md:pl-44 text-2xl md:text-5xl w-full
					  z-20 font-sans space-y-4"
	>
	<!-- on:click|preventDefault={scrollIntoView} -->
		{#each sectionNames as item, i}
			<button
				in:fly={{ x: 100, duration: 400, delay: 100 * i }}
				href="#{item.id}"
				alt={item.id}
				class="md:py-4 py-2 backdrop-blur-md  duration-300 rounded-l-lg text-left w-full pl-3 transition-all {item.color} "
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