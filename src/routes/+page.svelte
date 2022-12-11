<script lang="ts">
	import { getTranslate } from '@tolgee/svelte';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { mainClass } from '$lib/stores/mainClass';
	import { fade, fly } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	// import viewport from '../components/createViewportAction';
	// import IntersectionObserver from 'svelte-intersection-observer';
	// import { each } from 'svelte/internal';
	pageTitle.set('');
	mainClass.set('pt-0 bg-primary-50 dark:bg-primary-900');

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
	let sectionHeight;
	let intersecting = true;
	// let intersecting2;
	let intersecting3;
	let intersecting4;
	let count = 2007;

	let sectionHeightCount: any;
	let sectionUniversity: any;
	function test() {
		if ((scroll += sectionHeightCount / 8)) {
			count += 1;
		}
	}

	let jobs = [
		{
			image : 'img/logo-kamado.webp',
			name: 'KamadoB10 Germany',
			time: '08/2020 - 04/2022',	
			info: 'Primarily as a designer (for web and print), manufacturing, marketing',
	},
		{
			image : 'img/ditf-logo-weis.svg',
			name: 'DITF',
			time: '08/2017 - 08/2020',
			info: 'Research Assistant – Laboratory work, preparation of samples, use of Office applications',
	},
		{
			image : 'img/logo-letratec.png',
			name: 'Letratec',
			time: '11/2015 - 12/2015',
			info: 'Internship – Work and design process in the creation of advertising signs',
	},
	]
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>
<svelte:window bind:scrollY={scroll} />

<section
	bind:clientHeight={sectionHeight}
	class="relative w-full snap-start h-screen h-screen-ios flex flex-col justfiy-center content-center "
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
				class="my-auto w-full pb-10 font-light font-sans text-2xl text-left leading-loose sm:text-2xl lg:text-2xl"
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
	class="w-full  relative h-screen h-screen-ios flex flex-row justfiy-center items-center"
>
	<img
		src={profilePicture}
		alt="profile"
		class="object-cover object-top w-1/4 aspect-square rounded-full"
	/>

	<div class="max-w-2xl pl-4">
		<h1 class="pb-2 md:pl-0 text-3xl md:text-4xl text-left font-sans font-bold">
			{$t({ key: 'front-about', defaultValue: 'About me' })}
		</h1>
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

	<button
		on:click|preventDefault={scrollIntoView}
		class="hover:text-primary-400 h-10 w-10 left-1/2 transform transition-all duration-200 hover:scale-110 -translate-x-1/2 subpixel-antialiased z-10 absolute bottom-12 md:bottom-4"
		href="#cv"
		alt="cv"
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

