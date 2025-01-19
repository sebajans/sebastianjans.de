<script lang="ts">
  import { T } from "@tolgee/svelte";
  import type { MainService } from "./services";
  // import { services } from "./services";
  import ServiceComponent from "./ServiceComponent.svelte";
    import { scale } from "svelte/transition";
  const { service }: { service: MainService } = $props();

  let activeIndex: number = $state(1);

  let paused: boolean = $state(false);

  let interval = 4000;

  $effect(() => {
    const intervalId = setInterval(() => {
      if (!paused) {
        activeIndex = (activeIndex + 1) % 4;
      }
    }, interval);
    return () => clearInterval(intervalId);
  });
</script>

<div
  class="md:h-worksmd h-works px-2 md:max-h-[56rem] w-full items-center justify-center flex flex-col row-start-1 col-start-1 transition-all duration-500"
>
  <div class="flex flex-col sm:fle gap-y-8 x-row items-center my-auto">
    <div class="flex flex-col w-full">
      <h2 class="text-left">
        <T keyName="h-ux" defaultValue="The user comes first" />
      </h2>
      <p class="text-left">
        <T
          keyName="p-branding-intro"
          defaultValue="Did you just create your new company or are you seeking to adapt your existing business to the ever changing market dynamics? Or do you perhaps just want to attract new clients?"
        />
      </p>
    </div>

    <div
      style="--total: 6"
      class="relative container-item my-10 [--radius:12vh] sm:[--radius:15vh] lg:[--radius:20vh] aspect-square w-full gap-6"
    >
      {#each service.subServices as item}
        <div
          style="--i: {item.id}"
          class="relative [--r-offset:-0.25turn] sm:[--r-offset:-0.5turn] flex container-child flex-col items-center justify-center dark:text-primary-50 transition-all"
        >
          {#if item.component}
            <ServiceComponent name={item.component} class="text-5xl" />
          {/if}
          <h3 class=" z-10 flex items-center justify-center text-center">
            <T keyName="h3-{item.name}" defaultValue={item.name} />
          </h3>
          <span class=" z-10 text-sm lg:text-base flex items-center justify-center text-center">
            <T
              keyName="span-{item.name}-description"
              defaultValue={item.description}
            />
          </span>
        </div>
      {/each}
      <div
        class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex *:!rounded *:h-fit justify-center items-center w-full"
      >
        {#if activeIndex === 0}
          <div
          in:scale={{ duration: 500 }}
            class="h-full aspect-[29.7/21] md:scale-150 -mb-4 self-end w-48 relative flex flex-row items-start justify-start dark:text-primary-50 transition-all border-primary-900/5 dark:border-primary-50/10 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10"
          >
            <div
              class="h-full w-full border-r flex flex-col border-primary-900/5 dark:border-primary-50/10"
            ></div>
            <div
              class="h-full w-full border-r flex flex-col border-primary-900/5 dark:border-primary-50/10"
            ></div>
            <div
              class="h-full w-full flex flex-col border-primary-900/5 dark:border-primary-50/10"
            ></div>
          </div>
        {:else if activeIndex === 1}
          <div
          in:scale={{ duration: 500 }}
            class="h-full aspect-[29.7/21] md:scale-150 mt-4 w-72 relative flex flex-row items-start justify-start dark:text-primary-50 transition-all border-primary-900/5 dark:border-primary-50/10 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 md:rounded-md"
          >
            <div
              class="h-full w-full border-r flex flex-col border-primary-900/5 dark:border-primary-50/10"
            ></div>
            <div
              class="h-full w-full flex flex-col border-primary-900/5 dark:border-primary-50/10"
            ></div>
          </div>
        {:else if activeIndex === 2}
          <div
          in:scale={{ duration: 500 }}
            class="h-full aspect-[21/29.7] md:scale-150 -mb-8 self-end w-24 gap-4 relative flex flex-col items-start justify-start dark:text-primary-50 transition-all border-primary-900/5 dark:border-primary-50/10 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 py-2 md:py-3 px-2 md:px-3 md:rounded-md"
          ></div>
        {:else if activeIndex === 3}
          <div
          in:scale={{ duration: 500 }}
            class="h-full aspect-[15/10] w-16 md:scale-150 gap-1 relative flex flex-row items-center justify-center dark:text-primary-50 transition-all border-primary-900/5 dark:border-primary-50/10 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 py-1 md:py-1.5 px-1 md:px-1.5 md:rounded-md"
          >
            <div
              class="transition-all border rounded-full shrink-0 mb-0 h-2 md:h-4 w-2 md:w-4 border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10"
            ></div>
            <div>
              <div
                class="transition-all border rounded-full mb-0 h-2 md:h-2 w-2 md:w-6 border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10"
              ></div>
              <div
                class="transition-all border mt-1 rounded-full mb-0 h-2 md:h-2 w-2 md:w-6 border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10"
              ></div>
            </div>
          </div>
        {/if}
      </div>
      <!-- TODO: Add Social media!! (reels, insta, etc, linkedin banner?) -->
    </div>
  </div>
</div>

<style>
  .container-item {
    display: grid;
    grid-template-areas: "layer";
    place-items: center;
    /* background: #185adb; */
    /* border-radius: 50%; */

    /* --radius: 30vh; */
    width: calc(2 * var(--radius));
    height: calc(2 * var(--radius));
  }

  .container-item .container-child {
    grid-area: layer;
    /* width: 10vmin;
  height: 10vmin; */

    /* // Decimal value, 0-1 based on the childs index. */
    --d: calc(var(--i) / var(--total));
    /* // Offset to get better starting placement on the circle */
    /* --r-offset: -0.5turn; */
    /* // Full circle */
    --r-amount: 1turn;
    /* // Rotation based on the decimal and r modifiers */
    --r: calc((var(--r-amount) * var(--d)) + var(--r-offset));
    /* // Rotate, transform out, then negative rotation so the content appears upright */
    --transform: rotate(var(--r)) translate(var(--radius))
      rotate(calc(-1 * var(--r)));

    transform: var(--transform);
    /* transition: transform 1.5s ease-in-out; */
    /* //transition-delay: calc(0.1s * var(--i)); */
  }
</style>
