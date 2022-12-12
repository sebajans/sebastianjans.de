<!-- Popup.svelte -->
<script type="ts">
	let visible = false;
	import { fade } from 'svelte/transition';

	export let popupClass = 'left-0 w-full';

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
		on:keydown={hide}
		class=" fixed z-40 backdrop-blur-[1px] top-0 left-0 w-screen h-screen bg-primary-900/30"
	/>
	<div
		on:click|stopPropagation
		on:keydown|stopPropagation
		transition:fade={{ duration: 150 }}
		class="absolute w-auto top-20 h-auto z-50 "
	>
		<div
			class="{popupClass} hover:shadow-primary-600/80 shadow-primary-600/50 transition-all duration-500 delay-75 pl-2.5 pr-4 py-4 rounded-lg shadow-lg"
		>
			<slot />
			<button
				class="absolute group top-4 right-4 h-6 w-6 group font-sans hover:text-primary-500"
				on:click={hide}
			>
				<span
					class="transition-all transform group-hover:rotate-[135deg] rotate-45 block h-0.5 w-6 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 duration-250 "
				/>

				<span
					class="transition-all transform -rotate-45 group-hover:rotate-45 -translate-y-0.5 block h-0.5 w-6 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 duration-250 "
				/>
				<!-- <span
						class="translate-y-[5px] rotate-45 group-hover:rotate-[135deg] block dark:group-hover:bg-primary-600 dark:bg-primary-900 group-hover:bg-primary-400 bg-primary-50 h-0.5 w-7 duration-300"
					/>
					<span
						class="-translate-y-[5px] -rotate-45 group-hover:rotate-45 block dark:group-hover:bg-primary-600 dark:bg-primary-900 group-hover:bg-primary-400 bg-primary-50 h-0.5 w-7 duration-300"
					/> -->
			</button>
		</div>
	</div>
{/if}
