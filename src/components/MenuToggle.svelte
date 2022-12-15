<script lang="ts">
	export let showMenu: boolean = false;
</script>

<button on:click
	class="{showMenu
		? ''
		: ''} md:hidden  z-30 fixed left-0 left -1/2 -translate -x-1/2 bottom-0 group p-2 h-14 w-14 space-y-2 rounded-t-lg"
>
	<!-- showMenu ? ' closed ' : ' open ' -->
	<span
		class="{showMenu ? 'translate-y-2.5 rotate-45 group-hover:rotate-0' : 'group-hover:-rotate-180'}
			block h-0.5 w-10 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-400 dark:bg-primary-200 delay-100 duration-200 group-hover:translate-y-2.5 group-hover:translate-x-0.5 group-hover:w-9 "
	/>
	<span
		class="{showMenu ? 'w-0 translate-x-5' : 'group-hover:w-0 w-8 group-hover:translate-x-5 '} 
			visible block h-0.5 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-300 delay-100 duration-200 "
	/>
	<span
		class="{showMenu
			? '-translate-y-2.5 -rotate-45 group-hover:-rotate-90'
			: 'group-hover:-rotate-90'} 
			block h-0.5 w-10 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-200 dark:bg-primary-400 delay-100 duration-200 group-hover:-translate-y-2.5 group-hover:translate-x-0.5 group-hover:w-9 "
	/>
</button>
