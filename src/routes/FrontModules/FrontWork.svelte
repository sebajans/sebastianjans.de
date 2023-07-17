<script lang="ts">
	import T from '@tolgee/svelte/T.svelte'; // change import statement

	import { fly } from 'svelte/transition';
	import { cvItems } from './cv_items';
	import ButtonScrollToSection from '../../components/ButtonScrollToSection.svelte';
	import { nightMode } from '$lib/stores/nightMode';
</script>

<section
	class="relative w-full h-full min-h-screen min-h-screen-ios flex flex-col justfiy-center content-center pt-4 md:pt-20 pb-32"
	id="cv_jobs"
>
	<div class="relative space-y-4 max-w-4xl w-full mx-auto my-auto">
		<!-- in:fly={{ y: 50, duration: 500 * animationspeed }}  -->
		<h1 class="text-center md:text-left text-primary-900 dark:text-primary-50">
			<T keyName="work-experience" defaultValue="Work Experience" />
		</h1>
		{#each cvItems as item}
			{#if item.category === 'job'}
				<div
					in:fly={{ y: 50, duration: 500, delay: 250 * item.id }}
					class="w-full flex sm:flex-row flex-col sm:space-x-4 items-end sm:items-start "
				>
					<div
						style:background-image={$nightMode ? `url('${item.image}')` : `url('${item.image}')`}
						class="bg-contain bg-no-repeat bg-center bg-origin-content md:w-1/5 z-10 pointer-events-none backdrop-blur-md w-28 -mt-14 sm:mt-0 translate-y-[3.75rem] -translate-x-4 sm:translate-y-0 sm:-translate-x-0 max-w-[16rem] max-h-[16rem] p-2 flex rounded-lg  justify-center aspect-square border border-primary-200/90 dark:border-primary-50/5 bg-primary-200/70 dark:bg-primary-100/80"
					/>
					<div class="md:w-4/5  box-content sm:self-stretch">
						<!-- {@const frMonth = item.fromMonth.toString() } -->
						<h2 class="font-sans text-primary-900 dark:text-primary-50 text-2xl">
							<T keyName={item.name} defaultValue={item.name} />
						</h2>
						<h3 class="mt-0.5 mb-2 text-primary-700 dark:text-primary-200 font-sans text-sm">
							{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}
						</h3>
						<p class="text-sm text-justify">
							<T keyName="text-{item.name}" defaultValue={item.info} />
						</p>
					</div>
				</div>
			{/if}
		{/each}
	</div>
	<ButtonScrollToSection section={'cv_edu'}>
		<T keyName="my-education" defaultValue="my-education" />
	</ButtonScrollToSection>
</section>
