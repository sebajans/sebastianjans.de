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

	const { orientation, canScrollPrev, scrollPrev, handleKeyDown } =
		getEmblaContext('<Carousel.Previous/>');
</script>

<Button
	{variant}
	{size}
	class={cn(
		'absolute h-8 w-8 touch-manipulation rounded-full',
		$orientation === 'horizontal'
			? 'top-1/2 -left-12 -translate-y-1/2'
			: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
		className
	)}
	disabled={!$canScrollPrev}
	on:click={scrollPrev}
	on:keydown={handleKeyDown}
	{...rest}
>
	<iconify-icon icon="mdi:arrow-left" class="size-3.5"></iconify-icon>
	<span class="sr-only">Previous slide</span>
</Button>
