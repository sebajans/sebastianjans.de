<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { fly } from 'svelte/transition';
	import { cvItems } from './cv_items';
</script>

<section
	class=" pt-4 md:pt-20  pb-20 relative w-full h-fit min-h-screen min-h-screen-ios flex flex-col justfiy-center "
	id="cv_cert"
>
	<div class="space-y-4 max-w-4xl w-full h-full mx-auto pt-14 ">
		<h1
			in:fly={{ y: 50, duration: 500 }}
			class="text-center md:text-left text-primary-900 dark:text-primary-50"
		>
			<T keyName="my-achievements" defaultValue="My Achievements & Certifications" />
		</h1>
		<div class="grid gap-4 sm:grid-cols-2 min-h-screen">
			<!-- class="flex flex-col h-full sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4" -->
			{#each cvItems as item}
				{#if item.category === 'certificate'}
					<div
						in:fly={{ y: 50, duration: 500, delay: 250 * item.id }}
						class="w-full h-full flex flex-col space-y-4 grow sm:max-w-none"
					>
						<div
							style:background-image={`url('${item.image}')`}
							class="bg-cover bg-no-repeat bg-center bg-origin-content  z-10 pointer-events-none w-full flex rounded-md justify-center aspect-[29/_21] border border-primary-200/90 dark:border-primary-50/5"
						/>
						<div
							class="h-full p-3 backdrop-blur-md border border-primary-900/5 dark:border-primary-50/10 bg-gradient-to-br  from-primary-900/10 to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10  rounded-md w-full flex flex-col justify-start"
						>
							<h2 class="font-sans text-primary-900 dark:text-primary-50 text-2xl">
								<T keyName="achievement-title" defaultValue={item.name} />
							</h2>
							<h3 class="mt-0.5 mb-2 text-primary-700 dark:text-primary-200 font-sans text-sm">
								<T keyName="achievement-date" defaultValue={item.fromYear} />
							</h3>
							<p class="text-sm text-justify mb-2">
								<T keyName="achievement-text" defaultValue={item.shortdescription} />
							</p>
							{#if item.link?.includes('https')}
								<a
									class="w-fit mt-auto ml-auto"
									target="_blank"
									rel="noreferrer noopener"
									href={item.link}
								>
									<button class="btn btn-navajo w-fit">
										<T keyName="certificate-button-{item.id}" defaultValue={item.info} />
									</button>
								</a>
							{:else}
								<a class="w-fit mt-auto ml-auto" href={item.link}>
									<button class="btn btn-navajo w-fit">
										<T keyName="certificate-button-{item.id}" defaultValue={item.info} />
									</button>
								</a>
							{/if}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>
