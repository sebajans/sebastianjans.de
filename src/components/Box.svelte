<script lang="ts">
	export let show = false;
	export let outerClass = '';
	export let delay = 0;
	export let innerClass = '';
</script>

<div
	style="--animation-delay: {delay}ms"
	class="{outerClass} {show ? 'box [--border-color:black] dark:[--border-color:white]' : ''}"
>
	<div class={innerClass}>
		<slot />
	</div>
</div>
