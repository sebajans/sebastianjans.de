<script lang="ts">
	import NavButton from './NavButton.svelte';
	import { navItems } from '$lib/lists/navItems';
	import MenuToggle from './MenuToggle.svelte';
	import BackdropBlur from './BackdropBlur.svelte';
	import SocialMenu from '$components/SocialMenu.svelte';
	import Logo from './Logo.svelte';
	import { getTolgee } from '@tolgee/svelte';

	// const languageStore = getTolgee(['language']);

	function toggleMenu() {
		showMenu = !showMenu;
	}
	function hideMenuMobile() {
		showMenu = false;
	}

	interface Props {
		showMenu?: boolean;
		offset?: number;
		tolerance?: number;
	}

	let { showMenu = $bindable(false), offset = 100, tolerance = 3 }: Props = $props();
	let headerClass: boolean = $state(false);
	let y = $state(0);
	let lastY = 0;

	function updateClass(y: number) {
		const dy = lastY - y;
		lastY = y;
		return deriveClass(y, dy);
	}
	function deriveClass(y: number, dy: number) {
		// show if at top of page
		if (y < offset) {
			return (headerClass = true);
		}
		// don't change state unless scroll is above threshold
		if (Math.abs(dy) <= tolerance) {
			headerClass != headerClass;
			return headerClass;
		}
		if (dy < 0) {
			headerClass = false;
			return headerClass;
		}
		return (headerClass = true);
	}

	$effect(() => {
		headerClass = updateClass(y);
	});
</script>

<svelte:window bind:scrollY={y} />

<header
	class="{showMenu
		? 'h-[100dvh]'
		: 'h-0 md:h-screen md:h-screen-ios'} fixed inset-y-0 z-30 flex w-full flex-col justify-between border-r border-primary-900/[0.02] bg-linear-to-bl from-primary-900/[0.02] to-primary-900/[0.06] transition-transform dark:border-primary-50/[0.02] dark:from-primary-50/[0.02] dark:to-primary-50/[0.06] md:w-40 md:backdrop-blur-2xl"
>
	<BackdropBlur {showMenu} />
	<a
		aria-label="Back to Home"
		href="/"
		class="{headerClass || showMenu ? '' : 'opacity-0 backdrop-blur-none md:opacity-100'}
		{showMenu
			? 'mr-[0%] mt-8 scale-125 md:mt-4 md:scale-100'
			: 'mr-[100%] translate-x-1/2'} group group relative z-50 h-20 w-20 self-center rounded-br-md transition-all duration-200 ease-out hover:scale-105 md:mx-8 md:mt-10 md:h-20 md:w-20 md:translate-x-0"
	>
		<Logo class={'p-3 md:p-1.5'} />
	</a>
	<nav
		class="{showMenu
			? ' '
			: 'pointer-events-none translate-y-[100%] opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100'} relative z-30 h-auto w-screen max-w-sm space-y-3 self-center overflow-hidden p-3 pb-16 transition-transform duration-300 md:w-40 md:translate-y-0 md:overflow-visible md:rounded-tr-xl md:pb-4"
	>
		<SocialMenu />
		<ul aria-label="Navigation Bar" class="flex grow flex-col gap-4 font-sans">
			{#each navItems as { link, text }}
				<NavButton onclick={hideMenuMobile} {link} {text} />
			{/each}
		</ul>
	</nav>
	<MenuToggle {toggleMenu} {showMenu} />
</header>
