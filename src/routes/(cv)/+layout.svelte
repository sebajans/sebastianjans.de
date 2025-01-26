<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<body class="dark:bg-primary-700 flex flex-col items-center justify-center">
	{@render children?.()}
</body>