<section class="" id="cv">
	<div class="space-y-4">
		<h1 class="">Work Experience</h1>
		{#each jobs as job}
		<div class="flex sm:flex-row flex-col space-x-4">
			<div class="w-1/4 p-2 h-1/4 flex justify-center items-center aspect-square bg-primary-200">
				<img src={job.image} alt="">
			</div>
			<div class="w-3/4">
				<h2 class="font-sans text-2xl">{job.name}</h2>
				<h3 class="mb-2 text-primary-700 font-sans text-sm">{job.time}</h3>
				<p class="text-sm">{job.info}</p>
			</div>
		</div>
		{/each}
	</div>
</section>

<!-- 
	<section
	id="cv"
>


<div class=" h-auto grid grid-cols-[minmax(0,1fr)_0.75rem_0.75rem_0.75rem] gap-x-4 relative">
	<div
		on:scroll={test}
		in:fly={{ y: 100, duration: 800 }}
		class=" h-40 py-8 pr-8  sticky transition-all duration-300 top-1/2 rounded-lg w-full flex flex-row flex-wrap grow"
	>
		<div class="w-full font-sans flex flex-row text-5xl align-baseline dark:text-primary-50">
			<div in:fade class="text-left flex bg-primary-50 dark:bg-primary-900">
				{#if scroll <= sectionHeightCount / 8 + sectionHeight}
					{count}
				{:else if scroll >= sectionHeight / 8 + sectionHeight && scroll <= (sectionHeightCount * 2) / 8 + sectionHeight}
					{count + 1}
				{:else if scroll >= (sectionHeightCount * 2) / 8 + sectionHeight && scroll <= (sectionHeightCount * 3) / 8 + sectionHeight}
					{count + 2}
				{:else if scroll >= (sectionHeightCount * 3) / 8 + sectionHeight && scroll <= (sectionHeightCount * 4) / 8 + sectionHeight}
					{count + 3}
				{:else if scroll >= (sectionHeightCount * 4) / 8 + sectionHeight && scroll <= (sectionHeightCount * 5) / 8 + sectionHeight}
					{count + 4}
				{:else if scroll >= (sectionHeightCount * 5) / 8 + sectionHeight && scroll <= (sectionHeightCount * 6) / 8 + sectionHeight}
					{count + 5}
				{:else if scroll >= (sectionHeightCount * 6) / 8 + sectionHeight && scroll <= (sectionHeightCount * 7) / 8 + sectionHeight}
					{count + 6}
				{:else if scroll >= (sectionHeightCount * 7) / 8 + sectionHeight && scroll <= (sectionHeightCount * 8) / 8 + sectionHeight}
					{count + 7}
				{:else if scroll >= sectionHeightCount + sectionHeight}
					{count + 8}
				{/if}
			</div>

			<div
				class="bg-primary-50 dark:bg-primary-900 dark:text-primary-200 text-primary-700 text-right ml-auto flex"
			>
				High School
			</div>
		</div>
		<div
			class="bg-primary-50 dark:bg-primary-900 text-primary-900 dark:text-primary-50 w-full text-right font-serif text-2xl align-baseline"
		>
			Gymnasium Plochingen
		</div>
	</div>
	<div bind:clientHeight={sectionHeightCount}>
		<div class=" w-2 h-[100vh] bg-primary-700 dark:bg-primary-200 rounded-full" />
		<div class=" w-2 h-2 my-3 bg-primary-700 dark:bg-primary-200 rounded-full" />
		<div class=" w-2 h-2 my-3 bg-primary-700 dark:bg-primary-200 rounded-full" />
		<div class=" w-2 h-2 my-3 bg-primary-700 dark:bg-primary-200 rounded-full" />
		<div class=" w-2 h-[100vh] my-3 bg-primary-700 dark:bg-primary-200 rounded-full" />
	</div>
	<div />
	<div />


	<div
		in:fly={{ y: 100, duration: 800 }}
		class=" h-40 py-8 pr-8 sticky transition-all duration-300 top-1/2 rounded-lg w-full flex flex-row flex-wrap grow"
	>
		<div class="w-full font-sans flex flex-row text-5xl align-baseline">
			<div class="text-left flex opacity-0">2015</div>
			<div
				class="bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex-1 text-right "
			>
				Praktikum
			</div>
		</div>
		<div
			class="bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-50 w-full text-right font-serif text-2xl align-baseline"
		>
			BorgWarner
		</div>
	</div>
	<div />
	<div>
		<div class=" w-2 h-[30vh] bg-primary-600 dark:bg-primary-400 rounded-full" />
	</div>
	<div />

	<div
		in:fly={{ y: 100, duration: 800 }}
		class=" h-40 py-8 pr-8 sticky transition-all duration-300 top-1/2 rounded-lg w-full flex flex-row flex-wrap grow"
	>
		<div class="w-full font-sans flex flex-row text-5xl align-baseline">
			<div in:fade class="text-left flex opacity-0">2015</div>
			<div
				class="bg-primary-50 dark:bg-primary-900 dark:text-primary-600 text-primary-400 flex-1 text-right "
			>
				Time abroad
			</div>
		</div>
		<div
			class="bg-primary-50 dark:bg-primary-900  w-full text-right font-serif text-2xl align-baseline"
		>
			Argentina
		</div>
	</div>
	<div />
	<div />
	<div>
		<div class=" w-2 h-[50vh] bg-primary-400 dark:bg-primary-600 rounded-full" />
	</div>

	<div
		in:fly={{ y: 100, duration: 800 }}
		class=" h-40 py-8 pr-8 sticky transition-all duration-300 top-1/2 rounded-lg w-full flex flex-row flex-wrap grow"
	>
		<div class=" w-full font-sans flex flex-row text-5xl align-baseline dark:text-primary-50">
			<div in:fade class="text-left pr-4 flex bg-primary-50 dark:bg-primary-900">
				{#if scroll <= (sectionUniversity * 1) / 4 + sectionHeightCount + sectionHeight * 1.6 && scroll >= sectionHeightCount + sectionHeight * 1.6}
					{count + 9}
				{:else if scroll >= (sectionUniversity * 1) / 4 + sectionHeightCount + sectionHeight * 1.6 && scroll <= (sectionUniversity * 2) / 4 + sectionHeightCount + sectionHeight * 1.3}
					{count + 10}
				{:else if scroll >= (sectionUniversity * 2) / 4 + sectionHeightCount + sectionHeight * 1.6 && scroll <= (sectionUniversity * 3) / 4 + sectionHeightCount + sectionHeight * 1.3}
					{count + 11}
				{:else if scroll >= (sectionUniversity * 3) / 4 + sectionHeightCount + sectionHeight * 1.6 && scroll <= (sectionUniversity * 4) / 4 + sectionHeightCount + sectionHeight * 1.3}
					{count + 12}
				{/if}
			</div>
			<div class="py-4 bg-primary-50 dark:bg-primary-900 text-primary-200 text-right ml-auto flex">
				Bachelors degree
			</div>
		</div>
		<div
			class=" bg-primary-50 dark:bg-primary-900 text-primary-900 dark:text-primary-50 w-full text-right font-serif text-2xl align-baseline"
		>
			University of Stuttgart
		</div>
		<div
			class="bg-primary-50 pt-4 dark:bg-primary-900 text-primary-900 dark:text-primary-50 w-full text-right font-serif align-baseline"
		>
			Materials Science
		</div>
	</div>

	<div
		bind:clientHeight={sectionUniversity}
		class=" w-2 h-[400vh] bg-primary-700 dark:bg-primary-200 rounded-full"
	/>
	<div />
	<div />
</div>
</section> -->
<div class="w-full h-screen h-screen-ios container flex flex-row space-x-10" />
