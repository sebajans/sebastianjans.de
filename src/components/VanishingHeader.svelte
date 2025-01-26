<script lang="ts">
	// import { beforeUpdate } from 'svelte';
	import Logo from '$components/Logo.svelte';
	import { pageTitle } from '$lib/stores/pageTitle';

	// import SocialMenu from '$components/SocialMenu.svelte';
	// export let duration = "300ms"
	export let offset = 0;
	export let tolerance = 0;

	export let showHeader = false;
	// let showMenu: boolean;
	// $: showMenu;
	let headerClass: boolean = false;
	let y = 0;
	let lastY = 0;

	// $: beforeUpdate(() => (showMenu = false));

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
	role="navigation"
	aria-label="Page Header"
	on:mouseenter={() => (showHeader = true)}
	on:mouseleave={() => (showHeader = false)}
	class=" {headerClass || showHeader
		? 'h-24 max-h-24 translate-y-0'
		: 'h-20 max-h-16 -translate-y-full md:translate-y-0 '} dark:bg-primary-900/40 bg-primary-50/40 fixed top-0 z-40 flex w-full backdrop-blur-md transition-all duration-300"
>
	<!-- <slot/> -->
	<a
		aria-label="Back to Home"
		href="/"
		class="{headerClass || showHeader
			? 'top-2 h-20 w-20 md:left-2'
			: 'h-16 w-16 '} group absolute top-0 left-1/2 z-50 transition-all duration-150 md:fixed md:left-0 md:mx-8 md:translate-x-0"
	>
		<Logo class={headerClass || showHeader ? 'h-16 w-16' : 'h-12 w-12 translate-x-2'} />
	</a>

	<div class="relative z-40 mx-auto flex w-full items-center justify-between px-4 md:pl-44">
		<!-- page title -->
		<h1
			class="{headerClass || showHeader
				? 'py-2 text-3xl md:text-4xl'
				: 'py-0 md:text-3xl'} z-40 pl-0 text-left font-sans text-3xl leading-tight! font-bold transition-all duration-300 md:text-4xl"
		>
			{$pageTitle}
		</h1>
	</div>
</header>
