<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { fly } from 'svelte/transition';
	let profilePicture = 'img/profile-pic.webp';
	import ButtonScrollToSection from '$components/ButtonScrollToSection.svelte';
	import { getTranslate } from '@tolgee/svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	const { t } = getTranslate();
	let slidesToScroll = 1;
</script>

<section
	class="justfiy-center relative flex h-full min-h-screen w-[calc(100vw_-_0rem)] flex-col pt-4 pb-20 md:w-[calc(100vw_-_12rem)] md:pt-20"
	id="aboutme"
>
	<div
		class="border-primary-900/5 dark:border-primary-50/10 mx-auto my-auto h-full w-full max-w-4xl space-y-4 py-2 md:rounded-md md:border md:py-3 md:pl-3"
	>
		<h1
			in:fly|global={{ y: 50, duration: 500 }}
			class="text-primary-900 dark:text-primary-50 text-center md:text-left"
		>
			{$t({ key: 'about-me', defaultValue: 'About me' })}
		</h1>
		<Carousel.Root
			orientation="horizontal"
			opts={{ slidesToScroll: slidesToScroll }}
			class="px-0 md:px-0"
		>
			<Carousel.Content class="-ml-4">
				<Carousel.Item
					class="min-h-[20rem] w-full snap-center justify-center pr-2 pl-6 text-sm md:min-h-[18rem] md:text-base"
				>
					<img
						in:fly|global={{ duration: 2000 }}
						width="200"
						height="200"
						src={profilePicture}
						alt="profile"
						class="float-right mb-4 ml-4 aspect-square h-full max-h-[12rem] w-1/3 max-w-[12rem] rounded-xl object-cover object-top md:max-h-[16rem] md:w-1/5 md:max-w-[16rem] md:grow-0"
					/>

					<p class="mb-2 text-justify md:w-full">
						{$t({
							key: 'front-about-text',
							defaultValue:
								'I am 25 years old and from Germany. I studied my Bachelors in Materials Science while i was self-teaching myself all kinds of Design capabilities. After finishing my degree i decided to persue a different career path in the field of Design. '
						})}
					</p>

					<p class="mb-2 text-justify md:w-full">
						{$t({
							key: 'front-about-text-2',
							defaultValue:
								'I moved to Spain and started studying Design Engineering ^at the Universitat Politécnica de Valencia and am now working on my Master Thesis.'
						})}
					</p>
					<p class="mb-2 text-justify md:w-full">
						{$t({
							key: 'front-about-text-3',
							defaultValue:
								'My key strengths include a keen eye for detail, a talent for crafting clean and intuitive layouts, and the ability to bring ideas to life with beautiful and effective visuals.'
						})}
					</p>
				</Carousel.Item>
				<Carousel.Item
					class="flex h-full min-h-[11rem] w-full snap-center flex-col items-end pr-2 pl-6 sm:basis-1/2 md:flex-row md:items-start"
				>
					<div
						class="border-primary-900/5 from-primary-900/10 to-primary-900/5 dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 flex h-full w-full flex-col justify-start rounded-md border bg-linear-to-br p-3 backdrop-blur-md"
					>
						<h2 class="text-primary-900 dark:text-primary-50 font-sans text-2xl">
							<T keyName="likes-title" defaultValue="Some things i like" />
						</h2>
						<ul class="space-y-3 pt-3">
							<li class="list-li px-2 py-0.5">
								<T keyName="likes-item-1" defaultValue="Orange juice" />
							</li>
							<li class="list-li px-2 py-0.5">
								<T keyName="likes-item-2" defaultValue="Traveling" />
							</li>
							<li class="list-li px-2 py-0.5">
								<T keyName="likes-item-3" defaultValue="Staying up late" />
							</li>
							<li class="list-li px-2 py-0.5">
								<T keyName="likes-item-4" defaultValue="Cats" />
							</li>
							<li class="list-li px-2 py-0.5">
								<T keyName="likes-item-5" defaultValue="Puzzles" />
							</li>
							<li class="list-li px-2 py-0.5">
								<T keyName="likes-item-6" defaultValue="Gaming" />
							</li>
						</ul>
					</div>
				</Carousel.Item>
				<Carousel.Item
					class="flex h-full min-h-[11rem] w-full snap-center flex-col items-end pr-2 pl-6 sm:basis-1/2 md:flex-row md:items-start"
				>
					<div
						class="border-primary-900/5 from-primary-900/10 to-primary-900/5 dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 flex h-full w-full flex-col justify-start rounded-md border bg-linear-to-br p-3 backdrop-blur-md"
					>
						<h2 class="text-primary-900 dark:text-primary-50 font-sans text-2xl">
							<T keyName="dislikes-title" defaultValue="Some things i dislike" />
						</h2>
						<ul class="space-y-3 pt-3">
							<li class="list-li px-2 py-0.5">
								<T keyName="dislikes-item-1" defaultValue="Coffee" />
							</li>
							<li class="list-li px-2 py-0.5">
								<T keyName="dislikes-item-2" defaultValue="Public speaking" />
							</li>
							<li class="list-li px-2 py-0.5">
								<T keyName="dislikes-item-3" defaultValue="Comic Sans MS" />
							</li>
							<li class="list-li px-2 py-0.5">
								<T keyName="dislikes-item-4" defaultValue="Horror movies" />
							</li>
							<li class="list-li px-2 py-0.5">
								<T keyName="dislikes-item-5" defaultValue="Bad Communication" />
							</li>
						</ul>
					</div>
				</Carousel.Item>
			</Carousel.Content>
			<div class="flex translate-y-6 justify-between px-2 md:px-4">
				<Carousel.Previous
					class="bg-primary-900 hover:bg-primary-500 dark:bg-primary-50 dark:hover:bg-primary-500 relative left-0 translate-x-0! border-none"
				/>
				<Carousel.Next
					class="bg-primary-900 hover:bg-primary-500 dark:bg-primary-50 dark:hover:bg-primary-500 relative right-0 translate-x-0! border-none"
				/>
			</div>
		</Carousel.Root>
		<ButtonScrollToSection section={'cv_jobs'}
			>{$t({
				key: 'work-experience',
				defaultValue: 'Work Experience'
			})}</ButtonScrollToSection
		>
	</div>
</section>

<style>
	@reference "tailwindcss"
	.list-li::before {
		content: '';
		@apply border-primary-900/5 from-primary-900/10 to-primary-900/5 dark:border-primary-50/10 dark:from-primary-50/25 dark:to-primary-50/10 mr-2 inline-block h-3 w-3 translate-y-px rounded-full border bg-linear-to-br backdrop-blur-md;
	}
</style>
