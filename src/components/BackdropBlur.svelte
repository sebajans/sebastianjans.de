<script lang="ts">
	import { fade } from 'svelte/transition';
	export let showMenu: boolean = false;
</script>

{#if showMenu}
	<div
		transition:fade|global={{ duration: 150 }}
		class="{showMenu
			? 'md:hidden'
			: 'hidden'} h-screen scale-x-150 md:scale-x-100 duration-300 transition bottom-0 inset-0 absolute z-20 backdrop-blur-2xl bg-primary-100/50  dark:bg-primary-900/50"
	>
		<slot />
	</div>
{/if}
