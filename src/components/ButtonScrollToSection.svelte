<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly } from 'svelte/transition';

	export function scrollIntoView({ target }: { target: any }) {
		const el = document.querySelector(target.getAttribute('href'));
		console.log('element', el);

		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});

		const sectionId = `button-to-${target.getAttribute('id')}`;
		const button = document.getElementById(sectionId);
		console.log('button', button);
		console.log('sectionId', sectionId);
		if (button) {
			button.parentNode?.removeChild(button);
		}
	}
	interface Props {
		section: string;
		children?: import('svelte').Snippet;
	}

	let { section, children }: Props = $props();
	let element: HTMLElement | undefined = $state();
	let intersecting: boolean | undefined = $state();
</script>

<IntersectionObserver threshold={0.2} {element} bind:intersecting>
	<div bind:this={element} class=" h-0 w-0 -translate-y-10"></div>
	{#if intersecting}
		<a
			id="button-to-{section}"
			in:fly={{ y: 50, duration: 300, delay: 3000 }}
			out:fly={{ y: -50, duration: 500, delay: 0 }}
			aria-label="scrollIntoView"
			onclick={preventDefault(scrollIntoView)}
			class="text-primary-900 hover:text-primary-400 dark:text-primary-100 dark:hover:text-primary-500 absolute bottom-4 left-1/2 z-10 h-auto w-auto -translate-x-1/2 transform text-center subpixel-antialiased hover:scale-95 md:bottom-4"
			href="#{section}"
		>
			<span class="pointer-events-none font-sans leading-9 font-normal tracking-wide">
				{@render children?.()}
			</span><br />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="pointer-events-none inline-flex h-6 w-6 animate-bounce"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
				/>
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
