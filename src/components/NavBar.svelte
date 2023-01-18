<script>
	import NavButton from './NavButton.svelte';
	import { navItems } from './navItems';
	import { onMount } from 'svelte';
	import MenuToggle from './MenuToggle.svelte';
	import BackdropBlur from './BackdropBlur.svelte';
	import SocialMenu from '../components/SocialMenu.svelte';
	import Logo from './Logo.svelte';
	import { getLanguageStore } from '@tolgee/svelte';

	const languageStore = getLanguageStore();
	export let showMenu = false;
	$: onMount(() => (showMenu = false));

	function toggleMenu() {
		showMenu = !showMenu;
	}
	$: languageStore;
</script>

<header
	class="{showMenu ? 'h-screen h-screen-ios' : 'h-0 md:h-screen md:h-screen-ios'} transition-transform md:w-40 z-30 fixed inset-y-0 flex justify-between flex-col w-full"
>
	<BackdropBlur {showMenu} />
	<!-- LOGO -->
	<a aria-label="Back to Home" href="/" 
		class="{showMenu ? 'mt-8 md:mt-4 scale-125 md:scale-100 ' : ''} md:w-20 w-16 md:h-20 h-16 m-4 md:my-4 md:mx-8 self-center relative transition-all duration-150 md:translate-x-0 z-50 group">
		<Logo className={''} />
	</a>
	<!-- actual nav -->
	
	<nav
		class="{showMenu
			? ' '
			: 'opacity-0 md:opacity-100 md:translate-y-0 md:pointer-events-auto pointer-events-none translate-y-[100%]'} max-w-sm self-center h-auto md:overflow-visible md:translate-y-0 md:pb-4 pb-16 duration-300 transition-transform md:rounded-tr-xl md:backdrop-blur-2xl w-screen md:w-40 overflow-hidden space-y-3 relative z-30 p-3"
	>
		<SocialMenu />
		<ul aria-label="Navigation Bar" class="flex font-sans flex-col gap-4 flex-grow self-center">
			{#each navItems as { link, text }}
				<NavButton on:click={toggleMenu} {link} {text} />
			{/each}
		</ul>
	</nav>
	<MenuToggle on:click={toggleMenu} {showMenu} />
</header>
