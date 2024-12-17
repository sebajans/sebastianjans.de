<script lang="ts">
	import { fly } from 'svelte/transition';
	interface Props {
		backgroundColor: string;
		show: boolean;
		children?: import('svelte').Snippet;
		buttons?: import('svelte').Snippet;
	}

	let { backgroundColor, show, children, buttons }: Props = $props();
</script>

<div 
class="top-0  w-screen md:w-fit
sticky  md:top-12 h-20 md:h-16 z-20 inset-x-0 md:left-full md:right-0 flex flex-row mt-0 md:mt-4">
<!-- <div class="w-[calc(100vw_-_56rem)] h-full" /> -->
	<div class="max-w-4xl w-full flex flex-col sm:flex-row-reverse gap-2 ">
		{#if show}
			<h2
			in:fly={{x: 200, duration: 300, delay: 300}}
			out:fly={{y: -200, duration: 300, delay: 0}}
				class="{backgroundColor} md:mr-2 backdrop-blur-lg text-right md:text-right w-full md:w-fit ml-auto pr-8 pl-3  md:rounded-md font-sans py-6 md:py-3 text-2xl md:text-4xl "
			>
				{@render children?.()}
			</h2>
			{#if buttons}
				<div class="flex flex-row gap-2 items-center justify-center">
					{@render buttons?.()}
				</div>
			{/if}
		{/if}
	</div>
</div>
