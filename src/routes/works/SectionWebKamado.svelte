<script type="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';
	import { nightMode } from '$lib/stores/nightMode';
	let scroll: number = 0;
	let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 1, windowHeight);

	let srcKamadoLogoDark = '/logos/logo-kamadob10-white.webp';
	let srcKamadoLogo = '/logos/logo-kamadob10.webp';
	let srcKamadoMobile = 'img/website-kamadob10-front-mobile.webp';
	let srcKamadoFront = 'img/website-kamadob10-front.webp';
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="kamadoB10"
	class="bg-primary-200/50 dark:bg-primary-700/50 md:pl-44 w-full flex flex-col relative h-screen h-screen-ios overflow-hidden justify-center items-center"
>
<div
		class="w-full px-3 max-w-4xl h-[50vh] max-h-[56rem] mx-auto my-auto grid grid-cols-8 grid-rows-12 md:grid-cols-12 md:grid-rows-9 gap-6"
	>
		<div
			id="kb10-logo"
			style:transform={`translate3d(0,calc(80% - ${sectionScroll}* 80%), 0)`}
			style:background-image={$nightMode ? `url('${srcKamadoLogoDark}')` : `url('${srcKamadoLogo}')`}
			class="row-[1_/_span_2] col-[5_/_span_4] md:col-[9_/_span_4] bg-contain bg-no-repeat bg-center bg-origin-content"
		/>
		
		<div
			id="kb10-browser-phone"
			style:transform={`translate3d(calc(100% - 100 * ${sectionScroll}%),0, 0)`}
			class="row-[4_/_span_6] col-[5_/_span_4] md:row-[3_/_span_7] md:col-[8_/_span_4]  shadow-primary-800/40 shadow-lg backdrop-blur-sm 
			bg-primary-200/80 dark:bg-primary-700/60 self-center flex flex-col rounded-2xl md:rounded-3xl z-10"
		>
			<img
				alt="website-rena-front-1"
				class="object-cover object-top aspect-auto rounded-t-[0.75rem] md:rounded-t-[1.25rem] m-1"
				src={srcKamadoMobile}
			/>
			<div class="relative flex mt-1 md:mb-4 mb-2 flex-row space-x-2">
				<div class="rounded-r-full h-5 md:h-6 w-1 bg-primary-50/80 dark:bg-pimary-90/80" />
				<span
					class="rounded-md shadow-lg font-sans text-center text-xs md:text-sm text-primary-900/80 p-0.5 h-5 md:h-6 w-full bg-primary-50/80 dark:bg-pimary-90/80"
				>
					kamadob10.eu
				</span>
				<div class="rounded-l-full h-5 md:h-6 w-1 bg-primary-50/80 dark:bg-pimary-90/80" />
			</div>
			<div class=" h-0.5 md:h-1 rounded-full w-2/5 bg-primary-50/80 m-1 self-center" />
		</div>
		
		<div
			id="kb10-browser-front"
			style:transform={`translate3d(calc(-75% + 75 * ${sectionScroll}%),0, 0)`}
			class="row-[3_/_span_4] col-[1_/_span_6] md:row-[1_/_span_6] md:col-[1_/_span_8] self-center shadow-primary-800/20 shadow-md  backdrop-blur-sm p-1 bg-primary-200/80 dark:bg-primary-700/60 flex flex-col rounded-lg"
		>
			<div class="relative flex flex-row space-x-1 md:space-x-2 md:p-2 p-1">
				{#each Array(3) as _}
					<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
				{/each}
			</div>
			<img alt="website-kamado-front" class="object-contain  rounded-lg" src={srcKamadoFront} />
		</div>
		<p
			class="row-[9_/_span_4] col-[1_/_span_4] md:row-[8_/_span_2] md:col-[1_/_span_6] text-justify"
			style:transform={`translate3d(0,calc(400% - ${sectionScroll} * 400%), 0)`}
		>
			<T
				keyName="works-p-kamado"
				defaultValue="This website was for my former employer, who produces high-end handmade kamado grills. The objective for this website to appeal to high-end customers and highlight the USPs."
			/>
		</p>
	</div>
</section>
			<!-- before:h-4 before:rounded-b-md before:w-1/2 before:bg-primary-700/70 before:backdrop-blur-xl before:absolute before:mt-1 before:left-1/2 before:-translate-x-1/2  -->
