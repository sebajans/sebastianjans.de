<script type="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';

	let scroll: number = 0;
	let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 0, windowHeight);

	let srcRenaImg1 = 'img/website-rena-front-1.webp';
	let srcRenaImg2 = 'img/website-rena-front-2.webp';
	let srcRenaLogo = '/logos/logo-rj-l.webp';
	let srcRenaLogoDark = '/logos/logo-rj-l-white.webp';
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="websites"
	class="bg-primary-200/50 md:pl-44 dark:bg-primary-700/50 w-full flex flex-col relative h-screen h-screen-ios overflow-y-hidden justify-center items-center"
>
	<div class="w-full h-auto flex flex-row mt-4 md:mt-24">
		<div class="w-[calc(100vw_-_56rem)] h-auto" />
		<div class="max-w-4xl w-full">
			<h2
				class="bg-primary-200 dark:bg-primary-700 md:text-right w-fit ml-auto text-left pr-8 pl-3 rounded-l-md font-sans py-3 text-4xl "
			>
				<T keyName="works-webdev" defaultValue="Webdesign" />
			</h2>
		</div>
		<div class="w-[calc(100vw_-_56rem)] h-auto bg-primary-200 dark:bg-primary-700" />
	</div>

	<div
		class="relative w-full h-[calc(100vh_-_5.5rem)] flex justify-center items-center pr-6 pl-6 max-w-4xl"
	>
		<div
			id="rena-logo"
			style:transform={`translate3d(0,calc(80% - ${sectionScroll}* 80%), 0)`}
			class="absolute left-4 md:left-0 top-0 md:top-0 h-20 w-1/3 max-w-md bg-contain bg-no-repeat bg-center bg-origin-content bg-[url('{srcRenaLogo}')] dark:bg-[url('{srcRenaLogoDark}')]"
		/>

		<div
			id="rj-browser-window"
			style:transform={`translate3d(0,calc(400% - ${sectionScroll} * 400% ), 0)`}
			class=" shadow-xl right-4 md:right-4 top-16 md:top-4 backdrop-blur-sm p-0.5 md:p-1 bg-primary-300/80 dark:bg-primary-700/60 w-2/3 md:w-3/5 max-w-2xl flex absolute flex-col rounded-md md:rounded-lg z-10"
		>
			<div class="relative flex flex-row space-x-1 md:space-x-2 md:p-2 p-1">
				{#each Array(3) as _}
					<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
				{/each}
			</div>
			<img
				alt="website-rena-front-1"
				class="object-contain rounded-md md:rounded-lg"
				src={srcRenaImg1}
			/>
		</div>
		<div
			style:transform={`translate3d(0,calc(60% - 60 * ${sectionScroll}%), 0)`}
			class="shadow-primary-900/50 left-4 md:left-0 top-40 md:top-36 shadow-lg backdrop-blur-sm p-0.5 md:p-0.5 bg-primary-400/50 max-w-xl dark:bg-primary-800/50 w-1/2 md:w-2/4 flex absolute flex-col rounded-lg"
		>
			<div class="relative flex flex-row space-x-1 md:space-x-2 md:p-2 p-1">
				{#each Array(3) as _}
					<div
						class="rounded-full w-1.5 h-1.5 md:h-2.5 md:w-2.5 bg-primary-50/80 dark:bg-pimary-90/80"
					/>
				{/each}
			</div>
			<img src={srcRenaImg2} alt="website-rena-front-2" class="object-cover rounded-lg " />
		</div>
		<p
			class="absolute h-auto right-0 pl-4 bottom-14 md:bottom-4 pr-4 md:w-1/2  text-justify"
			style:transform={`translate3d(0,calc(400% - ${sectionScroll} * 400%), 0)`}
		>
			<T
				keyName="works-p-rj"
				defaultValue="This is the website I created for a make-up stylist. It is primarily aimed at a female audience, so the colour scheme is mainly purple, red and white. The website includes a full-screen front page and a menu bar."
			/>
		</p>
	</div>
</section>
