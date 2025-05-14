<script lang="ts">
	import { T } from '@tolgee/svelte'; // change import statement

	import { settingsState } from '$lib/stores/settingsState';
import { Button } from '@/components/ui/button';
	import IntersectionObserver from 'svelte-intersection-observer';

	let srcBrazieLogoDark = '/logos/logo-brazie-white.webp';
	let srcBrazieLogo = '/logos/logo-brazie.webp';
	let srcBrazieFront = '/projects/website-brazie/website-brazie-gallery.webp';

	let element: HTMLElement | undefined = $state();
	let intersecting: boolean | undefined = $state();
</script>

<IntersectionObserver once threshold={0.5} {element} bind:intersecting>
	<section
		bind:this={element}
		id="brazie"
		class="relative flex w-full flex-col items-center justify-center"
	>
		<div
			class="h-works md:h-worksmd grid max-h-[38rem] w-full grid-cols-8 grid-rows-12 gap-6 px-3 md:grid-cols-10 md:grid-rows-12"
		>
			<!-- {#if intersecting} -->
			<div
				id="brazie-logo"
				style:background-image={$settingsState.darkMode
					? `url('${srcBrazieLogoDark}')`
					: `url('${srcBrazieLogo}')`}
				class="{intersecting
					? ''
					: 'translate-x-20 opacity-0'} col-[5_/_span_4] row-[1_/_span_2] h-full
			w-full bg-contain bg-center bg-no-repeat bg-origin-content transition-all delay-200 duration-500 md:col-[5_/_span_6] md:row-[1_/_span_2] md:bg-left-bottom"
			></div>

			<div
				class="{intersecting ? '' : '-translate-x-1/3 opacity-0'} col-[5_/_span_4] row-[3_/_span_7]
			flex h-full w-full justify-end transition-all duration-500 md:col-[1_/_span_4] md:row-[1_/_span_12] md:justify-end"
			>
				<div
					id="brazie-browser-phone"
					class="bg-primary-200/80 shadow-primary-800/40 dark:bg-primary-700/60 relative z-10 aspect-[10/19.6] h-full max-h-[40rem]
			w-auto self-center overflow-hidden rounded-xl shadow-xl backdrop-blur-xs md:aspect-[10/19.6] md:rounded-[8%_/_5%]"
				>
					<iframe
						title="brazie"
						class="h-[calc(100%_-_2.75rem)] w-full md:h-[calc(100%_-_3.25rem)] md:rounded-t-[1.25rem]"
						src="https://brazie.eu"
						name="iframe"
					></iframe>
					<!-- <a href="https://brazie.eu" target="iframe">SO</a> -->
					<!-- <img
					width="320"
					height="584"
					alt="website-brazie-front-mobile"
					class="h-[calc(100%_-_2.75rem)] ml-auto md:mx-auto rounded-t-[0.75rem] object-cover object-top px-0.5 pt-0.5 md:h-[calc(100%_-_3.25rem)] md:rounded-t-[1.25rem] md:px-1 md:pt-1"
					src={srcBrazieMobile}
				/> -->
					<div class="relative mt-2 mb-2 flex flex-row space-x-2 md:mb-3">
						<div class="dark:bg-pimary-90/80 bg-primary-50/80 h-5 w-1 rounded-r-full md:h-6"></div>
						<span
							class="dark:bg-pimary-90/80 bg-primary-50/80 text-primary-900/80 h-5 w-full rounded-md p-0.5 text-center font-sans text-xs shadow-lg md:h-6 md:text-sm"
						>
							brazie.eu
						</span>
						<div class="dark:bg-pimary-90/80 bg-primary-50/80 h-5 w-1 rounded-l-full md:h-6"></div>
					</div>
					<div
						class="bg-primary-50/80 absolute bottom-1 left-1/2 h-0.5 w-2/5 -translate-x-1/2 self-center rounded-full md:h-1"
					></div>
				</div>
			</div>
			<!-- <div class="w-full">
			<iframe class="w-full max-w-4xl min-h-[400px]" src="https://brazie.eu" name="iframe"></iframe>
			<a href="https://brazie.eu" target="iframe">SO</a>
		</div> -->
			<div
				class="
{intersecting ? '' : 'translate-y-1/2 opacity-0'} col-[1_/_span_6] row-[1_/_span_8] flex
		h-full w-full -translate-x-1/3 justify-end transition-all delay-500 duration-700 md:col-[4_/_span_6] md:row-[6_/_span_7] md:translate-x-0 md:justify-start"
			>
				<div
					id="brazie-browser-front"
					class="bg-primary-400/50 shadow-primary-900/30 dark:bg-primary-700/50 flex aspect-13/10 h-full w-fit flex-col self-center rounded-lg p-0.5 shadow-md backdrop-blur-xs md:p-0.5"
				>
					<div class="relative flex flex-row space-x-1 p-1 md:space-x-2 md:p-2">
						{#each Array(3) as _}
							<div
								class="dark:bg-pimary-90/80 bg-primary-50/80 h-2 w-2 rounded-full md:h-3 md:w-3"
							></div>
						{/each}
					</div>
					<img
						width="688"
						height="462"
						alt="website-brazie-front"
						class="h-[calc(100%_-_1rem)] rounded-lg object-top object-cover md:h-[calc(100%_-_1.75rem)]"
						src={srcBrazieFront}
					/>
				</div>
				
			</div>

			<div
				class="
{intersecting ? '' : 'translate-x-1/2 opacity-0'} col-[1_/_span_8] row-[10_/_span_3] text-justify
			transition-all delay-300 duration-500 md:col-[5_/_span_6] md:row-[3_/_span_3]"
			>
			<p>
				
				<T
				keyName="works-p-brazie"
				defaultValue="This website was for my former employer, who produces high-end handmade brazie grills. The objective for this website to appeal to high-end customers and highlight the USPs."
				/>
			</p>
						<Button class="w-fit mt-2 text-primary-50 dark:text-primary-900 hover:dark:bg-primary-200" href="works/project-brazie">
				<T keyName="read-more" defaultValue="Read more" />
			</Button>

			</div>

		</div>
	</section>
</IntersectionObserver>
