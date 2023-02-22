<script>
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div
		class="z-[3] overflow-x-clip w-full flex justify-center"
		style="grid-row: 1 / -1; grid-column: 1 / -1;"
		in:fly={{ x: 100, duration: 350, delay: 250 }}
		out:fly={{ x: 100, duration: 350 }}
	>
		<slot />
	</div>
{/key}
