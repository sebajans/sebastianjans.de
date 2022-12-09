
<script type="ts">
  import { T } from '@tolgee/svelte';
  import { scrollInSection } from '../../components/scrollInSection'

  let scroll:number = 0
  let windowHeight:number
  $: sectionScroll = scrollInSection(scroll, 1, windowHeight)

  let srcKamadoLogo = '/logos/logo-kamadob10-white.webp';
  let srcKamadoLogoDark = '/logos/logo-kamadob10.webp';
  let srcKamadoMobile = 'img/website-kamadob10-front-mobile.webp';
	let srcKamadoFront = 'img/website-kamadob10-front.webp';
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="kamadoB10"
	class="bg-primary-200/20 dark:bg-primary-900/10 w-full relative  h-screen h-screen-ios overflow-hidden "
>
	<div class="pr-6 pl-6 md:pl-44 max-w-full">
		<div
			id="kb10-logo"
			class="md:mt-28 mb-8 my-8 h-20  w-2/3 max-w-md pr-2 bg-contain bg-no-repeat bg-center bg-origin-content bg-[url({srcKamadoLogo})] dark:bg-[url({srcKamadoLogoDark})]"
		/>
		<div
			class="absolute h-auto text-primary-900/70 dark:text-primary-50 bottom-14 left-0 md:left-44 px-6 md:w-2/5 text-justify"
			style:transform={`translate3d(calc(-50% + 50 * ${sectionScroll}%),0, 0)`}
		>
			<T
				keyName="works-p-kamado"
				defaultValue="This website was for my former employer, who produces high-end handmade kamado grills. The objective for this website to appeal to high-end customers and highlight the USPs."
			/>
		</div>
		<div
			id="kb10-browser-phone"
			style:transform={`translate3d(calc(100% - 100 * ${sectionScroll}%),0, 0)`}
			class="shadow-primary-800/40 md:bottom-12 bottom-52  shadow-lg right-6 md:right-12 backdrop-blur-sm 
			bg-primary-200/80 dark:bg-primary-700/60 md:w-1/4 max-w-lg w-1/3 flex absolute flex-col rounded-2xl md:rounded-3xl z-20"
		>
			<!-- before:h-4 before:rounded-b-md before:w-1/2 before:bg-primary-700/70 before:backdrop-blur-xl before:absolute before:mt-1 before:left-1/2 before:-translate-x-1/2  -->
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
			class="shadow-primary-800/20 shadow-md left-6 md:left-52 backdrop-blur-sm p-1 bg-primary-200/80 dark:bg-primary-700/60 w-[80%] md:w-1/2 sm:w-2/3 max-w-4xl flex absolute flex-col rounded-lg z-10"
		>
			<div class="relative flex flex-row space-x-1 md:space-x-2 md:p-2 p-1">
				<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
				<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
				<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
			</div>
			<img
				alt="website-kamado-front"
				class="object-contain rounded-lg"
				src={srcKamadoFront}
			/>
		</div>
	</div>
</section>