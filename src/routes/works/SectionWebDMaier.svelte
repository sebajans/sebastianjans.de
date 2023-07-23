<script lang="ts">
	import T from '@tolgee/svelte/T.svelte'; // change import statement

	import { settingsState } from '$lib/stores/settingsState';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	
	import IntersectionObserver from 'svelte-intersection-observer';


	let srcDmaierLogoDark = 'img/website-dmaier-logo.webp';
	let srcDmaierLogo = 'img/website-dmaier-logo.webp';
	let srcDMaierMobile = 'img/website-dmaier-front-mobile.webp';
	let srcDMaier = 'img/website-dmaier.webp';

	let element: HTMLElement;
  let intersecting:boolean;

</script>

<IntersectionObserver once threshold={0.5} element={element} bind:intersecting={intersecting}
>	

<section bind:this={element} id="dmaier" class="relative flex w-full flex-col items-center justify-center">
	<div
		class="grid h-works md:h-worksmd max-h-[38rem] w-full grid-cols-8 grid-rows-12 gap-6 px-3 md:grid-cols-10 md:grid-rows-12"
	>
	{#if intersecting}
		<div 
		in:fade={{ duration: 700, easing: cubicOut}}
		out:fade={{ duration: 300, easing: cubicOut}}
			id="kb10-logo"
			style:background-image={$settingsState.darkMode
				? `url('${srcDmaierLogoDark}')`
				: `url('${srcDmaierLogo}')`}
			class="col-[5_/_span_4] row-[1_/_span_2] h-full w-full bg-contain bg-center md:bg-left-bottom bg-no-repeat bg-origin-content md:col-[1_/_span_6] md:row-[1_/_span_2]
			"
			/>
			<!-- p-3 backdrop-blur-md border border-primary-900/5 dark:border-primary-50/10 bg-primary-900/10 dark:bg-primary-50/20    rounded-md -->
		<!-- PHONE -->
		<div
		in:fly|global={{ x: 300, duration: 500, delay: 0, easing: cubicOut}}
		out:fly|global={{ y: -200, duration: 800, delay: 0, easing: cubicOut}}
			class="col-[4_/_span_4] row-[4_/_span_6] z-[11] flex h-full w-full justify-end md:justify-start md:col-[7_/_span_3] md:row-[2_/_span_9] "
			>
			<div
				id="kb10-browser-phone"
				class="relative z-10 aspect-[10/19.6] md:aspect-[10/19.6] h-full max-h-[40rem]  w-auto self-center
			rounded-xl bg-primary-200/80 shadow-xl shadow-primary-800/40 backdrop-blur-sm dark:bg-primary-700/60 md:rounded-[8%_/_5%] overflow-hidden"
			>
				<img
					width="320"
					height="584"
					alt="website-dmaier-front-mobile"
					class="h-[calc(100%_-_2.75rem)] ml-auto md:mx-auto rounded-t-[0.75rem] object-cover object-top px-0.5 pt-0.5 md:h-[calc(100%_-_3.25rem)] md:rounded-t-[1.25rem] md:px-1 md:pt-1"
					src={srcDMaierMobile}
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
		in:fly|global={{ x: 250, duration: 500, delay: 500, easing: cubicOut}}
		out:fly|global={{ y: -200, duration: 800, delay: 0, easing: cubicOut}}
			class="col-[5_/_span_4] row-[3_/_span_5] flex h-full w-full justify-end md:justify-start md:col-[8_/_span_3] md:row-[1_/_span_8] "
			>
			<div
				id="kb10-browser-phone-2"
				class="relative z-10 aspect-[10/19.6] md:aspect-[10/19.6] h-full max-h-[40rem]  w-auto self-center
			rounded-xl bg-primary-200/80 shadow-xl shadow-primary-800/40 backdrop-blur-sm dark:bg-primary-700/60 md:rounded-[8%_/_5%] overflow-hidden"
			>
				<img
					width="320"
					height="584"
					alt="website-dmaier-mobile"
					class="h-[calc(100%_-_2.5rem)] ml-auto md:mx-auto rounded-t-[0.75rem] object-cover object-top px-0.5 pt-0.5 md:h-[calc(100%_-_3.25rem)] md:rounded-t-[1.25rem] md:px-1 md:pt-1"
					src="img/website-dmaier-mobile.webp"
				/>
				<div class="relative mt-2 mb-1 flex flex-row space-x-2 md:mb-3">
					<div class="dark:bg-pimary-90/80 h-4 w-1 rounded-r-full bg-primary-50/80 md:h-6" />
					<span
						class="dark:bg-pimary-90/80 h-4 w-full rounded-[4px] md:rounded-md bg-primary-50/80 p-px text-center font-sans text-[0.6rem]  text-primary-900/80 shadow-lg md:h-6 md:text-sm"
					>
						dmaier-gmbh.de
					</span>
					<div class="dark:bg-pimary-90/80 h-4 w-1 rounded-l-full bg-primary-50/80 md:h-6" />
				</div>
				<div
					class="absolute bottom-1 left-1/2 h-0.5 w-2/5 -translate-x-1/2 self-center rounded-full bg-primary-50/80 md:h-1"
				/>
			</div>
		</div>
		<!-- BROSWER -->
		<div
		class="col-[1_/_span_6] row-[1_/_span_8] flex h-full w-full -translate-x-1/3 justify-end md:justify-start md:col-[1_/_span_6] md:row-[6_/_span_7] md:translate-x-0"
		>
		<div
		in:fly|global={{ x: -200, duration: 500, delay: 250, easing: cubicOut}}
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
					src={srcDMaier}
				/>
			</div>
		</div>

		<p
		in:fly|global={{ y: 100, duration: 500, delay: 800, easing: cubicOut}}
		out:fly|global={{ y: -200, duration: 500, delay: 100, easing: cubicOut}}
			class="col-[1_/_span_8] row-[10_/_span_3] text-justify md:col-[1_/_span_6]  md:row-[3_/_span_3]"
		>
			<T
				keyName="works-p-dmaier"
				defaultValue="This website was created for the company DMaier GmbH, they are a local company in germany that wanted a redesign of their old website to be more modern and streamlined."
			/>
		</p>
		{/if}
	</div>
</section>

</IntersectionObserver>