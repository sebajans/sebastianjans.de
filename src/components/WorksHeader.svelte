<script lang="ts">
  export let backgroundColor:string
</script>
<div class="w-full h-auto flex flex-row mt-4 md:mt-24">
  <div class="w-[calc(100vw_-_56rem)] h-auto" />
  <div class="max-w-4xl w-full">
    <h2
      class="{backgroundColor} md:text-right w-fit ml-auto text-left pr-8 pl-3 rounded-l-md font-sans py-3 text-4xl "
    >
    <slot />
    </h2>
  </div>
  <div class="{backgroundColor} w-[calc(100vw_-_56rem)] h-auto" />
</div>