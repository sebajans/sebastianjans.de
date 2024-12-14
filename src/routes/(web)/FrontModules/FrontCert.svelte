<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cvItems } from '$lib/lists/cvItems';


	onMount(() => {
		const lists: NodeListOf<HTMLElement> = document.querySelectorAll('.hs');
		console.log("lists", lists);
		lists.forEach(el => {
			const listItems = el.querySelectorAll('li');
			const n = listItems.length;
			const total = n + 2; // Add 2 for the empty columns
			// console.log("total", total);
			
			document.documentElement.style.setProperty('--total', total.toString());
		});
	});

</script>

<section class="pt-4 md:pt-20 pb-20 relative w-[calc(100vw_-_0rem)] md:w-[calc(100vw_-_12rem)] h-full min-h-screen min-h-screen-ios flex flex-col justfiy-center" id="cv_cert">
	<div class="space-y-4 max-w-4xl w-full  mx-auto">
		<h1 in:fly|global={{ y: 50, duration: 500 }} class="text-center md:text-left text-primary-900 dark:text-primary-50">
			<T keyName="my-achievements" defaultValue="My Achievements & Certifications" />
		</h1>
		<!-- style="grid-template-columns: repeat(auto-fill,minmax(160px,1fr)); grid-auto-columns: minmax(400px,1fr);" -->
		<ul 
		 class="hs snap-x snap-mandatory overflow-x-auto">
			<li class="h-px w-px"></li>
			{#each cvItems as item}
				{#if item.category === 'certificate'}
					<li
						in:fly|global={{ y: 50, duration: 500, delay: 250 * item.id }}
						class="snap-center snap-always md:snap-start w-full h-full flex flex-col space-y-4 grow sm:max-w-none"
					>
						<div
							style:background-image={`url('${item.image}')`}
							class="bg-cover bg-no-repeat bg-center bg-origin-content  z-10 pointer-events-none w-full flex rounded-md justify-center aspect-[29/_21] border border-primary-200/90 dark:border-primary-50/5"
						/>
						<div
							class="h-full p-3 backdrop-blur-md border border-primary-900/5 dark:border-primary-50/10 bg-gradient-to-br  from-primary-900/10 to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10  rounded-md w-full flex flex-col justify-start"
						>
							<h2 class="font-sans text-primary-900 dark:text-primary-50 text-2xl">
								<T keyName="achievement-title-{item.name}" defaultValue={item.name} />
							</h2>
							<h3 class="mt-0.5 mb-2 text-primary-700 dark:text-primary-200 font-sans text-sm">
								{item.fromYear}
							</h3>
							<p class="text-sm text-justify mb-2">
								<T keyName="achievement-text-{item.name}" defaultValue={item.shortdescription} />
							</p>
							{#if item.link?.includes('https')}
								<a
									class="w-fit mt-auto ml-auto btn btn-navajo"
									target="_blank"
									rel="noreferrer noopener"
									href={item.link}
								>
										<T keyName="certificate-button-{item.info}" defaultValue={item.info} />
								</a>
							{:else}
								<a class="w-fit mt-auto ml-auto btn btn-navajo" href={item.link}>
										<T keyName="certificate-button-{item.info}" defaultValue={item.info} />
								</a>
							{/if}
						</div>
					</li>
				{/if}
			{/each}
			<li class="h-px w-px"></li>
		</ul>
	</div>
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
  grid-template-columns: 1rem repeat(var(--total), calc(100% - var(--gutter) * 2)) ;
  grid-template-rows: minmax(150px, 1fr);
}

@media (min-width: 768px) {
		.hs {
			grid-template-columns: repeat(var(--total), calc(50% - var(--gutter) * 2));
		}
	}
</style>

