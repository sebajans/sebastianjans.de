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
	class="sticky inset-x-0 top-0
z-20 mt-0 flex h-20 w-screen flex-row md:top-12 md:right-0 md:left-full md:mt-4 md:h-16 md:w-fit"
>
	<!-- <div class="w-[calc(100vw_-_56rem)] h-full" /> -->
	<div class="flex w-full max-w-4xl flex-col gap-2 sm:flex-row-reverse">
		{#if show}
			<h2
				in:fly={{ x: 200, duration: 300, delay: 300 }}
				out:fly={{ y: -200, duration: 300, delay: 0 }}
				class="{backgroundColor} ml-auto w-full py-6 pr-8 pl-3 text-right font-sans text-2xl backdrop-blur-lg md:mr-2 md:w-fit md:rounded-md md:py-3 md:text-right md:text-4xl"
			>
				{@render children?.()}
			</h2>
			{#if buttons}
				<div class="flex flex-row items-center justify-center gap-2">
					{@render buttons?.()}
				</div>
			{/if}
		{/if}
	</div>
</div>
