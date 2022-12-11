<!-- Popup.svelte -->
<script type="ts">
	let visible = false;
	import { fade } from 'svelte/transition';

	export function show() {
		visible = true;
	}

	export function hide() {
		visible = false;
	}
</script>

{#if visible}
	<div
		transition:fade={{ duration: 150 }}
		on:click={hide}
		class="fixed z-40 backdrop-blur-[1px] top-0 left-0 w-screen h-screen bg-primary-900/30"
	/>
	<div
		on:click|stopPropagation
		transition:fade={{ duration: 150 }}
		class="absolute w-full top-20 h-auto z-50 p-4"
	>
		<div
			class="bg-primary-200 hover:shadow-primary-600/80 shadow-primary-600/50 transition-all duration-500 delay-75 flex flex-row justify-center items-center h-auto p-4 rounded-lg shadow-lg"
		>
			<slot />
			<button class="h-6 w-6 group ml-auto font-sans hover:text-primary-500" on:click={hide}>
				<span
					class="rotate-45 block h-0.5 w-6 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 duration-250 "
				/>

				<span
					class="-rotate-45 -translate-y-0.5 block h-0.5 w-6 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 duration-250 "
				/>
			</button>
		</div>
	</div>
{/if}
