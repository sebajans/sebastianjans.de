<script lang="ts">
	import { T } from '@tolgee/svelte'; // change import statement

	import { fly } from 'svelte/transition';
	import { cvItems } from '$lib/lists/cvItems';
	import ButtonScrollToSection from '$components/ButtonScrollToSection.svelte';
	import { settingsState } from '$lib/stores/settingsState';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<section
	class=" justfiy-center relative flex h-full min-h-screen w-[calc(100vw_-_0rem)] flex-col content-center pt-4 pb-20 md:w-[calc(100vw_-_12rem)] md:px-0 md:pt-20 md:pb-20"
	id="cv_jobs"
>
	<div class="mx-auto my-auto w-full max-w-4xl space-y-4">
		<h1
			in:fly|global={{ y: 50, duration: 500 }}
			class="text-primary-900 dark:text-primary-50 pb-12 text-center md:text-left"
		>
			<T keyName="work-experience" defaultValue="Work Experience" />
		</h1>
		<Carousel.Root orientation="vertical" opts={{ slidesToScroll: 3 }} class="px-4 md:px-0">
			<Carousel.Content class="h-[44rem] sm:h-[42rem] md:h-[38rem]">
				{#each cvItems as item}
					{#if item.category === 'job'}
						<Carousel.Item
							class="flex h-full min-h-[11rem] w-full basis-1/3 flex-col items-end sm:basis-1/3 md:flex-row md:items-start md:space-x-4"
						>
							<div
								style:background-image={$settingsState.darkMode
									? `url('${item.image}')`
									: `url('${item.image}')`}
								class="border-primary-200/90 bg-primary-200/70 dark:border-primary-50/5 dark:bg-primary-100/80 pointer-events-none z-10 -mt-14 flex aspect-square max-h-[16rem] w-28 max-w-[16rem] -translate-x-4 translate-y-[3.75rem] justify-center rounded-lg border bg-contain bg-center bg-no-repeat bg-origin-content p-2 md:p-4 backdrop-blur-md md:mt-0 md:w-1/5 md:-translate-x-0 md:translate-y-0"
							></div>
							<div class="box-content self-stretch md:w-4/5">
								<h2 class="text-primary-900 dark:text-primary-50 mr-28 font-sans text-2xl md:mr-0">
									<T keyName={item.name} defaultValue={item.name} />
								</h2>
								<h3 class="text-primary-700 dark:text-primary-200 mt-0.5 mb-2 font-sans text-sm">
									{item.fromMonth}/{item.fromYear} - {item.toMonth}{item.toYear
										? '/' + item.toYear
										: ''}
								</h3>
								<p class="text-justify text-sm">
									<T keyName="text-{item.name}" defaultValue={item.info} />
								</p>
							</div>
						</Carousel.Item>
					{/if}
				{/each}
			</Carousel.Content>
			<Carousel.Previous
				class="bg-primary-900/20 hover:bg-primary-500 dark:bg-primary-50 dark:hover:bg-primary-500 border-none"
			/>
			<Carousel.Next
				class="bg-primary-900/20 hover:bg-primary-500 dark:bg-primary-50 dark:hover:bg-primary-500 border-none"
			/>
		</Carousel.Root>
	</div>
	<ButtonScrollToSection section={'cv_edu'}>
		<T keyName="education" defaultValue="Education" /></ButtonScrollToSection
	>
</section>
