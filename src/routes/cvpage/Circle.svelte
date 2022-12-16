<!-- Circle.svelte -->

<script>
  export let x = 0;
  export let y = 0;
  export let size = 50;
  export let color = "red";
</script>

<div
  class="absolute"
  style="top: {y - size / 2}px; left: {x - size / 2}px; width: {size}px; height: {size}px; border-radius: 50%; background-color: {color};"
></div>
