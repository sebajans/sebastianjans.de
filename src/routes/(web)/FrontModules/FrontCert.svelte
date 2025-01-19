<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cvItems } from '$lib/lists/cvItems';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let slidesToScroll = 1;

	let width: number;

	function updateSlidesToScroll() {
		if (width >= 640) {
			slidesToScroll = 2;
		} else {
			slidesToScroll = 1;
		}
	}

	onMount(updateSlidesToScroll);
</script>

<svelte:window on:resize={updateSlidesToScroll} bind:innerWidth={width} />

<section
	class="justfiy-center relative flex h-full min-h-screen w-[calc(100vw_-_0rem)] flex-col pb-20 pt-4 min-h-screen-ios md:w-[calc(100vw_-_12rem)] md:pt-20"
	id="cv_cert"
>
	<div class="mx-auto w-full max-w-4xl space-y-4">
		<h1
			in:fly|global={{ y: 50, duration: 500 }}
			class="text-center text-primary-900 dark:text-primary-50 md:text-left"
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
									class="pointer-events-none z-10 flex aspect-[29/_21] w-full justify-center rounded-md border border-primary-200/90 bg-cover bg-center bg-no-repeat bg-origin-content dark:border-primary-50/5"
								></div>
								<div
									class="flex h-full w-full flex-col justify-start rounded-md border border-primary-900/5 bg-gradient-to-br from-primary-900/10 to-primary-900/5 p-3 backdrop-blur-md dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10"
								>
									<h2 class="font-sans text-2xl text-primary-900 dark:text-primary-50">
										<T keyName="achievement-title-{item.name}" defaultValue={item.name} />
									</h2>
									<h3 class="mb-2 mt-0.5 font-sans text-sm text-primary-700 dark:text-primary-200">
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
											class="btn btn-navajo ml-auto mt-auto w-fit"
											target="_blank"
											rel="noreferrer noopener"
											href={item.link}
										>
											<T keyName="certificate-button-{item.info}" defaultValue={item.info} />
										</a>
									{:else}
										<a class="btn btn-navajo ml-auto mt-auto w-fit" href={item.link}>
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
					class="relative left-0 !translate-x-0 border-none bg-primary-900 hover:bg-primary-500 dark:bg-primary-50 dark:hover:bg-primary-500"
				/>
				<Carousel.Next
					class="relative right-0 !translate-x-0 border-none bg-primary-900 hover:bg-primary-500 dark:bg-primary-50 dark:hover:bg-primary-500"
				/>
			</div>
		</Carousel.Root>
	</div>
</section>
