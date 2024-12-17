<script lang="ts">
  import Box from "./Box.svelte";

  export let show: boolean = true;
  export let screenshotImage: string = "";
  export let url: string = "";
  export let altTag: string = "";
  export let className: string =
    "row-[5_/_span_5] col-[1_/_span_5] sm:row-[1_/_span_8] sm:col-[5_/_span_6]"; // Default variation is 'primary'
</script>

<Box
  {show}
  outerClass="{show
    ? ''
    : 'opacity-0'} {className} after:right-0 before:top-0 after:top-0 after:h-[calc(100%_-_0px)] after:z-10 before:z-10 
					aspect-[10/19.6] md:aspect-[10/19.6] bg-white dark:bg-gray-800 transition-all duration-500 flex mx-auto justify-end w-fit h-full "
  innerClass="before:left-0 after:z-10 before:bottom-0.5 p-1 md:p-2 pb-4 before:z-10 after:bottom-0.5 h-full w-full "
>
  <div class="relative h-[calc(100%_-_1rem)] md:h-[calc(100%_-_2rem)]">
    <img
      width="900"
      height="612"
      alt={altTag}
      class="object-cover object-top h-full md:h-full"
      src={screenshotImage}
    />
    <slot />
  </div>
  <div class="relative pt-1 md:pt-2 flex flex-row space-x-2 md:pb-3">
    <div class="box h-5 w-4 md:h-6">
      <div />
    </div>
    <div class="box h-5 md:h-6 w-full items-center justify-center flex">
      <span
        class="h-auto text-center font-sans text-[0.6rem] md:text-xs mb-px sm:leading-none"
      >
        {url}
      </span>
    </div>
    <div class="box h-5 w-4 md:h-6">
      <div />
    </div>
  </div>
</Box>
