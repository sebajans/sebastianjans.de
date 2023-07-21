<script lang="ts">
	import T from '@tolgee/svelte/T.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cvItems } from '$lib/lists/cvItems';
	let profilePicture = 'img/profile-pic.webp';
	import { getTranslate } from '@tolgee/svelte';
	import ButtonScrollToSection from '../../components/ButtonScrollToSection.svelte';

	const { t } = getTranslate();


	// onMount(() => {
	// 	const lists: NodeListOf<HTMLElement> = document.querySelectorAll('.hs');
	// 	console.log("lists", lists);
	// 	lists.forEach(el => {
	// 		const listItems = el.querySelectorAll('li');
	// 		const n = listItems.length;
	// 		const total = n + 2; // Add 2 for the empty columns
	// 		// console.log("total", total);
			
	// 		document.documentElement.style.setProperty('--total', total.toString());
	// 	});
	// });

</script>

<section class="pt-4 md:pt-20 pb-20 relative w-[calc(100vw_-_0rem)] md:w-[calc(100vw_-_12rem)] h-full min-h-screen min-h-screen-ios flex flex-col justfiy-center" 
id="aboutme">
	<div class="space-y-4 max-w-4xl w-full my-auto  mx-auto">
		<h1 in:fly|global={{ y: 50, duration: 500 }} class="text-center md:text-left text-primary-900 dark:text-primary-50">
			{$t({ key: 'about-me', defaultValue: 'About me' })}
		</h1>
		<ul 
		 class="hs snap-x snap-mandatory overflow-x-auto">
			<li class="h-px w-px"></li>
			<li class="snap-center pb-20 w-full justify-center md:pr-4 text-sm md:text-base">
				<!-- {#if animationAbout} -->
				<img
					in:fly|global={{ duration: 2000 }}
					width="200"
					height="200"
					src={profilePicture}
					alt="profile"
					class="w-1/3 md:w-1/5 h-full ml-4 mb-4 object-cover object-top float-right max-w-[12rem] max-h-[12rem] md:max-w-[16rem] md:max-h-[16rem] md:grow-0 aspect-square rounded-xl"
				/>
	
				<p class="md:w-full mb-2 text-justify md:text-xl">
					{$t({
						key: 'front-about-text',
						defaultValue:
							'I am 25 years old and from Germany. I studied my Bachelors in Materials Science while i was self-teaching myself all kinds of Design capabilities. After finishing my degree i decided to persue a different career path in the field of Design. '
					})}
				</p>
	
				<p class="md:w-full mb-2 text-justify md:text-xl">
					{$t({
						key: 'front-about-text-2',
						defaultValue:
							'I moved to Spain and started studying Design Engineering at the Universitat Politécnica de Valencia and am now working on my Master Thesis.'
					})}
				</p>
				<p class="md:w-full mb-2 text-justify md:text-xl">
					{$t({
						key: 'front-about-text-3',
						defaultValue:
							'My key strengths include a keen eye for detail, a talent for crafting clean and intuitive layouts, and the ability to bring ideas to life with beautiful and effective visuals.'
					})}
				</p>
			</li>
					<li
						in:fly|global={{ y: 50, duration: 500, delay: 250 }}
						class="snap-center snap-always md:snap-start w-full h-full flex flex-col space-y-4 grow sm:max-w-none"
					>
						<div
							class="h-full p-3 backdrop-blur-md border border-primary-900/5 dark:border-primary-50/10 bg-gradient-to-br  from-primary-900/10 to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10  rounded-md w-full flex flex-col justify-start"
						>
							<h2 class="font-sans text-primary-900 dark:text-primary-50 text-2xl">
								<T keyName="likes-title" defaultValue="Some things i like" />
							</h2>
							<ul class="list-likes">
								<li class="list-li">
									<T keyName="likes-item-1" defaultValue="Puzzles" />
								</li>
								<li class="list-li">
									<T keyName="likes-item-2" defaultValue="Traveling" />
								</li>
								<li class="list-li">
									<T keyName="likes-item-3" defaultValue="Staying up late" />
								</li>
								<li class="list-li">
									<T keyName="likes-item-4" defaultValue="Cats" />
								</li>
								<li class="list-li">
									<T keyName="likes-item-5" defaultValue="Overengineering things" />
								</li>
								<li class="list-li">
									<T keyName="likes-item-6" defaultValue="Gaming" />
								</li>
								<li class="list-li">
									<T keyName="likes-item-7" defaultValue="Learning new things" />
								</li>

							</ul>

						</div>
					</li>
					<li
						in:fly|global={{ y: 50, duration: 500, delay: 250 }}
						class="snap-center snap-always md:snap-start w-full h-full flex flex-col space-y-4 grow sm:max-w-none"
					>
						<div
							class="h-full p-3 backdrop-blur-md border border-primary-900/5 dark:border-primary-50/10 bg-gradient-to-br  from-primary-900/10 to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10  rounded-md w-full flex flex-col justify-start"
						>
							<h2 class="font-sans text-primary-900 dark:text-primary-50 text-2xl">
								<T keyName="dislikes-title" defaultValue="Some things i dislike" />
							</h2>
							<ul class="list-likes">
								<li class="list-li">
									<T keyName="dislikes-item-1" defaultValue="Coffee" />
								</li>
								<li class="list-li">
									<T keyName="dislikes-item-2" defaultValue="Public speaking" />
								</li>
								<li class="list-li">
									<T keyName="dislikes-item-3" defaultValue="Comic Sans MS" />
								</li>
								<li class="list-li">
									<T keyName="dislikes-item-4" defaultValue="Horror movies" />
								</li>
								<li class="list-li">
									<T keyName="dislikes-item-5" defaultValue="Bad Communication" />
								</li>
							</ul>
						</div>
					</li>
			<li class="h-px w-px"></li>

				</ul>
				<ButtonScrollToSection section={'cv_jobs'}
				>{$t({ key: 'work-experience', defaultValue: 'Work Experience' })}</ButtonScrollToSection
			>
	</div>
</section>

<style>
:root {
  --gutter: 20px;
}

ul .list-likes {
	@apply py-3 space-y-3;
}

.list-li {
	@apply py-0.5 px-2 backdrop-blur-md border border-primary-900/5 dark:border-primary-50/10 bg-gradient-to-br  from-primary-900/10 to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10  rounded-md;
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
  grid-template-columns: 2rem repeat(3, calc(100% - var(--gutter) * 2)) 2rem ;
  grid-template-rows: minmax(150px, 1fr);
}

@media (min-width: 768px) {
		.hs {
			grid-template-columns: repeat(5, calc(50% - var(--gutter) * 2));
		}
	}
</style>

