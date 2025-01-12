<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    sectionTitle: string;
    sectionHeight: number;
    start: number; // between 1 and 10
    end: number; // between 1 and 10
  }

  let {
    sectionTitle,
    sectionHeight = $bindable(),
    start,
    end,
  }: Props = $props();

  let scroll: any = $state();
  // let pageWidth;
  let sectionsPerCategory: number = end - start;

  // amount of full page Sections

  let startSection = sectionHeight * start;
  console.log("startSection " + startSection);
  let windowHeight: number;

  // let test:any = $state()
  onMount(() => (sectionHeight = windowHeight));
  // console.log("test " + sectionHeight)
  // console.log("tast "+ test)
  let endSection = sectionHeight * end;
  let totalSectionlength = sectionsPerCategory * sectionHeight;

  let progressSectionWebsites;
  $effect(() => {
    progressSectionWebsites =
      ((scroll - sectionHeight) / totalSectionlength) * 100;
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
    ? 'fixed top-8  md:top-20 inset-x-4 w-[calc(100%-2rem)] text-4xl translate-y-0 opacity-100'
    : 'absolute -translate-y-full opacity-0'} 
					duration-150 transition-all rounded-lg backdrop-blur-md z-20 overflow-x-hidden overflow-y-hidden"
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
  <div
    class="font-sans p-2 text-left w-full bg-primary-200/30 dark:bg-primary-700/30"
  >
    {sectionTitle}
  </div>
</div>
