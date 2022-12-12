<script lang="ts">
	import { getTranslate } from '@tolgee/svelte';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { mainClass } from '$lib/stores/mainClass';
	import { fly } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import { jobs, education } from './cv_items'
	pageTitle.set('');
	mainClass.set('pt-0');

	const t = getTranslate();
	let profilePicture = 'img/profile-pic.jpg';

	function scrollIntoView({ target }: { target: any }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	let visible = false;
	let animationspeed: any;
	let animationdelay: any;
	afterNavigate(({ from }) => {
		animationspeed = from === null ? 0.08 : 1;
		animationdelay = from === null ? 1 : 0;
		visible = true;
	});

	function typewriter(node: any, { delay = 0, speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / speed;
		delay = delay * animationdelay;

		return {
			delay,
			duration,
			tick: (t: number) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

	let scroll: any;

	
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>
<svelte:window bind:scrollY={scroll} />

<section
	class="relative max-w-3xl w-full h-screen h-screen-ios flex flex-col justfiy-center content-center "
>
	<div class="relative flex flex-col h-full w-full max-w-2xl pt-44 mx-auto">
		{#if visible}
			<span
				style:transform={`translate3d(0, ${scroll * -0.2}px, 0)`}
				class="w-full z-10 select-none text-primary-500 font-bold font-display text-left leading-[0.2]
				text-[clamp(0px,32vw,100vw)] sm:text-[clamp(0px,32vw,13rem)] lg:text-[clamp(0px,32vw,16rem)]"
				in:typewriter={{ speed: animationspeed * 0.15, delay: 100 * animationdelay }}
			>
				{$t({ key: 'hello', defaultValue: 'Hello' })}
			</span>
			<span
				style:transform={`translate3d(0, ${scroll * -2}px, 0)`}
				in:typewriter={{ speed: animationspeed * 0.2, delay: 750 * animationdelay }}
				class="w-full select-none font-display italic text-right leading-[0.5]
				text-[clamp(0px,16vw,20vw)] sm:text-[clamp(4rem,11vw,10rem)] lg:text-[clamp(0px,10vw,8rem)]"
			>
				{$t({ key: 'and', defaultValue: 'and' })}
			</span>
			<span
				style:transform={`translate3d(0, ${scroll * -0.8}px, 0)`}
				in:typewriter={{ speed: animationspeed * 0.3, delay: 1100 * animationdelay }}
				class="w-full z-10 select-none text-primary-600 dark:text-primary-300 font-bold font-display italic text-center leading-[1.4]
				text-[clamp(1rem,16vw,100vw)] sm:text-[clamp(0px,22vw,6.2rem)] lg:text-[clamp(0px,20vw,8rem)]"
			>
				{$t({ key: 'welcome', defaultValue: 'welcome' })}
			</span>
			<span
				style:transform={`translate3d(0, ${scroll * -4}px, 0)`}
				in:typewriter={{ speed: animationspeed * 0.3, delay: 1500 * animationdelay }}
				class="w-full select-none font-display font-bold text-left leading-[0.2]
				text-[clamp(0px,8vw,30vw)] sm:text-[clamp(0px,7vw,3.7rem)] lg:text-[clamp(0px,8vw,5.5rem)]"
			>
				{$t({ key: 'to_my', defaultValue: 'to my' })}
			</span>
			<span
				style:transform={`translate3d(0, ${scroll * -2.8}px, 0)`}
				in:typewriter={{ speed: animationspeed * 0.2, delay: 1750 * animationdelay }}
				class="w-full select-none italic font-normal font-display text-right leading-[0]
			text-[clamp(0px,16vw,100vw)] sm:text-[clamp(0px,9vw,10rem)] lg:text-[clamp(0px,9vw,6rem)]"
			>
				{$t({ key: 'online', defaultValue: 'Online' })}
			</span>
			<span
				style:transform={`translate3d(0, ${scroll * -1}px, 0)`}
				in:typewriter={{ speed: animationspeed * 0.15, delay: 1900 * animationdelay }}
				class="w-full z-10 select-none text-primary-300 dark:text-primary-600 italic font-bold font-display text-center leading-[1]
			text-[clamp(0px,19vw,100vw)] sm:text-[clamp(0px,18vw,7.5rem)] lg:text-[clamp(0px,20vw,10rem)]"
			>
				{$t({ key: 'Portfolio', defaultValue: 'Portfolio!' })}
			</span>
			<p
				in:fly={{ y: 50, duration: 650, delay: 2300 * animationdelay }}
				class="my-auto w-full pb-10 font-light font-sans text-2xl text-center leading-loose sm:text-2xl lg:text-2xl"
			>
				<span class="font-medium">
					{$t({
						key: 'Introduction-text-b',
						defaultValue: 'My name is Sebastian Jans.'
					})}
				</span>
				{$t({
					key: 'Introduction-text',
					defaultValue: 'I am a Product Designer.'
				})}
			</p>
		{/if}
	</div>
	<button
		on:click|preventDefault={scrollIntoView}
		class="hover:text-primary-400 h-10 w-10 left-1/2 transform transition-all duration-200 hover:scale-110 -translate-x-1/2 subpixel-antialiased z-10 absolute bottom-12 md:bottom-4"
		href="#aboutme"
		alt="aboutme"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			class="w-6 h-6 inline-flex animate-bounce pointer-events-none"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
			/>
		</svg>
	</button>
</section>
<section
	id="aboutme"
	class="relative max-w-3xl w-full h-screen h-screen-ios flex flex-col justfiy-center content-center pt-20"
>
	<h1 class="pb-4 md:pl-0 text-3xl md:text-4xl text-left font-sans font-bold">
		{$t({ key: 'front-about', defaultValue: 'About me' })}
	</h1>
	<div class="items-center flex flex-row w-full">
		<img
			src={profilePicture}
			alt="profile"
			class="object-cover object-top w-36 h-36 aspect-square rounded-full"
		/>
		<div class="pl-4">
			<p class="md:w-full mb-2 ">
				{$t({
					key: 'front-about-text',
					defaultValue:
						'I am 25 years old and from Germany. I studied my Bachelors in Materials Science while i was self-teaching myself all kinds of Design capabilities. After finishing my degree i decided to persue a different career path in the field of Design. '
				})}
			</p>

			<p class="md:w-full mb-2 ">
				{$t({
					key: 'front-about-text-2',
					defaultValue:
						'I moved to Spain and started studying Design Engineering at the Universitat Politécnica de Valencia and am now working on my Master Thesis.'
				})}
			</p>
			<p class="md:w-full mb-2 ">
				{$t({
					key: 'front-about-text-3',
					defaultValue:
						'My key strengths include a keen eye for detail, a talent for crafting clean and intuitive layouts, and the ability to bring ideas to life with beautiful and effective visuals.'
				})}
			</p>
		</div>
	</div>

	<button
		on:click|preventDefault={scrollIntoView}
		class="hover:text-primary-400 h-10 w-10 left-1/2 transform transition-all duration-200 hover:scale-110 -translate-x-1/2 subpixel-antialiased z-10 absolute bottom-12 md:bottom-4"
		href="#cv_jobs"
		alt="cv_jobs"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			class="w-6 h-6 inline-flex animate-bounce pointer-events-none"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
			/>
		</svg>
	</button>
</section>

<section class=" min-h-screen min-h-screen-ios" id="cv_jobs">
	<div class="md:pt-20 space-y-4 max-w-3xl w-full">
		<h1 class="text-center md:text-left text-primary-900 dark:text-primary-50">Work Experience</h1>
		{#each jobs as job}
			<div class="w-full md:w-full flex sm:flex-row flex-col md:space-x-4 justify-center items-center">
				<div
					class="md:w-1/5 w-full max-w-[16rem] p-2 h-full  md:h-1/5 flex rounded-lg justify-center items-center aspect-square bg-primary-200"
				>
					<img src={job.image} alt="" />
				</div>
				<div class="md:w-4/5 w-full max-w-[16rem] md:max-w-xl flex flex-col justify-start">
					<h2 class="font-sans text-primary-900 dark:text-primary-50 text-2xl">{job.name}</h2>
					<h3 class="mt-0.5 mb-2 text-primary-700 dark:text-primary-200 font-sans text-sm">
						{job.time}
					</h3>
					<p class="text-sm">{job.info}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<section class="md:pt-20 pb-40 md:pb-20 min-h-screen min-h-screen-ios" id="cv">
	<div class="space-y-4 max-w-3xl">
		<h1 class="text-center md:text-left text-primary-900 dark:text-primary-50">Education</h1>
		{#each education as edu}
			<div class="w-full md:w-full flex sm:flex-row flex-col md:space-x-4 justify-center items-center">
				<div
					class="md:w-1/5 w-full max-w-[16rem] p-2 h-full  md:h-1/5 flex rounded-lg justify-center items-center aspect-square bg-primary-200"
				>
					<img src={edu.image} alt="" />
				</div>
				<div class="md:w-4/5 w-full max-w-[16rem] md:max-w-xl flex flex-col justify-start">
					<h2 class="font-sans text-primary-900 dark:text-primary-50 text-2xl">{edu.name}</h2>
					<h3 class="mt-0.5 mb-2 text-primary-700 dark:text-primary-200 font-sans text-sm">
						{edu.time}
					</h3>
					<p class="text-sm">{edu.info}</p>
				</div>
			</div>
		{/each}
	</div>
</section>