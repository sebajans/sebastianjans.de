<script lang="ts">
	import { T } from '@tolgee/svelte';
	import CupholderModel from './product-items/CupholderModel.svelte';
	import CupHolderModelClose from './product-items/CupHolderModelClose.svelte';
	import { scrollInSection } from '../../components/scrollInSection';

	let zoomIn: boolean = false;
	
	export let scroll: number;
	export let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 6, windowHeight);
</script>

<section
	id="productdesign"
	style="background:radial-gradient(at left bottom, var(--tw-gradient-from) 0%, transparent 30%);"
	class="bg-gradient-to-bl from-primary-500/50 w-full justify-center relative h-screen min-h-screen min-h-screen-ios overflow-hidden flex flex-col "
>
	<div class="flex flex-row-reverse md:flex-row h-works md:h-worksmd max-h-[56rem] w-full justify-center items-center">
		<div class="md:pl-44 gap-5 p-4 h-full grid justify-center grid-cols-12 grid-rows-9 items-center max-w-4xl w-full sm:w-full">
			<div 
			style:transform={`translate3d(calc(-50% + ${sectionScroll} * 50%),calc(-100% + ${sectionScroll} * 100%), 0)`}
			style:opacity={`calc(-50% + ${sectionScroll} * 150%)`}
			class="w-full h-full overflow-hidden col-start-1 row-start-1 col-span-4 row-span-3 rounded-md">
				<img src="/productdesign/cupholder/Cupholder_compressed.webp" 
				alt="The cupholder in the compressed form" class="w-full h-full object-contain rounded-md sepia">
			</div>
			<div style:transform={`translate3d(calc(-100% + ${sectionScroll} * 100%),calc(100% - ${sectionScroll} * 100%), 0)`}
			style:opacity={`calc(-50% + ${sectionScroll} * 150%)`}
			class="w-full h-full overflow-hidden col-start-1 row-start-4 col-span-4 row-span-6 bg-gradient-to-tr from-primary-500 to-primary-500/20 dark:to-primary-100/70 rounded-md">
				<img src="/productdesign/cupholder/render-1.webp" 
				alt="The cupholder fully extended, showing the LED indicator" class="w-full h-full object-cover sepia">
			</div>
			<div style:transform={`translate3d(0, calc(150% - ${sectionScroll} * 150%), 0)`}
			style:opacity={`calc(-50% + ${sectionScroll} * 150%)`}
			 class="w-full h-full overflow-hidden col-start-5 row-start-1 col-span-8 row-span-2  rounded-md">
				<h1 class="md:pb-4 text-3xl md:text-4xl text-center md:text-left font-sans font-bold">
					<T keyName="Cupholder-title" defaultValue='Cupholder' />
				</h1>
				<p class="text-left">
					<T keyName="Cupholder-text" defaultValue='A smart, modern Cupholder with an included heating element. It also features a telescope and a diaphragm mechanism for the part that holds the bottle.' />
				</p>
			</div>
			<div 
			style:opacity={`calc(-50% + ${sectionScroll} * 150%)`}
			style:transform={`scale(calc(0% + ${sectionScroll} * 100%))`}
			id="center" class="aspect-auto h-full overflow-hidden col-start-5 row-start-3 col-span-5 row-span-4 bg-gradient-to-tl from-primary-500 to-primary-500/20 dark:to-primary-100/70 rounded-md">
				<img src="/productdesign/cupholder/cupholder51.webp" 
				alt="" class="w-full h-full rounded-md object-cover object-center sepia">
			</div>
			<div style:transform={`translate3d(0,calc(100% - ${sectionScroll} * 100%), 0)`}
			style:opacity={`calc(-50% + ${sectionScroll} * 150%)`}
			id="bottom-center" class="w-full h-full overflow-hidden col-start-5 row-start-7 col-span-3 row-span-3 bg-gradient-to-tr from-primary-500 to-primary-500/20 dark:to-primary-100/70 rounded-md">
				<img src="/productdesign/cupholder/render-4.webp" 
				alt="" class="w-full h-full object-cover sepia brightness-200">
			</div>
			<div style:transform={`translate3d(calc(100% - ${sectionScroll} * 100%),0, 0)`}
			style:opacity={`calc(-50% + ${sectionScroll} * 150%)`}
			 class="relative w-full h-full overflow-hidden col-start-10 row-start-3 col-span-3 row-span-4 rounded-md">
				<CupholderModel on:click={() => zoomIn = false} imgClass="{zoomIn ? 'opacity-50': 'opacity-100'} transition-all duration-300 w-full h-full p-1 object-contain text-primary-900 dark:text-primary-50" />
				<button on:click={() => zoomIn = !zoomIn} class="{zoomIn ? '' : 'animate-ping'} absolute w-6 h-6 left-[6%] top-[7%] rounded-full border-[0.5px] bg-primary-50/50 dark:bg-primary-900/50 border-primary-900 dark:border-primary-50"/>
				<CupHolderModelClose imgClass="{zoomIn ? 'opacity-100 w-24 h-24' : 'opacity-0 w-5 h-5'} pointer-events-none left-[8.5%] top-[8.7%] border-[1px] transition-all duration-300 aspect-square rounded-full bg-primary-50 dark:bg-primary-900 absolute object-contain text-primary-900 dark:text-primary-50" />
			</div>
			<div id="bottom-right" 
			style:transform={`translate3d(calc(100% - ${sectionScroll} * 100%),calc(100% - ${sectionScroll} * 100%), 0)`}
			style:opacity={`calc(-50% + ${sectionScroll} * 150%)`}
			class="w-full h-full overflow-hidden  col-start-8 row-start-7 col-span-5 row-span-3 bg-gradient-to-br from-primary-500 to-primary-500/20 dark:to-primary-100/70 rounded-md">
				<img src="/productdesign/cupholder/Cupholder_top_opened.webp" 
				alt="" class="w-full h-full object-cover object-top pt-2 px-6 sepia brightness-100">
			</div>
		</div>
	</div>
</section>
