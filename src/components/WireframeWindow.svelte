<script lang="ts">
	import Box from './Box.svelte';

	interface Props {
		show?: boolean;
		screenshotImage?: string;
		altTag?: string;
		url?: string;
		className?: string; // Default variation is 'primary'
	}

	let {
		show = true,
		screenshotImage = '',
		altTag = '',
		url = '',
		className = 'row-[5_/_span_5] col-[1_/_span_5] sm:row-[1_/_span_8] sm:col-[5_/_span_6]'
	}: Props = $props();
</script>

<Box
	{show}
	outerClass="{show ? '' : 'opacity-0'} {className}
					aspect-14/10 bg-primary-100 dark:bg-primary-800 transition-all duration-500 flex mx-auto justify-end w-fit h-full "
>
	<div
		class="box relative z-10 flex w-full before:top-0 before:right-0 after:right-0 after:bottom-0"
	>
		<div
			class="flex w-full flex-row justify-between space-x-1 p-1 before:left-0 after:bottom-0 md:space-x-10 md:p-2"
		>
			<div class="flex flex-row space-x-1 md:space-x-2">
				{#each Array(3) as _}
					<div
						class=" dark:bg-primary-50/20 bg-primary-900/20 border-primary-900/30 dark:border-primary-50/50 h-2 w-2 rounded-lg border md:h-3.5 md:w-3.5"
					></div>
				{/each}
			</div>
			{#if url}
				<span
					class=" dark:bg-primary-50/20 bg-primary-900/20 border-primary-900/30 dark:border-primary-50/50 mb-0 h-2 w-full rounded-lg border px-2 pt-px text-center text-[0.6rem] leading-[0.8] md:h-3.5"
				>
					{url}
				</span>
				<div class=" mb-0 h-2 w-8 md:h-3.5"></div>
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
