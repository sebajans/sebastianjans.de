<script lang="ts">
	import { onMount } from 'svelte';
	import { nightMode } from '$lib/stores/nightMode';


	
	// onMount(() => {
	// 	window
	// 		.matchMedia("(prefers-color-scheme: dark)")
	// 		.addEventListener("change", (e) => {
	// 			darkMode = e.matches;
	// 		});
	// });
	// let darkMode = isDarkMode();
	// $: toggleColorScheme(darkMode);
</script>

<button
	aria-label="DarkModeToggle"
	class="p-2 h-10 w-10 relative overflow-hidden rounded-md transition-colors duration-250 hover:text-primary-500 dark:hover:text-primary-500 bg-primary-900 text-primary-50 dark:bg-primary-50 dark:text-primary-900 "
	on:click={nightMode.toggleDarkMode}
>
	<div
		class="{$nightMode
			? 'rotate-90'
			: ''} -translate-y-[50%] absolute h-6 w-6 origin-[50%_400%] transition-transform duration-500"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		</svg>
	</div>
	<div
		class="{$nightMode
			? 'rotate-0'
			: '-rotate-90'} -translate-y-[50%] absolute h-6 w-6 origin-[50%_400%] transition-transform duration-500"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="1 1 23 23"
			stroke-width="2"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	</div>
	<slot />
</button>

<!-- https://v2.tailwindcss.com/docs/dark-mode -->
