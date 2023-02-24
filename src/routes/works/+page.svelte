<script lang="ts">
	import { mainClass } from '$lib/stores/mainClass';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { T, getTranslate } from '@tolgee/svelte';
	import { fly } from 'svelte/transition';
	import { sectionNames } from './sectionNames';
	import SvelteSeo from 'svelte-seo';
	import WorksHeader from '../../components/WorksHeader.svelte';
	import Lazy from '../../components/Lazy.svelte';
	import component from 'svelte-seo';
	// Tolgee t translation
	const t = getTranslate();
	let workSections = [
		{
			path: './SectionWebRJ.svelte'
		},
		{
			path: './SectionWebKamado.svelte'
		},
		{
			path: './SectionLogos.svelte'
		},
		{
			path: './SectionGraphicDesignStuttgart.svelte'
		},
		{
			path: './SectionGraphicDesign2.svelte'
		},
		{
			path: './SectionGraphicDesign3.svelte'
		},
		{
			path: './SectionProductDesignCup.svelte'
		},
		{
			path: './SectionProductDesign2.svelte'
		},
		{
			path: './SectionEnd.svelte'
		}
	];
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
	class="relative flex min-h-[calc(100vh_-_3.5rem)] md:min-h-[calc(100vh_-_7rem)]"
>
	<div class="flex w-full my-auto  flex-col h-full md:flex-row items-center justify-start">
		<h2 class="text-left mx-4 md:ml-0 md:w-1/3 text-base mb-4 md:mb-0">
			<T
				keyName="intro-works"
				defaultValue="This section serves as a showcase of some of my previous works. My volatile past has allowed me to work in different areas of Design and gain experience throughout the industry."
			/>
		</h2>
		<div
			class="md:w-2/3  text-2xl translate-x-4 md:text-3xl w-full flex flex-col font-sans space-y-4 mb-auto md:my-auto"
		>
			{#each sectionNames as section, i}
				<button
					style="width:{`calc(100%-${i * 16}px)`}"
					on:click|preventDefault={() => scrollIntoView(section.id)}
					in:fly={{ x: 100, duration: 400, delay: 100 * i }}
					class="md:py-4 py-2 backdrop-blur-md duration-300 delay-[50] rounded-l-lg text-left pl-3 transition-all {section.color} "
					>{i + 1}
					<!-- alt={section.id} -->
					<T keyName="works-{section.id}" defaultValue={section.text} />
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- <WorksHeader backgroundColor="bg-primary-200 dark:bg-primary-700">
	<T keyName="works-webdev" defaultValue="Webdesign" />
</WorksHeader> -->

{#each workSections as section}
	<Lazy this={() => import(section.path)}>
		<div class="bg-primary-500" slot="loading">Loading...</div>
		<svelte:fragment slot="component" let:Component>
			<Component {scroll} {windowHeight} />
		</svelte:fragment>
	</Lazy>
{/each}
