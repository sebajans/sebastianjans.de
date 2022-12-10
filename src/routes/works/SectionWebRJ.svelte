
<script type="ts">
  import { T } from '@tolgee/svelte';
  import { scrollInSection } from '../../components/scrollInSection'

  let scroll:number = 0
  let windowHeight:number
  $: sectionScroll = scrollInSection(scroll, 0, windowHeight)
  let srcRenaImg1 = 'img/website-rena-front-1.webp';
	let srcRenaImg2 = 'img/website-rena-front-2.webp';
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="websites"
	class="bg-primary-200/50 dark:bg-primary-700/50 w-full relative h-screen h-screen-ios p-7  overflow-y-hidden "
>
	<h1 class="w-fit transition-all duration-75 font-sans md:pt-24 text-4xl">
		<T keyName="works-webdev" defaultValue="Webdesign" />
	</h1>
	<div class="pr-6 pl-6 md:pl-44">
		<div
			id="rena-logo"
			style:transform={`translate3d(0,calc(80% - ${sectionScroll}* 80%), 0)`}
			class="absolute top-20 my-6 h-20  w-2/3 max-w-md pr-2 bg-contain bg-no-repeat bg-center bg-origin-content bg-[url('/logos/logo-rj-l.webp')] dark:bg-[url('/logos/logo-rj-l-white.webp')]"
		/>
		<div
			style:transform={`translate3d(0,calc(400% - ${sectionScroll} * 400% ), 0)`}
			class=" shadow-xl right-6 top-[25%] backdrop-blur-sm p-0.5 md:p-1 bg-primary-200/80 dark:bg-primary-700/60 w-2/3 md:w-3/5 flex absolute flex-col rounded-md md:rounded-lg z-10"
		>
			<div class="relative flex flex-row space-x-1 md:space-x-2 md:p-2 p-1">
				<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
				<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
				<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
			</div>
			<img
				alt="website-rena-front-1"
				class="object-contain rounded-md md:rounded-lg"
				src={srcRenaImg1}
			/>
		</div>
		<div
			style:transform={`translate3d(0,calc(60% - 60 * ${sectionScroll}%), 0)`}
			class="shadow-primary-900/50 top-[50%] shadow-lg left-6 md:left-44 backdrop-blur-sm p-0.5 md:p-0.5 bg-primary-300/50 dark:bg-primary-800/50 w-1/2 md:w-2/5 flex absolute flex-col rounded-lg"
		>
			<div class="relative flex flex-row space-x-1 md:space-x-2 md:p-2 p-1">
				<div
					class="rounded-full w-1.5 h-1.5 md:h-2.5 md:w-2.5 bg-primary-50/80 dark:bg-pimary-90/80"
				/>
				<div
					class="rounded-full w-1.5 h-1.5 md:h-2.5 md:w-2.5 bg-primary-50/80 dark:bg-pimary-90/80"
				/>
				<div
					class="rounded-full w-1.5 h-1.5 md:h-2.5 md:w-2.5 bg-primary-50/80 dark:bg-pimary-90/80"
				/>
			</div>
			<img src={srcRenaImg2} alt="website-rena-front-2" class="object-cover rounded-lg " />
		</div>
		<div
			class="absolute h-auto right-0 bottom-14 md:bottom-4 px-12 md:w-2/5  text-justify"
			style:transform={`translate3d(0,calc(100% - ${sectionScroll} * 100%), 0)`}
		>
			<T
				keyName="works-p-rj"
				defaultValue="This is the website I created for a make-up stylist. It is primarily aimed at a female audience, so the colour scheme is mainly purple, red and white. The website includes a full-screen front page and a menu bar."
			/>
		</div>
	</div>
</section>