<script lang="ts">
	import { T } from '@tolgee/svelte';
	import type { MainService } from './services';
	// import { services } from "./services";
	import ServiceComponent from './ServiceComponent.svelte';
	import { scale } from 'svelte/transition';
	const { service }: { service: MainService } = $props();

	let activeIndex: number = $state(3);

	let interval = 4000;

	$effect(() => {
		const intervalId = setInterval(() => {
			activeIndex = (activeIndex + 1) % 5;

		}, interval);
		return () => clearInterval(intervalId);
	});
</script>

<section
	class="h-works md:h-worksmd col-start-1 row-start-1 flex w-full flex-col items-center justify-center px-2 transition-all duration-500 md:max-h-[56rem]"
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
			class="container-item relative my-10 aspect-square w-full gap-6 [--circ-radius:12vh] sm:[--circ-radius:18vh] lg:[--circ-radius:20vh]"
		>
			{#each service.subServices as item}
				<div
					style="--i: {item.id}"
					class="container-child dark:text-primary-50 relative flex flex-col items-center justify-center transition-all [--r-offset:-0.25turn] sm:[--r-offset:-0.5turn]"
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
				class="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center *:h-fit *:rounded!"
			>
				{#if activeIndex === 0}
					<div
						in:scale={{ duration: 500 }}
						class="border-primary-900/5 bg-linear-to-tr dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 from-primary-900/10 to-primary-900/5 relative -mb-4 flex aspect-[29.7/21] h-full w-48 flex-row items-start justify-start self-end transition-all md:scale-150 "
					>
						<div
							class="border-primary-900/5 bg-linear-to-tr dark:border-primary-50/10 flex h-full w-full flex-col border-r"
						></div>
						<div
							class="border-primary-900/5 bg-linear-to-tr dark:border-primary-50/10 flex h-full w-full flex-col border-r"
						></div>
						<div
							class="border-primary-900/5 bg-linear-to-tr dark:border-primary-50/10 flex h-full w-full flex-col"
						></div>
					</div>
				{:else if activeIndex === 1}
					<div
						in:scale={{ duration: 500 }}
						class="border-primary-900/5 bg-linear-to-tr dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 from-primary-900/10 to-primary-900/5 relative mt-4 flex aspect-[29.7/21] h-full w-72 flex-row items-start justify-start transition-all md:scale-150 md:rounded-md "
					>
						<div
							class="border-primary-900/5 bg-linear-to-tr dark:border-primary-50/10 flex h-full w-full flex-col gap-1.5 border-r p-2 md:p-3"
						>
							<div
								class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 mb-1 h-2 w-10 rounded-lg border md:h-2.5 md:w-14 "
							></div>
							<div
								class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-2 w-10 rounded-lg border md:h-2 md:w-2/3 "
							></div>
							<div
								class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-2 w-10 rounded-lg border md:h-2 md:w-2/3 "
							></div>
							<div
								class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-2 w-10 rounded-lg border md:h-2 md:w-2/3 "
							></div>
							<div
								class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-full w-10 rounded! border md:h-full md:w-full "
							></div>
						</div>
						<div
							class="border-primary-900/5 bg-linear-to-tr dark:border-primary-50/10 grid h-full w-full grid-cols-2 grid-rows-3 gap-1.5 p-2 md:p-3"
						>
							<div
								class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-full w-10 rounded-sm border md:h-full md:w-full "
							></div>
							<div class="flex flex-col justify-center gap-1.5">
								<div
									class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-2.5 w-2/3 rounded-sm border md:h-2 "
								></div>
								<div
									class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 w-full rounded-sm border md:h-1/3 "
								></div>
							</div>
							<div class="flex flex-col justify-center gap-1.5">
								<div
									class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-2.5 w-2/3 rounded-sm border md:h-2 "
								></div>
								<div
									class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 w-full rounded-sm border md:h-1/3 "
								></div>
							</div>
							<div
								class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-full w-10 rounded-sm border md:h-full md:w-full "
							></div>
							<div
								class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-full w-10 rounded-sm border md:h-full md:w-full "
							></div>
							<div class="flex flex-col justify-center gap-1.5">
								<div
									class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-2.5 w-2/3 rounded-sm border md:h-2 "
								></div>
								<div
									class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 w-full rounded-sm border md:h-1/3 "
								></div>
							</div>
						</div>
					</div>
				{:else if activeIndex === 2}
					<div
						in:scale={{ duration: 500 }}
						class="border-primary-900/5 bg-linear-to-tr dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 from-primary-900/10 to-primary-900/5 relative flex aspect-[21/29.7] h-full w-24 flex-col items-start justify-start gap-1.5 self-end px-2 py-2 transition-all md:scale-150 md:rounded-md  md:px-3 md:py-3"
					>
						<div
							class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 mb-1 h-2 w-10 rounded-lg border md:h-2.5 md:w-14 "
						></div>
						<div
							class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-2 w-full rounded-lg border md:h-2 "
						></div>
						<div
							class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-2 w-full rounded-lg border md:h-2 "
						></div>
						<div
							class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-2 w-full rounded-lg border md:h-2 "
						></div>
						<div
							class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 h-1/3 w-full rounded! border "
						></div>
					</div>
				{:else if activeIndex === 3}
					<div
						in:scale={{ duration: 500 }}
						class="border-primary-900/5 bg-linear-to-tr dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 from-primary-900/10 to-primary-900/5 relative flex aspect-15/10 h-full w-16 flex-row items-center justify-center gap-1 px-1 py-1 transition-all md:scale-150 md:rounded-md  md:px-1.5 md:py-1.5"
					>
						<div
							class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 mb-0 shrink-0 rounded-full border transition-all h-4 w-4 "
						></div>
						<div>
							<div
								class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 mb-0 rounded-full border transition-all h-2 w-6 "
							></div>
							<div
								class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 mt-1 mb-0 rounded-full border transition-all h-2 w-6 "
							></div>
						</div>
					</div>
				{:else if activeIndex === 4}
					<div class="group relative flex h-80 flex-row items-center justify-center">
						<div class="h-fit max-h-80 w-auto">
							<div
								class="border-primary-900/5 bg-linear-to-tr dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 from-primary-900/10 to-primary-900/5 relative z-10 flex aspect-9/20 w-36 flex-col overflow-clip rounded-md border transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] "
							>
								<div
									class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/20 flex h-8 flex-row justify-around gap-2 border-b"
								></div>
								<div class="h-full overflow-clip">
									<div
										class="flex flex-col gap-y-2 transition-transform duration-500 group-hover:-translate-y-1/2"
									>
										<div
											class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/20 relative h-2/3 w-full border-y"
										>
											<svg class="stroke-primary-900/10 dark:stroke-primary-50/20 h-full w-full">
												<line class="" x1="0" y1="100%" x2="100%" y2="0" />
												<line class="" x1="0" y1="0" x2="100%" y2="100%" />
											</svg>
										</div>
										<div class="mb-4 flex flex-row gap-2 px-1">
											<div
												class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 aspect-square h-4 w-4 rounded border "
											></div>
											<div
												class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 aspect-square h-4 w-4 rounded border "
											></div>
											<div
												class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 aspect-square h-4 w-4 rounded border "
											></div>
										</div>
										<div
											class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/20 relative h-2/3 w-full border-y transition-transform duration-500"
										>
											<svg class="stroke-primary-900/10 dark:stroke-primary-50/20 h-full w-full">
												<line class="" x1="0" y1="100%" x2="100%" y2="0" />
												<line class="" x1="0" y1="0" x2="100%" y2="100%" />
											</svg>
										</div>
										<div class="mb-4 flex flex-row gap-2 px-1">
											<div
												class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 aspect-square h-4 w-4 rounded border "
											></div>
											<div
												class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 aspect-square h-4 w-4 rounded border "
											></div>
											<div
												class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 aspect-square h-4 w-4 rounded border "
											></div>
										</div>
									</div>
								</div>
								<div
									class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/20 flex flex-row justify-around gap-2 border-t px-1 py-2"
								>
									<div
										class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 mb-0 h-4 w-4 rounded border transition-all md:h-5 md:w-5 
                    "
									></div>
									<div
										class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 mb-0 h-4 w-4 rounded border transition-all md:h-5 md:w-5 
                    "
									></div>
									<div
										class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 mb-0 h-4 w-4 rounded border transition-all md:h-5 md:w-5 
                    "
									></div>
									<div
										class="border-primary-900/10 bg-linear-to-tr dark:border-primary-50/15 dark:from-primary-50/5 dark:to-primary-50/10 from-primary-900/10 to-primary-900/5 mb-0 h-4 w-4 rounded border transition-all md:h-5 md:w-5 
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
