<script lang="ts">
	import { mainClass } from '$lib/stores/mainClass';
	import { pageTitle } from '$lib/stores/pageTitle';
	import T from '@tolgee/svelte/T.svelte'; // change import statement
	import { getTranslate } from '@tolgee/svelte';
	import { fly } from 'svelte/transition';
	import { sectionNames } from './sectionNames';
	import SvelteSeo from 'svelte-seo';
	import WorksHeader from '../../components/WorksHeader.svelte';
	// import Lazy from '../../components/Lazy.svelte';
	import SectionWebRJ from './SectionWebRJ.svelte';
	import SectionWebKamado from './SectionWebKamado.svelte';
	import SectionLogos from './SectionLogos.svelte';
	import SectionGraphicDesignStuttgart from './SectionGraphicDesignStuttgart.svelte';
	import SectionGraphicDesign2 from './SectionGraphicDesign2.svelte';
	import SectionGraphicDesign3 from './SectionGraphicDesign3.svelte';
	import SectionProductDesign2 from './SectionProductDesign2.svelte';
	import SectionProductDesignCup from './SectionProductDesignCup.svelte';
	import SectionEnd from './SectionEnd.svelte';
	// import component from 'svelte-seo';

	const { t } = getTranslate(); // Tolgee t translation

	// let workSections: { name: string; path: string }[] = [
	// 	{
	// 		name: 'SectionWebRJ',
	// 		path: './SectionWebRJ.svelte'
	// 	},
	// 	{
	// 		name: 'SectionWebKamado',
	// 		path: './SectionWebKamado.svelte'
	// 	},
	// 	{
	// 		name: 'SectionLogos',
	// 		path: './SectionLogos.svelte'
	// 	},
	// 	{
	// 		name: 'SectionGraphicDesignStuttgart',
	// 		path: './SectionGraphicDesignStuttgart.svelte'
	// 	},
	// 	{
	// 		name: 'SectionGraphicDesign2',
	// 		path: './SectionGraphicDesign2.svelte'
	// 	},
	// 	{
	// 		name: 'SectionGraphicDesign3',
	// 		path: './SectionGraphicDesign3.svelte'
	// 	},
	// 	{
	// 		name: 'SectionProductDesign2',
	// 		path: './SectionProductDesign2.svelte'
	// 	},
	// 	{
	// 		name: 'SectionProductDesignCup',
	// 		path: './SectionProductDesignCup.svelte'
	// 	},
	// 	{
	// 		name: 'SectionEnd',
	// 		path: './SectionEnd.svelte'
	// 	}
	// ];

	// settings for Layout main class and Title
	pageTitle.set($t({ key: 'works-title', defaultValue: 'Works' }));

	// mainClass.set('pt-0 pr-0 pl-0 md:pl-0 min-h-screen');
	mainClass.set('mr-0 !ml-0 w-screen');

	// function to scroll section ankerpoint into view

	function scrollIntoView(target: string) {
		var el = document.getElementById(target);
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	let scroll: number = 0;
	let windowHeight: number = 0;
</script>

<svelte:head>
	<title>{$pageTitle}</title>
	<meta name="description" content="Overview of the Works of Sebastian Jans." />
</svelte:head>
<SvelteSeo
	title="Sebastian Jans | Welcome"
	description="Overview of the Design works of Sebastian Jans"
	keywords="Freelance product design, minimalistic logo design, front-end svelte development, custom webdesign solutions, diseñador de productos"
/>
<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />
<section
	id="start"
	class="relative w-screen flex min-h-[calc(100dvh_-_3.5rem)] md:min-h-[calc(100dvh_-_7rem)]"
>
	<div class="flex w-full my-auto flex-col md:flex-row items-center justify-start">
		<h2 class="text-left mx-4 md:w-1/2 text-base mb-4 md:mb-0">
			<T
				keyName="intro-works"
				defaultValue="This section serves as a showcase of some of my previous works. My volatile past has allowed me to work in different areas of Design and gain experience throughout the industry."
			/>
		</h2>
		<div
			class="md:w-1/2 text-2xl md:text-3xl w-full pl-4 flex flex-col font-sans space-y-4 mb-auto md:my-auto"
		>
			{#each sectionNames as section, i}
				<button
					style="width:{`calc(100% - ${i * 16}px)`}"
					on:click|preventDefault={() => scrollIntoView(section.id)}
					in:fly|global={{ x: 100, duration: 400, delay: 100 * i }}
					class="md:py-4 ml-auto py-2 backdrop-blur-md duration-300 delay-[50] rounded-lg text-left pl-3 transition-all {section.color} "
				>
					<T keyName="works-{section.id}" defaultValue={section.text} />
				</button>
			{/each}
		</div>
	</div>
</section>

<div class="fixed top-0 h-0 w-20 right-0 z-30" />
<WorksHeader backgroundColor="bg-primary-200/70 dark:bg-primary-700/70">
	<T keyName="works-webdev" defaultValue="Webdesign" />
</WorksHeader>
<SectionWebRJ {scroll} {windowHeight} />
<SectionWebKamado {scroll} {windowHeight} />
<WorksHeader backgroundColor="bg-primary-300/70 dark:bg-primary-600/70">
	<T keyName="works-logodesign" defaultValue="Logo Design" />
</WorksHeader>
<SectionLogos />
<WorksHeader backgroundColor="bg-primary-400/70 dark:bg-primary-500/70">
	<T keyName="works-graphicdesign" defaultValue="Graphic Design" />
</WorksHeader>
<SectionGraphicDesignStuttgart {scroll} {windowHeight} />
<SectionGraphicDesign2 {scroll} {windowHeight} />
<SectionGraphicDesign3 />
<WorksHeader backgroundColor="bg-primary-500/70 dark:bg-primary-400/70">
	<T keyName="works-productdesign" defaultValue="Product Design" />
</WorksHeader>
<SectionProductDesign2 />
<SectionProductDesignCup {scroll} {windowHeight} />
<SectionEnd />
