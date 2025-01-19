<script lang="ts">
  import { preventDefault } from "svelte/legacy";

  import { pageTitle } from "$lib/stores/pageTitle";
  import Button from "$lib/components/ui/button/button.svelte";
  import { fly } from "svelte/transition";
  import { services } from "./services";

  import SvelteSeo from "svelte-seo";

  import { workSectionNames } from "$lib/lists/workSectionNames";
  import WorksHeader from "$components/WorksHeader.svelte";
  import SectionEnd from "../works/SectionEnd.svelte";

  import IntersectionObserver from "svelte-intersection-observer";
  import { scrollIntoView } from "$lib/functions/scrollIntoView";

  import { T } from "@tolgee/svelte"; // change import statement
  import { getTranslate } from "@tolgee/svelte";
  import SectionWebTechnology from "./SectionWebTechnology.svelte";
  import SectionWebMobileFirst from "./SectionWebMobileFirst.svelte";
  import SectionBranding from "./SectionBranding.svelte";
  import SectionGraphicDesign from "./SectionGraphicDesign.svelte";
  // import SectionProductDesign from "./SectionProductDesign.svelte";
  import SectionWebDevelopment from "./SectionWebDevelopment.svelte";

  const { t } = getTranslate(); // Tolgee t translation

  pageTitle.set($t({ key: "services-title", defaultValue: "Services" }));

  let scroll: number = $state(0);
  let windowHeight: number = $state(0);

  let elementWeb: HTMLElement | undefined = $state();
  let intersectingWeb: boolean = $state(false);
  let isVisibleBranding = $state(false); // Separate state variable to control div visibility

  $effect(() => {
    if (intersectingWeb) {
      isVisibleBranding = true;
    }
  });

  let elementBranding: HTMLElement | undefined = $state();
  let intersectingBranding: boolean = $state(false);
  let isVisibleGraphicDesign = $state(false); // Separate state variable to control div visibility

  $effect(() => {
    if (intersectingBranding) {
      isVisibleGraphicDesign = true;
    }
  });
  let elementGraphicDesign: HTMLElement | undefined = $state();
  let intersectingGraphicDesign: boolean = $state(false);
  let isVisibleProduct = $state(false);

  $effect(() => {
    if (intersectingGraphicDesign) {
      isVisibleProduct = true;
    }
  });
  let elementProduct: HTMLElement | undefined = $state();
  let intersectingProduct: boolean = $state(false);

  let showWebServices = $state(true);

  $effect(() => {
    console.log("intersectingWeb", intersectingWeb);
  });
</script>

<svelte:head>
  <title>{$pageTitle}</title>
  <meta name="description" content="Overview of the Works of Sebastian Jans." />
</svelte:head>

<SvelteSeo
  title="Sebastian Jans | Services"
  description="Overview of the services of Sebastian Jans"
  keywords="Freelance product design, minimalistic logo design, front-end svelte development, custom webdesign solutions, diseñador de productos"
/>
<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
  id="start"
  class="px-4 relative w-full flex min-h-[calc(100svh_-_3.5rem)] md:min-h-[calc(100vh_-_7rem)]"
