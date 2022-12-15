<script lang="ts">
	export function scrollIntoView({ target }: { target: any }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
	export let section: string;
</script>

<button
	on:click|preventDefault={scrollIntoView}
	class="hover:text-primary-400 h-auto w-auto left-1/2 transform transition-all duration-200 hover:scale-95 -translate-x-1/2 subpixel-antialiased z-10 absolute bottom-14 md:bottom-4"
	href="#{section}"
	alt={section}
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
		class="w-6 h-6 inline-flex animate-bounce pointer-events-none "
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
		/>
	</svg>
</button>
