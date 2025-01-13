<script lang="ts">
  import { T } from "@tolgee/svelte";
  import type { MainService } from "./services";
  // import { services } from "./services";
  import ServiceComponent from "./ServiceComponent.svelte";
  const { service }: { service: MainService } = $props();
</script>

<div
  class="md:h-worksmd h-works px-2 md:max-h-[56rem] w-full items-center justify-center flex flex-col row-start-1 col-start-1 transition-all duration-500"
>
  <div class="flex flex-col sm:fle x-row items-center my-auto">
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
    <div class="w-full flex-col flex items-center justify-center p-4">
      <div class="flex justify-between w-full">
        <div
          class="h-full aspect-[29.7/21] w-48 relative flex flex-row items-start justify-start dark:text-primary-50 transition-all border-primary-900/5 dark:border-primary-50/10 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 md:rounded-md"
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
        <div
          class="h-full aspect-[29.7/21] w-72 relative flex flex-row items-start justify-start dark:text-primary-50 transition-all border-primary-900/5 dark:border-primary-50/10 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 md:rounded-md"
        >
          <div
            class="h-full w-full border-r flex flex-col border-primary-900/5 dark:border-primary-50/10"
          ></div>
          <div
            class="h-full w-full flex flex-col border-primary-900/5 dark:border-primary-50/10"
          ></div>
        </div>
        <div
          class="h-full aspect-[21/29.7] w-24 gap-4 relative flex flex-col items-start justify-start dark:text-primary-50 transition-all border-primary-900/5 dark:border-primary-50/10 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 py-2 md:py-3 px-2 md:px-3 md:rounded-md"
        ></div>
        <div
          class="h-full aspect-[15/10] w-16 gap-1 relative flex flex-row items-center justify-center dark:text-primary-50 transition-all border-primary-900/5 dark:border-primary-50/10 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 py-1 md:py-1.5 px-1 md:px-1.5 md:rounded-md"
        >
          <div
            class="transition-all border rounded-full shrink-0 mb-0 h-2 md:h-4 w-2 md:w-4 border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10"
          ></div>
          <div >

            <div
            class="transition-all border rounded-full mb-0 h-2 md:h-2 w-2 md:w-6 border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10"
            ></div>
            <div
            class="transition-all border mt-1 rounded-full mb-0 h-2 md:h-2 w-2 md:w-6 border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10"
            ></div>
          </div>
        </div>
        <!-- TODO: Add Social media!! (reels, insta, etc, linkedin banner?) -->
      </div>
      <div class="grid grid-cols-2 w-fit sm:grid-cols-3 gap-6">
        {#each service.subServices as item}
          <div
            class="relative flex flex-col items-center justify-center aspect-square dark:text-primary-50 w-full h-full transition-all"
          >
            {#if item.component}
              <ServiceComponent name={item.component} class="text-5xl" />
            {/if}
            <h3 class=" z-10 flex items-center justify-center text-center">
              <T keyName="h3-{item.name}" defaultValue={item.name} />
            </h3>
            <span class=" z-10 flex items-center justify-center text-center">
              <T
                keyName="span-{item.name}-description"
                defaultValue={item.description}
              />
            </span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
