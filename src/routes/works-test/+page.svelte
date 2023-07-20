<script lang="ts">
	import { mainClass } from '$lib/stores/mainClass';
	import { pageTitle } from '$lib/stores/pageTitle';
	import T from '@tolgee/svelte/T.svelte'; // change import statement
	import { getTranslate } from '@tolgee/svelte';
	import { fly, fade } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';

	import WorksHeader from '../../components/WorksHeader.svelte';
	import {sectionNames} from '../works/sectionNames';

	import CupholderModel from '../works/product-items/CupholderModel.svelte';
import CupHolderModelClose from '../works/product-items/CupHolderModelClose.svelte';
import { scrollInSection } from '../../components/scrollInSection';


	const { t } = getTranslate(); // Tolgee t translation

	// settings for Layout main class and Title
	pageTitle.set($t({ key: 'works-title', defaultValue: 'Works' }));
	mainClass.set('mr-0 !ml-0 w-screen');

	// function to scroll section ankerpoint into view

	function scrollIntoView(target: string) {
		var el = document.getElementById(target);
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

let zoomIn: boolean = false;

	let element1: HTMLElement;
  let intersecting1:boolean;
	let element2: HTMLElement;
  let intersecting2:boolean;
	let element3: HTMLElement;
	let intersecting3:boolean;
	let element4: HTMLElement;
	let intersecting4:boolean;
	let element5: HTMLElement;
	let intersecting5:boolean;
	let element6: HTMLElement;
	let intersecting6:boolean;
	let element7: HTMLElement;
	let intersecting7:boolean;



</script>

<svelte:head>
	<title>{$pageTitle}</title>
	<meta name="description" content="Overview of the Works of Sebastian Jans." />
</svelte:head>




<!-- <svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} /> -->

<div class="fixed top-0 h-10 w-20 bg-fountain-blue-600 right-0 z-30" >
	{intersecting1 ? 'Element is in view' : 'Element is not in view'}
</div>


<section
	id="start"
	class="relative w-full flex min-h-[calc(100svh_-_3.5rem)] md:min-h-[calc(100vh_-_7rem)]"
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

<!-- <WorksHeader backgroundColor="bg-primary-200/70 dark:bg-primary-700/70">
	<T keyName="works-webdev" defaultValue="Webdesign" />
</WorksHeader> -->



