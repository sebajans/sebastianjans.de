<script lang="ts">
	import { T } from '@tolgee/svelte'; // change import statement
	import { settingsState } from '$lib/stores/settingsState';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import Button from '$lib/components/ui/button/button.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let srcRenaImg1 = 'img/website-rena-front-1.webp';
	let srcRenaImg2 = 'img/website-rena-front-2.webp';
	let srcRenaLogo = '../logos/logo-rj-l.webp';
	let srcRenaLogoDark = '../logos/logo-rj-l-white.webp';

	let element: HTMLElement | undefined = $state();
	let intersecting: boolean | undefined = $state();
</script>

<IntersectionObserver once threshold={0.5} {element} bind:intersecting>
	<section bind:this={element} id="websites" class="relative flex flex-col">
		<div
			class="h-works md:h-worksmd mx-auto my-auto grid max-h-[56rem] grid-cols-8 grid-rows-12 gap-6 p-4 sm:grid-cols-10 sm:grid-rows-12"
		>
			<div
				id="rena-logo"
				style:background-image={$settingsState.darkMode
					? `url('${srcRenaLogoDark}')`
					: `url('${srcRenaLogo}')`}
				class="{intersecting
					? ''
					: 'translate-y-20 opacity-0'} col-[1_/_span_4] row-[1_/_span_2] bg-contain bg-top bg-no-repeat bg-origin-content transition-all duration-500 sm:col-[1_/_span_] sm:row-[1_/_span_3]"
			></div>

			<div
				class="{intersecting
					? ''
					: 'translate-y-20 opacity-0'} z-10 col-[2_/_span_7] row-[3_/_span_6] mx-auto flex h-full w-full translate-x-12 justify-end transition-all delay-300 duration-700 sm:col-[1_/_span_5] sm:row-[4_/_span_10] md:translate-x-0"
			>
				<div
					id="rj-browser-window"
					class=" bg-primary-300/80 dark:bg-primary-600/60 z-10 flex aspect-14/10 h-full w-fit flex-col rounded-md p-0.5 shadow-xl backdrop-blur-xs md:rounded-lg md:p-1"
				>
					<div class="flex w-full flex-row space-x-1 p-1 md:space-x-2 md:p-2">
						{#each Array(3) as _}
							<div
								class="dark:bg-pimary-90/80 bg-primary-50/80 h-2 w-2 rounded-full md:h-3 md:w-3"
							></div>
						{/each}
					</div>
					<img
						width="900"
						height="612"
						alt="website-rena-front-1"
						class="h-[calc(100%_-_1rem)] rounded-md object-cover md:h-[calc(100%_-_1.75rem)] md:rounded-lg"
						src={srcRenaImg1}
					/>
				</div>
			</div>
			<div
				class="{intersecting
					? ''
					: 'translate-y-1/4 opacity-0'} col-[1_/_span_5] row-[5_/_span_5] mx-auto
			flex h-full w-full justify-start
			transition-all delay-[250ms] duration-500 sm:col-[5_/_span_6] sm:row-[1_/_span_8] sm:justify-start"
			>
				<div
					id="rj-browser-2"
					class=" bg-primary-400/50 shadow-primary-900/50 dark:bg-primary-700/50 flex aspect-14/10 h-full w-fit flex-col self-center rounded-lg p-0.5 shadow-lg backdrop-blur-xs md:p-0.5"
				>
					<div class="relative flex flex-row space-x-1 p-1 md:space-x-2 md:p-2">
						{#each Array(3) as _}
							<div
								class="dark:bg-pimary-900/80 bg-primary-50/80 h-1.5 w-1.5 rounded-full md:h-2.5 md:w-2.5"
							></div>
						{/each}
					</div>
					<img
						width="770"
						height="520"
						src={srcRenaImg2}
						alt="website-rena-front-2"
						class="h-[calc(100%_-_1rem)] rounded-lg object-cover md:h-[calc(100%_-_1.75rem)]"
					/>
				</div>
			</div>
			<p
				class="{intersecting
					? ''
					: 'translate-y-20 opacity-0'} col-[1_/_span_8] row-[10_/_span_3] h-full w-full self-center text-justify transition-all delay-250 duration-1000 sm:col-[6_/_span_5] sm:row-[9_/_span_4]"
			>
				<T
					keyName="works-p-rj"
					defaultValue="This is the website I created for a make-up stylist. It is primarily aimed at a female audience, so the colour scheme is mainly purple, red and white. The website includes a full-screen front page and a menu bar."
				/>
			</p>
			<Button class="" href="works/project-renatajans">
				<T keyName="read-more" defaultValue="Read more" />
			</Button>
			<!-- {/if} -->
		</div>
	</section>
</IntersectionObserver>
