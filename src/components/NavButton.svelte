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
			class="navbutton {isActive
				? 'dark:bg-primary-50 bg-primary-900 dark:text-primary-900 text-primary-50 dark:group-hover:text-primary-50 group-hover:text-primary-900 font-normal  '
				: 'dark:from-primary-50/20 dark:to-primary-50/10 from-primary-900/10 to-primary-900/20 dark:border-primary-50/10 border-primary-900/5 font-light'}
				group-hover:from-primary-800/30 group-hover:to-primary-800/40
				dark:group-hover:from-primary-50/20 dark:group-hover:to-primary-50/30 
				group-hover:border-primary-900/50 dark:group-hover:border-primary-50/50
				bg-gradient-to-tr 
				box-border text-lg text-left py-3.5 px-3 h-auto md:backdrop-blur-sm 
				flex border border-transparent transition-all ease-in duration-250 rounded-lg"
			href={link}
		>
			<T keyName={text} defaultValue={text} />
		</a>
	</button>
</li>
