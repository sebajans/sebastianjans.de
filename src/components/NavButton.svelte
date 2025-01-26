<script lang="ts">
	import { page } from '$app/stores';
	import { T } from '@tolgee/svelte';
	import { cn } from '$lib/utils';
	import Button from '@/components/ui/button/button.svelte';
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

<li class="flex h-12 w-full">
	<Button
		{onclick}
		aria-label="Navigate to {text}"
		class={cn(
			'text-md h-full w-full border bg-linear-to-tr text-left duration-300 ease-in  ',
			isActive
				? 'bg-primary-900  hover:border-primary-900/50 dark:hover:border-primary-50/50  text-primary-50 dark:bg-primary-50 dark:text-primary-900 dark:hover:from-primary-50/20 dark:hover:to-primary-50/30 hover:from-primary-800/30 hover:to-primary-800/40 border-transparent'
				: 'border-primary-900/5  from-primary-900/10 to-primary-900/20 dark:border-primary-50/10 dark:from-primary-50/20 dark:to-primary-50/10'
		)}
		href={link}
	>
		<span class="w-full">
			<T keyName={text} defaultValue={text} />
		</span>
	</Button>
</li>
