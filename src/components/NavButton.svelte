<script lang="ts">
	import { page } from '$app/stores';
	import { T } from '@tolgee/svelte';

	export let link: string;
	export let text: string;
	let isActive: boolean;

	$: isActive = link === '/' ? $page.url.pathname === link : $page.url.pathname.startsWith(link);
</script>

<li class="grow h-14 max-h-32 ">
	<button aria-label="Navigate to {text}" on:click class="group items-stretch w-full">
		<a
			class=" {isActive
				? 'dark:bg-primary-50 dark:text-primary-900 text-primary-50 dark:group-hover:text-primary-50 group-hover:text-primary-900 font-normal bg-primary-900 '
				: 'dark:bg-primary-50/10 bg-primary-800/20 font-light'} box-border text-lg  text-left py-3.5 px-3 h-auto md:backdrop-blur-sm 
				group-hover:bg-primary-800/30 dark:group-hover:bg-primary-50/20 group-hover:border-primary-900 dark:group-hover:border-primary-50
				flex border-2 border-transparent transition-all duration-250 rounded-lg"
				href={link}
				>
			<T keyName="{text}" defaultValue="{text}" />
		</a>
	</button>
</li>
