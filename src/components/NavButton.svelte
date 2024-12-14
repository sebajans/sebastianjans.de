<script lang="ts">
	import { page } from '$app/stores';
	import { T } from '@tolgee/svelte';

	interface Props {
		link: string;
		text: string;
		onclick: (e: Event) => void;
	}

	let { link, text, onclick }: Props = $props();
	let isActive: boolean = $derived(link === '/' ? $page.url.pathname === link : $page.url.pathname.startsWith(link));

	
</script>

<li class="grow h-12 md:h-14 max-h-32 items-stretch w-full ">
		<a {onclick} aria-label="Navigate to {text}"
			class="navButton {isActive
				? 'isActive '
				: 'isNotActive'}
				"
			href={link}
		>
			<T keyName={text} defaultValue={text} />
		</a>
</li>

<style>
	.navButton {
		@apply bg-gradient-to-tr box-border text-lg text-left py-2.5 md:py-3.5 px-3 h-auto md:backdrop-blur-sm flex border border-transparent transition-all ease-in duration-300 rounded-lg hover:from-primary-800/30 hover:to-primary-800/40
				dark:hover:from-primary-50/20 dark:hover:to-primary-50/30 
				hover:border-primary-900/50 dark:hover:border-primary-50/50;
	}
	.isActive {
		@apply text-primary-50 dark:bg-primary-50 bg-primary-900 dark:text-primary-900 font-normal;
	}
	.isNotActive {
		@apply dark:from-primary-50/20 dark:to-primary-50/10 from-primary-900/10 to-primary-900/20 dark:border-primary-50/10 border-primary-900/5 font-light;
	}
</style>