<!-- <section  id="productdesign" class="max-h-screen justify-center relative flex flex-col ">
	<div
		class="flex flex-row-reverse md:flex-row h-works md:h-worksmd max-h-[56rem] w-full justify-center items-center"
	>
		<div
			class="gap-4 md:gap-5 h-full grid justify-center grid-cols-9 grid-rows-12 md:grid-cols-12 md:grid-rows-9 items-center max-w-4xl w-full sm:w-full"
		>
		<IntersectionObserver once threshold={0.2} element={element1} bind:intersecting={intersecting1}>

		<div bind:this={element1}
		class="
		w-full h-full overflow-hidden 
		col-start-1 row-start-1 col-span-3 row-span-2 md:col-span-4 md:row-span-3
		rounded-md"
		>
			<img
					width="222"
					height="275"
					src="/productdesign/cupholder/Cupholder_compressed.webp"
					alt="The cupholder in the compressed form"
					class="{intersecting1 ? '' : 'translate-y-1/2 opacity-0'} transition-all duration-500 delay-250 w-full h-full object-contain rounded-md sepia"
				/>
		</div>
	</IntersectionObserver>
	<IntersectionObserver once threshold={0.2} element={element2} bind:intersecting={intersecting2}>
		<div bind:this={element2}
				class="
				w-full h-full overflow-hidden 
			col-start-1 row-start-3 col-span-3 row-span-3 md:col-span-4 md:row-span-6
			 bg-gradient-to-tr from-primary-500 to-primary-500/20 dark:to-primary-100/70 rounded-md"
			>
				<img
					width="222"
					height="570"
					src="/productdesign/cupholder/1_cupholder-frontal-full.webp"
					alt="The cupholder fully extended, showing the LED indicator"
					class="{intersecting2 ? '' : '-translate-x-1/2 opacity-0'} transition-all duration-500 delay-150  w-full h-full object-cover sepia"
				/>
			</div>
		</IntersectionObserver>
		<IntersectionObserver once threshold={0.2} element={element3} bind:intersecting={intersecting3}>
			<div bind:this={element3}	
				class="{intersecting3 ? '' : 'translate-y-1/2 opacity-0'} transition-all duration-500 delay-150 w-full h-full overflow-hidden 
			 col-start-4 row-start-1 md:row-start-1 md:col-start-5 col-span-6 row-span-5 md:col-span-8 md:row-span-2"
			>
				<h1 class="md:pb-4 text-2xl md:text-4xl text-left font-sans font-bold">
					<T keyName="Cupholder-title" defaultValue="Cupholder" />
				</h1>
				<p class="text-left text-sm">
					<T
						keyName="Cupholder-text"
						defaultValue="A smart, modern Cupholder with an included heating element. It also features a telescope and a diaphragm mechanism for the part that holds the bottle."
					/>
				</p>
			</div>
		</IntersectionObserver>
		<IntersectionObserver once threshold={0.2} element={element4} bind:intersecting={intersecting4}>
	
			<div bind:this={element4}	
				id="center"
				class="{intersecting4 ? '' : 'translate-y-1/2 opacity-0'} transition-all duration-500 delay-150 aspect-auto h-full overflow-hidden 
			col-start-5 row-start-6 col-span-5 row-span-3 md:col-start-5 md:row-start-3 md:col-span-5 md:row-span-4 bg-gradient-to-tl from-primary-500 to-primary-500/20 dark:to-primary-100/70 rounded-md"
			>
				<img
					width="282"
					height="373"
					src="/productdesign/cupholder/cupholder51.webp"
					alt=""
					class="w-full h-full rounded-md object-cover object-center sepia"
				/>
			</div>
		</IntersectionObserver>
		<IntersectionObserver once threshold={0.2} element={element5} bind:intersecting={intersecting5}>
	
			<div bind:this={element5}
				id="bottom-center"
				class="{intersecting5 ? '' : 'translate-y-1/2 opacity-0'} transition-all duration-500 delay-150 w-full h-full overflow-hidden 
			col-start-1 row-start-6 col-span-4 row-span-3 md:col-start-5 md:row-start-7 md:col-span-3 md:row-span-3
			 bg-gradient-to-tr from-primary-500 to-primary-500/20 dark:to-primary-100/70 rounded-md"
			>
				<img
					width="161"
					height="275"
					src="/productdesign/cupholder/render-4.webp"
					alt=""
					class="w-full h-full object-cover sepia brightness-200"
				/>
			</div>
		</IntersectionObserver>
		<IntersectionObserver once threshold={0.2} element={element6} bind:intersecting={intersecting6}>
	
			<div bind:this={element6}
				class="{intersecting6 ? '' : 'translate-y-1/2 opacity-0'} transition-all duration-500 delay-150 relative w-full h-full 
			 col-start-6 row-start-[9] col-span-4 row-span-4 md:col-start-10 md:row-start-3 md:col-span-3 md:row-span-4
			  rounded-md"
			>
				<CupholderModel
					on:click={() => (zoomIn = false)}
					imgClass="{zoomIn
						? 'opacity-50'
						: 'opacity-100'} transition-all duration-300 w-full h-full p-1 object-top object-contain text-primary-900 dark:text-primary-50"
				/>
				<button
					on:click={() => (zoomIn = !zoomIn)}
					class="{zoomIn
						? ''
						: 'animate-ping'} absolute w-6 h-6 left-[6%] top-[7%] rounded-full border-[0.5px] bg-primary-50/50 dark:bg-primary-900/50 border-primary-900 dark:border-primary-50"
				/>
				<CupHolderModelClose
					imgClass="{zoomIn
						? 'opacity-100 w-24 h-24'
						: 'opacity-0 w-5 h-5'} pointer-events-none left-[8.5%] top-[8.7%] border transition-all duration-300 aspect-square rounded-full bg-primary-50 dark:bg-primary-900 absolute object-contain text-primary-900 dark:text-primary-50"
				/>
			</div>
		</IntersectionObserver>
		<IntersectionObserver once threshold={0.2} element={element7} bind:intersecting={intersecting7}>
	
			<div bind:this={element7}
				id="bottom-right"
				
				class="{intersecting7 ? '' : 'translate-y-1/2 opacity-0'} transition-all duration-500 delay-150 w-full h-full overflow-hidden 
			col-start-1 row-start-[9] col-span-5 row-span-4 md:col-start-8 md:row-start-7 md:col-span-5 md:row-span-3 bg-gradient-to-br from-primary-500 to-primary-500/20 dark:to-primary-100/70 rounded-md"
			>
				<img
					width="234"
					height="267"
					src="/productdesign/cupholder/Cupholder_top_opened.webp"
					alt=""
					class="w-full h-full object-cover object-top pt-2 px-2 md:px-6 sepia brightness-100"
				/>
			</div>
		</IntersectionObserver>

		</div>
	</div>
</section>

<section class="h-screen "></section> -->