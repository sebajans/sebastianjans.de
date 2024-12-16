<script lang="ts">
	import { getTranslate, T } from '@tolgee/svelte';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { fly } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import ButtonScrollToSection from '$components/ButtonScrollToSection.svelte';
	// import SvelteSeo from 'svelte-seo';
	import FrontCert from './FrontModules/FrontCert.svelte';
	import FrontEdu from './FrontModules/FrontEdu.svelte';
	import FrontWork from './FrontModules/FrontWork.svelte';
	import FrontAbout from './FrontModules/FrontAbout.svelte';
	import { onMount } from 'svelte';
	import Hero from './Hero.svelte';
	
	pageTitle.set('');
	const { t } = getTranslate();

	let visible = $state(false);
	let animationspeed: number | null = $state(0.08)
	let animationdelay: number = $state(1);
	
	afterNavigate(({ from }) => {
		visible = true;
		animationspeed = from === null ? 0.08 : 10;
		animationdelay = from === null ? 1 : 0;
	});

	onMount(() => {
		visible = true;
		// animationspeed = 0.08
		// animationdelay = 1
	})
	
	let scroll: any = $state();
	let windowHeight: number = $state(0);
</script>

<svelte:head>
<title>Sebastian Jans Design | Welcome</title>
</svelte:head>

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

<!-- https://stackoverflow.com/questions/58133329/how-to-use-css-backdrop-filter-on-text -->

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />
<Hero />
<!-- <section
	class="px-4 md:px-0 relative w-full -mt-24 sm:-mt-28 min-h-[100svh] flex flex-col justfiy-center items-center content-center"
> -->
	<!-- <div class="relative pb-[100svh] md:pb-[calc(100vh)] flex flex-col w-full max-w-2xl my-auto mx-auto">
		{#if visible && animationspeed != null && animationdelay != null}
			<div class="absolute inset-0 h-full min-h-max flex flex-col justify-center items-center">							
				<span 
							style="filter: Opacity({`calc(100% - ${scroll * 0.15}%)`})"
					style:transform={`translate3d(0, ${scroll * -0.2}px, 0)`}
					class="text-backdrop-blur text-primary-800 dark:text-primary-300 welcomeText z-[11] h-fit font-bold  text-left 
					text-[clamp(10vh,30vh,32vw)] md:text-[clamp(10vh,30vh,15rem)]"
					in:fly|global={{ y: animationspeed *1000 * 0.15, delay: 100 * animationdelay }}
				>
					{$t({ key: 'hello', defaultValue: 'Hello' })}
				</span>
				<span
				style="filter: Opacity({`calc(100% - ${scroll * 0.15}%)`})"
					style:transform={`translate3d(0, ${scroll * -2}px, 0)`}
					in:fly|global={{ y: animationspeed *1000 * 0.2, delay: 750 * animationdelay }}
					class="text-backdrop-blur -mt-[20%] welcomeText text-primary-900 dark:text-primary-100  italic text-right 
				text-[clamp(5vh,15vh,28vw)] md:text-[clamp(5vh,15vh,6rem)]"
				>
					{$t({ key: 'and', defaultValue: 'and' })}
				</span>
				<span
				style="filter: Opacity({`calc(100% - ${scroll * 0.15}%)`})"
					style:transform={`translate3d(0, ${scroll * -0.8}px, 0)`}
					in:fly|global={{ y: animationspeed *1000 * 0.3, delay: 1100 * animationdelay }}
					class="text-backdrop-blur -mt-[15%] welcomeText z-10  text-primary-500 dark:text-primary-500 font-bold  italic text-center
				text-[clamp(5vh,14vh,13vw)] md:text-[clamp(5vh,14vh,7rem)]"
				>
					{$t({ key: 'welcome', defaultValue: 'welcome' })}
				</span>
				<span
				style="filter: Opacity({`calc(100% - ${scroll * 0.15}%)`})"
					style:transform={`translate3d(0, ${scroll * -4}px, 0)`}
					in:fly|global={{ y: animationspeed *1000 * 0.3, delay: 1500 * animationdelay }}
					class="text-backdrop-blur -mt-[10%] welcomeText text-primary-900 dark:text-primary-100  font-bold text-left
				text-[clamp(2vh,6vh,10vw)] md:text-[clamp(2vh,6vh,5rem)]"
				>
					{$t({ key: 'to_my', defaultValue: 'to my' })}
				</span>
				<span
				style="filter: Opacity({`calc(100% - ${scroll * 0.15}%)`})"
					style:transform={`translate3d(0, ${scroll * -2.8}px, 0)`}
					in:fly|global={{ y: animationspeed *1000 * 0.2, delay: 1750 * animationdelay }}
					class="text-backdrop-blur -mt-[10%] welcomeText text-primary-900 dark:text-primary-100 italic font-normal  text-right
				text-[clamp(1rem,8vh,10vw)] md:text-[clamp(1rem,8vh,5rem)]"
				>
					{$t({ key: 'online', defaultValue: 'Online' })}
				</span>
				<span
				style="filter: Opacity({`calc(100% - ${scroll * 0.15}%)`})"
					style:transform={`translate3d(0, ${scroll * -1}px, 0)`}
					in:fly|global={{ y: animationspeed *1000 * 0.15, delay: 1900 * animationdelay }}
					class="text-backdrop-blur -mt-[10%] welcomeText z-10 text-primary-400 dark:text-primary-600 italic font-bold  text-center
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
	</div> -->

<!-- 
		<ButtonScrollToSection section={'aboutme'}>
			{$t({ key: 'about-me', defaultValue: 'About me' })}
		</ButtonScrollToSection>
</section> -->

<FrontAbout />
<FrontWork />
<FrontEdu />
<FrontCert />

<style>
	.welcomeText {
		@apply w-full select-none h-auto;
	}



 .text-backdrop-blur {
	 mask: linear-gradient(red, red) text;
	-webkit-mask: linear-gradient(red, red) text;
	/* filter: Opacity(85%); */
	grid-area: 1/1;
	backdrop-filter: blur(calc(3px));
	-webkit-backdrop-filter: blur(calc(3px));
 }

 /* <text x="0.8" y=".2" font-weight="700" font-size="1"> Hello </text> */

</style>