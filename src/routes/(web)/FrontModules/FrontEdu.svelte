<script lang="ts">
	import { T } from '@tolgee/svelte'; // change import statement

	import { fly } from 'svelte/transition';
	import { cvItems } from '$lib/lists/cvItems';
	import ButtonScrollToSection from '$components/ButtonScrollToSection.svelte';
	import { settingsState } from '$lib/stores/settingsState';
</script>

<section
	class=" justfiy-center relative flex h-full min-h-screen w-[calc(100vw_-_0rem)] flex-col content-center pb-20 pt-4 md:w-[calc(100vw_-_12rem)] md:px-0 md:pb-20 md:pt-20"
	id="cv_edu"
>
	<div class="mx-auto my-auto w-full max-w-4xl space-y-4">
		<h1
			in:fly|global={{ y: 50, duration: 500 }}
			class="text-center text-primary-900 dark:text-primary-50 md:text-left"
		>
			<T keyName="my-education" defaultValue="my-education" />
		</h1>
		<ul class="hs snap-x snap-mandatory overflow-x-auto md:space-y-1">
			<li class="h-px w-px"></li>
			{#each cvItems as item}
				{#if item.category === 'education'}
					<li
						in:fly|global={{ y: 50, duration: 500, delay: 250 * item.id }}
						class="flex w-full snap-center snap-always flex-col items-end md:snap-none md:flex-row md:items-start md:space-x-3"
					>
						<div
							style:background-image={$settingsState.darkMode
								? `url('${item.image}')`
								: `url('${item.image}')`}
							class="pointer-events-none z-10 -mt-14 flex aspect-square max-h-[16rem] w-28 max-w-[16rem] -translate-x-4 translate-y-[3.75rem] justify-center rounded-lg border border-primary-200/90 bg-primary-200/70 bg-contain bg-center bg-no-repeat bg-origin-content p-2 backdrop-blur-md dark:border-primary-50/5 dark:bg-primary-100/80 md:mt-0 md:w-1/5 md:-translate-x-0 md:translate-y-0"
						></div>
						<div class="box-content self-stretch md:w-4/5">
							<h2 class="mr-28 font-sans text-2xl text-primary-900 dark:text-primary-50 md:mr-0">
								<T keyName={item.name} defaultValue={item.name} />
							</h2>
							<h3 class="mb-2 mt-0.5 font-sans text-sm text-primary-700 dark:text-primary-200">
								{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}
							</h3>
							<p class="text-justify text-sm">
								<T keyName="text-{item.name}" defaultValue={item.info} />
							</p>
						</div>
					</li>
				{/if}
			{/each}
			<li class="h-px w-px"></li>
		</ul>
	</div>
	<ButtonScrollToSection section={'cv_cert'}>
		<T keyName="achievements" defaultValue="Achievements" /></ButtonScrollToSection
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
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.hs {
		display: grid;
		grid-gap: 10px;
		grid-template-columns:
			1rem repeat(var(--total), calc(100% - var(--gutter) * 2))
			1rem;
		grid-template-rows: minmax(0px, 1fr);
	}

	@media (min-width: 768px) {
		.hs {
			/* grid-template-columns: repeat(var(--total), calc(50% - var(--gutter) * 2)); */
			grid-template-columns: 1fr;
		}
	}
</style>
