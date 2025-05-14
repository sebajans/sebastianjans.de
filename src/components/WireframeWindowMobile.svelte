<script lang="ts">
	import Box from './Box.svelte';

	interface Props {
		show?: boolean;
		screenshotImage?: string;
		url?: string;
		altTag?: string;
		className?: string; // Default variation is 'primary'
		children?: import('svelte').Snippet;
	}

	let {
		show = true,
		screenshotImage = '',
		url = '',
		altTag = '',
		className = 'row-[5_/_span_5] col-[1_/_span_5] sm:row-[1_/_span_8] sm:col-[5_/_span_6]',
		children
	}: Props = $props();
</script>

<Box
	{show}
	outerClass="{show ? '' : 'opacity-0'} {className}
					aspect-[10/19.6] md:aspect-[10/19.6] bg-primary-100 dark:bg-primary-800 transition-all duration-500 flex mx-auto justify-end w-fit h-full "
>
	<div class="relative h-[calc(100%_-_1rem)] md:h-[calc(100%_-_2rem)]">
		<img
			width="900"
			height="612"
			alt={altTag}
			class="h-full object-cover object-top md:h-full"
			src={screenshotImage}
		/>
		{@render children?.()}
	</div>
	<div class="relative flex flex-row space-x-2 pt-1 md:pt-2 md:pb-3">
		<div class="box h-5 w-4 md:h-6"></div>
		<div class="box flex h-5 w-full items-center justify-center md:h-6">
			<span class="mb-px h-auto text-center font-sans text-[0.6rem] sm:leading-none md:text-xs">
				{url}
			</span>
		</div>
		<div class="box h-5 w-4 md:h-6"></div>
	</div>
</Box>
