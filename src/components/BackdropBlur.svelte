<script lang="ts">
	import { fade } from 'svelte/transition';
	interface Props {
		showMenu?: boolean;
		children?: import('svelte').Snippet;
	}

	let { showMenu = false, children }: Props = $props();
</script>

{#if showMenu}
	<div
		transition:fade|global={{ duration: 150 }}
		class="{showMenu
			? 'md:hidden'
			: 'hidden'} bg-primary-100/50 dark:bg-primary-900/50 absolute inset-0 bottom-0 z-20 h-screen scale-x-150 backdrop-blur-2xl transition duration-300 md:scale-x-100"
	>
		{@render children?.()}
	</div>
{/if}
