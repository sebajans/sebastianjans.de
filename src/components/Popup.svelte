<script lang="ts">
	let visible = $state(false);
	import { fade, scale } from 'svelte/transition';

	interface Props {
		popupClass?: string;
		position?: string;
		children?: import('svelte').Snippet;
		onclick?: (e: Event) => void;
		onkeydown?: (e: KeyboardEvent) => void;
	}

	let {
		onclick,
		onkeydown,
		popupClass = 'left-0 w-full',
		position = 'left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full',
		children
	}: Props = $props();

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
		class="bg-primary-900/30 fixed top-0 left-0 z-40 h-screen w-screen cursor-default backdrop-blur-[1px]"
	></div>
	<div
		aria-label="Close popup"
		role="button"
		tabindex="0"
		{onclick}
		{onkeydown}
		transition:fade|global={{ duration: 150 }}
		class="{position} absolute z-50 h-auto w-auto cursor-default"
	>
		<div
			transition:scale|global={{ duration: 200 }}
			class="{popupClass} text-primary-50 shadow-primary-600/50 hover:shadow-primary-600/50 dark:text-primary-900 rounded-lg py-4 pr-4 pl-2.5 shadow-lg transition-all delay-75 duration-500
			"
		>
			{@render children?.()}
			<button
				aria-label="Close popup"
				class="group group hover:text-primary-500 absolute top-4 right-4 h-6 w-6 font-sans"
				onclick={hide}
			>
				<span
					class="bg-primary-900 group-hover:bg-primary-600 dark:bg-primary-400 dark:group-hover:bg-primary-100 block h-0.5 w-6 rotate-45 transform transition-all duration-250 group-hover:rotate-[135deg]"
				></span>

				<span
					class="bg-primary-900 group-hover:bg-primary-600 dark:bg-primary-400 dark:group-hover:bg-primary-100 block h-0.5 w-6 -translate-y-0.5 -rotate-45 transform transition-all duration-250 group-hover:rotate-45"
				></span>
			</button>
		</div>
	</div>
{/if}
