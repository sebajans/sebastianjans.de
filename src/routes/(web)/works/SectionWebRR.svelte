<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { getTranslate } from '@tolgee/svelte';
	const { t } = getTranslate();
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLElement | undefined = $state();
	let intersecting: boolean | undefined = $state();

	let elementPlay: HTMLElement | undefined = $state();
	let intersectingPlay: boolean | undefined = $state();
	let elementLevel: HTMLElement | undefined = $state();
	let intersectingLevel: boolean | undefined = $state();
	let elementSettings: HTMLElement | undefined = $state();
	let intersectingSettings: boolean | undefined = $state();
</script>

<IntersectionObserver once threshold={0.5} {element} bind:intersecting>
	<section
		bind:this={element}
		class="justfiy-center relative flex h-full min-h-screen w-[calc(100vw_-_0rem)] flex-col pb-20 pt-4 md:w-[calc(100vw_-_12rem)] md:pt-20"
		id="Recyclerumble"
	>
		<div class="mx-auto my-auto h-works w-full max-w-4xl space-y-4 md:h-worksmd">
			<h1
				class="{intersecting
					? ''
					: 'translate-y-20 opacity-0'} px-3 text-primary-900 transition-all duration-500 dark:text-primary-50 md:text-left"
			>
				{$t({ key: 'title-RR', defaultValue: 'Recycle Rumble' })}
			</h1>
			<p
				class="{intersecting
					? ''
					: 'translate-y-20 opacity-0'} px-3 transition-all delay-150 duration-700"
			>
				{$t({
					key: 'description-RR',
					defaultValue:
						'Recycle Rumble is a game that i created as a part of my master thesis. It is an online game directed towards children. It teaches recycling and trash sorting.'
				})}
			</p>
			<ul
				class="{intersecting
					? ''
					: 'translate-y-1/2 opacity-0'} hs h-full snap-x snap-mandatory items-start overflow-x-auto border-primary-900/5 py-2 backdrop-blur-md transition-all delay-300 duration-700 dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 md:overflow-y-clip md:rounded-md md:border md:bg-gradient-to-br md:from-primary-900/10 md:to-primary-900/5 md:py-3"
			>
				<li
					class="grid h-full max-h-96 w-full snap-center snap-always grid-cols-6 grid-rows-6 md:snap-start md:grid-cols-8 md:grid-rows-[1fr,_3fr]"
				>
					<enhanced:img
						alt="website-RR-front-mobile"
						class="
						col-span-2 row-span-5 rounded-t-[0.75rem] object-cover object-top pt-0.5 md:col-span-3 md:rounded-t-[1.25rem] md:px-1 md:pt-1"
						src="img/website-RR/website-RR-mobile-front.webp?enhanced"
					/>
					<enhanced:img
						alt="website-RR-front-desktop"
						class="
						col-span-4 col-start-3 row-span-5 h-full w-full rounded-t-[0.75rem] object-cover object-left pt-0.5 sm:h-auto md:col-span-5 md:col-start-4 md:row-start-2 md:mt-auto md:rounded-t-[1.25rem] md:object-left-top md:px-1 md:pt-1"
						src="img/website-RR/website-RR-front.webp?enhanced"
					/>
					<div
						class="col-span-6 row-span-1 row-start-1 flex flex-col px-3 md:col-start-4 md:row-start-1"
					>
						<h3 class="pb-1">
							<T keyName="title-RR-welcome" defaultValue="Welcome page" />
						</h3>
						<p>
							<T
								keyName="text-RR-welcome"
								defaultValue="The front page features a playful and colorful welcome screen."
							/>
						</p>
					</div>
				</li>
				<IntersectionObserver
					once
					threshold={0.5}
					element={elementPlay}
					bind:intersecting={intersectingPlay}
				>
					<li
						bind:this={elementPlay}
						class="grid h-full max-h-96 w-full snap-center snap-always grid-cols-6 grid-rows-6 md:snap-start md:grid-cols-8 md:grid-rows-[1fr,_3fr]"
					>
						<enhanced:img
							alt="website-RR-play-mobile"
							class="{intersectingPlay ? '' : 'translate-x-1/3 opacity-0'} col-span-2 row-span-5
							rounded-t-[0.75rem] object-cover object-top pt-0.5 transition-all duration-500 md:col-span-3 md:rounded-t-[1.25rem] md:px-1 md:pt-1"
							src="img/website-RR/website-RR-mobile-play.webp?enhanced"
						/>
						<enhanced:img
							alt="website-RR-play-desktop"
							class="{intersectingPlay
								? ''
								: 'translate-x-1/3 opacity-0'} col-span-4 col-start-3 row-span-5
							h-full w-full rounded-t-[0.75rem] object-cover object-left pt-0.5 transition-all delay-150 duration-500 sm:h-auto md:col-span-5 md:col-start-4 md:row-start-2 md:mt-auto md:rounded-t-[1.25rem] md:object-left-top md:px-1 md:pt-1"
							src="img/website-RR/website-RR-play.webp?enhanced"
						/>
						<div
							class="{intersectingPlay
								? ''
								: 'translate-x-1/3 opacity-0'} col-span-6 row-span-1 row-start-1 flex flex-col px-3 transition-all delay-300 duration-500 md:col-start-4 md:row-start-1"
						>
							<h3 class="pb-1">
								<T keyName="title-RR-play" defaultValue="Play page" />
							</h3>
							<p>
								<T
									keyName="text-RR-play"
									defaultValue="The play page showcases all the levels, if the level is completed it shows the trophy gained."
								/>
							</p>
						</div>
					</li>
				</IntersectionObserver>
				<IntersectionObserver
					once
					threshold={0.5}
					element={elementLevel}
					bind:intersecting={intersectingLevel}
				>
					<li
						bind:this={elementLevel}
						class="grid h-full max-h-96 w-full snap-center snap-always grid-cols-6 grid-rows-6 md:snap-start md:grid-cols-8 md:grid-rows-[1fr,_3fr]"
					>
						<enhanced:img
							alt="website-RR-level-mobile"
							class="{intersectingLevel ? '' : 'translate-x-1/3 opacity-0'} col-span-2 row-span-5
							rounded-t-[0.75rem] object-cover object-top pt-0.5 transition-all duration-500 md:col-span-3 md:rounded-t-[1.25rem] md:px-1 md:pt-1"
							src="img/website-RR/website-RR-mobile-level.webp?enhanced"
						/>
						<enhanced:img
							alt="website-RR-level-desktop"
							class="{intersectingLevel
								? ''
								: 'translate-x-1/3 opacity-0'} col-span-4 col-start-3 row-span-5
							h-full w-full rounded-t-[0.75rem] object-cover object-left pt-0.5 transition-all delay-150 duration-500 sm:h-auto md:col-span-5 md:col-start-4 md:row-start-2 md:mt-auto md:rounded-t-[1.25rem] md:object-left-top md:px-1 md:pt-1"
							src="img/website-RR/website-RR-level.webp?enhanced"
						/>
						<div
							class="{intersectingLevel
								? ''
								: 'translate-x-1/3 opacity-0'} col-span-6 row-span-1 row-start-1 flex flex-col px-3 transition-all delay-300 duration-500 md:col-start-4 md:row-start-1"
						>
							<h3 class="pb-1">
								<T keyName="title-RR-level" defaultValue="Level page" />
							</h3>
							<p>
								<T
									keyName="text-RR-level"
									defaultValue="The levels are designed to be simple, yet interesting to look at. They get increasingly more difficult with level and stage."
								/>
							</p>
						</div>
					</li>
				</IntersectionObserver>
				<IntersectionObserver
					once
					threshold={0.5}
					element={elementSettings}
					bind:intersecting={intersectingSettings}
				>
					<li
						bind:this={elementSettings}
						class="grid h-full max-h-96 w-full snap-center snap-always grid-cols-6 grid-rows-6 md:snap-start md:grid-cols-8 md:grid-rows-[1fr,_3fr]"
					>
						<enhanced:img
							alt="website-RR-settings-mobile"
							class="{intersectingSettings ? '' : 'translate-x-1/3 opacity-0'} col-span-2 row-span-5
							rounded-t-[0.75rem] object-cover object-top pt-0.5 transition-all duration-500 md:col-span-3 md:rounded-t-[1.25rem] md:px-1 md:pt-1"
							src="img/website-RR/website-RR-mobile-settings.webp?enhanced"
						/>
						<enhanced:img
							alt="website-RR-settings-desktop"
							class="{intersectingSettings
								? ''
								: 'translate-x-1/3 opacity-0'} col-span-4 col-start-3 row-span-5
							h-full w-full rounded-t-[0.75rem] object-cover object-left pt-0.5 transition-all delay-150 duration-500 sm:h-auto md:col-span-5 md:col-start-4 md:row-start-2 md:mt-auto md:rounded-t-[1.25rem] md:object-left-top md:px-1 md:pt-1"
							src="img/website-RR/website-RR-settings.webp?enhanced"
						/>
						<div
							class="{intersectingSettings
								? ''
								: 'translate-x-1/3 opacity-0'} col-span-6 row-span-1 row-start-1 flex flex-col px-3 transition-all delay-300 duration-500 md:col-start-4 md:row-start-1"
						>
							<h3 class="pb-1">
								<T keyName="title-RR-settings" defaultValue="Settings page" />
							</h3>
							<p>
								<T
									keyName="text-RR-settings"
									defaultValue="The settings page showcases the UI of the game."
								/>
							</p>
						</div>
					</li>
				</IntersectionObserver>
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
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(4, calc(100% - var(--gutter) * 2));
		grid-template-rows: minmax(150px, 1fr);
	}

	@media (min-width: 768px) {
		.hs {
			grid-template-columns: repeat(4, calc(100% - var(--gutter) * 2));
		}
	}
</style>
