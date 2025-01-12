<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<body class="flex flex-col justify-center items-center dark:bg-primary-700">
  {@render children?.()}
</body>
