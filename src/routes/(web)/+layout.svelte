<script lang="ts">
	// import { beforeUpdate } from 'svelte';
	import { onMount } from 'svelte';
	import { pageTitle } from '$lib/stores/pageTitle';
	import NavBar from '$components/NavBar.svelte';

	import Footer from '$components/Footer.svelte';
	import PageTransitions from '$components/PageTransitions.svelte';
	import Blob from '$components/Blob.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data: any;

	let showMenu = false;
	let showHeader = false;

	// beforeUpdate(() => ((showMenu = false), (showHeader = false)));

	let initialized = false;
	onMount(() => {
		initialized = true;
	});

	let viewport: Element;
	let contents: Element;
</script>

<div id="blob-motion" class="motion-reduce:hidden">
	<Blob />
</div>
{#if initialized}
	<NavBar {showMenu} />
	<main
		bind:this={viewport}
		style="display:grid"
		class=" viewport relative mx-auto min-h-[100svh] w-screen bg-primary-50 pt-24 transition-colors duration-300 min-h-screen-ios dark:bg-primary-900 md:pt-28"
	>
		<h1
			class="absolute left-24 top-5 z-3 py-0 pl-0 text-left font-sans text-3xl font-bold transition-all duration-300 md:left-44 md:top-12 md:py-3 md:text-4xl"
		>
			{$pageTitle}
		</h1>
		<PageTransitions pathname={data.pathname}>
			<div bind:this={contents} class="my-auto md:ml-44">
				<slot />
			</div>
		</PageTransitions>
		<Footer />
	</main>
{/if}
