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
		: ''} md:hidden backdrop-blur-md z-30 fixed left-0 bottom-0 group p-2 h-14 w-14 space-y-2 rounded-tr-lg"
>
	<span
		class="{showMenu ? 'translate-y-2.5 rotate-45 group-hover:rotate-0' : 'group-hover:-rotate-180'}
			block h-0.5 w-10 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-200 delay-100 duration-200 group-hover:translate-y-2.5 group-hover:translate-x-0.5 group-hover:w-9 "
	></span>
	<span
		class="{showMenu ? 'w-0 translate-x-5' : 'group-hover:w-0 w-8 group-hover:translate-x-5 '} 
			visible block h-0.5 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-600 delay-100 duration-200 "
	></span>
	<span
		class="{showMenu
			? '-translate-y-2.5 -rotate-45 group-hover:-rotate-90'
			: 'group-hover:-rotate-90'} 
			block h-0.5 w-10 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 delay-100 duration-200 group-hover:-translate-y-2.5 group-hover:translate-x-0.5 group-hover:w-9 "
	></span>
</button>
