<script lang="ts">

	import { pageTitle } from '$lib/stores/pageTitle';
	import Button from '$lib/components/ui/button/button.svelte';
	import { fly } from 'svelte/transition';

	import SvelteSeo from 'svelte-seo';

	import { workSectionNames } from '$lib/lists/workSectionNames';
	import WorksHeader from '$components/WorksHeader.svelte';

	import SectionWebRR from './SectionWebRR.svelte';
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
	// TODO: Brazie needs content
	import SectionWebBrazie from './SectionWebBrazie.svelte';

	import IntersectionObserver from 'svelte-intersection-observer';
	import { scrollIntoView } from '$lib/functions/scrollIntoView';

	import { T } from '@tolgee/svelte'; // change import statement
	import { getTranslate } from '@tolgee/svelte';
	import SectionWebServices from './SectionWebServices.svelte';

	const { t } = getTranslate(); // Tolgee t translation

	pageTitle.set($t({ key: 'works-title', defaultValue: 'Works' }));

	let scroll: number = $state(0);
	let windowHeight: number = $state(0);

	let elementWeb: HTMLElement | undefined = $state();
	let intersectingWeb: boolean = $state(false);
	let isVisibleLogo = $state(false); // Separate state variable to control div visibility

	$effect(() => {
		if (intersectingWeb) {
			isVisibleLogo = true;
		}
	});

	let elementLogo: HTMLElement | undefined = $state();
	let intersectingLogo: boolean = $state(false);
	let isVisibleGraphicDesign = $state(false); // Separate state variable to control div visibility

	$effect(() => {
		if (intersectingLogo) {
			isVisibleGraphicDesign = true;
		}
	});
	let elementGraphicDesign: HTMLElement | undefined = $state();
	let intersectingGraphicDesign: boolean = $state(false);
	let isVisibleProduct = $state(false);

	$effect(() => {
		if (intersectingGraphicDesign) {
			isVisibleProduct = true;
		}
	});
	let elementProduct: HTMLElement | undefined = $state();
	let intersectingProduct: boolean = $state(false);

	let showWebServices = $state(true);

	// $effect(() => {
	// 	console.log('intersectingWeb', intersectingWeb);
	// });

	function preventDefault(fn: (event: Event) => void) {
		return function (this: HTMLElement, event: Event) {
			event.preventDefault();
			fn.call(this, event);
		};
	}
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
	class="relative flex min-h-[calc(100svh_-_3.5rem)] w-full px-4 md:min-h-[calc(100vh_-_7rem)]"
>
	<div class="my-auto flex w-full flex-col items-center justify-start md:flex-row">
		<p class="mb-4 text-left text-base md:mb-0 md:w-1/2">
			<T
				keyName="intro-works"
				defaultValue="This section serves as a showcase of some of my previous works. My volatile past has allowed me to work in different areas of Design and gain experience throughout the industry."
			/>
		</p>
		<div
			class="mb-auto flex w-full flex-col space-y-4 pl-4 font-sans text-2xl md:my-auto md:w-1/2 md:text-3xl"
		>
			{#each workSectionNames as section, i}
				<button
					style="width:{`calc(100% - ${i * 16}px)`}"
					onclick={preventDefault(() => {
						isVisibleProduct = true;
						isVisibleGraphicDesign = true;
						isVisibleLogo = true;
						setTimeout(() => {
							scrollIntoView(section.id, section.start * 500);
						}, 200);
					})}
					in:fly|global={{ x: 100, duration: 400, delay: 100 * i }}
					class="dark:text-primary-50 ml-auto rounded-lg py-2 pl-3 hover:cursor-pointer text-left transition-all duration-150 md:py-4 {section.color} "
				>
					<T keyName="works-{section.id}" defaultValue={section.text} />
				</button>
			{/each}
		</div>
	</div>
</section>

<div class="fixed top-0 right-0 z-30 h-0 w-20 md:block"></div>

{#snippet buttons()}
	{#if intersectingWeb}
		<div
			in:fly={{ x: 200, duration: 300, delay: 300 }}
			out:fly={{ x: 200, duration: 300, delay: 0 }}
			class="flex flex-row items-center justify-center gap-2"
		>
			<Button
				class="font-sans {showWebServices ? 'bg-primary-200' : 'bg-primary-500'}"
				variant="default"
				size="lg"
				onclick={() => {
					showWebServices = false;
					setTimeout(() => {
						scrollIntoView('websites', 500);
					}, 200);
				}}>Works</Button
			>
			<Button
				variant="default"
				class="font-sans {showWebServices ? 'bg-primary-500' : 'bg-primary-200'}"
				size="lg"
				onclick={() => {
					showWebServices = true;
					setTimeout(() => {
						scrollIntoView('websites', 500);
					}, 0);
				}}>Services</Button
			>
		</div>
	{/if}
{/snippet}
<WorksHeader show={intersectingWeb} backgroundColor="bg-primary-200/60 dark:bg-primary-700/60">
	<div class="flex flex-col gap-2">
		<T keyName="works-webdev" defaultValue="Webdesign" />
	</div>
</WorksHeader>

<IntersectionObserver element={elementWeb} bind:intersecting={intersectingWeb}>
	<div bind:this={elementWeb} class="">
		<SectionWebRJ />
		<SectionWebRR />
		<SectionWebKamado />
		<SectionWebBrazie />
		<SectionWebDMaier />
	</div>
</IntersectionObserver>

<WorksHeader show={intersectingLogo} backgroundColor="bg-primary-300/60 dark:bg-primary-600/60">
	<T keyName="works-logodesign" defaultValue="Logo Design" />
</WorksHeader>

<IntersectionObserver element={elementLogo} bind:intersecting={intersectingLogo}>
	{#if isVisibleLogo}
		<div bind:this={elementLogo}>
			<SectionLogos />
		</div>
	{/if}
</IntersectionObserver>

<WorksHeader
	show={intersectingGraphicDesign}
	backgroundColor="bg-primary-400/60 dark:bg-primary-500/60"
>
	<T keyName="works-graphicdesign" defaultValue="Graphic Design" />
</WorksHeader>

<IntersectionObserver element={elementGraphicDesign} bind:intersecting={intersectingGraphicDesign}>
	{#if isVisibleGraphicDesign}
		<div bind:this={elementGraphicDesign}>
			<SectionGraphicDesignStuttgart />
			<SectionGraphicDesign2 />
			<SectionGraphicDesign3 />
		</div>
	{/if}
</IntersectionObserver>

<WorksHeader show={intersectingProduct} backgroundColor="bg-primary-500/60 dark:bg-primary-400/60">
	<T keyName="works-productdesign" defaultValue="Product Design" />
</WorksHeader>

<IntersectionObserver element={elementProduct} bind:intersecting={intersectingProduct}>
	{#if isVisibleProduct}
		<div bind:this={elementProduct}>
			<SectionProductDesign2 />
			<SectionProductDesignCup />
		</div>
	{/if}
</IntersectionObserver>

<SectionEnd />
