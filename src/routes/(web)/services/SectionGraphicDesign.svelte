<script lang="ts">
  import { T } from "@tolgee/svelte";
  import type { MainService } from "./services";
  // import { services } from "./services";
  import ServiceComponent from "./ServiceComponent.svelte";
  const { service }: { service: MainService } = $props();
</script>

<section
  id="branding"
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
    <div class="w-full flex items-center justify-center p-4">
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
</section>
