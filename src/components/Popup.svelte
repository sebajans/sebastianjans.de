<!-- Popup.svelte -->
<script lang="ts">
	import { createBubbler, stopPropagation } from 'svelte/legacy';

	const bubble = createBubbler();
	let visible = $state(false);
	import { fade, scale } from 'svelte/transition';

	interface Props {
		popupClass?: string;
		position?: string;
		children?: import('svelte').Snippet;
		onclick?: (e: Event) => void;
		onkeydown?: (e: KeyboardEvent) => void;
	}

	let { onclick, onkeydown, popupClass = 'left-0 w-full', position = 'left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full', children }: Props = $props();

	export function show() {
		visible = true;
	}

	export function hide() {
		visible = false;
	}
</script>

{#if visible}
	<div
	aria-label="Close popup"
	role="button"
	tabindex="0"
		transition:fade|global={{ duration: 150 }}
		onclick={hide}
		onkeydown={hide}
		class="fixed z-40 cursor-default backdrop-blur-[1px] top-0 left-0 w-screen h-screen bg-primary-900/30"
	></div>
	<div
	aria-label="Close popup"
	role="button"
	tabindex="0"
		{onclick}
		{onkeydown}
		transition:fade|global={{ duration: 150 }}
		class="{position} absolute cursor-default w-auto h-auto z-50 "
	>
		<div
			transition:scale|global={{ duration: 200 }}
			class="{popupClass} hover:shadow-primary-600/50 shadow-primary-600/50 transition-all duration-500 delay-75 pl-2.5 pr-4 py-4 rounded-lg shadow-lg text-primary-50 dark:text-primary-900
			"
		>
			{@render children?.()}
			<button
				class="absolute group top-4 right-4 h-6 w-6 group font-sans hover:text-primary-500"
				onclick={hide}
			>
				<span
					class="transition-all transform group-hover:rotate-[135deg] rotate-45 block h-0.5 w-6 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 duration-250 "
				></span>

				<span
					class="transition-all transform -rotate-45 group-hover:rotate-45 -translate-y-0.5 block h-0.5 w-6 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 duration-250 "
				></span>
			</button>
		</div>
	</div>
{/if}
