<script lang="ts">
	import { settingsState, toggleDarkMode } from '$lib/stores/settingsState';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<button
	aria-label="DarkModeToggle"
	class="bg-primary-900/20 text-primary-900 hover:bg-primary-900 hover:text-primary-300 dark:bg-primary-50/20 dark:text-primary-50 dark:hover:bg-primary-50 dark:hover:text-primary-500 relative h-10 w-10 overflow-hidden rounded-md p-2 transition-colors duration-250"
	onclick={toggleDarkMode}
>
	<div
		class="{$settingsState.darkMode
			? 'rotate-90'
			: ''} absolute h-6 w-6 origin-[50%_400%] -translate-y-[50%] transition-transform duration-500"
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
		class="{$settingsState.darkMode
			? 'rotate-0'
			: '-rotate-90'} absolute h-6 w-6 origin-[50%_400%] -translate-y-[50%] transition-transform duration-500"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="1 1 23 23"
			stroke-width="2"
			stroke="currentColor"
			class="h-6 w-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	</div>
	{@render children?.()}
</button>
