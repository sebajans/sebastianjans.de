<script lang="ts">
	import { Spring } from 'svelte/motion';

	let position = new Spring({ x: 0, y: 0 });
	let coords = new Spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.25
		}
	);
	let scale = new Spring(1);
	let smaller: boolean = false;

	let innerHeight: number;
	let innerWidth: number;
	// const randomBlobPosition = (e: any) => {
	// 	let r1: number, r2: number;
	// 	r1 = Math.random() * innerHeight;
	// 	r2 = Math.random() * innerWidth;
	// 	position.set({ x: e.r1, y: e.r2 });
	// 	console.log($position.x);
	// };
</script>

<svelte:window
	bind:innerHeight
	bind:innerWidth
	on:mousemove={(e) => {
		coords.target = { x: e.clientX, y: e.clientY };
	}}
	on:mousedown={(e) => {
		scale.target = 0.5;
		smaller = true;
	}}
	on:mouseup={(e) => {
		scale.target = 1;
		smaller = false;
	}}
/>
<div
	style:left={`${coords.current.x}px`}
	style:top={`${coords.current.y}px`}
	style:transform={`scale(${scale.current}) translate(-50%,-50%)`}
	class="bg-gradient-to-tl from-primary-100/40 to-primary-800/40 transition-[filter]
  {smaller ? 'brightness-125' : ''}
  fixed z-[1] hidden aspect-square h-64 origin-top-left -translate-x-1/2 -translate-y-1/2 animate-blobpulse rounded-full sm:block"
></div>
<div
	style:left={`${coords.current.x}px`}
	style:bottom={`${coords.current.y}px`}
	style:transform={`scale(${scale.current}) translate(150%,-50%)`}
	class="fixed z-[2] hidden aspect-square h-32 origin-top -translate-x-1/2 -translate-y-1/2 animate-blobpulsesmall rounded-full bg-gradient-to-tl from-primary-200/10 to-primary-400/10 sm:block"
></div>
<div
	style:right={`${coords.current.x}px`}
	style:top={`${coords.current.y}px`}
	style:transform={`scale(${scale.current}) translate(-150%,-50%)`}
	class="fixed z-[2] hidden aspect-square h-40 origin-top -translate-x-1/2 -translate-y-1/2 animate-blobpulsesmall rounded-full bg-gradient-to-tl from-primary-200/20 to-primary-400/20 sm:block"
></div>
<!-- <div
	style:right={`${$position.x}px`}
	style:top={`${$position.y}px`}
	style:transform={`scale(${scale.current}) translate(150%,50%)`}
	class="bg-gradient-to-tl from-primary-900/40
to-primary-400/40 animate-blobpulsesmall z-[1] rounded-full -translate-x-1/2 -translate-y-1/2 origin-bottom aspect-square fixed h-48"
/> -->

<div
	class="
{smaller ? 'backdrop-blur-[100px] ' : 'backdrop-blur-[120px]'}
 fixed z-[2] hidden h-full w-full transition-all sm:block"
></div>
