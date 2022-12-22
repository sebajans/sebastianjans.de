<script>
	import NavButton from './NavButton.svelte';
	import { navItems } from './navItems';
	import { onMount } from 'svelte';
	import MenuToggle from './MenuToggle.svelte';
	import BackdropBlur from './BackdropBlur.svelte';
	import SocialMenu from '../components/SocialMenu.svelte';

	import { getLanguageStore } from '@tolgee/svelte';

	const languageStore = getLanguageStore();
	export let showMenu = false;
	$: onMount(() => (showMenu = false));

	function toggleMenu() {
		showMenu = !showMenu;
	}
	$: languageStore;
</script>

<div
	class="{showMenu ? 'h-screen h-screen-ios md:h-0' : ''} z-30  fixed bottom-0 flex flex-col w-full"
>
	<BackdropBlur {showMenu} />

	<!-- actual nav -->
	<nav
		class="{showMenu
			? ''
			: 'translate-y-[100%] '} overflow-hidden md:translate-y-0 duration-300 transition-transform w-screen md:w-40 overflow-y-hidden absolute z-30 bottom-0 left-0"
	>
		<ul aria-label="Navigation Bar" class="flex font-sans flex-col gap-4 py-32 pb-16 md:py-4 md:pr-4 md:rounded-tr-xl backdrop-blur-2xl flex-grow h-full justify-center">
			{#each navItems as { link, text }}
				<NavButton on:click={toggleMenu} {link} {text} />
			{/each}
		</ul>
	</nav>

	<div class="md:hidden w-full absolute bottom-0 z-20">
		<div
			class="{showMenu
				? 'bg-transparent'
				: ' dark:bg-primary-900/40 bg-primary-50/20 backdrop-blur-md'} h-14"
		/>
	</div>

	<div
		class="{showMenu
			? ''
			: 'translate-x-[108px]'} duration-300 transform bottom-1 right-1 absolute md:hidden grid grid-flow-col gap-2 m-1 z-30"
	>
		<SocialMenu />
	</div>
	<MenuToggle on:click={toggleMenu} {showMenu} />
</div>
