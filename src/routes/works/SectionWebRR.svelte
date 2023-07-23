<script lang="ts">
	import T from '@tolgee/svelte/T.svelte'; // change import statement

	import { settingsState } from '$lib/stores/settingsState';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	
	import IntersectionObserver from 'svelte-intersection-observer';

	import { getTranslate } from '@tolgee/svelte';

	const { t } = getTranslate();

	let srcRRLogoDark = 'img/website-RR-logo.webp';
	let srcRRLogo = 'img/website-RR-logo.webp';
	let srcRRMobile = 'img/website-RR-front-mobile.webp';
	let srcRR = 'img/website-RR.webp';

	let element: HTMLElement;
  let intersecting:boolean;

</script>



<IntersectionObserver once threshold={0.5} element={element} bind:intersecting={intersecting}
>	

<section class="pt-4 md:pt-20 pb-20 relative w-[calc(100vw_-_0rem)] md:w-[calc(100vw_-_12rem)] h-full min-h-screen flex flex-col justfiy-center" 
id="Recyclerumble">
	<div class="space-y-4 max-w-4xl h-works md:h-worksmd w-full my-auto  mx-auto ">
		<h1 in:fly|global={{ y: 50, duration: 500 }} class="px-3 md:text-left text-primary-900 dark:text-primary-50">
			{$t({ key: 'title-RR', defaultValue: 'Recycle Rumble' })}
		</h1>
		<p class="px-3">
			{$t({ key: 'description-RR', defaultValue: 'Recycle Rumble is a game that i created as a part of my master thesis. It is an online game directed towards children. It teaches recycling and trash sorting.' })}
		</p>
		<ul
		 class="md:overflow-y-clip hs backdrop-blur-md border-primary-900/5 dark:border-primary-50/10 md:bg-gradient-to-br  md:from-primary-900/10 md:to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 py-2 md:py-3 md:rounded-md  md:border items-start h-full snap-x snap-mandatory overflow-x-auto">
			<li
				in:fly|global={{ y: 50, duration: 500, delay: 250 }}
				class="snap-center snap-always md:snap-start w-full h-full max-h-96 grid grid-cols-6 grid-rows-6  md:grid-cols-8  md:grid-rows-[1fr,_3fr]"
			>
				<img
							alt="website-RR-front-mobile"
							class="col-span-2 row-span-5 md:col-span-3 rounded-t-[0.75rem] object-cover object-top pt-0.5 md:rounded-t-[1.25rem] md:px-1 md:pt-1"
							src="img/website-RR/website-RR-mobile-front.webp"
						/>
				<img
						alt="website-RR-front-desktop"
						class="h-full sm:h-auto w-full   row-span-5 col-span-4 col-start-3 md:col-span-5 md:col-start-4 md:row-start-2 rounded-t-[0.75rem] md:mt-auto object-cover object-left md:object-left-top pt-0.5 md:rounded-t-[1.25rem] md:px-1 md:pt-1"
						src="img/website-RR/website-RR-front.webp"
					/>
					<div class="col-span-6 px-3 row-span-1 row-start-1 md:col-start-4  md:row-start-1 flex flex-col justify-between">
						<div>
							<h3 class="text ">Welcome screen</h3>
							<p>The front page features a playful and colorful welcome screen.</p>
						</div>

					</div>
			</li>
			<li
				in:fly|global={{ y: 50, duration: 500, delay: 250 }}
				class="snap-center snap-always md:snap-start w-full h-full max-h-96 grid grid-cols-6 grid-rows-6  md:grid-cols-8  md:grid-rows-[1fr,_3fr]"
			>
				<img
							alt="website-RR-play-mobile"
							class="col-span-2 row-span-5 md:col-span-3 rounded-t-[0.75rem] object-cover object-top pt-0.5 md:rounded-t-[1.25rem] md:px-1 md:pt-1"
							src="img/website-RR/website-RR-mobile-play.webp"
						/>
				<img
						alt="website-RR-play-desktop"
						class="h-full sm:h-auto w-full   row-span-5 col-span-4 col-start-3 md:col-span-5 md:col-start-4 md:row-start-2 rounded-t-[0.75rem] md:mt-auto object-cover object-left md:object-left-top pt-0.5 md:rounded-t-[1.25rem] md:px-1 md:pt-1"
						src="img/website-RR/website-RR-play.webp"
					/>
					<div class="col-span-6 px-3 row-span-1 row-start-1 md:col-start-4  md:row-start-1 flex flex-col justify-between">
						<div >
							<h3 class="text ">Play page</h3>
							<p class="pb-3">The play page showcases all the levels, if the level is completed it shows the trophy gained.</p>
						</div>

					</div>
			</li>
			<li
				in:fly|global={{ y: 50, duration: 500, delay: 250 }}
				class="snap-center snap-always md:snap-start w-full h-full max-h-96 grid grid-cols-6 grid-rows-6  md:grid-cols-8  md:grid-rows-[1fr,_3fr]"
			>
				<img
							alt="website-RR-level-mobile"
							class="col-span-2 row-span-5 md:col-span-3 rounded-t-[0.75rem] object-cover object-top pt-0.5 md:rounded-t-[1.25rem] md:px-1 md:pt-1"
							src="img/website-RR/website-RR-mobile-level.webp"
						/>
				<img
						alt="website-RR-level-desktop"
						class="h-full sm:h-auto w-full   row-span-5 col-span-4 col-start-3 md:col-span-5 md:col-start-4 md:row-start-2 rounded-t-[0.75rem] md:mt-auto object-cover object-left md:object-left-top pt-0.5 md:rounded-t-[1.25rem] md:px-1 md:pt-1"
						src="img/website-RR/website-RR-level.webp"
					/>
					<div class="col-span-6 px-3 row-span-1 row-start-1 md:col-start-4  md:row-start-1 flex flex-col justify-between">
						<div >
							<h3 class="text ">Level page</h3>
							<p>The levels are designed to be simple, yet interesting to look at. They get increasingly more difficult with level and stage.</p>
						</div>
					</div>
			</li>
			<li
				in:fly|global={{ y: 50, duration: 500, delay: 250 }}
				class="snap-center snap-always md:snap-start w-full h-full max-h-96 grid grid-cols-6 grid-rows-6  md:grid-cols-8  md:grid-rows-[1fr,_3fr]"
			>
				<img
							alt="website-RR-settings-mobile"
							class="col-span-2 row-span-5 md:col-span-3 rounded-t-[0.75rem] object-cover object-top pt-0.5 md:rounded-t-[1.25rem] md:px-1 md:pt-1"
							src="img/website-RR/website-RR-mobile-settings.webp"
						/>
				<img
						alt="website-RR-settings-desktop"
						class="h-full sm:h-auto w-full   row-span-5 col-span-4 col-start-3 md:col-span-5 md:col-start-4 md:row-start-2 rounded-t-[0.75rem] md:mt-auto object-cover object-left md:object-left-top pt-0.5 md:rounded-t-[1.25rem] md:px-1 md:pt-1"
						src="img/website-RR/website-RR-settings.webp"
					/>
					<div class="col-span-6 px-3 row-span-1 row-start-1 md:col-start-4  md:row-start-1 flex flex-col justify-between">
						<div>
							<h3 class="text ">Settings page</h3>
							<p>The settings page showcases the UI of the game.</p>
						</div>
					</div>
			</li>
		</ul>
	</div>
</section>

</IntersectionObserver>

<style>
	:root {
		--gutter: 0px;
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
		grid-template-columns: repeat(4, calc(100% - var(--gutter) * 2)) ;
		grid-template-rows: minmax(150px, 1fr);
	}
	
	@media (min-width: 768px) {
			.hs {
				grid-template-columns: repeat(4,  calc(100% - var(--gutter) * 2));
			}
		}
	</style>