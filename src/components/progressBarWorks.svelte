<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		sectionTitle: string;
		sectionHeight: number;
		start: number; // between 1 and 10
		end: number; // between 1 and 10
	}

	let { sectionTitle, sectionHeight = $bindable(), start, end }: Props = $props();

	let scroll: any = $state();
	// let pageWidth;
	let sectionsPerCategory: number = end - start;

	// amount of full page Sections

	let startSection = sectionHeight * start;
	console.log('startSection ' + startSection);
	let windowHeight: number;

	// let test:any = $state()
	onMount(() => (sectionHeight = windowHeight));
	// console.log("test " + sectionHeight)
	// console.log("tast "+ test)
	let endSection = sectionHeight * end;
	let totalSectionlength = sectionsPerCategory * sectionHeight;

	let progressSectionWebsites;
	$effect(() => {
		progressSectionWebsites = ((scroll - sectionHeight) / totalSectionlength) * 100;
	});

	if (progressSectionWebsites && progressSectionWebsites < 0) {
		progressSectionWebsites = 0;
	}
	// console.log(startSection, endSection, sectionsPerCategory)
	// $: console.log("section height: "+ sectionHeight)
	// $: console.log(startSection, scroll, endSection )
</script>

<svelte:window bind:scrollY={scroll} />

<div
	class="
					{scroll >= startSection && scroll <= endSection
		? 'fixed inset-x-4  top-8 w-[calc(100%-2rem)] translate-y-0 text-4xl opacity-100 md:top-20'
		: 'absolute -translate-y-full opacity-0'} 
					z-20 overflow-x-hidden overflow-y-hidden rounded-lg backdrop-blur-md transition-all duration-150"
>
	<!-- <span
		bind:clientWidth={pageWidth}
		style:transform={`translate3d(calc(${
			progressSectionWebsites / sectionsPerCategory
		}% - ${pageWidth}px - 10rem),0, 0)`}
		class="{scroll >= sectionHeight
			? 'inset-x-8 mx-20'
			: ''} w-full absolute bg-primary-200/70 dark:bg-primary-700/70 backdrop-blur-md transform h-full -z-10"
	/> -->
	<div class="bg-primary-200/30 dark:bg-primary-700/30 w-full p-2 text-left font-sans">
		{sectionTitle}
	</div>
</div>
