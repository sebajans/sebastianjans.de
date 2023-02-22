<script lang="ts">
	import { spring } from 'svelte/motion';

	let position = spring({ x: 0, y: 0 });
	let coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.25
		}
	);
	let scale = spring(1);
	let smaller: boolean = false;

	// const randomBlobPosition = (e: any) => {
	// 	let r1: number, r2: number;
	// 	r1 = Math.random() * innerHeight;
	// 	r2 = Math.random() * innerWidth;
	// 	position.set({ x: e.r1, y: e.r2 });
	// 	console.log($position.x);
	// };
</script>

<svelte:window
	{innerHeight}
	{innerWidth}
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={(e) => {
		scale.set(0.5);
		smaller = true;
	}}
	on:mouseup={(e) => {
		scale.set(1);
		smaller = false;
	}}
/>
<div
	style:left={`${$coords.x}px`}
	style:top={`${$coords.y}px`}
	style:transform={`scale(${$scale}) translate(-50%,-50%)`}
	class="bg-gradient-to-tl from-primary-100/40 to-primary-800/40 transition-[filter]
  {smaller ? 'brightness-125' : ''}
  animate-blobpulse z-[1] rounded-full -translate-x-1/2 -translate-y-1/2 origin-top-left aspect-square fixed h-64 hidden sm:visible"
/>
<div
	style:left={`${$coords.x}px`}
	style:bottom={`${$coords.y}px`}
	style:transform={`scale(${$scale}) translate(150%,-50%)`}
	class="bg-gradient-to-tl from-primary-200/10 to-primary-400/10 animate-blobpulsesmall z-[2] hidden sm:visible rounded-full -translate-x-1/2 -translate-y-1/2 origin-top aspect-square fixed h-32"
/>
<div
	style:right={`${$coords.x}px`}
	style:top={`${$coords.y}px`}
	style:transform={`scale(${$scale}) translate(-150%,-50%)`}
	class="bg-gradient-to-tl from-primary-200/20 to-primary-400/20 animate-blobpulsesmall z-[2] hidden sm:visible rounded-full -translate-x-1/2 -translate-y-1/2 origin-top aspect-square fixed h-40"
/>
<!-- <div
	style:right={`${$position.x}px`}
	style:top={`${$position.y}px`}
	style:transform={`scale(${$scale}) translate(150%,50%)`}
	class="bg-gradient-to-tl from-primary-900/40
to-primary-400/40 animate-blobpulsesmall z-[1] rounded-full -translate-x-1/2 -translate-y-1/2 origin-bottom aspect-square fixed h-48"
/> -->

<div
	class="
{smaller ? 'backdrop-blur-[100px] ' : 'backdrop-blur-[120px]'}
 transition-all fixed h-full w-full z-[2] hidden sm:visible"
/>
