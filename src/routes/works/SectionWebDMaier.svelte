<script lang="ts">
	import T from '@tolgee/svelte/T.svelte'; // change import statement

	import { settingsState } from '$lib/stores/settingsState';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	
	import IntersectionObserver from 'svelte-intersection-observer';

	let srcKamadoLogoDark = '/logos/logo-kamadob10-white.webp';
	let srcKamadoLogo = '/logos/logo-kamadob10.webp';
	let srcKamadoMobile = 'img/website-kamadob10-front-mobile.webp';
	let srcKamadoFront = 'img/website-kamadob10-front.webp';

	import { scrollInSection } from '$lib/functions/scrollInSection';
	export let scroll: number;
	export let windowHeight: number;

	let element: HTMLElement;
  let intersecting:boolean;

</script>

<IntersectionObserver once threshold={0.5} element={element} bind:intersecting={intersecting}
>	
<section bind:this={element} id="dmaier" class="relative flex w-full flex-col items-center justify-center">
	
	<div
	class=" h-[calc(100%_-_10rem)] md:h-worksmd mx-auto w-full "
	>
	<ul 
	class="hs snap-x snap-mandatory overflow-x-auto  ">
		<li class="h-px w-px"></li>
		<!-- <li class="snap-center max-h-[38rem] snap-always md:snap-none w-full flex md:flex-row flex-col md:space-x-4  ">
				{#if intersecting}
			<div class="w-full grid grid-cols-8 grid-rows-12 gap-6 px-3 md:grid-cols-10 md:grid-rows-12 justify-center md:pr-4 text-sm md:text-base">
				<div 
				in:fade={{ duration: 700, easing: cubicOut}}
				out:fade={{ duration: 300, easing: cubicOut}}
					id="kb10-logo"
					style:background-image={$settingsState.darkMode
						? `url('${srcKamadoLogoDark}')`
						: `url('${srcKamadoLogo}')`}
					class="col-[5_/_span_4] row-[1_/_span_2] h-full w-full bg-contain bg-center md:bg-left-bottom bg-no-repeat bg-origin-content md:col-[5_/_span_6] md:row-[1_/_span_2]"
				/>
				<div
				in:fly|global={{ x: -300, duration: 500, delay: 200, easing: cubicOut}}
				out:fly|global={{ y: -200, duration: 800, delay: 0, easing: cubicOut}}
					class="col-[5_/_span_4] row-[3_/_span_7] flex h-full w-full justify-end md:justify-end md:col-[1_/_span_4] md:row-[1_/_span_12] "
					>
					<div
						id="kb10-browser-phone"
						class="relative z-10 aspect-[10/22] md:aspect-[10/22] h-full max-h-[40rem]  w-auto self-center
					rounded-xl bg-primary-200/80 shadow-xl shadow-primary-800/40 backdrop-blur-sm dark:bg-primary-700/60 md:rounded-[8%_/_5%] overflow-hidden"
					>
						<img
							width="320"
							height="584"
							alt="website-kamadob10-front-mobile"
							class="h-[calc(100%_-_2.75rem)] ml-auto md:mx-auto rounded-t-[0.75rem] object-cover object-top px-0.5 pt-0.5 md:h-[calc(100%_-_3.25rem)] md:rounded-t-[1.25rem] md:px-1 md:pt-1"
							src="img/website-dmaier-front-mobile.png"
						/>
						<div class="relative mt-2 mb-2 flex flex-row space-x-2 md:mb-3">
							<div class="dark:bg-pimary-90/80 h-5 w-1 rounded-r-full bg-primary-50/80 md:h-6" />
							<span
								class="dark:bg-pimary-90/80 h-5 w-full rounded-md bg-primary-50/80 p-0.5 text-center font-sans text-xs text-primary-900/80 shadow-lg md:h-6 md:text-sm"
							>
								kamadob10.eu
							</span>
							<div class="dark:bg-pimary-90/80 h-5 w-1 rounded-l-full bg-primary-50/80 md:h-6" />
						</div>
						<div
							class="absolute bottom-1 left-1/2 h-0.5 w-2/5 -translate-x-1/2 self-center rounded-full bg-primary-50/80 md:h-1"
						/>
					</div>
				</div>
				<div 
				in:fly|global={{ y: 50, duration: 500, delay: 200, easing: cubicOut}}
				out:fly|global={{ y: -50, duration: 500, delay: 100, easing: cubicOut}}
					class="row-[3_/_span_6] col-[2_/_span_7] sm:row-[4_/_span_10] sm:col-[1_/_span_5] w-full h-full flex mx-auto justify-end translate-x-12 md:translate-x-0 z-10"
				>
					<div
						id="rj-browser-window"
						
						class=" h-full w-fit shadow-xl aspect-[14/10] backdrop-blur-sm p-0.5 md:p-1 bg-primary-300/80 dark:bg-primary-600/60 flex flex-col rounded-md md:rounded-lg z-10 "
					>
						<div class="w-full flex flex-row space-x-1 md:space-x-2 md:p-2 p-1">
							{#each Array(3) as _}
								<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
							{/each}
						</div>
						<img
							width="900"
							height="612"
							alt="website-rena-front-1"
							class="object-cover h-[calc(100%_-_1rem)] md:h-[calc(100%_-_1.75rem)] rounded-md md:rounded-lg"
							src={srcKamadoFront}
						/>
					</div>
				</div>

				<p
				in:fly|global={{ y: 300, duration: 500, delay: 200, easing: cubicOut}}
				out:fly|global={{ y: -200, duration: 500, delay: 100, easing: cubicOut}}
					class="col-[1_/_span_8] row-[10_/_span_3] text-justify md:col-[5_/_span_6]  md:row-[3_/_span_3]"
				>
					<T
						keyName="works-p-kamado"
						defaultValue="This website was for my former employer, who produces high-end handmade kamado grills. The objective for this website to appeal to high-end customers and highlight the USPs."
					/>
				</p>
			</div>
		{/if}
		</li> -->

			<li class="snap-center w-full grid grid-cols-8 grid-rows-12 gap-6 px-3 md:grid-cols-10 md:grid-rows-12 justify-center md:pr-4 text-sm md:text-base">
				<div 
				in:fade={{ duration: 700, easing: cubicOut}}
				out:fade={{ duration: 300, easing: cubicOut}}
					id="kb10-logo"
					style:background-image={$settingsState.darkMode
						? `url('${srcKamadoLogoDark}')`
						: `url('${srcKamadoLogo}')`}
					class="col-[5_/_span_4] row-[1_/_span_2] h-full w-full bg-contain bg-center md:bg-left-bottom bg-no-repeat bg-origin-content md:col-[5_/_span_6] md:row-[1_/_span_2]"
				/>
				<div
				in:fly|global={{ x: -300, duration: 500, delay: 200, easing: cubicOut}}
				out:fly|global={{ y: -200, duration: 800, delay: 0, easing: cubicOut}}
					class="col-[5_/_span_4] row-[3_/_span_7] flex h-full w-full justify-end md:justify-end md:col-[1_/_span_4] md:row-[1_/_span_12] "
					>
					<div
						id="kb10-browser-phone"
						class="relative z-10 aspect-[10/22] md:aspect-[10/22] h-full max-h-[40rem]  w-auto self-center
					rounded-xl bg-primary-200/80 shadow-xl shadow-primary-800/40 backdrop-blur-sm dark:bg-primary-700/60 md:rounded-[8%_/_5%] overflow-hidden"
					>
						<img
							width="320"
							height="584"
							alt="website-kamadob10-front-mobile"
							class="h-[calc(100%_-_2.75rem)] ml-auto md:mx-auto rounded-t-[0.75rem] object-cover object-top px-0.5 pt-0.5 md:h-[calc(100%_-_3.25rem)] md:rounded-t-[1.25rem] md:px-1 md:pt-1"
							src="img/website-dmaier-front-mobile.png"
						/>
						<div class="relative mt-2 mb-2 flex flex-row space-x-2 md:mb-3">
							<div class="dark:bg-pimary-90/80 h-5 w-1 rounded-r-full bg-primary-50/80 md:h-6" />
							<span
								class="dark:bg-pimary-90/80 h-5 w-full rounded-md bg-primary-50/80 p-0.5 text-center font-sans text-xs text-primary-900/80 shadow-lg md:h-6 md:text-sm"
							>
								dmaier-gmbh.de
							</span>
							<div class="dark:bg-pimary-90/80 h-5 w-1 rounded-l-full bg-primary-50/80 md:h-6" />
						</div>
						<div
							class="absolute bottom-1 left-1/2 h-0.5 w-2/5 -translate-x-1/2 self-center rounded-full bg-primary-50/80 md:h-1"
						/>
					</div>
				</div>
				<div
				class="col-[1_/_span_6] row-[1_/_span_8] flex h-full w-full -translate-x-1/3 justify-end md:justify-start md:col-[4_/_span_6] md:row-[6_/_span_7] md:translate-x-0"
				>
				<div
				in:fly|global={{ y: -100, duration: 500, delay: 200, easing: cubicOut}}
				out:fly|global={{ y: -200, duration: 500, delay: 100, easing: cubicOut}}
						id="kb10-browser-front"
						class="h-full w-fit self-center aspect-[13/10] shadow-primary-900/30 shadow-md backdrop-blur-sm p-0.5 md:p-0.5 bg-primary-400/50 dark:bg-primary-700/50 flex flex-col rounded-lg"
					>
						<div class="relative flex flex-row space-x-1 p-1 md:space-x-2 md:p-2">
							{#each Array(3) as _}
								<div class="dark:bg-pimary-90/80 h-2 w-2 rounded-full bg-primary-50/80 md:h-3 md:w-3" />
							{/each}
						</div>
						<img
							width="688"
							height="462"
							alt="website-kamado-front"
							class="h-[calc(100%_-_1rem)] rounded-lg object-cover md:h-[calc(100%_-_1.75rem)]"
							src="img/website-dmaier-front.png"
						/>
					</div>
				</div>

				<p
				in:fly|global={{ x: 300, duration: 500, delay: 200, easing: cubicOut}}
				out:fly|global={{ y: -200, duration: 500, delay: 100, easing: cubicOut}}
					class="col-[1_/_span_8] row-[10_/_span_3] text-justify md:col-[5_/_span_6]  md:row-[3_/_span_3]"
				>
					<T
						keyName="works-p-kamado"
						defaultValue="This website was for my former employer, who produces high-end handmade kamado grills. The objective for this website to appeal to high-end customers and highlight the USPs."
					/>
				</p>
			</li>

			<li class="h-px w-px"></li>

		</ul>
	</div>
</section>
</IntersectionObserver>

<!-- before:h-4 before:rounded-b-md before:w-1/2 before:bg-primary-700/70 before:backdrop-blur-xl before:absolute before:mt-1 before:left-1/2 before:-translate-x-1/2  -->

<style>
	:root {
		--gutter: 20px;
	}
	
	ul .list-likes {
		@apply pt-3 space-y-3;
	}
	/* backdrop-blur-md border border-primary-900/5 dark:border-primary-50/5 bg-gradient-to-br  from-primary-900/10 to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10  rounded-md */
	
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
		grid-template-columns: 2rem repeat(2, calc(100% - 20px * 2)) 2rem ;
		grid-template-rows: masonry;
		/* grid-template-rows: minmax(150px, 1fr); */
		/* grid-template-rows: fit-content(100%); */

	}
	
	/* @media (min-width: 768px) {
			.hs {
				grid-template-columns: 1rem calc(100% - var(--gutter) * 2) repeat(2,  calc(50% - var(--gutter) * 2)) 1rem;
			}
		} */
	</style>