>
  <div
    class="flex w-full my-auto flex-col md:flex-row items-center justify-start"
  >
    <p class="text-left md:w-1/2 text-base mb-4 md:mb-0">
      <T
        keyName="intro-works"
        defaultValue="This section serves as a showcase of some of my previous works. My volatile past has allowed me to work in different areas of Design and gain experience throughout the industry."
      />
    </p>
    <div
      class="md:w-1/2 text-2xl md:text-3xl w-full pl-4 flex flex-col font-sans space-y-4 mb-auto md:my-auto"
    >
      {#each services as section, i}
        <button
          style="width:{`calc(100% - ${i * 16}px)`}"
          onclick={preventDefault(() => {
            isVisibleProduct = true;
            isVisibleGraphicDesign = true;
            isVisibleBranding = true;
            setTimeout(() => {
              scrollIntoView(section.slug, section.id * 500);
            }, 200);
          })}
          in:fly|global={{ x: 100, duration: 400, delay: 100 * i }}
          class="dark:text-primary-50 md:py-4 ml-auto py-2 duration-150 rounded-lg text-left pl-3 transition-all {section.color} "
        >
          <T keyName="works-{section.slug}" defaultValue={section.name} />
        </button>
      {/each}
    </div>
  </div>
</section>

<div class="fixed md:block top-0 h-0 w-20 right-0 z-30"></div>

{#snippet buttons()}
  {#if intersectingWeb}
    <div
      in:fly={{ x: 200, duration: 300, delay: 300 }}
      out:fly={{ x: 200, duration: 300, delay: 0 }}
      class="flex flex-row gap-2 items-center justify-center"
    >
      <Button
        class="font-sans {showWebServices
          ? 'bg-primary-200'
          : 'bg-primary-500'}"
        variant="default"
        size="lg"
        onclick={() => {
          showWebServices = false;
          setTimeout(() => {
            scrollIntoView("websites", 500);
          }, 200);
        }}>Works</Button
      >
      <Button
        variant="default"
        class="font-sans {showWebServices
          ? 'bg-primary-500'
          : 'bg-primary-200'}"
        size="lg"
        onclick={() => {
          showWebServices = true;
          setTimeout(() => {
            scrollIntoView("websites", 500);
          }, 0);
        }}>Services</Button
      >
    </div>
  {/if}
{/snippet}
<WorksHeader
  show={intersectingWeb}
  backgroundColor="bg-primary-200/60 dark:bg-primary-700/60"
>
  <div class="flex flex-col gap-2">
    <T keyName="works-webdev" defaultValue="Webdesign" />
  </div>
</WorksHeader>

<IntersectionObserver element={elementWeb} bind:intersecting={intersectingWeb}>
  <div bind:this={elementWeb}>
    <SectionWebTechnology />
    <SectionWebMobileFirst />
    <SectionWebDevelopment service={services[0]} />
  </div></IntersectionObserver
>

<WorksHeader
  show={intersectingBranding}
  backgroundColor="bg-primary-300/60 dark:bg-primary-600/60"
>
  <T keyName="services-branding" defaultValue={services[1].name} />
</WorksHeader>

<IntersectionObserver
  element={elementBranding}
  bind:intersecting={intersectingBranding}
>
  {#if isVisibleBranding}
    <section id="branding" bind:this={elementBranding}>
      <SectionBranding service={services[1]} />
    </section>
  {/if}
</IntersectionObserver>

<WorksHeader
  show={intersectingGraphicDesign}
  backgroundColor="bg-primary-400/60 dark:bg-primary-500/60"
>
  <T keyName="works-graphicdesign" defaultValue="Graphic Design" />
</WorksHeader>

<IntersectionObserver
  element={elementGraphicDesign}
  bind:intersecting={intersectingGraphicDesign}
>
  {#if isVisibleGraphicDesign}
    <section id="graphic-design" bind:this={elementGraphicDesign}>
      <SectionGraphicDesign service={services[2]} />
    </section>
  {/if}
</IntersectionObserver>

<WorksHeader
  show={intersectingProduct}
  backgroundColor="bg-primary-500/60 dark:bg-primary-400/60"
>
  <T keyName="works-productdesign" defaultValue="Product Design" />
</WorksHeader>

<!-- TODO: some 3D stuff, web platforms -->
<!-- <IntersectionObserver
  element={elementProduct}
  bind:intersecting={intersectingProduct}
>
  {#if isVisibleProduct}
    <section id="product-design" bind:this={elementProduct}>
      <SectionProductDesign service={services[3]} />
    </section>
  {/if}
</IntersectionObserver> -->

<!-- TODO: Adjust, change to "check out my works!"

TODO: Add slot for texts
TODO: Add slot for buttons/links
-->
<SectionEnd />
