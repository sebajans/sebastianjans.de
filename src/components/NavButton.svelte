<script lang="ts">
	import { page } from '$app/stores';
	import { T } from '@tolgee/svelte';
	import { cn } from '$lib/utils';

	interface Props {
		link: string;
		text: string;
		onclick: (e: Event) => void;
	}

	let { link, text, onclick }: Props = $props();
	let isActive: boolean = $derived(
		link === '/' ? $page.url.pathname === link : $page.url.pathname.startsWith(link)
	);
</script>

<li class="h-12 max-h-32 w-full grow items-stretch md:h-14">
	<a
		{onclick}
		aria-label="Navigate to {text}"
		class={cn(
			'box-border flex h-auto rounded-lg border border-transparent bg-gradient-to-tr px-3  py-2.5 text-left text-lg transition-all duration-300 ease-in hover:border-primary-900/50 hover:from-primary-800/30 hover:to-primary-800/40 dark:hover:border-primary-50/50 dark:hover:from-primary-50/20 dark:hover:to-primary-50/30 md:py-3.5',
			isActive
				? 'bg-primary-900 font-normal text-primary-50 dark:bg-primary-50 dark:text-primary-900'
				: 'border-primary-900/5 from-primary-900/10 to-primary-900/20 font-normal dark:border-primary-50/10 dark:from-primary-50/20 dark:to-primary-50/10'
		)}
		href={link}
	>
		<T keyName={text} defaultValue={text} />
	</a>
</li>

<!-- <style>
	.navButton {
		@apply bg-gradient-to-tr box-border text-lg text-left py-2.5 md:py-3.5 px-3 h-auto md:backdrop-blur-sm flex border border-transparent transition-all ease-in duration-300 rounded-lg hover:from-primary-800/30 hover:to-primary-800/40
				dark:hover:from-primary-50/20 dark:hover:to-primary-50/30 
				hover:border-primary-900/50 dark:hover:border-primary-50/50;
	}
	.isActive {
		@apply text-primary-50 dark:from-primary-50 bg-primary-900 dark:text-primary-900 font-normal;
	}
	.isNotActive {
		@apply dark:from-primary-50/20 dark:to-primary-50/10 from-primary-900/10 to-primary-900/20 dark:border-primary-50/10 border-primary-900/5 font-light;
	}
</style> -->
