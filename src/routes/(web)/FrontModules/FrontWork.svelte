<script lang="ts">
	import { T } from '@tolgee/svelte'; // change import statement

	import { fly } from 'svelte/transition';
	import { cvItems } from '$lib/lists/cvItems';
	import ButtonScrollToSection from '$components/ButtonScrollToSection.svelte';
	import { settingsState } from '$lib/stores/settingsState';
</script>


<section
	class=" md:px-0 pt-4 md:pt-20 pb-20 md:pb-20 relative h-full w-[calc(100vw_-_0rem)] md:w-[calc(100vw_-_12rem)] min-h-screen  flex flex-col justfiy-center content-center"
	id="cv_jobs"
>
	<div class="space-y-4 max-w-4xl w-full mx-auto my-auto">
		<h1
			in:fly|global={{ y: 50, duration: 500 }}
			class="text-center md:text-left text-primary-900 dark:text-primary-50"
		>
		<T keyName="work-experience" defaultValue="Work Experience" />
	</h1>
		<ul 
		class="hs snap-x snap-mandatory overflow-x-auto">
		 <li class="h-px w-px"></li>
		{#each cvItems as item}
			{#if item.category === 'job'}
				<li
					in:fly|global={{ y: 50, duration: 500, delay: 250 * item.id }}
					class="snap-center snap-always md:snap-none w-full flex md:flex-row flex-col md:space-x-4 items-end md:items-start "
				>
					<div
						style:background-image={$settingsState.darkMode ? `url('${item.image}')` : `url('${item.image}')`}
						class="bg-contain bg-no-repeat bg-center bg-origin-content md:w-1/5 z-10 pointer-events-none backdrop-blur-md w-28 -mt-14 md:mt-0 translate-y-[3.75rem] -translate-x-4 md:translate-y-0 md:-translate-x-0 max-w-[16rem] max-h-[16rem] p-2 flex rounded-lg  justify-center aspect-square border border-primary-200/90 dark:border-primary-50/5 bg-primary-200/70 dark:bg-primary-100/80"
					></div>
					<div class="md:w-4/5 box-content self-stretch">
						<h2 class="font-sans mr-28 md:mr-0 text-primary-900 dark:text-primary-50 text-2xl">
							<T keyName={item.name} defaultValue={item.name} />
						</h2>
						<h3 class="mt-0.5 mb-2 text-primary-700 dark:text-primary-200 font-sans text-sm">
							{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}
						</h3>
						<p class="text-sm text-justify">
							<T keyName="text-{item.name}" defaultValue={item.info} />
						</p>
					</div>
				</li>
			{/if}
		{/each}
		<li class="h-px w-px"></li>

	</ul>

	</div>
	<ButtonScrollToSection section={'cv_edu'}>
		<T keyName="education" defaultValue="Education" /></ButtonScrollToSection
	>
</section>

<style>
	:root {
		--gutter: 20px;
	}
	
	.hs::-webkit-scrollbar {
		display: none;
	}
	.hs {
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
	}
	
	.hs {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: 1rem repeat(var(--total), calc(100% - var(--gutter) * 2)) 1rem ;
		grid-template-rows: minmax(0px, 1fr);
	}
	
	@media (min-width: 768px) {
			.hs {
				/* grid-template-columns: repeat(var(--total), calc(50% - var(--gutter) * 2)); */
				grid-template-columns: 1fr;

			}
		}
	</style>
