<script lang="ts">
	import type { VariantProps } from 'tailwind-variants';
	import { getEmblaContext } from './context.js';
	import { cn } from '$lib/utils.js';
	import { Button, type Props, type buttonVariants } from '$lib/components/ui/button/index.js';

	type $$Props = Props;

	interface Props_1 {
		class?: $$Props['class'];
		variant?: VariantProps<typeof buttonVariants>['variant'];
		size?: VariantProps<typeof buttonVariants>['size'];
		[key: string]: any;
	}

	let {
		class: className = undefined,
		variant = 'outline',
		size = 'icon',
		...rest
	}: Props_1 = $props();
	const { orientation, canScrollNext, scrollNext, handleKeyDown } =
		getEmblaContext('<Carousel.Next/>');
</script>

<Button
	{variant}
	{size}
	class={cn(
		'absolute h-8 w-8 touch-manipulation rounded-full',
		$orientation === 'horizontal'
			? 'top-1/2 -right-12 -translate-y-1/2'
			: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
		className
	)}
	disabled={!$canScrollNext}
	on:click={scrollNext}
	on:keydown={handleKeyDown}
	{...rest}
>
	<iconify-icon icon="mdi:arrow-right" class="size-3.5"></iconify-icon>
	<span class="sr-only">Next slide</span>
</Button>
