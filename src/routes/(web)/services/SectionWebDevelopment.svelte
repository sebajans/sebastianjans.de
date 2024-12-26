<script lang="ts">
  import { T } from "@tolgee/svelte";
  import type { MainService } from "./services";
  // import { services } from "./services";
  import ServiceComponent from "./ServiceComponent.svelte";
  const { service }: { service: MainService } = $props();
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import Autoplay from "embla-carousel-autoplay";

  const plugin = Autoplay({ delay: 500, stopOnInteraction: false });

  const opts = {
    draggable: true,
    loop: true,
    duration: 4000,
    easing: "linear",
  };

</script>

<section
  id="branding"
  class="md:h-worksmd h-works px-2 md:max-h-[56rem] w-full items-center justify-center flex flex-col row-start-1 col-start-1 transition-all duration-500"
>
  <div class="flex flex-col sm:fle x-row items-center my-auto">
      <div class="grid grid-cols-1 w-full sm:grid-cols-2 items-center gap-6 h-full">
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
        <Carousel.Root
          plugins={[plugin]}
          {opts}
          on:mouseenter={() => {
            plugin.stop();
            // console.log("stop");
          }}
          on:mouseleave={() => {
            plugin.reset();
            // console.log("play");
          }}
          orientation="vertical"
          class="px-4 md:px-0 w-full"
        >
          <Carousel.Content class="h-[24rem] sm:h-[24rem] md:h-[28rem] ">
            {#each service.subServices as item}
              <Carousel.Item
                class="basis-1/2 sm:basis-1/3 dark:text-primary-50 w-full "
              >
              <div
              class=" h-full min-h-[8rem] relative flex flex-col items-start justify-start dark:text-primary-50 w-full transition-all backdrop-blur-md border-transparent md:bg-transp arent dark:border-transparent !bg-opacity-0 hover:!bg-opacity-100 hover:border-primary-900/5 dark:hover:border-primary-50/10 md:hover:bg-gradient-to-br !bg-primaryO riginal-200 md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 py-2 md:py-3 px-2 md:px-3 md:rounded-md md:border"
              >

                  {#if item.component}
                    <ServiceComponent name={item.component} class="text-5xl" />
                  {/if}
                  <h3 class=" z-10 flex items-start justify-start text-start">
                    <T keyName="h3-{item.name}" defaultValue={item.name} />
                  </h3>
                  <span
                    class=" z-10 flex items-start justify-start text-sm text-start"
                  >
                    <T
                      keyName="span-{item.name}-description"
                      defaultValue={item.description}
                    />
                  </span>
              </div>

              </Carousel.Item>
            {/each}
          </Carousel.Content>
        </Carousel.Root>
      </div>
  </div>
</section>
