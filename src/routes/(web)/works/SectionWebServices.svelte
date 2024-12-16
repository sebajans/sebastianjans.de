<script lang="ts">
  import { T } from "@tolgee/svelte";

  const { showWebServices, isVisible } = $props();

  let performanceResults = [
    {
      name: "Performance",
      value: 100,
    },
    {
      name: "Accessibility",
      value: 95,
    },
    {
      name: "Best Practices",
      value: 98,
    },
    {
      name: "SEO",
      value: 85,
    },
  ];
</script>

<section
  id="websites"
  class="md:h-worksmd h-works max-h-[56rem] w-full row-start-1 col-start-1
{showWebServices
    ? 'translate-x-0 opacity-100'
    : 'translate-x-full opacity-0'} transition-all duration-500"
>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {#each performanceResults as result}
      <div
        class="relative p-4 aspect-square w-full flex flex-col justify-between"
      >
        <!-- {#if isVisible} -->
        <div class="relative dark:text-primary-50 w-full h-full transition-all">
          <span
            class="absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center"
          >
            <T keyName="span-{result.name}" defaultValue={result.name} />
          </span>
          <svg class="w-fit h-fit -rotate-90" viewBox="0 0 100 100">
            <circle
              class="stroke-[4] stroke-primary-600 dark:stroke-primary-400 fill-none"
              cx="50"
              cy="50"
              r="48"
              stroke-linecap="round"
              style="stroke-dasharray: 301; stroke-dashoffset: 301; "
            >
              <animate
                attributeName="stroke-dashoffset"
                from="301"
                to={(100 - result.value) * 3.01}
                dur="1s"
                fill="freeze"
              />
            </circle>
          </svg>
        </div>
        <!-- {/if} -->
      </div>
    {/each}
  </div>
</section>
