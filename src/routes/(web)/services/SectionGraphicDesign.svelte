<script lang="ts">
	import { T } from '@tolgee/svelte';
	import type { MainService } from './services';
	// import { services } from "./services";
	import ServiceComponent from './ServiceComponent.svelte';
	import { scale } from 'svelte/transition';
	const { service }: { service: MainService } = $props();

	let activeIndex: number = $state(0);

	// let paused: boolean = $state(true);

	let interval = 4000;

	$effect(() => {
		const intervalId = setInterval(() => {
			activeIndex = (activeIndex + 1) % 5;
			// if (!paused) {
			// }
		}, interval);
		return () => clearInterval(intervalId);
	});
</script>

<section
	class="col-start-1 row-start-1 flex h-works w-full flex-col items-center justify-center px-2 transition-all duration-500 md:h-worksmd md:max-h-[56rem]"
>
	<div class="sm:fle x-row my-auto flex flex-col items-center gap-y-8">
		<div class="flex w-full flex-col">
			<h2 class="text-left">
				<T keyName="h-graphics" defaultValue="" />
			</h2>
			<p class="text-left">
				<T
					keyName="p-graphics-intro"
					defaultValue="Did you just create your new company or are you seeking to adapt your existing business to the ever changing market dynamics? Or do you perhaps just want to attract new clients?"
				/>
			</p>
		</div>
		<div
			style="--total: 6"
			class="container-item relative my-10 aspect-square w-full gap-6 [--circ-radius:12vh] sm:[--circ-radius:15vh] lg:[--circ-radius:20vh]"
		>
			{#each service.subServices as item}
				<div
					style="--i: {item.id}"
					class="container-child relative flex flex-col items-center justify-center transition-all [--r-offset:-0.25turn] dark:text-primary-50 sm:[--r-offset:-0.5turn]"
				>
					{#if item.component}
						<ServiceComponent name={item.component} class="text-5xl" />
					{/if}
					<h3 class=" z-10 flex items-center justify-center text-center">
						<T keyName="h3-{item.name}" defaultValue={item.name} />
					</h3>
					<span class=" z-10 flex items-center justify-center text-center text-sm lg:text-base">
						<T keyName="span-{item.name}-description" defaultValue={item.description} />
					</span>
				</div>
			{/each}
			<div
				class="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center *:h-fit *:rounded!"
			>
				{#if activeIndex === 0}
					<div
						in:scale={{ duration: 500 }}
						class="relative -mb-4 flex aspect-[29.7/21] h-full w-48 flex-row items-start justify-start self-end border-primary-900/5 transition-all dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 md:scale-150 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
					>
						<div
							class="flex h-full w-full flex-col border-r border-primary-900/5 dark:border-primary-50/10"
						></div>
						<div
							class="flex h-full w-full flex-col border-r border-primary-900/5 dark:border-primary-50/10"
						></div>
						<div
							class="flex h-full w-full flex-col border-primary-900/5 dark:border-primary-50/10"
						></div>
					</div>
				{:else if activeIndex === 1}
					<div
						in:scale={{ duration: 500 }}
						class="relative mt-4 flex aspect-[29.7/21] h-full w-72 flex-row items-start justify-start border-primary-900/5 transition-all dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 md:scale-150 md:rounded-md md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
					>
						<div
							class="flex h-full w-full flex-col gap-1.5 border-r border-primary-900/5 p-2 dark:border-primary-50/10 md:p-3"
						>
							<div
								class="mb-1 h-2 w-10 rounded-lg border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2.5 md:w-14 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
							></div>
							<div
								class="h-2 w-10 rounded-lg border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2 md:w-2/3 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
							></div>
							<div
								class="h-2 w-10 rounded-lg border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2 md:w-2/3 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
							></div>
							<div
								class="h-2 w-10 rounded-lg border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2 md:w-2/3 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
							></div>
							<div
								class="h-full w-10 rounded! border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-full md:w-full md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
							></div>
						</div>
						<div
							class="grid h-full w-full grid-cols-2 grid-rows-3 gap-1.5 border-primary-900/5 p-2 dark:border-primary-50/10 md:p-3"
						>
							<div
								class="h-full w-10 rounded-sm border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-full md:w-full md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
							></div>
							<div class="flex flex-col justify-center gap-1.5">
								<div
									class="h-2.5 w-2/3 rounded-sm border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
								></div>
								<div
									class="w-full rounded-sm border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-1/3 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
								></div>
							</div>
							<div class="flex flex-col justify-center gap-1.5">
								<div
									class="h-2.5 w-2/3 rounded-sm border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
								></div>
								<div
									class="w-full rounded-sm border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-1/3 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
								></div>
							</div>
							<div
								class="h-full w-10 rounded-sm border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-full md:w-full md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
							></div>
							<div
								class="h-full w-10 rounded-sm border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-full md:w-full md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
							></div>
							<div class="flex flex-col justify-center gap-1.5">
								<div
									class="h-2.5 w-2/3 rounded-sm border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
								></div>
								<div
									class="w-full rounded-sm border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-1/3 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
								></div>
							</div>
						</div>
					</div>
				{:else if activeIndex === 2}
					<div
						in:scale={{ duration: 500 }}
						class="relative flex aspect-[21/29.7] h-full w-24 flex-col items-start justify-start gap-1.5 self-end border-primary-900/5 px-2 py-2 transition-all dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 md:scale-150 md:rounded-md md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5 md:px-3 md:py-3"
					>
						<div
							class="mb-1 h-2 w-10 rounded-lg border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2.5 md:w-14 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
						></div>
						<div
							class="h-2 w-full rounded-lg border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
						></div>
						<div
							class="h-2 w-full rounded-lg border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
						></div>
						<div
							class="h-2 w-full rounded-lg border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
						></div>
						<div
							class="h-1/3 w-full rounded! border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
						></div>
					</div>
				{:else if activeIndex === 3}
					<div
						in:scale={{ duration: 500 }}
						class="relative flex aspect-15/10 h-full w-16 flex-row items-center justify-center gap-1 border-primary-900/5 px-1 py-1 transition-all dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 md:scale-150 md:rounded-md md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5 md:px-1.5 md:py-1.5"
					>
						<div
							class="mb-0 h-2 w-2 shrink-0 rounded-full border border-primary-900/10 transition-all dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 md:h-4 md:w-4 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
						></div>
						<div>
							<div
								class="mb-0 h-2 w-2 rounded-full border border-primary-900/10 transition-all dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2 md:w-6 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
							></div>
							<div
								class="mb-0 mt-1 h-2 w-2 rounded-full border border-primary-900/10 transition-all dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 md:h-2 md:w-6 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
							></div>
						</div>
					</div>
				{:else if activeIndex === 4}
					<div class="group relative flex h-80 flex-row items-center justify-center">
						<div class="h-fit max-h-80 w-auto">
							<div
								class="relative z-10 flex aspect-9/20 w-36 flex-col overflow-clip rounded-md border border-primary-900/5 transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
							>
								<div
									class="flex h-8 flex-row justify-around gap-2 border-b border-primary-900/10 dark:border-primary-50/20"
								></div>
								<div class="h-full overflow-clip">
									<div
										class="flex flex-col gap-y-2 transition-transform duration-500 group-hover:-translate-y-1/2"
									>
										<div
											class="relative h-2/3 w-full border-y border-primary-900/10 dark:border-primary-50/20"
										>
											<svg class="h-full w-full stroke-primary-900/10 dark:stroke-primary-50/20">
												<line class="" x1="0" y1="100%" x2="100%" y2="0" />
												<line class="" x1="0" y1="0" x2="100%" y2="100%" />
											</svg>
										</div>
										<div class="mb-4 flex flex-row gap-2 px-1">
											<div
												class="aspect-square h-4 w-4 rounded border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
											></div>
											<div
												class="aspect-square h-4 w-4 rounded border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
											></div>
											<div
												class="aspect-square h-4 w-4 rounded border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
											></div>
										</div>
										<div
											class="relative h-2/3 w-full border-y border-primary-900/10 transition-transform duration-500 dark:border-primary-50/20"
										>
											<svg class="h-full w-full stroke-primary-900/10 dark:stroke-primary-50/20">
												<line class="" x1="0" y1="100%" x2="100%" y2="0" />
												<line class="" x1="0" y1="0" x2="100%" y2="100%" />
											</svg>
										</div>
										<div class="mb-4 flex flex-row gap-2 px-1">
											<div
												class="aspect-square h-4 w-4 rounded border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
											></div>
											<div
												class="aspect-square h-4 w-4 rounded border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
											></div>
											<div
												class="aspect-square h-4 w-4 rounded border border-primary-900/10 dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5"
											></div>
										</div>
									</div>
								</div>
								<div
									class="flex flex-row justify-around gap-2 border-t border-primary-900/10 px-1 py-2 dark:border-primary-50/20"
								>
									<div
										class="mb-0 h-4 w-4 rounded border border-primary-900/10 transition-all dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-5 md:w-5 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5
                    "
									></div>
									<div
										class="mb-0 h-4 w-4 rounded border border-primary-900/10 transition-all dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-5 md:w-5 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5
                    "
									></div>
									<div
										class="mb-0 h-4 w-4 rounded border border-primary-900/10 transition-all dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-5 md:w-5 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5
                    "
									></div>
									<div
										class="mb-0 h-4 w-4 rounded border border-primary-900/10 transition-all dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 md:h-5 md:w-5 md:bg-linear-to-br md:from-primary-900/10 md:to-primary-900/5
                    "
									></div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.container-item {
		display: grid;
		grid-template-areas: 'layer';
		place-items: center;
		/* background: #185adb; */
		/* border-radius: 50%; */

		/* --circ-radius: 30vh; */
		width: calc(2 * var(--circ-radius));
		height: calc(2 * var(--circ-radius));
	}

	.container-item .container-child {
		grid-area: layer;
		/* width: 10vmin;
  height: 10vmin; */

		/* // Decimal value, 0-1 based on the childs index. */
		--d: calc(var(--i) / var(--total));
		/* // Offset to get better starting placement on the circle */
		/* --r-offset: -0.5turn; */
		/* // Full circle */
		--r-amount: 1turn;
		/* // Rotation based on the decimal and r modifiers */
		--r: calc((var(--r-amount) * var(--d)) + var(--r-offset));
		/* // Rotate, transform out, then negative rotation so the content appears upright */
		--transform: rotate(var(--r)) translate(var(--circ-radius)) rotate(calc(-1 * var(--r)));

		transform: var(--transform);
		/* transition: transform 1.5s ease-in-out; */
		/* //transition-delay: calc(0.1s * var(--i)); */
	}
</style>
