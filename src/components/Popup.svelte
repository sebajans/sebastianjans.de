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
		class="fixed left-0 top-0 z-40 h-screen w-screen cursor-default bg-primary-900/30 backdrop-blur-[1px]"
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
			class="{popupClass} rounded-lg py-4 pl-2.5 pr-4 text-primary-50 shadow-lg shadow-primary-600/50 transition-all delay-75 duration-500 hover:shadow-primary-600/50 dark:text-primary-900
			"
		>
			{@render children?.()}
			<button
				aria-label="Close popup"
				class="group group absolute right-4 top-4 h-6 w-6 font-sans hover:text-primary-500"
				onclick={hide}
			>
				<span
					class="duration-250 block h-0.5 w-6 rotate-45 transform bg-primary-900 transition-all group-hover:rotate-[135deg] group-hover:bg-primary-600 dark:bg-primary-400 dark:group-hover:bg-primary-100"
				></span>

				<span
					class="duration-250 block h-0.5 w-6 -translate-y-0.5 -rotate-45 transform bg-primary-900 transition-all group-hover:rotate-45 group-hover:bg-primary-600 dark:bg-primary-400 dark:group-hover:bg-primary-100"
				></span>
			</button>
		</div>
	</div>
{/if}
