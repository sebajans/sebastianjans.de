<script lang="ts">
	import { beforeUpdate } from 'svelte';
	import Logo from '../components/Logo.svelte';
	import { pageTitle } from '$lib/stores/pageTitle';

	import SocialMenu from '../components/SocialMenu.svelte';
	// export let duration = "300ms"
	export let offset = 0;
	export let tolerance = 0;

	export let showHeader = false;
	let showMenu: boolean;
	$: showMenu;
	let headerClass: boolean = false;
	let y = 0;
	let lastY = 0;

	$: beforeUpdate(() => (showMenu = false));

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

	$: headerClass = updateClass(y);
	// $: console.log(showMenu, headerClass);
</script>

<svelte:window bind:scrollY={y} />

<header
	on:mouseenter={() => (showHeader = true)}
	on:mouseleave={() => (showHeader = false)}
	class=" {headerClass || showHeader
		? 'translate-y-0 h-24 max-h-24'
		: '-translate-y-full md:translate-y-0 h-20 max-h-16 '} fixed duration-300 top-0 w-full  flex z-40 transition-all backdrop-blur-md dark:bg-primary-900/40 bg-primary-50/40"
>
	<!-- <slot/> -->
	<a
		aria-label="Back to Home"
		href="/"
		class="{headerClass || showHeader
			? 'w-20 h-20 md:left-2 top-2'
			: 'w-16 h-16 '} md:fixed md:mx-8 top-0 absolute md:left-0 left-1/2 transition-all duration-150 md:translate-x-0 z-50 group"
	>
		<Logo className={headerClass || showHeader ? 'w-16 h-16' : 'translate-x-2 w-12 h-12'} />
	</a>

	<div class="relative items-center w-full md:pl-44 px-4 mx-auto z-40 flex justify-between ">
		<!-- page title -->
		<h1
			class="{headerClass || showHeader
				? 'text-3xl md:text-4xl py-2'
				: 'md:text-3xl py-0'} transition-all duration-300 pl-0 text-3xl md:text-4xl text-left font-sans font-bold z-40 !leading-tight"
		>
			{$pageTitle}
		</h1>
	</div>
</header>
