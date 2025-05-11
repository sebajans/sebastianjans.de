<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cvItems } from '$lib/lists/cvItems';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let slidesToScroll = $state(1);

	let width: number = $state();

	function updateSlidesToScroll() {
		if (width >= 640) {
			slidesToScroll = 2;
		} else {
			slidesToScroll = 1;
		}
	}

	onMount(updateSlidesToScroll);
</script>

<svelte:window onresize={updateSlidesToScroll} bind:innerWidth={width} />

<section
	class="justfiy-center min-h-screen-ios relative flex h-full min-h-screen w-[calc(100vw_-_0rem)] flex-col pt-4 pb-20 md:w-[calc(100vw_-_12rem)] md:pt-20"
	id="cv_cert"
>
	<div class="mx-auto w-full max-w-4xl space-y-4">
		<h1
			in:fly|global={{ y: 50, duration: 500 }}
			class="text-primary-900 dark:text-primary-50 text-center md:text-left"
		>
			<T keyName="my-achievements" defaultValue="My Achievements & Certifications" />
		</h1>
		<Carousel.Root
			orientation="horizontal"
			opts={{ slidesToScroll: slidesToScroll }}
			class="px-4 md:px-0"
		>
			<Carousel.Content>
				{#each cvItems as item}
					{#if item.category === 'certificate'}
						<Carousel.Item
							class="flex h-full min-h-[11rem] w-full snap-start flex-col items-end sm:basis-1/2 md:flex-row md:items-start md:space-x-4"
						>
							<li
								in:fly|global={{ y: 50, duration: 500, delay: 250 * item.id }}
								class="flex h-full w-full grow snap-center snap-always flex-col space-y-4 sm:max-w-none md:snap-start"
							>
								<div
									style:background-image={`url('${item.image}')`}
									class="border-primary-200/90 dark:border-primary-50/5 pointer-events-none z-10 flex aspect-[29/_21] w-full justify-center rounded-md border bg-cover bg-center bg-no-repeat bg-origin-content"
								></div>
								<div
									class="border-primary-900/5 from-primary-900/10 to-primary-900/5 dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 flex h-full w-full flex-col justify-start rounded-md border bg-linear-to-br p-3 backdrop-blur-md"
								>
									<h2 class="text-primary-900 dark:text-primary-50 font-sans text-2xl">
										<T keyName="achievement-title-{item.name}" defaultValue={item.name} />
									</h2>
									<h3 class="text-primary-700 dark:text-primary-200 mt-0.5 mb-2 font-sans text-sm">
										{item.fromYear}
									</h3>
									<p class="mb-2 text-justify text-sm">
										<T
											keyName="achievement-text-{item.name}"
											defaultValue={item.shortdescription}
										/>
									</p>
									{#if item.link?.includes('https')}
										<a
											class="btn btn-navajo mt-auto ml-auto w-fit"
											target="_blank"
											rel="noreferrer noopener"
											href={item.link}
										>
											<T keyName="certificate-button-{item.info}" defaultValue={item.info} />
										</a>
									{:else}
										<a class="btn btn-navajo mt-auto ml-auto w-fit" href={item.link}>
											<T keyName="certificate-button-{item.info}" defaultValue={item.info} />
										</a>
									{/if}
								</div>
							</li>
						</Carousel.Item>
					{/if}
				{/each}
			</Carousel.Content>
			<div class="mt-6 flex justify-between">
				<Carousel.Previous
					class="bg-primary-900 hover:bg-primary-500 dark:bg-primary-50 dark:hover:bg-primary-500 relative left-0 translate-x-0! border-none"
				/>
				<Carousel.Next
					class="bg-primary-900 hover:bg-primary-500 dark:bg-primary-50 dark:hover:bg-primary-500 relative right-0 translate-x-0! border-none"
				/>
			</div>
		</Carousel.Root>
	</div>
</section>
