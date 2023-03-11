<script>
	import { fly } from 'svelte/transition';
	export let pathname = '';

	let isMobile = false;
	if (typeof window !== 'undefined') {
		isMobile = window.innerWidth < 640;
	}
</script>

{#key pathname}
	{#if isMobile}
		<!-- content here -->
		<div
			class="z-[3] overflow-x-clip w-full flex justify-center"
			style="grid-row: 1 / -1; grid-column: 1 / -1;"
			in:fly={{ x: 100, duration: 350, delay: 250 }}
			out:fly={{ x: 100, duration: 350 }}
		>
			<slot />
		</div>
	{:else}
		<div
			class="z-[3] overflow-x-clip w-full flex justify-center"
			style="grid-row: 1 / -1; grid-column: 1 / -1;"
		>
			<slot />
		</div>
	{/if}
{/key}
