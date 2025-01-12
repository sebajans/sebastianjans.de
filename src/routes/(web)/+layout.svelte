<script lang="ts">
  // import { beforeUpdate } from 'svelte';
  import { onMount } from "svelte";
  import { pageTitle } from "$lib/stores/pageTitle";
  import NavBar from "$components/NavBar.svelte";

  import Footer from "$components/Footer.svelte";
  import PageTransitions from "$components/PageTransitions.svelte";
  import Blob from "$components/Blob.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data: any;

  let showMenu = false;
  let showHeader = false;

  // beforeUpdate(() => ((showMenu = false), (showHeader = false)));

  let initialized = false;
  onMount(() => {
    initialized = true;
  });

  let viewport: Element;
  let contents: Element;
</script>

<div id="blob-motion" class="motion-reduce:hidden">
  <Blob />
</div>
{#if initialized}
  <NavBar {showMenu} />
  <main
    bind:this={viewport}
    style="display:grid"
    class=" viewport min-h-[100svh] w-screen min-h-screen-ios pt-24 md:pt-28 relative mx-auto bg-primary-50 dark:bg-primary-900 transition-colors duration-300"
  >
    <h1
      class="z-[3] transition-all py-0 md:py-3 md:top-12 top-5 absolute md:left-44 left-24 duration-300 pl-0 text-3xl md:text-4xl text-left font-sans font-bold"
    >
      {$pageTitle}
    </h1>
    <PageTransitions pathname={data.pathname}>
      <div bind:this={contents} class="my-auto md:ml-44">
        <slot />
      </div>
    </PageTransitions>
    <Footer />
  </main>
{/if}
