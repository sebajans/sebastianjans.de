<script lang="ts">
  import { T } from "@tolgee/svelte";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { cvItems } from "$lib/lists/cvItems";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  let slidesToScroll = 1;

  let width: number;

  function updateSlidesToScroll() {
    if (width >= 640) {
      slidesToScroll = 2;
    } else {
      slidesToScroll = 1;
    }
  }

  onMount(updateSlidesToScroll);
</script>

<svelte:window on:resize={updateSlidesToScroll} bind:innerWidth={width} />

<section
  class="pt-4 md:pt-20 pb-20 relative w-[calc(100vw_-_0rem)] md:w-[calc(100vw_-_12rem)] h-full min-h-screen min-h-screen-ios flex flex-col justfiy-center"
  id="cv_cert"
>
  <div class="space-y-4 max-w-4xl w-full mx-auto">
    <h1
      in:fly|global={{ y: 50, duration: 500 }}
      class="text-center md:text-left text-primary-900 dark:text-primary-50"
    >
      <T
        keyName="my-achievements"
        defaultValue="My Achievements & Certifications"
      />
    </h1>
    <Carousel.Root
      orientation="horizontal"
      opts={{ slidesToScroll: slidesToScroll }}
      class="px-4 md:px-0"
    >
      <Carousel.Content>
        {#each cvItems as item}
          {#if item.category === "certificate"}
            <Carousel.Item
              class="snap-start sm:basis-1/2 h-full min-h-[11rem] w-full flex md:flex-row flex-col md:space-x-4 items-end md:items-start"
            >
              <li
                in:fly|global={{ y: 50, duration: 500, delay: 250 * item.id }}
                class="snap-center snap-always md:snap-start w-full h-full flex flex-col space-y-4 grow sm:max-w-none"
              >
                <div
                  style:background-image={`url('${item.image}')`}
                  class="bg-cover bg-no-repeat bg-center bg-origin-content z-10 pointer-events-none w-full flex rounded-md justify-center aspect-[29/_21] border border-primary-200/90 dark:border-primary-50/5"
                ></div>
                <div
                  class="h-full p-3 backdrop-blur-md border border-primary-900/5 dark:border-primary-50/10 bg-gradient-to-br from-primary-900/10 to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 rounded-md w-full flex flex-col justify-start"
                >
                  <h2
                    class="font-sans text-primary-900 dark:text-primary-50 text-2xl"
                  >
                    <T
                      keyName="achievement-title-{item.name}"
                      defaultValue={item.name}
                    />
                  </h2>
                  <h3
                    class="mt-0.5 mb-2 text-primary-700 dark:text-primary-200 font-sans text-sm"
                  >
                    {item.fromYear}
                  </h3>
                  <p class="text-sm text-justify mb-2">
                    <T
                      keyName="achievement-text-{item.name}"
                      defaultValue={item.shortdescription}
                    />
                  </p>
                  {#if item.link?.includes("https")}
                    <a
                      class="w-fit mt-auto ml-auto btn btn-navajo"
                      target="_blank"
                      rel="noreferrer noopener"
                      href={item.link}
                    >
                      <T
                        keyName="certificate-button-{item.info}"
                        defaultValue={item.info}
                      />
                    </a>
                  {:else}
                    <a
                      class="w-fit mt-auto ml-auto btn btn-navajo"
                      href={item.link}
                    >
                      <T
                        keyName="certificate-button-{item.info}"
                        defaultValue={item.info}
                      />
                    </a>
                  {/if}
                </div>
              </li>
            </Carousel.Item>
          {/if}
        {/each}
      </Carousel.Content>
      <div class="flex justify-between mt-6">
        <Carousel.Previous
          class="relative !translate-x-0 left-0 bg-primary-900 dark:bg-primary-50 hover:bg-primary-500 dark:hover:bg-primary-500 border-none"
        />
        <Carousel.Next
          class="relative !translate-x-0 right-0 bg-primary-900 dark:bg-primary-50 hover:bg-primary-500 dark:hover:bg-primary-500 border-none"
        />
      </div>
    </Carousel.Root>
  </div>
</section>
