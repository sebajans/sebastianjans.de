<script lang="ts">
	export let show = false;
	export let outerClass = '';
	export let delay = 0;
</script>

<div
	style="--animation-delay: {delay}ms"
	class="{outerClass} {show ? 'border-primary-900/5 bg-linear-to-tr dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 flex flex-col items-start rounded-md dark:text-primary-50 from-primary-900/10 to-primary-900/5 transition-all' : ''}"
>
	<slot />
</div>
