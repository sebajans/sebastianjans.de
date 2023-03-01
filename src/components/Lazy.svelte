<script lang="ts">
	import viewport from './useViewportAction';

	export let loadComponent: () => Promise<{ default: any }>;
	export { loadComponent as this };

	let isShowingComponent = false;

	let componentPromise: Promise<{ default: any }> | undefined;
</script>

{#if !isShowingComponent}
	<!-- {...(null as { "on:enterViewport": () => void })} -->
	<div
		use:viewport={viewport}
		on:enterViewport={() => {
			componentPromise = loadComponent();
			isShowingComponent = true;
		}}
	/>
{:else}
	{#await componentPromise}
		<slot name="loading">Loading... Basic icon?</slot>
	{:then { default: Component }}
		<slot name="component" {Component} />
	{/await}
{/if}
