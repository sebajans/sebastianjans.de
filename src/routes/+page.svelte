<script lang="ts">
	import { getTranslate } from '@tolgee/svelte';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { mainClass } from '$lib/stores/mainClass';
	import { fly } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import { cvItems } from './cv_items';
	import ButtonScrollToSection from '../components/ButtonScrollToSection.svelte';
	pageTitle.set('');
	mainClass.set('pt-0');

	const t = getTranslate();
	let profilePicture = 'img/profile-pic.jpg';

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

	// for (item in cvItems) {}

	let scroll: any;
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>
<svelte:window bind:scrollY={scroll} />

<section
	class="relative w-full h-screen h-screen-ios flex flex-col justfiy-center items-center content-center"
>
	<div class="relative flex flex-col h-auto w-full max-w-2xl pt-[10vh] my-auto mx-auto ">
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
				class="my-auto md:mt-20 md:mb-0 w-full pb-10 font-light font-sans text-2xl text-center leading-loose sm:text-2xl lg:text-2xl"
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
	<ButtonScrollToSection section={'aboutme'}>About me</ButtonScrollToSection>
</section>
<section
	id="aboutme"
	class="relative w-full min-h-screen min-h-screen-ios flex flex-col justfiy-center content-center pt-20"
>
	<div class="my-auto mx-auto max-w-4xl">
		<h1 class="pb-4 md:pl-0 text-3xl md:text-4xl text-center md:text-left font-sans font-bold">
			{$t({ key: 'front-about', defaultValue: 'About me' })}
		</h1>
		<div class=" flex flex-row w-full flex-wrap md:flex-nowrap justify-center">
			<img
				src={profilePicture}
				alt="profile"
				class="object-cover object-top md:w-1/5 max-w-[16rem] max-h-[16rem] md:h-auto md:grow-0 mb-2 aspect-square rounded-xl"
			/>
			<div class="md:pl-4 md:w-475 flex flex-col">
				<p class="md:w-full mb-2 text-justify ">
					{$t({
						key: 'front-about-text',
						defaultValue:
							'I am 25 years old and from Germany. I studied my Bachelors in Materials Science while i was self-teaching myself all kinds of Design capabilities. After finishing my degree i decided to persue a different career path in the field of Design. '
					})}
				</p>

				<p class="md:w-full mb-2 text-justify ">
					{$t({
						key: 'front-about-text-2',
						defaultValue:
							'I moved to Spain and started studying Design Engineering at the Universitat Politécnica de Valencia and am now working on my Master Thesis.'
					})}
				</p>
				<p class="md:w-full mb-2 text-justify ">
					{$t({
						key: 'front-about-text-3',
						defaultValue:
							'My key strengths include a keen eye for detail, a talent for crafting clean and intuitive layouts, and the ability to bring ideas to life with beautiful and effective visuals.'
					})}
				</p>
			</div>
		</div>
		<ButtonScrollToSection section={'cv_jobs'}>Work Experience</ButtonScrollToSection>
	</div>
</section>

<section
	class="mt-20 pb-32 relative w-full min-h-screen min-h-screen-ios flex flex-col justfiy-center content-center"
	id="cv_jobs"
>
	<div class="space-y-4 max-w-4xl w-full mx-auto my-auto">
		<h1 class="text-center md:text-left text-primary-900 dark:text-primary-50">Work Experience</h1>
		{#each cvItems as item}
			{#if item.category === 'job'}
				<!-- {@const frMonth = String(item.fromMonth)} -->
				<div class="w-full md:w-full flex sm:flex-row flex-col sm:space-x-4 items-center">
					<div
						class="md:w-1/5 w-full max-w-[16rem] p-2 h-full md:h-1/5 flex rounded-lg justify-center items-center aspect-square bg-primary-200"
					>
						<img src={item.image} alt={item.name} />
					</div>
					<div class="md:w-4/5 w-full max-w-[16rem] md:max-w-xl flex flex-col justify-start">
						<h2 class="font-sans text-primary-900 dark:text-primary-50 text-2xl">{item.name}</h2>
						<h3 class="mt-0.5 mb-2 text-primary-700 dark:text-primary-200 font-sans text-sm">
							<!-- {@const frMonth = item.fromMonth.toString() } -->
							{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}
						</h3>
						<p class="text-sm">{item.info}</p>
					</div>
				</div>
			{/if}
		{/each}
	</div>
	<ButtonScrollToSection section={'cv_edu'}>My Education</ButtonScrollToSection>
</section>

<section
	class="pt-20 pb-40 md:pb-20 relative w-full min-h-screen min-h-screen-ios flex flex-col justfiy-center content-center"
	id="cv_edu"
>
	<div class="space-y-4 max-w-4xl w-full mx-auto my-auto">
		<h1 class="text-center md:text-left text-primary-900 dark:text-primary-50">Education</h1>
		{#each cvItems as item}
			{#if item.category === 'education'}
				<div class="w-full md:w-full flex sm:flex-row flex-col sm:space-x-4 items-center">
					<div
						class="md:w-1/5 w-full max-w-[16rem] p-2 h-full  md:h-1/5 flex rounded-lg justify-center items-center aspect-square bg-primary-200"
					>
						<img src={item.image} alt={item.name} />
					</div>
					<div class="md:w-4/5 w-full max-w-[16rem] md:max-w-xl flex flex-col justify-start">
						<h2 class="font-sans text-primary-900 dark:text-primary-50 text-2xl">{item.name}</h2>
						<h3 class="mt-0.5 mb-2 text-primary-700 dark:text-primary-200 font-sans text-sm">
							{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}
						</h3>
						<p class="text-sm">{item.info}</p>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>

<!-- TIMELINE -->

<!-- <section
	class="pt-20 pb-40 md:pb-20 relative w-full min-h-screen min-h-screen-ios flex flex-col justfiy-center content-center"
	id="cv_edu"
>
	<div class="space-y-4 max-w-4xl  w-full mx-auto my-auto overflow-x-auto overflow-y-hidden">
		<div class="flex flex-row flex-nowrap ">
			{#each cvItems as item , i }
				{#if item.category === 'job'}
					{@const start = +item.fromYear + +item.fromMonth / 12}
					{@const end = +item.toYear + +item.toMonth / 12}
					{@const duration = ((end - start) * 100).toFixed(2)}
					<div class="w-[{duration}px] mr-[20px] px-2 py-2 bg-primary-200 font-sans rounded-md">
						{item.name}
					</div>
				{/if}
			{/each}
		</div>
		<div class="flex flex-row flex-nowrap ">
			{#each cvItems as item , i }
				{#if item.category === 'education'}
					{@const start = +item.fromYear + +item.fromMonth / 12}
					{@const end = +item.toYear + +item.toMonth / 12}
					{@const duration = ((end - start) * 100).toFixed(2)}
					<div class="w-[{duration}px] mr-[20px] px-2 py-2 bg-primary-200 font-sans rounded-md">
						{item.name}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section> -->

<!-- {@const timeBetween[i+1] = start[i+1] - end[i]} -->
