<script lang="ts">
	import { T } from '@tolgee/svelte';
	import type { MainService } from './services';
	// import { services } from "./services";
	import ServiceComponent from './ServiceComponent.svelte';
	const { service }: { service: MainService } = $props();
</script>

<div
	class="h-works md:h-worksmd col-start-1 row-start-1 flex w-full flex-col items-center justify-center px-2 transition-all duration-500 md:max-h-[56rem]"
>
	<div class="sm:fle x-row my-auto flex flex-col items-center">
		<div class="flex w-full flex-col">
			<h2 class="text-left">
				<T keyName="h-ux" defaultValue="The user comes first" />
			</h2>
			<p class="text-left">
				<T
					keyName="p-branding-intro"
					defaultValue="Did you just create your new company or are you seeking to adapt your existing business to the ever changing market dynamics? Or do you perhaps just want to attract new clients?"
				/>
			</p>
		</div>
		<div class="flex w-full items-center justify-center p-4">
			<div class="grid w-fit grid-cols-2 gap-6 sm:grid-cols-3">
				{#each service.subServices as item}
					<div
						class="dark:text-primary-50 relative flex aspect-square h-full w-full flex-col items-center justify-center transition-all"
					>
						{#if item.component}
							<ServiceComponent name={item.component} class="text-5xl" />
						{/if}
						<h3 class=" z-10 flex items-center justify-center text-center">
							<T keyName="h3-{item.name}" defaultValue={item.name} />
						</h3>
						<span class=" z-10 flex items-center justify-center text-center">
							<T keyName="span-{item.name}-description" defaultValue={item.description} />
						</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
