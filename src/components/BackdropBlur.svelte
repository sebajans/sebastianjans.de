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
			: 'hidden'} h-screen scale-x-150 md:scale-x-100 duration-300 transition bottom-0 inset-0 absolute z-20 backdrop-blur-2xl bg-primary-100/50  dark:bg-primary-900/50"
	>
		{@render children?.()}
	</div>
{/if}
