<!-- <script context="module">
	export const prerender = true;
</script> -->
<script lang="ts">
	import { getTranslate, T } from '@tolgee/svelte';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { fly } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	// import { cvItems } from './cv_items';
	import ButtonScrollToSection from '../components/ButtonScrollToSection.svelte';
	// import SvelteSeo from 'svelte-seo';
	// import Lazy from '../components/Lazy.svelte';
	import viewport from '../components/useViewportAction';
	import FrontCert from './FrontModules/FrontCert.svelte';
	import FrontEdu from './FrontModules/FrontEdu.svelte';
	import FrontWork from './FrontModules/FrontWork.svelte';

	pageTitle.set('');

	const { t } = getTranslate();
	let profilePicture = 'img/profile-pic.webp';

	let visible = false;
	let animationspeed: number | null = null;
	let animationdelay: number = 0;
	
	afterNavigate(({ from }) => {
  visible = true;
  animationspeed = from === null ? 0.08 : 10;
  animationdelay = from === null ? 1 : 0;
});

	function typewriter(node: any, { delay = 0, speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / speed;
		// if (animationdelay !== null) {
		// 	delay = delay * animationdelay;
		// }

		return {
			delay,
			duration,
			tick: (t: number) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
	
	let animationAbout = false;
	function AboutAnimation() {
		animationAbout = true;
	}
	let scroll: any;

	let windowHeight: number = 0;
</script>

<!-- <SvelteSeo
	title="Sebastian Jans Design | Welcome"
	description="Online Portfolio for Sebastian Jans, a Product and Graphic Designer"
	keywords="Freelance product designer, online digital portfolio, front-end svelte developer, how to find someone to design a product, diseñador de productos"
	openGraph={{
		title: 'Sebastian Jans | Product and Graphic Design',
		description: 'Visit my Online Portfolio to see my works.',
		// image: 'https://sebastianjans.de/Front-image.png',
		url: 'https://sebastianjans.de/',
		type: 'website',
		site_name: 'Sebastian Jans Design'
	}}
/> -->
<!-- keywords="portfolio, product design, Industrial design, Design thinking, User experience design (UX design), User interface design (UI design), Graphic design, Branding, 3D modeling, Prototype development, Sketching, CAD design, Product innovation, Design strategy, Design research, User-centered design, Human factors engineering, Design for manufacturability, Product testing, Materials science, Sustainable design, Valencia, Germany, Deutschland, Wernau" -->

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />
<section
	class="relative w-full  md:-mt-28 min-h-screen min-h-screen-ios flex flex-col justfiy-center items-center content-center"
>
	<div class="relative pb-[calc(100vh_-_6rem)] md:pb-[calc(100vh)] flex flex-col w-full max-w-2xl my-auto mx-auto">
		{#if visible && animationspeed != null && animationdelay != null}
			<div class="absolute inset-0 h-full min-h-max flex flex-col justify-center items-center">
				<span
					style:transform={`translate3d(0, ${scroll * -0.2}px, 0)`}
					class="w-full select-none text-primary-500 font-bold font-display text-left leading-[0.2] h-auto
				text-[clamp(10vh,30vh,32vw)] md:text-[clamp(10vh,30vh,15rem)]"
					in:fly|global={{ y: animationspeed *1000 * 0.15, delay: 100 * animationdelay }}
				>
					{$t({ key: 'hello', defaultValue: 'Hello' })}
				</span>
				<span
					style:transform={`translate3d(0, ${scroll * -2}px, 0)`}
					in:fly|global={{ y: animationspeed *1000 * 0.2, delay: 750 * animationdelay }}
					class="w-full select-none font-display italic text-right leading-[0.5] h-auto
				text-[clamp(5vh,15vh,28vw)] md:text-[clamp(5vh,15vh,6rem)]"
				>
					{$t({ key: 'and', defaultValue: 'and' })}
				</span>
				<span
					style:transform={`translate3d(0, ${scroll * -0.8}px, 0)`}
					in:fly|global={{ y: animationspeed *1000 * 0.3, delay: 1100 * animationdelay }}
					class="w-full z-10 select-none text-primary-600 dark:text-primary-300 font-bold font-display italic text-center leading-[1.2] h-auto
				text-[clamp(5vh,14vh,13vw)] md:text-[clamp(5vh,14vh,7rem)]"
				>
					{$t({ key: 'welcome', defaultValue: 'welcome' })}
				</span>
				<span
					style:transform={`translate3d(0, ${scroll * -4}px, 0)`}
					in:fly|global={{ y: animationspeed *1000 * 0.3, delay: 1500 * animationdelay }}
					class="w-full select-none font-display font-bold text-left leading-[0.2] h-auto
				text-[clamp(2vh,6vh,10vw)] md:text-[clamp(2vh,6vh,5rem)]"
				>
					{$t({ key: 'to_my', defaultValue: 'to my' })}
				</span>
				<span
					style:transform={`translate3d(0, ${scroll * -2.8}px, 0)`}
					in:fly|global={{ y: animationspeed *1000 * 0.2, delay: 1750 * animationdelay }}
					class="w-full select-none italic font-normal font-display text-right leading-[0] h-auto
				text-[clamp(1rem,8vh,10vw)] md:text-[clamp(1rem,8vh,5rem)]"
				>
					{$t({ key: 'online', defaultValue: 'Online' })}
				</span>
				<span
					style:transform={`translate3d(0, ${scroll * -1}px, 0)`}
					in:fly|global={{ y: animationspeed *1000 * 0.15, delay: 1900 * animationdelay }}
					class="w-full z-10 select-none text-primary-500 dark:text-primary-600 italic font-bold font-display text-center leading-[1] h-auto
				text-[clamp(5vh,16vh,16vw)] md:text-[clamp(5vh,16vh,9rem)]"
				>
					{$t({ key: 'Portfolio', defaultValue: 'Portfolio!' })}
				</span>
				<p
					in:fly|global={{ y: 50, duration: 650, delay: 2300 * animationdelay }}
					class="pt-8 leading-tight w-full font-light font-sans text-base text-center sm:text-xl"
				>
					<span class=" font-medium">
						{$t({
							key: 'Introduction-text-b',
							defaultValue: 'My name is Sebastian Jans.'
						})}
					</span>
					<span class=" sm:hidden"><br /></span>
					{$t({
						key: 'Introduction-text',
						defaultValue: 'I am a Product Designer.'
					})}
				</p>
			</div>
		{/if}
	</div>

		<ButtonScrollToSection section={'aboutme'}>
			{$t({ key: 'about-me', defaultValue: 'About me' })}
		</ButtonScrollToSection>
</section>

<!-- on:enterViewport={AboutAnimation} -->
<section
	use:viewport
	id="aboutme"
	class="relative w-full !min-h-[100dvh] min-h-screen-ios flex flex-col justfiy-center content-center pt-4 md:pt-20"
>
	<div class=" sm:mb-auto md:my-auto mx-auto max-w-4xl my-auto">
		<h1 class="pb-4 md:pl-0 text-3xl md:text-4xl text-center md:text-left font-sans font-bold">
			{$t({ key: 'about-me', defaultValue: 'About me' })}
		</h1>
		<div class="pb-20 w-full justify-center md:pr-4 text-sm md:text-base">
			<!-- {#if animationAbout} -->
			<img
				in:fly|global={{ duration: 2000 }}
				width="200"
				height="200"
				src={profilePicture}
				alt="profile"
				class="w-1/3 md:w-1/5 h-full ml-4 mb-4 object-cover object-top float-right max-w-[12rem] max-h-[12rem] md:max-w-[16rem] md:max-h-[16rem] md:grow-0 aspect-square rounded-xl"
			/>
			<!-- {/if} -->

			<p class="md:w-full mb-2 text-justify md:text-xl">
				{$t({
					key: 'front-about-text',
					defaultValue:
						'I am 25 years old and from Germany. I studied my Bachelors in Materials Science while i was self-teaching myself all kinds of Design capabilities. After finishing my degree i decided to persue a different career path in the field of Design. '
				})}
			</p>

			<p class="md:w-full mb-2 text-justify md:text-xl">
				{$t({
					key: 'front-about-text-2',
					defaultValue:
						'I moved to Spain and started studying Design Engineering at the Universitat Politécnica de Valencia and am now working on my Master Thesis.'
				})}
			</p>
			<p class="md:w-full mb-2 text-justify md:text-xl">
				{$t({
					key: 'front-about-text-3',
					defaultValue:
						'My key strengths include a keen eye for detail, a talent for crafting clean and intuitive layouts, and the ability to bring ideas to life with beautiful and effective visuals.'
				})}
			</p>
		</div>
		<ButtonScrollToSection section={'cv_jobs'}
			>{$t({ key: 'work-experience', defaultValue: 'Work Experience' })}</ButtonScrollToSection
		>
	</div>
</section>

<FrontWork />
<FrontEdu />
<FrontCert />
