<script lang="ts">
	import { page } from '$app/stores';
	import { T } from '@tolgee/svelte';

	export let link: string;
	export let text: string;
	// let hovering: boolean;
	let isActive: boolean;

	$: isActive = link === '/' ? $page.url.pathname === link : $page.url.pathname.startsWith(link);
</script>

<li class="md:ml-3 grow h-14 max-h-32 items-stretch">
<button aria-label="Navigate to {text}" on:click class="group items-stretch w-full">
	<a
		class=" {isActive
			? 'border-primary-900 bg-primary-800/20 dark:bg-primary-50/10 dark:border-primary-50 '
			: 'dark:hover:border-primary-50'} text-lg font-light text-left py-3.5 px-3 h-auto dark:group-hover:text-primary-900 group-hover:text-primary-50  hover:border-primary-900 md:backdrop-blur-sm group-hover:bg-primary-50/25 dark:group-hover:bg-primary-50 dark:md:group-hover:bg-primary-50 group-hover:bg-primary-900 flex border-l-4 transition duration-250  md:rounded-r-lg border-primary-500/30"
		href={link}
		>
	<T keyName="{text}" defaultValue="{text}" />
	</a>
</button>
</li>
