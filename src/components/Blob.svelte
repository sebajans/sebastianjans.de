<script lang="ts">
  import { spring } from 'svelte/motion';
	let coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.25
		}
	);
  let scale = spring(1);
  let smaller : boolean = false
  $: console.log(smaller)
  const handlemove = (e:any) => {
    // console.log(e)
		coords.set({ x: e.clientX, y: e.clientY })
	}
</script>

<svelte:window
  on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY })
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
  style:left="{`${$coords.x}px`}"
  style:top="{`${$coords.y}px`}"
  style:transform="{`scale(${$scale}) translate(-50%,-50%)`}"
  class="bg-gradient-to-tl from-primary-100 to-primary-800 transition-[filter]
  {smaller ? 'brightness-125 contrast-125' : ''}
  animate-blobpulse z-[1] rounded-full -translate-x-1/2 -translate-y-1/2 origin-top-left aspect-square fixed h-64"
/>
<div 
  style:left="{`${$coords.x}px`}"
  style:top="{`${$coords.y}px`}"
  style:transform="{`scale(${$scale}) translate(-150%,-50%)`}"
  class="bg-gradient-to-tl from-primary-100/70 to-primary-400 animate-blobpulsesmall z-[2] rounded-full -translate-x-1/2 -translate-y-1/2 origin-top aspect-square fixed h-40"
/>
<div 
  style:left="{`${$coords.x}px`}"
  style:top="{`${$coords.y}px`}"
  style:transform="{`scale(${$scale}) translate(150%,50%)`}"
class="bg-gradient-to-tl from-primary-900
to-primary-400 animate-blobpulsesmall z-[1] rounded-full -translate-x-1/2 -translate-y-1/2 origin-bottom aspect-square fixed h-40"
/>

<div class="
{smaller ? 'backdrop-blur-[60px] ' : 'backdrop-blur-[100px]'}
 transition-all fixed h-full w-full z-[2]" />
<!-- <div class="fixed left-1/2 z-40">{$scale}</div> -->