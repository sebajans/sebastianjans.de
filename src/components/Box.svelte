<script lang="ts">
	interface Props {
		show?: boolean;
		outerClass?: string;
		delay?: number;
		children?: import('svelte').Snippet;
	}

	let { show = false, outerClass = '', delay = 0, children }: Props = $props();
</script>

<div
	style="--animation-delay: {delay}ms"
	class="{outerClass} {show
		? 'border-primary-900/5 dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 from-primary-900/10 to-primary-900/5 flex flex-col items-start rounded-md bg-linear-to-tr transition-all'
		: ''}"
>
	{@render children?.()}
</div>
