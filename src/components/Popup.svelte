<!-- Popup.svelte -->

<script type="ts">
  let visible = false;
  import { fade } from "svelte/transition";

  export function show() {
    visible = true;
  }

  export function hide() {
    visible = false;
  }
</script>

{#if visible}
  <div 
  transition:fade={{duration:150}}
  class="absolute w-full top-20 h-auto z-50 p-4">
    <div class="bg-primary-200 hover:shadow-primary-600/80 shadow-primary-600/50 transition-all duration-500 delay-75 flex flex-row justify-center items-center h-auto px-2 py-3 rounded-lg shadow-lg">
      <slot></slot>
      <button class="h-8 w-8 group ml-auto font-sans hover:text-primary-500" on:click={hide}>
        <span
        class="rotate-45 block h-0.5 w-8 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 duration-250 "
      />
      
      <span
		class="-rotate-45 -translate-y-0.5 block h-0.5 w-8 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 duration-250 "
	/>
      
      </button>
    </div>
  </div>
{/if}
