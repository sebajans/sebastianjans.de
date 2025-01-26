<script lang="ts">
	import Box from './Box.svelte';

	export let show: boolean = true;
	export let screenshotImage: string = '';
	export let altTag: string = '';
	export let url: string = '';
	export let className: string =
		'row-[5_/_span_5] col-[1_/_span_5] sm:row-[1_/_span_8] sm:col-[5_/_span_6]'; // Default variation is 'primary'
</script>

<Box
	{show}
	outerClass="{show
		? ''
		: 'opacity-0'} {className} after:right-0 before:top-0 after:top-0 after:h-[calc(100%_-_0px)] after:z-10 before:z-10 
					aspect-14/10 bg-white dark:bg-gray-800 transition-all duration-500 flex mx-auto justify-end w-fit h-full "
	innerClass="before:left-0 after:z-10 before:bottom-0.5 before:z-10 after:bottom-0.5 h-full w-full "
>
	<div
		class="box relative z-10 flex w-full before:right-0 before:top-0 after:bottom-0 after:right-0"
	>
		<div
			class="flex w-full flex-row justify-between space-x-1 p-1 before:left-0 after:bottom-0 md:space-x-10 md:p-2"
		>
			<div class="flex flex-row space-x-1 md:space-x-2">
				{#each Array(3) as _}
					<div class=" border-teal-950 dark:border-white h-2 w-2 border md:h-3.5 md:w-3.5" />
				{/each}
			</div>
			{#if url}
				<span
					class=" border-teal-950 dark:border-white mb-0 h-2 w-full border px-2 pt-px text-center text-[0.6rem] leading-[0.8] md:h-3.5"
				>
					{url}
				</span>
				<div class=" mb-0 h-2 w-8 md:h-3.5" />
			{/if}
		</div>
	</div>
	<img
		width="900"
		height="612"
		alt={altTag}
		class="h-[calc(100%_-_1rem)] object-cover object-top md:h-[calc(100%_-_2rem)]"
		src={screenshotImage}
	/>
</Box>
