<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	
	import { fly } from 'svelte/transition';
	
	import SvelteSeo from 'svelte-seo';
	
	import { workSectionNames } from '$lib/lists/workSectionNames';
	import WorksHeader from '../../components/WorksHeader.svelte';
	
	import SectionWebRJ from './SectionWebRJ.svelte';
	import SectionWebKamado from './SectionWebKamado.svelte';
	import SectionWebDMaier from './SectionWebDMaier.svelte';
	import SectionLogos from './SectionLogos.svelte';
	import SectionGraphicDesignStuttgart from './SectionGraphicDesignStuttgart.svelte';
	import SectionGraphicDesign2 from './SectionGraphicDesign2.svelte';
	import SectionGraphicDesign3 from './SectionGraphicDesign3.svelte';
	import SectionProductDesign2 from './SectionProductDesign2.svelte';
	import SectionProductDesignCup from './SectionProductDesignCup.svelte';
	import SectionEnd from './SectionEnd.svelte';

	import IntersectionObserver from 'svelte-intersection-observer';
	import { scrollIntoView } from '$lib/functions/scrollIntoView';

	import T from '@tolgee/svelte/T.svelte'; // change import statement
	import { getTranslate } from '@tolgee/svelte';

	const { t } = getTranslate(); // Tolgee t translation


	pageTitle.set($t({ key: 'works-title', defaultValue: 'Works' }));

	let scroll: number = 0;
	let windowHeight: number = 0;

	let elementWeb: HTMLElement;
	let intersectingWeb: boolean;
	let elementLogo: HTMLElement;
	let intersectingLogo: boolean;
	let elementGraphicDesign: HTMLElement;
	let intersectingGraphicDesign: boolean;
	let elementProduct: HTMLElement;
	let intersectingProduct: boolean;
	
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
	class="px-4 relative w-full flex min-h-[calc(100svh_-_3.5rem)] md:min-h-[calc(100vh_-_7rem)]"
>
	<div class="flex w-full my-auto flex-col md:flex-row items-center justify-start">
		<p class="text-left md:w-1/2 text-base mb-4 md:mb-0">
			<T
				keyName="intro-works"
				defaultValue="This section serves as a showcase of some of my previous works. My volatile past has allowed me to work in different areas of Design and gain experience throughout the industry."
			/>
		</p>
		<div
			class="md:w-1/2 text-2xl md:text-3xl w-full pl-4 flex flex-col font-sans space-y-4 mb-auto md:my-auto"
		>
			{#each workSectionNames as section, i}
				<button
					style="width:{`calc(100% - ${i * 16}px)`}"
					on:click|preventDefault={() => scrollIntoView(section.id, section.start*500)}
					in:fly|global={{ x: 100, duration: 400, delay: 100 * i }}
					class="dark:text-primary-50 md:py-4 ml-auto py-2 backdrop-blur-md duration-300 delay-75 rounded-lg text-left pl-3 transition-all {section.color} "
				>
					<T keyName="works-{section.id}" defaultValue={section.text} />
				</button>
			{/each}
		</div>
	</div>
</section>

<div class="fixed md:block top-0 h-0 w-20 right-0 z-30" />

<WorksHeader show={intersectingWeb} backgroundColor="bg-primary-200/60 dark:bg-primary-700/60">
	<T keyName="works-webdev" defaultValue="Webdesign" />
</WorksHeader>

<IntersectionObserver element={elementWeb} bind:intersecting={intersectingWeb}>
	<div bind:this={elementWeb}>
		<SectionWebRJ />
		<SectionWebKamado {scroll} {windowHeight} />
		<SectionWebDMaier />
	</div>
</IntersectionObserver>

<WorksHeader show={intersectingLogo} backgroundColor="bg-primary-300/60 dark:bg-primary-600/60">
	<T keyName="works-logodesign" defaultValue="Logo Design" />
</WorksHeader>

	
<IntersectionObserver element={elementLogo} bind:intersecting={intersectingLogo}>
	<div bind:this={elementLogo}>
		<SectionLogos />
	</div>
</IntersectionObserver>


<WorksHeader  show={intersectingGraphicDesign} backgroundColor="bg-primary-400/60 dark:bg-primary-500/60">
	<T keyName="works-graphicdesign" defaultValue="Graphic Design" />
</WorksHeader>
	
<IntersectionObserver element={elementGraphicDesign} bind:intersecting={intersectingGraphicDesign}>
	<div bind:this={elementGraphicDesign}>
		<SectionGraphicDesignStuttgart />
		<SectionGraphicDesign2 />
		<SectionGraphicDesign3 />
	</div>
</IntersectionObserver>

<WorksHeader show={intersectingProduct} backgroundColor="bg-primary-500/60 dark:bg-primary-400/60">
	<T keyName="works-productdesign" defaultValue="Product Design" />
</WorksHeader>
	
<IntersectionObserver element={elementProduct} bind:intersecting={intersectingProduct}>
	<div bind:this={elementProduct}>
		<SectionProductDesign2 />
		<SectionProductDesignCup />
	</div>
</IntersectionObserver>

<SectionEnd /> 
