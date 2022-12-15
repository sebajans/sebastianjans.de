<script lang="ts">
	import Circle from "./Circle.svelte";

let x = 0;
let y = 0;

function updatePosition(event:any) {
	x = event.clientX;
	y = event.clientY;
}

</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>

<div class="relative w-full h-full">
	<img class=" relative h-full w-full" alt="test" src="/img/1.webp">
	<div class="absolute top-0 right-0 backdrop-blur-md w-full h-full bg-primary-50/50 z-10"></div>
	<div class="absolute z-20 backdrop-blur-none border-2 border-primary-600 h-20 w-20 translate-x-1/2 -translate-y-1/2 "></div>
</div>

<Circle x={x} y={y} />

<main on:mousemove={updatePosition}>
  ...
</main>
