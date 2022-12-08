<script type="ts">
	import { mainClass } from '$lib/stores/mainClass';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { T, getTranslate } from '@tolgee/svelte';
	import { onMount } from 'svelte';
	import ProgressBarWorks from '../../components/progressBarWorks.svelte';
	// import viewport from '../../components/createViewportAction';
	import { fly, fade } from 'svelte/transition';
	import { draw } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { LogoItems } from './logoitems';
	import { sectionNames } from './sectionNames';

	// Tolgee t translation
	const t = getTranslate();

	// settings for Layout main class and Title
	pageTitle.set($t({ key: 'works-title', defaultValue: 'Works' }));
	mainClass.set('pt-0 pr-0 pl-0 md:pl-0');

	// Sources for images
	let srcRenaImg1 = 'img/website-rena-front-1.webp';
	let srcRenaImg2 = 'img/website-rena-front-2.webp';

	const testLogoAnimation = tweened(1, {
		duration: 300,
		easing: cubicOut
	});

	// $: (LogoItems) => shuffleArrayEntries(LogoItems);

	// function to scroll section ankerpoint into view								-- put into component?
	function scrollIntoView({ target }: { target: any }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	// scroll animations
	let scroll:any;
	let windowHeight: number;

	onMount(async () => {
		let sectionHeight = windowHeight;
		return sectionHeight;
	});

	$: () => (windowHeight = windowHeight);
	let sectionHeight: number;
	// let sectionWebsite1: number;
	$: progressSectionWebsites = ((scroll - sectionHeight) / sectionHeight) * 100;
	if (progressSectionWebsites < 0) {
		progressSectionWebsites = 0;
	}
	// section decralations
	$: sectionWebsites = sectionHeight;
	$: sectionLogos = sectionHeight * 3;
	$: sectionGraphicDesign = sectionHeight * 4;
	$: sectionProductDesign = sectionHeight * 6;
	// }

	let scrollWebsites;
	// let offsetScroll = 0.2
	// $: { scrollWebsites = scroll - sectionWebsites * offsetScroll
	// 	if (scrollWebsites < 0) {
	// 		scrollWebsites = 0;
	// 	} else if (scroll >= sectionWebsites*2) {
	// 		scrollWebsites = sectionLogos;
	// 	}
	// }
	$: scrollSection2 = Math.min(1, scroll / sectionHeight);
	$: scrollSection3 = Math.min(1, (scroll - sectionWebsites) / sectionHeight);

	// function scrollInSection(a, b = 0, c) {
	// 	let sectionScrollAnimation;
	// 	sectionScrollAnimation = Math.min(1, (a - b) / c);
	// 	console.log(sectionScrollAnimation);
	// 	return sectionScrollAnimation;
	// }

	// scroll from a to b,  b being maximum, c is offset
	$: scrollSection4 = Math.min(1, (scroll - sectionLogos) / sectionHeight);

	$: showProductTable = false;
	$: console.log(scroll, sectionProductDesign);
	// if (scroll >= sectionProductDesign * 0.95) {
	// 	showProductTable = true;
	// }
	const handleScroll = () => {
    if(scroll >= sectionProductDesign * 0.95){
			showProductTable = true;
    }
}

	let showLogoRJ: boolean = false,
		moveToRight: boolean = false;
	// https://stackoverflow.com/questions/23841494/how-do-i-use-both-math-max-and-math-min-to-bound-my-dragger
</script>

<svelte:window bind:scrollY={scroll} on:scroll={handleScroll} bind:innerHeight={windowHeight} />

{#each sectionNames as { text, start, end }}
	<ProgressBarWorks sectionTitle={text} {sectionHeight} {start} {end} />
{/each}

<!-- --------------- Section 1: Start --------------- -->
<section
	id="start"
	bind:clientHeight={sectionHeight}
	class="relative w-full pt-28 overflow-x-hidden h-screen h-screen-ios"
>
	<div class="md:pl-44 container mx-auto">
		<h2 class="text-justify mx-4 sm:ml-0 lg:w-1/2 text-base md:pb-10 pb-4 ">
			<T
				keyName="intro-works"
				defaultValue="This section serves as a showcase of some of my previous works. My volatile past has allowed me to work in different areas of Design and gain experience throughout the industry."
			/>
		</h2>
	</div>
	<div
		class="container ml-auto relative pl-4 md:pl-44 text-2xl md:text-5xl w-full
					  z-20 font-sans space-y-4"
	>
		{#each sectionNames as item, i}
			<button
				in:fly={{ x: 100, duration: 400, delay: 100 * i }}
				on:click|preventDefault={scrollIntoView}
				href="#{item.id}"
				alt={item.id}
				class="md:py-4 py-2 backdrop-blur-md  duration-300 rounded-l-lg text-left w-full pl-3 transition-all {item.color} "
			>
				<T keyName="{item.text}-works" defaultValue={item.text} />
			</button>
		{/each}
	</div>
</section>

<!-- --------------- Section 2: Renata Jans --------------- -->
<!-- use:viewport
on:enterViewport={() => (showLogoRJ = true)}
on:exitViewport={() => (showLogoRJ = false)} -->
<section
	id="websites"
	class="bg-primary-200/20 w-full relative h-screen h-screen-ios p-7  overflow-y-hidden "
>
	<h1 class="w-fit transition-all duration-75 font-sans md:pt-24 text-4xl">
		<T keyName="works-webdev" defaultValue="Webdesign" />
	</h1>
	<div class="pr-6 pl-6 md:pl-44">
		<div
			id="rena-logo"
			style:transform={`translate3d(0,calc(80% - ${scrollSection2}* 80%), 0)`}
			class="absolute top-20 my-6 h-20  w-2/3 max-w-md pr-2 bg-contain bg-no-repeat bg-center bg-origin-content bg-[url('/logos/logo-rj-l.webp')] dark:bg-[url('/logos/logo-rj-l-white.webp')]"
		/>
		<div
			style:transform={`translate3d(0,calc(400% - ${scrollSection2} * 400% ), 0)`}
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
			style:transform={`translate3d(0,calc(60% - 60 * ${scrollSection2}%), 0)`}
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
			style:transform={`translate3d(0,calc(100% - ${scrollSection2} * 100%), 0)`}
		>
			<T
				keyName="works-p-rj"
				defaultValue="This is the website I created for a make-up stylist. It is primarily aimed at a female audience, so the colour scheme is mainly purple, red and white. The website includes a full-screen front page and a menu bar."
			/>
		</div>
	</div>
</section>

<!-- --------------- Section 2: kamadob10 --------------- -->
<section
	id="kamadoB10"
	class="bg-primary-200/20 dark:bg-primary-900/10 w-full relative  h-screen h-screen-ios overflow-hidden "
>
	<div class="pr-6 pl-6 md:pl-44 max-w-full">
		<div
			id="kb10-logo"
			class="md:mt-28 mb-8 my-8 h-20  w-2/3 max-w-md pr-2 bg-contain bg-no-repeat bg-center bg-origin-content bg-[url('/logos/logo-kamadob10.webp')] dark:bg-[url('/logos/logo-kamadob10-white.webp')]"
		/>
		<div
			class="absolute h-auto text-primary-900/70 dark:text-primary-50 bottom-14 left-0 md:left-44 px-6 md:w-2/5 text-justify"
			style:transform={`translate3d(calc(-50% + 50 * ${scrollSection3}%),0, 0)`}
		>
			<T
				keyName="works-p-kamado"
				defaultValue="This website was for my former employer, who produces high-end handmade kamado grills. The objective for this website to appeal to high-end customers and highlight the USPs."
			/>
		</div>
		<div
			id="kb10-browser-phone"
			style:transform={`translate3d(calc(100% - 100 * ${scrollSection3}%),0, 0)`}
			class="shadow-primary-800/40 md:bottom-12 bottom-52  shadow-lg right-6 md:right-12 backdrop-blur-sm 
			bg-primary-200/80 dark:bg-primary-700/60 md:w-1/4 max-w-lg w-1/3 flex absolute flex-col rounded-2xl md:rounded-3xl z-20"
		>
			<!-- before:h-4 before:rounded-b-md before:w-1/2 before:bg-primary-700/70 before:backdrop-blur-xl before:absolute before:mt-1 before:left-1/2 before:-translate-x-1/2  -->
			<img
				alt="website-rena-front-1"
				class="object-cover object-top aspect-auto rounded-t-[0.75rem] md:rounded-t-[1.25rem] m-1"
				src="img/website-kamadob10-front-mobile.webp"
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
			style:transform={`translate3d(calc(-75% + 75 * ${scrollSection3}%),0, 0)`}
			class="shadow-primary-800/20 shadow-md left-6 md:left-52 backdrop-blur-sm p-1 bg-primary-200/80 dark:bg-primary-700/60 w-[80%] md:w-1/2 sm:w-2/3 max-w-4xl flex absolute flex-col rounded-lg z-10"
		>
			<div class="relative flex flex-row space-x-1 md:space-x-2 md:p-2 p-1">
				<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
				<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
				<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
			</div>
			<img
				alt="website-rena-front-1"
				class="object-contain rounded-lg"
				src="img/website-kamadob10-front.webp"
			/>
		</div>
	</div>
</section>
<section
	id="logodesign"
	class="bg-primary-300/20 w-full relative h-screen h-screen-ios p-7 overflow-hidden"
>
	<!-- on:exitViewport={() => (showLogoDesign = false)} -->
	<h1
		class="{scroll <= sectionLogos
			? ''
			: 'opacity-0'} transition-all duration-75 font-sans py-4 text-4xl"
	>
		Logo Design
	</h1>
	<p class="pb-4">
		<T
			keyName="logo-design-paragraph"
			defaultValue="These logotypes show some of my previous logo design works."
		/>
	</p>
	<div class=" h-full w-full grid grid-rows-3 gap-y-10">
		<div class="relative flex space-x-10 -translate-x-[100vw] w-full ">
			{#each LogoItems.sort(() => 0.5 - Math.random()) as logo}
				<div
					class="{logo.class} transform animate-zerotohundred bg-contain bg-no-repeat bg-center bg-origin-content rounded-lg shadow-md h-full aspect-square w-full md:w-[30vh] md:h-[30vh] p-2 md:p-8"
				/>
			{/each}
		</div>
		<!-- in:fly={{ x: 15, duration: 400, delay: 500 }} -->
		<div class="relative flex space-x-10 translate-x-[-100vw]">
			{#each LogoItems.sort(() => 0.55 - Math.random()) as logo, i}
				<div
					class="{logo.class} transform animate-hundredtozero bg-contain bg-no-repeat bg-center bg-origin-content rounded-lg shadow-md h-full aspect-square w-full md:w-[30vh] md:h-[30vh] p-2 md:p-8"
				/>
			{/each}
		</div>
		<!-- in:fly={{ x: -50, duration: 400, delay: 1000 }} -->
		<div class="relative flex space-x-10 -translate-x-[100vw]">
			{#each LogoItems.sort(() => 0.45 - Math.random()) as logo, i}
				<div
					class="{logo.class} transform animate-zerotohundred bg-contain bg-no-repeat bg-center bg-origin-content rounded-lg shadow-md h-full aspect-square w-full md:w-[30vh] md:h-[30vh] p-2 md:p-8"
				/>
			{/each}
		</div>
	</div>
</section>

<section
	id="graphicdesign"
	class="bg-primary-400/50 dark:bg-primary-500/50 w-full relative h-screen h-screen-ios overflow-hidden "
>
	<h1
		class="{scroll <= sectionGraphicDesign
			? ''
			: 'opacity-0'}  w-full p-7 mt-7 transition-all duration-75 font-sans py-4 text-4xl"
	>
		Graphic Design
	</h1>
	<!-- {#if showGraphicDesign} -->
	<div
		class="absolute h-auto top-28 right-0 px-6 md:w-2/5 max-w-2xl text-justify"
		style:transform={`translate3d(0,calc(100% - ${scrollSection4} * 100%), 0)`}
	>
		<T
			keyName="works-p-fachschaft"
			defaultValue="This flyer was made for my student union in order to attract more people into the world of materials science. The University branding guidelines "
		/>
	</div>
	<div
		style:transform={`translate3d(calc(-100% + ${scrollSection4} * 100%),calc(75% - ${scrollSection4} * 75%), 0)`}
		class="bottom-[35%] md:bottom-[30%] w-3/4 sm:w-2/3 sm:bottom-[25%] md:w-[60%] md:left-16 absolute"
	>
		<img
			alt="graphic-design-shirts"
			class="object-contain rounded-lg"
			src="/graphicdesign/graphic-shirts.webp"
		/>
	</div>
	<div class=" w-full ml-auto h-full md:w-3/4  relative">
		<div
			style:transform={`translate3d(calc(-100% + ${scrollSection4} * 100%),0, 0)`}
			class="bottom-[25%] w-1/3 max-w-xs max-h-md md:w-[30%] md:right-[10%] right-[10%] absolute z-20"
		>
			<img
				alt="graphic-design-outerside"
				class="object-contain rounded-lg"
				src="/graphicdesign/graphic-outerside.webp"
			/>
		</div>
		<div
			style:transform={`translate3d(calc(100% - ${scrollSection4} * 100%),0, 0)`}
			class="bottom-[24%] w-1/2 max-w-lg md:left-[10%] left-[6%] absolute z-10"
		>
			<img
				alt="website-rena-front-1"
				class="object-contain rounded-lg"
				src="/graphicdesign/graphic-innerside.webp"
			/>
		</div>

		<div
			style:transform={`translate3d(0,calc(-20% + ${scrollSection4} * 20%), 0)`}
			class="-bottom-[2%] w-full right-[3%] absolute"
		>
			<img alt="website-rena-front-1" src="/graphicdesign/table.svg" />
		</div>
	</div>
	<!-- {/if} -->
</section>
<section
	id="graphicdesign2"
	class="bg-primary-400/50 dark:bg-primary-500/50 w-full relative h-screen h-screen-ios overflow-hidden "
>
	<div class="md:ml-52 ml-6 mr-6 flex h-full md:flex-row flex-col items-center justify-center">
		<div class="w-full md:w-1/2">
			<img
				alt="graphic-design-shirts"
				class="object-contain rounded-lg"
				src="/graphicdesign/especimen-tipografico.webp"
			/>
		</div>

		<div
			class=" h-auto right-0 bottom-[10%] px-12 w-full md:w-1/2  text-justify"
			style:transform={`translate3d(0,calc(100% - ${scrollSection2} * 100%), 0)`}
		>
			<T
				keyName="works-p-especimen"
				defaultValue="This is a type specimen i made as a project for my university. The idea was to display a font type in a flattering way, in order to capture the essence of the font."
			/>
		</div>
	</div>
</section>
<section
	id="productdesign"
	class="bg-primary-500/50 dark:bg-primary-400/50 w-full relative h-screen h-screen-ios p-7 overflow-hidden "
>
	<h1
		class="{scroll <= sectionProductDesign
			? ''
			: 'opacity-0'} transition-all duration-75 font-sans py-4 text-4xl"
	>
		Product Design
	</h1>

	<div class=" md:pl-44 grid w-[calc(100%_*_2)] sm:w-full grid-cols-2 gap-x-10 md:gap-y-10">
		{#if showProductTable}
			<svg
				on:click={() => (moveToRight = !moveToRight)}
				class="{moveToRight
					? '-translate-x-full opacity-0 sm:opacity-100 sm:translate-x-0'
					: 'translate-x-0 opacity-100'} hover:text-primary-600 sm:hover:text-primary-900 sm:dark:hover:text-primary-50 duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vw] max-h-[50vh]"
				viewBox="0 0 991 550"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-1185,-2184)">
					<g transform="matrix(1.81223,0,0,1.81223,686.79,1690.34)">
						<g transform="matrix(1,0,0,1,77.3633,0)">
							<g transform="matrix(1,0,0,1,0,7.3)">
								<path
									in:draw={{ duration: 800 }}
									d="M708.7,297.4L510.2,297.4L510.2,290.3L708.7,290.3L708.7,297.4Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(0.744053,0,0,1.00957,104.327,-39.6225)">
								<rect
									x="147.4"
									y="341.06"
									width="121.9"
									height="218.54"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.3px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,234.1)">
								<path
									in:draw={{ duration: 800, delay: 200 }}
									d="M703,290.3L532.9,290.3L532.9,70.6L703,70.6L703,290.3Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,7.3)">
								<path
									in:draw={{ duration: 800, delay: 400 }}
									d="M510.2,297.4L198.4,297.4L198.4,290.3L510.2,290.3L510.2,297.4Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1.00423,0,233.801)">
								<path
									in:draw={{ duration: 800, delay: 600 }}
									d="M214,290.3L206.9,290.3L206.9,70.6L214,70.6L214,290.3Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1.00423,0,233.801)">
								<path
									in:draw={{ duration: 800, delay: 800 }}
									d="M311.8,290.3L304.7,290.3L304.7,70.6L311.8,70.6L311.8,290.3Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,149.9)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M304.7,225.1L214,225.1L214,220L304.7,220L304.7,225.1Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,0.858041,0,239.038)">
								<path
									in:draw={{ duration: 800, delay: 1200 }}
									d="M694.5,283.2L689.4,283.2L689.4,84.8L694.5,84.8L694.5,283.2Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.23px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,290.5)">
								<path
									in:draw={{ duration: 800, delay: 1400 }}
									d="M304.7,154.8L214,154.8L214,149.7L304.7,149.7L304.7,154.8Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,431.1)">
								<path
									in:draw={{ duration: 800, delay: 1400 }}
									d="M304.7,84.5L214,84.5L214,79.4L304.7,79.4L304.7,84.5Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(4.40447e-17,0.719305,-0.712335,4.36179e-17,931.523,369.674)">
								<rect
									x="148.8"
									y="339.9"
									width="7.1"
									height="219.7"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.61px;"
								/>
							</g>
							<g transform="matrix(4.40447e-17,0.719305,-0.712335,4.36179e-17,931.523,241.001)">
								<rect
									x="148.8"
									y="339.9"
									width="7.1"
									height="219.7"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.61px;"
								/>
							</g>
							<g transform="matrix(1.46625e-15,23.9456,-0.712335,4.36179e-17,931.523,-3251.31)">
								<rect
									x="148.8"
									y="339.9"
									width="7.1"
									height="219.7"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.07px;"
								/>
							</g>
						</g>
					</g>
				</g>
			</svg>

			<svg
				on:click={() => (moveToRight = !moveToRight)}
				class="{moveToRight
					? '-translate-x-full sm:translate-x-0'
					: 'translate-x-0 opacity-0 sm:opacity-100'}  hover:text-primary-600 sm:hover:text-primary-900 sm:dark:hover:text-primary-50 duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vh] max-h-[60vh]"
				viewBox="0 0 991 550"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-323,-2186)">
					<g transform="matrix(0.920272,0,0,0.920272,-343.331,1500.24)">
						<g transform="matrix(1.97061,0,0,1.97061,27.2107,738.467)">
							<g transform="matrix(1,0,0,1,0,-531.3)">
								<path
									in:draw={{ duration: 800 }}
									d="M779.5,566.7L354.3,566.7L354.3,559.6L779.5,559.6L779.5,566.7Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,-304.5)">
								<path
									in:draw={{ duration: 800, delay: 200 }}
									d="M375.6,559.6L368.5,559.6L368.5,339.9L375.6,339.9L375.6,559.6Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,-2.44427e-11,-304.5)">
								<path
									in:draw={{ duration: 800, delay: 400 }}
									d="M765.4,559.6L758.3,559.6L758.3,339.9L765.4,339.9L765.4,559.6Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1.00048,0,0,1,-0.304768,-337.1)">
								<rect
									x="375.6"
									y="381"
									width="382.7"
									height="170.1"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
						</g>
					</g>
				</g>
			</svg>
			<svg
				on:click={() => (moveToRight = !moveToRight)}
				class="{moveToRight
					? '-rotate-90 -translate-x-[6%] translate-y-[7%] sm:translate-x-0 sm:translate-y-0 sm:rotate-0'
					: ' '} scale-[99%] hover:text-primary-600 sm:hover:text-primary-900 sm:dark:hover:text-primary-50 duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vh]"
				viewBox="0 0 991 805"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-1184,-1365)">
					<g transform="matrix(0.870671,0,0,0.870671,208.935,-642.446)">
						<g transform="matrix(0.5,0,0,0.5,974.409,1634.44)">
							<path
								in:draw={{ duration: 800 }}
								d="M295.276,1417.32L2421.26,1417.32L2421.26,3188.98C2130.92,3188.99 1746.98,3183.7 1746.98,3183.7C1390.27,3183.7 1750.8,2350.88 1591,2127.64C1388.75,1845.08 918.738,2155.14 410.678,2149.21C346.823,2148.55 295.405,2096.59 295.405,2032.73C295.276,1830.24 295.276,1417.32 295.276,1417.32Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4.79px;"
							/>
						</g>
						<g transform="matrix(2.08142,0,0,41.1165,709.866,-6658.38)">
							<path
								in:draw={{ duration: 800, delay: 200 }}
								d="M304.7,225.1L214,225.1L214,220L304.7,220L304.7,225.1Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.08px;"
							/>
						</g>
						<g transform="matrix(2.08142,0,0,1.21366,709.866,2257.41)">
							<path
								in:draw={{ duration: 800, delay: 400 }}
								d="M214,290.3L206.9,290.3L206.9,70.6L214,70.6L214,290.3Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.4px;"
							/>
						</g>
						<g transform="matrix(2.08142,0,0,1.21366,709.866,2257.41)">
							<path
								in:draw={{ duration: 800, delay: 600 }}
								d="M311.8,290.3L304.7,290.3L304.7,70.6L311.8,70.6L311.8,290.3Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.4px;"
							/>
						</g>
						<g transform="matrix(2.08142,0,0,4.07899,709.866,2041.35)">
							<path
								in:draw={{ duration: 800, delay: 800 }}
								d="M694.5,283.2L689.4,283.2L689.4,84.8L694.5,84.8L694.5,283.2Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.74px;"
							/>
						</g>
						<g transform="matrix(1.18404e-16,1.93368,-0.859283,5.26159e-17,1636.14,2085.79)">
							<rect
								in:fade={{ duration: 800 }}
								x="148.8"
								y="339.9"
								width="7.1"
								height="219.7"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.6px;"
							/>
						</g>
						<g transform="matrix(1.18404e-16,1.93368,-1.61151,9.86766e-17,2720.85,2085.79)">
							<rect
								in:fade={{ duration: 800, delay: 200 }}
								x="148.8"
								y="339.9"
								width="7.1"
								height="219.7"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.34px;"
							/>
						</g>
						<g transform="matrix(1.18404e-16,1.93368,-1.61151,9.86766e-17,2720.85,2908.79)">
							<rect
								in:fade={{ duration: 800, delay: 400 }}
								x="148.8"
								y="339.9"
								width="7.1"
								height="219.7"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.34px;"
							/>
						</g>
						<g transform="matrix(1.18404e-16,1.93368,-1.48267,9.07871e-17,2648.75,2836)">
							<rect
								in:fade={{ duration: 800, delay: 600 }}
								x="148.8"
								y="339.9"
								width="7.1"
								height="219.7"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.39px;"
							/>
						</g>
						<g transform="matrix(5.09307e-16,8.31762,-1.48267,9.07871e-17,2648.75,1899.8)">
							<rect
								in:draw={{ duration: 800, delay: 800 }}
								x="148.8"
								y="339.9"
								width="7.1"
								height="219.7"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.4px;"
							/>
						</g>
						<g transform="matrix(5.09307e-16,8.31762,-1.48267,9.07871e-17,2648.75,1899.8)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="148.8"
								y="339.9"
								width="7.1"
								height="219.7"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.4px;"
							/>
						</g>
					</g>
				</g>
			</svg>
			<p
				class="{moveToRight
					? '-translate-x-full sm:translate-x-0 w-1/2 sm:w-full opacity-100'
					: ' opacity-0 sm:opacity-100 w-1/2 sm:w-full'} pr-6 self-end sm:self-start transform transition-all duration-500 relative"
			>
				This table was one of my first projects. I designed it myself and customized it to suit all
				my needs. With the organic cutout in the middle everything is reachable while maximizing
				space.
			</p>
		{/if}
	</div>
