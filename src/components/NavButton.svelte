<script lang="ts">
	import { page } from '$app/stores';
	import { T } from '@tolgee/svelte';

	export let link: string;
	export let text: string;
	// let hovering: boolean;
	let isActive: boolean;

	$: isActive = link === '/' ? $page.url.pathname === link : $page.url.pathname.startsWith(link);
</script>

<button on:click class="group md:ml-3 grow h-14 max-h-32 items-stretch">
	<a
		class=" {isActive
			? 'border-primary-900 bg-primary-800/20 dark:bg-primary-50/10 dark:border-primary-50 '
			: ''} hover:border-primary-900 md:backdrop-blur-sm group-hover:bg-primary-50/25 dark:group-hover:bg-primary-50 dark:md:group-hover:bg-primary-50 group-hover:bg-primary-900 flex border-l-4 transition duration-250 h-full md:rounded-r-lg border-primary-500/30"
		href={link}
		>
		<!-- on:mouseover={() => (hovering = true)}
		on:focus={() => (hovering = false)}
		on:mouseleave={() => (hovering = false)} -->
		<span
			class=" {isActive
				? 'dark:text-primary-50 text-primary-900'
				: ''} dark:group-hover:text-primary-900 group-hover:text-primary-50 my-auto px-3 text-lg font-light text-left"
		>

		<T keyName="{text}" defaultValue="{text}" />
	</span>
	</a>
</button>
