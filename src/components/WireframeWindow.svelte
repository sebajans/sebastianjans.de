<script lang="ts">
  import Box from "./Box.svelte";

  export let show: boolean = true;
  export let screenshotImage: string = "";
  export let altTag: string = "";
  export let url: string = "";
  export let className: string =
    "row-[5_/_span_5] col-[1_/_span_5] sm:row-[1_/_span_8] sm:col-[5_/_span_6]"; // Default variation is 'primary'
</script>

<Box
  {show}
  outerClass="{show
    ? ''
    : 'opacity-0'} {className} after:right-0 before:top-0 after:top-0 after:h-[calc(100%_-_0px)] after:z-10 before:z-10 
					aspect-[14/10] bg-white dark:bg-gray-800 transition-all duration-500 flex mx-auto justify-end w-fit h-full "
  innerClass="before:left-0 after:z-10 before:bottom-0.5 before:z-10 after:bottom-0.5 h-full w-full "
>
  <div
    class="w-full box after:bottom-0 flex before:right-0 after:right-0 before:top-0 relative z-10"
  >
    <div
      class="before:left-0 after:bottom-0 w-full flex flex-row space-x-1 md:space-x-10 justify-between p-1 md:p-2"
    >
      <div class="flex flex-row space-x-1 md:space-x-2">
        {#each Array(3) as _}
          <div
            class=" w-2 h-2 md:h-3.5 md:w-3.5 border border-teal-950 dark:border-white"
          />
        {/each}
      </div>
      {#if url}
        <span
          class=" w-full text-center pt-px text-[0.6rem] px-2 leading-[0.8] mb-0 h-2 md:h-3.5 border border-teal-950 dark:border-white"
        >
          {url}
        </span>
        <div class=" w-8 mb-0 h-2 md:h-3.5" />
      {/if}
    </div>
  </div>
  <img
    width="900"
    height="612"
    alt={altTag}
    class="object-cover object-top h-[calc(100%_-_1rem)] md:h-[calc(100%_-_2rem)]"
    src={screenshotImage}
  />
</Box>