</section>
<section
	id="productdesign"
	class="bg-primary-500/50 dark:bg-primary-400/50 w-full relative h-screen h-screen-ios p-7 overflow-hidden "
>
	<h1
		class="{scroll <= sectionProductDesign
			? ''
			: 'opacity-0'} transition-all duration-75 font-sans py-4 text-4xl"
	>
		Product Design
	</h1>
	{#if scroll >= sectionProductDesign * 0.95 + sectionHeight}
		<div class=" md:pl-44 grid grid-cols-4 gap-4">
			<svg
				on:click={() => (moveToRight = !moveToRight)}
				class="{moveToRight
					? '-rotate-90 -translate-x-[6%] translate-y-[7%] sm:translate-x-0 sm:translate-y-0 sm:rotate-0'
					: ' '}  hover:text-primary-600 sm:hover:text-primary-900 sm:dark:hover:text-primary-50 duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vh]"
				viewBox="0 0 386 350"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xml:space="preserve"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-1658,-2299)">
					<g id="Side" transform="matrix(1.20447,0,0,1.20001,549.724,-225.347)">
						<g transform="matrix(-8.17676e-17,0.330647,0.342105,-1.48987e-16,398.529,2012.03)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:5.15px;"
							/>
						</g>
						<g transform="matrix(-8.17676e-17,0.330647,0.342105,-1.48987e-16,96.1666,2012.03)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:5.15px;"
							/>
						</g>
						<g transform="matrix(0.0747331,1.32396e-17,-2.09479e-17,0.989788,919.116,-278.871)">
							<path
								in:draw={{ duration: 800, delay: 400 }}
								d="M4074.58,2413.27L234.139,2413.17L234.139,2458.25L4074.58,2458.3L4074.58,2413.27Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.47px;"
							/>
						</g>
						<g transform="matrix(0.0827292,1.39397e-17,-2.31892e-17,1.04213,901.89,-185.486)">
							<path
								in:draw={{ duration: 800, delay: 400 }}
								d="M4074.58,2413.27L234.139,2413.17L234.139,2458.25L4074.58,2458.3L4074.58,2413.27Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.35px;"
							/>
						</g>
						<g transform="matrix(1,0,0,1,47.2441,0)">
							<g transform="matrix(1,0,0,0.9,44.8819,172.441)">
								<path
									in:fade={{ duration: 800, delay: 400 }}
									d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
								/>
							</g>
							<g transform="matrix(1,0,0,0.428571,49.6063,1328.57)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="848.031"
									y="2444.88"
									width="4.724"
									height="16.535"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
						</g>
						<g transform="matrix(1,0,0,1,314.173,0)">
							<g transform="matrix(1,0,0,0.9,44.8819,172.441)">
								<path
									in:fade={{ duration: 800, delay: 400 }}
									d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
								/>
							</g>
							<g transform="matrix(1,0,0,0.428571,49.6063,1328.57)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="848.031"
									y="2444.88"
									width="4.724"
									height="16.535"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
						</g>
						<rect
							in:fade={{ duration: 800, delay: 1000 }}
							x="921.26"
							y="2109.66"
							width="317.717"
							height="266.72"
							style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.73px;"
						/>
						<g transform="matrix(1.05541,0,0,1.05714,-80.9614,-153.071)">
							<circle
								cx="1105.51"
								cy="2265.35"
								r="82.677"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.64px;"
							/>
						</g>
						<g transform="matrix(0.996296,0,0,1,3.41207,0)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="921.26"
								y="2104.72"
								width="318.898"
								height="4.933"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
					</g>
				</g>
			</svg>
			<svg
				on:click={() => (moveToRight = !moveToRight)}
				class="{moveToRight
					? '-rotate-90 -translate-x-[6%] translate-y-[7%] sm:translate-x-0 sm:translate-y-0 sm:rotate-0'
					: ' '} scale-[90%] col-span-2 hover:text-primary-600 sm:hover:text-primary-900 sm:dark:hover:text-primary-50 duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vh]"
				width="100%"
				height="100%"
				viewBox="0 0 712 350"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xml:space="preserve"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-878,-2299)">
					<g id="front" transform="matrix(1.20001,0,0,1.20001,525.48,-1009.13)">
						<g transform="matrix(1,0,0,1,1.13687e-13,572.835)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2185.04"
								width="590.551"
								height="271.654"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
						<g transform="matrix(0.88968,0,0,1.05263,32.5749,443.535)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.78px;"
							/>
						</g>
						<g transform="matrix(0.88968,0,0,1.10526,32.5749,92.1881)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.73px;"
							/>
						</g>
						<g transform="matrix(0.0735587,0,0,3.89474,815.28,-6585.89)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.63px;"
							/>
						</g>
						<g transform="matrix(1,0,0,1.02778,227,510.761)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="610"
								y="2234.65"
								width="3.974"
								height="170.079"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.71px;"
							/>
						</g>
						<g transform="matrix(0.0676157,0,0,3.89474,275.31,-6585.89)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.63px;"
							/>
						</g>
						<g transform="matrix(0.00590201,0,0,3.89474,338.415,-6585.89)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.63px;"
							/>
						</g>
						<g transform="matrix(0.0720047,0,0,3.89474,540.943,-6585.89)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.63px;"
							/>
						</g>
						<g transform="matrix(0.99292,0,0,1,1.63507,572.835)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="344.882"
								y="2404.72"
								width="219.685"
								height="4.724"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
						<g transform="matrix(2.68817,0,0,1,-631.826,353.15)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="344.882"
								y="2404.72"
								width="219.685"
								height="4.724"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.86px;"
							/>
						</g>
						<g transform="matrix(1.0333,0,0,1,253.634,572.835)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="344.882"
								y="2404.72"
								width="219.685"
								height="4.724"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.71px;"
							/>
						</g>
						<g transform="matrix(1,0,0,1.02778,-47.7953,510.761)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="610"
								y="2234.65"
								width="3.974"
								height="170.079"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.71px;"
							/>
						</g>
						<g transform="matrix(1,0,0,1,1.13687e-13,572.835)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="610"
								y="2234.65"
								width="3.974"
								height="170.079"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
						<g transform="matrix(1,0,0,0.9,4.72441,825.591)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
							/>
						</g>
						<g transform="matrix(1,0,0,0.428571,9.44882,1981.72)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="848.031"
								y="2444.88"
								width="4.724"
								height="16.535"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.26px;"
							/>
						</g>
						<g transform="matrix(1,0,0,0.9,-533.858,825.591)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
							/>
						</g>
						<g transform="matrix(1,0,0,0.428571,-529.134,1981.72)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="848.031"
								y="2444.88"
								width="4.724"
								height="16.535"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.26px;"
							/>
						</g>
					</g>
				</g>
			</svg>
			<svg
				on:click={() => (moveToRight = !moveToRight)}
				class="{moveToRight
					? '-rotate-90 -translate-x-[6%] translate-y-[7%] sm:translate-x-0 sm:translate-y-0 sm:rotate-0'
					: ' '} hover:text-primary-600 sm:hover:text-primary-900 sm:dark:hover:text-primary-50 duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vh]"
				viewBox="0 0 385 350"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xml:space="preserve"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-425,-2299)">
					<g id="Side" transform="matrix(-1.20447,0,0,1.20001,1918.57,-225.347)">
						<g transform="matrix(79.9489,0,0,1.56944,-47847.6,-1397.7)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="610"
								y="2234.65"
								width="3.974"
								height="170.079"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.02px;"
							/>
						</g>
						<g transform="matrix(0.498148,0,0,0.957702,462.336,89.0267)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="921.26"
								y="2104.72"
								width="318.898"
								height="4.933"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
						<g transform="matrix(0.498148,0,0,0.957702,621.194,89.0267)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="921.26"
								y="2104.72"
								width="318.898"
								height="4.933"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
						<g transform="matrix(0.5,0,0,1.00078,619.488,-1.85909)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="921.26"
								y="2109.66"
								width="317.717"
								height="266.72"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
						<g transform="matrix(-6.27733e-17,0.263345,0.342105,-9.88622e-17,398.529,2076.57)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:5.67px;"
							/>
						</g>
						<g transform="matrix(-6.2738e-17,0.26322,0.342105,-9.87691e-17,255.025,2076.69)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:5.67px;"
							/>
						</g>
						<g transform="matrix(-6.37899e-17,0.26366,0.31462,-1.06911e-16,307.194,2076.27)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:5.97px;"
							/>
						</g>
						<g transform="matrix(0.0333833,1.33015e-17,-9.35743e-18,0.994412,1087.6,-290.237)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M4074.58,2413.17L234.139,2413.17L234.139,2458.25L4074.58,2458.3L4074.58,2413.17Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.47px;"
							/>
						</g>
						<g transform="matrix(0.00399807,1.33015e-17,-1.12067e-18,0.994412,1222.69,-290.237)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="234.139"
								y="2413.17"
								width="3840.44"
								height="45.134"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.47px;"
							/>
						</g>
						<g transform="matrix(0.00399807,1.33015e-17,-1.12067e-18,0.994412,1079.13,-290.237)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="234.139"
								y="2413.17"
								width="3840.44"
								height="45.134"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.47px;"
							/>
						</g>
						<g transform="matrix(0.0827292,1.40016e-17,-2.31892e-17,1.04675,901.89,-196.851)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M4074.58,2413.27L234.139,2413.17L234.139,2458.25L4074.58,2458.3L4074.58,2413.27Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.34px;"
							/>
						</g>
						<g transform="matrix(0.0413498,1.32396e-17,-1.15905e-17,0.989788,911.578,-279.08)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M4074.58,2413.17L234.139,2413.17L234.139,2458.25L4074.58,2458.3L4074.58,2413.17Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.48px;"
							/>
						</g>
						<g transform="matrix(0.0413646,1.39397e-17,-1.15946e-17,1.04213,1070.43,-185.486)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M4074.58,2412.97L234.139,2412.97L234.139,2458.25L4074.58,2458.3L4074.58,2412.97Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.35px;"
							/>
						</g>
						<g transform="matrix(1,0,0,1,47.2441,0)">
							<g transform="matrix(1,0,0,0.9,44.8819,172.441)">
								<path
									in:fade={{ duration: 800, delay: 1000 }}
									d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
								/>
							</g>
							<g transform="matrix(1,0,0,0.428571,49.6063,1328.57)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="848.031"
									y="2444.88"
									width="4.724"
									height="16.535"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
						</g>
						<g transform="matrix(1,0,0,1,314.173,0)">
							<g transform="matrix(1,0,0,0.9,44.8819,172.441)">
								<path
									in:fade={{ duration: 800, delay: 1000 }}
									d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
								/>
							</g>
							<g transform="matrix(1,0,0,0.428571,49.6063,1328.57)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="848.031"
									y="2444.88"
									width="4.724"
									height="16.535"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
						</g>
						<g transform="matrix(1,0,0,1,206.247,0)">
							<g transform="matrix(1,0,0,0.9,44.8819,172.441)">
								<path
									in:fade={{ duration: 800, delay: 1000 }}
									d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
								/>
							</g>
							<g transform="matrix(1,0,0,0.428571,49.6063,1328.57)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="848.031"
									y="2444.88"
									width="4.724"
									height="16.535"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
						</g>
						<g transform="matrix(-4.75768e-17,-0.779877,-0.331645,2.03829e-17,1660.1,3331.31)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="1285.04"
								y="1960.63"
								width="224.409"
								height="42.578"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.9px;"
							/>
						</g>
						<g transform="matrix(-4.35543e-17,-0.713939,-0.996296,6.12323e-17,3019.72,3230.07)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="1268.5"
								y="2003.15"
								width="238.583"
								height="14.173"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
						<g transform="matrix(-4.75932e-17,-0.780145,-0.304008,1.86843e-17,1530.25,3331.65)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="1285.04"
								y="1960.63"
								width="224.409"
								height="42.578"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
						<g transform="matrix(-4.63051e-17,-0.75903,-0.331645,2.03829e-17,1598.56,3299.79)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="1285.04"
								y="1960.63"
								width="224.409"
								height="42.578"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
						<g transform="matrix(-0.996163,0,0,1,2121.39,-108.661)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="901.238"
								y="2433.07"
								width="128.683"
								height="4.724"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
						<g transform="matrix(-0.436187,0,0,1,1459.11,-108.661)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="901.238"
								y="2433.07"
								width="128.683"
								height="4.724"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;stroke-miterlimit:1.5;"
							/>
						</g>
						<g transform="matrix(-0.478251,0,0,1,1426.77,-108.661)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="901.238"
								y="2433.07"
								width="128.683"
								height="4.724"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;stroke-miterlimit:1.5;"
							/>
						</g>
					</g>
				</g>
			</svg>
			<img
				in:fly={{ y: -50, delay: 300, duration: 500 }}
				src="/productdesign/bench.webp"
				class="md:my-8 my-4 inline h-auto w-2/3 max-w-md pr-2 align-middle"
				alt="logo-rj"
			/>
			<svg
				on:click={() => (moveToRight = !moveToRight)}
				class="{moveToRight
					? '-rotate-90 -translate-x-[6%] translate-y-[7%] sm:translate-x-0 sm:translate-y-0 sm:rotate-0'
					: ' '} col-span-2 scale-[90%] hover:text-primary-600 sm:hover:text-primary-900 sm:dark:hover:text-primary-50 duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vh]"
				viewBox="0 0 712 386"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xml:space="preserve"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-878,-1727)">
					<g id="Top" transform="matrix(1.20001,0,0,1.20001,525.48,-376.256)">
						<g transform="matrix(1,0,0,1,0,-112.205)">
							<g transform="matrix(1,0,0,1,0,-609.449)">
								<circle
									in:fade={{ duration: 800, delay: 1000 }}
									cx="321.26"
									cy="2499.21"
									r="14.173"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,-1.54898e-12,-609.449)">
								<circle
									in:fade={{ duration: 800, delay: 1000 }}
									cx="321.26"
									cy="2499.21"
									r="2.362"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
						</g>
						<g transform="matrix(1,0,0,1,540.945,-112.205)">
							<g transform="matrix(1,0,0,1,0,-609.449)">
								<circle
									in:fade={{ duration: 800, delay: 1000 }}
									cx="321.26"
									cy="2499.21"
									r="14.173"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,-1.54898e-12,-609.449)">
								<circle
									in:fade={{ duration: 800, delay: 1000 }}
									cx="321.26"
									cy="2499.21"
									r="2.362"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
						</g>
						<g transform="matrix(1,0,0,1,0,-112.205)">
							<g transform="matrix(1,0,0,1,0,-491.339)">
								<circle
									in:fade={{ duration: 800, delay: 1000 }}
									cx="321.26"
									cy="2499.21"
									r="14.173"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,-1.54898e-12,-491.339)">
								<circle
									in:fade={{ duration: 800, delay: 1000 }}
									cx="321.26"
									cy="2499.21"
									r="2.362"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
						</g>
						<g transform="matrix(1,0,0,1,540.945,34.8289)">
							<g transform="matrix(1,0,0,1,0,-491.339)">
								<circle
									in:fade={{ duration: 800, delay: 1000 }}
									cx="321.26"
									cy="2499.21"
									r="14.173"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,-1.54898e-12,-491.339)">
								<circle
									in:fade={{ duration: 800, delay: 1000 }}
									cx="321.26"
									cy="2499.21"
									r="2.362"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
						</g>
						<g id="Top1" transform="matrix(1,0,0,1,-8.52651e-14,-572.835)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M295.276,2326.77L295.276,2486.22L885.827,2645.67L885.827,2326.77L885.827,2645.67L885.827,2326.77L295.276,2326.77L885.827,2326.77"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
						<g transform="matrix(0.0721866,0.0193423,-0.0885434,0.330448,758.414,1167.57)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
							/>
						</g>
						<g transform="matrix(0.0721866,0.0193423,-0.0885434,0.330448,758.414,1167.57)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M958.989,2413.12L296.46,2412.78L296.46,2457.66L958.989,2458L958.989,2413.12Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
							/>
						</g>
						<g transform="matrix(-0.0735177,4.42724e-18,-2.12886e-17,-0.342105,365.783,2594.38)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
							/>
						</g>
						<g transform="matrix(-0.0735177,4.42724e-18,-2.12886e-17,-0.342105,907.535,2594.38)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
							/>
						</g>
						<g transform="matrix(-0.0779917,4.97514e-18,-2.00345e-17,-0.342105,637.003,2594.38)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="2411.81"
								width="663.78"
								height="44.882"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:7px;"
							/>
						</g>
						<g transform="matrix(1,0,0,1,0,-112.205)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M295.276,2025.59L885.827,2185.04L885.827,2169.08L295.276,2009.63L295.276,2025.59Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
							/>
						</g>
						<g transform="matrix(0.996016,0,0,0.928571,1.1764,21.0911)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="295.276"
								y="1866.14"
								width="592.913"
								height="16.535"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.8px;"
							/>
						</g>
						<g transform="matrix(0.0721866,0.0193423,-0.0885434,0.330448,491.485,1095.4)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M917.972,2413.22L241.696,2412.93L296.869,2457.99L918.936,2458.25L917.972,2413.22Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
							/>
						</g>
						<g transform="matrix(0,-0.0747331,-0.342105,0,1136.26,1919.07)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M2003.25,2413.22L233.896,2413.17L289.612,2458.25L2004.22,2458.25L2003.25,2413.22Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
							/>
						</g>
						<g transform="matrix(0,-0.0747331,-0.342105,0,1711.39,2073.8)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M4074.58,2413.27L226.42,2413.17L282.135,2458.25L4074.58,2458.3L4074.58,2413.27Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
							/>
						</g>
						<g transform="matrix(-0.0727463,-0.0194923,0.0885434,-0.330448,689.753,2874.71)">
							<path
								in:draw={{ duration: 800, delay: 1000 }}
								d="M912.504,2412.7L241.056,2412.41L296.229,2457.47L913.083,2457.73L912.504,2412.7Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
							/>
						</g>
					</g>
				</g>
			</svg>
		</div>
	{/if}
</section>

<section class="w-full  h-screen bg-primary-500/70" />
