<script lang="ts">
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

	let visible = $state(false);
	let animationspeed: number | null = $state(0.08);
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
	});

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

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />
<Hero />
<FrontAbout />
<FrontWork />
<FrontEdu />
<FrontCert />
