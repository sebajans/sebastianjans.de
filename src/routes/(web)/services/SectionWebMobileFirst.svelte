<script lang="ts">
  import ResponsiveScreen from "$components/ResponsiveScreen.svelte";
  import { T } from "@tolgee/svelte";
</script>

<div
  class=" px-2 w-full items-center justify-center flex flex-col transition-all duration-500"
>
    <div class="flex flex-col md:flex-row-reverse items-center">
      <div class="w-full">
        <h2 class="text-left">
          <T keyName="h-responsive" defaultValue="We are mobile-first" />
        </h2>
        <p class="text-left">
          <T
            keyName="p-responsive-design"
            defaultValue="I build websites that are mobile-first and responsive. This means that your website will look great on any device, from a smartphone to a desktop computer. I also make sure that your website is accessible to everyone, including people with disabilities."
          />
        </p>
      </div>
      <ResponsiveScreen />
    </div>
</div>
