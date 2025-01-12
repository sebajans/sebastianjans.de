<script lang="ts">
  import { fly } from "svelte/transition";

  interface Props {
    pathname?: string;
    children?: import("svelte").Snippet;
  }

  let { pathname = "", children }: Props = $props();

  let isMobile = $state(false);
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 640;
  }
</script>

{#key pathname}
  {#if isMobile}
    <div
      class="z-[3] overflow-x-clip w-screen flex justify-center"
      style="grid-row: 1 / -1; grid-column: 1 / -1;"
    >
      {@render children?.()}
    </div>
  {:else}
    <div
      class="z-[3] overflow-x-clip w-full flex justify-center"
      style="grid-row: 1 / -1; grid-column: 1 / -1;"
      in:fly|global={{ x: 100, duration: 350, delay: 250 }}
      out:fly|global={{ x: 100, duration: 350 }}
    >
      {@render children?.()}
    </div>
  {/if}
{/key}
