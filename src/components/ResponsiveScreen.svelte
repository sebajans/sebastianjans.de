<script lang="ts">
  import { onDestroy } from "svelte";

  const interval = 3000;
  let modes = [0, 1, 2, 3];
  let currentModeIndex = 2;

  function cycleModes() {
    currentModeIndex = (currentModeIndex + 1) % modes.length;
  }

  const timer = setInterval(cycleModes, interval);
  let currentMode = modes[currentModeIndex];
  $: currentMode = modes[currentModeIndex];
  onDestroy(() => {
    clearInterval(timer);
  });
</script>

<div class="flex justify-center w-full items-center">
  <div class="flex h-80 flex-row justify-center items-center relative">
    <div class="w-auto h-fit max-h-80">
      <div
        class="
            transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] border rounded-md overflow-clip flex relative z-10 dark:text-primary-50 border-primary-900/5 dark:border-primary-50/10 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10
             {currentMode === 0 && 'aspect-[9/20] w-36 flex-col-reverse'}
             {currentMode === 1 && 'aspect-[14/10] w-80 flex-col'}
             {currentMode === 2 && 'aspect-[10/16] w-40 flex-col'} 
             {currentMode === 3 && 'aspect-[9/20] w-32 flex-col '}
              "
      >
        <div
          class="transition-all h-fit border-primary-900/20 dark:border-primary-50/20 w-full flex flex-row gap-x-1 justify-between p-1
              {currentMode === 0 && 'border-t gap-x-2'}
              {currentMode === 1 && 'border-b md:gap-x-10 md:p-2'} 
              {currentMode === 2 && 'border-b md:gap-x-2 md:p-2'}
              {currentMode === 3 && 'border-b md:gap-x-4 py-1.5 md:p-2 '}
                "
        >
          <div class="flex flex-row gap-x-1 md:gap-x-1.5">
            {#if currentMode !== 3}
              <div
                class="transition-all w-2 h-2 rounded-full md:h-3.5 md:w-3.5 border border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10"
              ></div>
            {/if}
            {#if currentMode === 1 || currentMode === 2}
              {#each Array(2) as _}
                <div
                  class="transition-all w-2 h-2 rounded-full md:h-3.5 md:w-3.5 border border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10"
                ></div>
              {/each}
            {/if}
          </div>
          <span
            class="transition-all rounded-full w-full text-center pt-px text-[0.6rem] px-2 leading-[0.8] mb-0 h-2 md:h-3.5 border border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10"
          ></span>
          <div class="flex flex-row gap-x-1 md:gap-x-2">
            <div
              class="transition-all border rounded-full mb-0 h-2 md:h-3.5
                   {currentMode === 0 &&
                'w-2 md:w-3.5 border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10'}
                   {currentMode === 1 && 'w-8 border-transparent'} 
                   {currentMode === 2 && 'w-full border-transparent'} 
                   {currentMode === 3 && 'w-0 border-none'}
                    "
            ></div>
          </div>
        </div>
        <div
          class="w-full relative h-full
              "
        >
          {#if currentMode !== 3}
            <svg
              class="stroke-primary-900/10 w-full h-full dark:stroke-primary-50/20"
            >
              <line class="" x1="0" y1="100%" x2="100%" y2="0" />
              <line class="" x1="0" y1="0" x2="100%" y2="100%" />
            </svg>
          {:else if currentMode === 3}
            <div class="w-full relative gap-y-2 flex flex-col h-full py-4 px-2">
              <div
                class="border rounded-sm overflow-clip border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 relative pb-0 h-16 w-full"
              >
                <svg
                  class="stroke-primary-900/10 w-full h-full dark:stroke-primary-50/20"
                >
                  <line class="" x1="0" y1="100%" x2="100%" y2="0" />
                  <line class="" x1="0" y1="0" x2="100%" y2="100%" />
                </svg>
              </div>
              <div
                class="border border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 relative h-4 mb-1 mt-1 w-[calc(100%_-_1rem)] mx-auto"
              ></div>
              {#each Array(3) as _}
                <div
                  class="border border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 relative h-2 w-[calc(100%_-_1rem)] mx-auto"
                ></div>
              {/each}
              <div
                class="border border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 relative mb-2 h-2 w-[calc(100%_-_2rem)] ml-2 mr-auto"
              ></div>
              <div
                class="border border-primary-900/10 dark:border-primary-50/20 md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 relative h-16 w-full"
              >
                <svg
                  class="stroke-primary-900/10 w-full h-full dark:stroke-primary-50/20"
                >
                  <line class="" x1="0" y1="100%" x2="100%" y2="0" />
                  <line class="" x1="0" y1="0" x2="100%" y2="100%" />
                </svg>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
