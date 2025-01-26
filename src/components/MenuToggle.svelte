<script lang="ts">
	interface Props {
		showMenu?: boolean;
		toggleMenu: () => void;
	}

	let { showMenu = false, toggleMenu }: Props = $props();
</script>

<button
	onclick={() => toggleMenu()}
	aria-label="Open Navigation Menu"
	class="{showMenu
		? ''
		: ''} group fixed bottom-0 left-0 z-30 h-14 w-14 space-y-2 rounded-tr-lg p-2 backdrop-blur-md md:hidden"
>
	<span
		class="{showMenu ? 'translate-y-2.5 rotate-45 group-hover:rotate-0' : 'group-hover:-rotate-180'}
			bg-primary-900 group-hover:bg-primary-600 dark:bg-primary-200 dark:group-hover:bg-primary-100 block h-0.5 w-10 delay-100 duration-200 group-hover:w-9 group-hover:translate-x-0.5 group-hover:translate-y-2.5"
	></span>
	<span
		class="{showMenu ? 'w-0 translate-x-5' : 'w-8 group-hover:w-0 group-hover:translate-x-5 '} 
			bg-primary-600 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 visible block h-0.5 delay-100 duration-200"
	></span>
	<span
		class="{showMenu
			? '-translate-y-2.5 -rotate-45 group-hover:-rotate-90'
			: 'group-hover:-rotate-90'} 
			bg-primary-900 group-hover:bg-primary-600 dark:bg-primary-400 dark:group-hover:bg-primary-100 block h-0.5 w-10 delay-100 duration-200 group-hover:w-9 group-hover:-translate-y-2.5 group-hover:translate-x-0.5"
	></span>
</button>
