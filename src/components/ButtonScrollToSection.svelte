<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import {fly} from 'svelte/transition';

	export function scrollIntoView({ target }: { target: any }) {
		const el = document.querySelector(target.getAttribute('href'));
		console.log("element", el);

		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});

		const sectionId = `button-to-${target.getAttribute('id')}`;
		const button = document.getElementById(sectionId);
		console.log("button", button)
		console.log("sectionId", sectionId)
		if (button) {
			button.parentNode?.removeChild(button);
		}
	}
	export let section: string;
	let element: HTMLElement;
	let intersecting: boolean;
</script>

<IntersectionObserver threshold={0.2} element={element} bind:intersecting={intersecting}>
	<div bind:this={element} class=" -translate-y-10 h-0 w-0 "></div>
	{#if intersecting}
		<a
			id="button-to-{section}"
			in:fly={{ y: 50, duration: 300, delay: 3000 }}
			out:fly={{ y: -50, duration: 500, delay: 0 }}
			aria-label="scrollIntoView"
			on:click|preventDefault={scrollIntoView}
			class="text-primary-900 dark:text-primary-100 hover:text-primary-400 dark:hover:text-primary-500 text-center h-auto w-auto left-1/2 transform hover:scale-95 -translate-x-1/2 subpixel-antialiased z-10 absolute bottom-4 md:bottom-4"
			href="#{section}"
		>
			<span class="pointer-events-none leading-9 font-sans font-normal tracking-wide">
				<slot />
			</span><br>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="w-6 h-6 inline-flex animate-bounce pointer-events-none"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
			</svg>
		</a>
	{/if}
</IntersectionObserver>

<!-- <style>
	.transitions-button {
		transition-property: opacity, transform;
		transition-duration: 500ms, 300ms;
		transition-delay: 0s, 0.2s;
	}
</style> -->
