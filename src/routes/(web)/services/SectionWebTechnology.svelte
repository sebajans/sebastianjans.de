<script lang="ts">
  import { T } from "@tolgee/svelte";

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
      value: 91,
    },
  ];
</script>

<div
  id="web-development"
  class="md:h-worksmd h-works px-2 md:max-h-[56rem] w-full items-center justify-center flex flex-col row-start-1 col-start-1 transition-all duration-500"
>
  <div class="flex flex-col sm:flex-row items-center my-auto">
    <div class="flex flex-col w-full">
      <h2 class="text-left">
        <T keyName="h-ux" defaultValue="The user comes first" />
      </h2>
      <p class="text-left">
        <T
          keyName="p-latest-technologies"
          defaultValue="At the heart of my web development philosophy is a commitment to crafting lightning-fast, high-performance websites that are as accessible as they are sleek. I leverage cutting-edge technologies to ensure your web presence not only loads in a flash but also welcomes every user, regardless of their abilities. Blending speed and accessibility, I create web experiences that leave a lasting impression."
        />
      </p>
    </div>
    <div class="w-full flex items-center justify-center p-4">
      <div class="grid grid-cols-2 w-fit sm:grid-cols-2 gap-6">
        {#each performanceResults as result}
          <div
            class="relative flex items-center justify-center aspect-square dark:text-primary-50 w-full h-full transition-all"
          >
            <span
              class="absolute inset-0 z-10 flex items-center justify-center text-center"
            >
              <T keyName="span-{result.name}" defaultValue={result.name} />
            </span>
            <svg
              class="w-full aspect-square max-w-40 -rotate-90"
              viewBox="0 0 100 100"
            >
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
        {/each}
      </div>
    </div>
  </div>
</div>
