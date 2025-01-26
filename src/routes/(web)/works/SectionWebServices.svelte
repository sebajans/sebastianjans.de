<script lang="ts">
	import ResponsiveScreen from '$components/ResponsiveScreen.svelte';
	import { T } from '@tolgee/svelte';

	const { showWebServices, isVisible } = $props();

	let performanceResults = [
		{
			name: 'Performance',
			value: 100
		},
		{
			name: 'Accessibility',
			value: 95
		},
		{
			name: 'Best Practices',
			value: 98
		},
		{
			name: 'SEO',
			value: 91
		}
	];
</script>

<section
	id="websites"
	class="h-works md:h-worksmd col-start-1 row-start-1 flex max-h-[56rem] w-full flex-col items-center justify-center transition-all duration-500"
>
	<div class="my-auto flex flex-row items-center">
		<div class="flex w-full flex-col">
			<h2 class="text-left">
				<T keyName="h-ux" defaultValue="The user comes first" />
			</h2>
			<p class="text-left">
				<T
					keyName="p-latest-technologies"
					defaultValue="At the heart of my web development philosophy is a commitment to crafting lightning-fast, high-performance websites that are as accessible as they are sleek. I leverage cutting-edge technologies to ensure your web presence not only loads in a flash but also welcomes every user, regardless of their abilities. Blending speed and accessibility, I create web experiences that leave a lasting impression."
				/>
			</p>
		</div>
		<div class="flex w-full items-center justify-center p-4">
			<div class="grid w-fit grid-cols-2 gap-6 sm:grid-cols-2">
				{#each performanceResults as result}
					<div
						class="dark:text-primary-50 relative flex aspect-square h-full w-full items-center justify-center transition-all"
					>
						<span class="absolute inset-0 z-10 flex items-center justify-center text-center">
							<T keyName="span-{result.name}" defaultValue={result.name} />
						</span>
						<svg class="aspect-square w-full max-w-40 -rotate-90" viewBox="0 0 100 100">
							<circle
								class="stroke-primary-600 dark:stroke-primary-400 fill-none stroke-4"
								cx="50"
								cy="50"
								r="48"
								stroke-linecap="round"
								style="stroke-dasharray: 301; stroke-dashoffset: 301; "
							>
								<animate
									attributeName="stroke-dashoffset"
									from="301"
									to={(100 - result.value) * 3.01}
									dur="1s"
									fill="freeze"
								/>
							</circle>
						</svg>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<ResponsiveScreen />
</section>
