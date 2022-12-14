<script type="ts">
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { mainClass } from '$lib/stores/mainClass';
	import { T, getTranslate } from '@tolgee/svelte';
	import { categories } from './+page';
	import { afterNavigate } from '$app/navigation';
	const t = getTranslate();
	pageTitle.set($t({ key: 'skills-title', defaultValue: 'Skills' }));
	import Popup from '../../components/Popup.svelte';

	mainClass.set('pt-28');

	function slidevertical(node: any, { firstdelay, delay }: { firstdelay: number; delay: number }) {
		return {
			delay,
			duration: 850 * firstdelay,
			css: (t: number) => {
				const eased = cubicInOut(t);

				return `
				transform-origin: left;
				transform: scaleX(${eased})
				`;
			}
		};
	}

	// https://svelte.dev/repl/6904f0306d6f4985b55f5f9673f762ef?version=3.4.1
	let visible: boolean;
	let duration: number;
	let firstdelay: number;
	afterNavigate(({ from }) => {
		duration = from === null ? 450 : 0;
		firstdelay = from === null ? 1 : 0;
		visible = true;
	});

	let scroll: number;
	let windowHeight: number;
	let animate = false;
	onMount(() => (animate = true));


	let popup: any;

	function openPopup() {
		popup.show();
	}
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<div class="columns-1 md:columns-2 space-y-10 gap-10 pb-20 max-w-4xl justify-center items-center mx-auto my-auto">
	{#if visible}
		<div class="relative">
			<p in:fly={{ y: 30, duration }} class="text-base text-left">
				<T
					keyName="skills-text-intro"
					defaultValue="
			On this page is an overview of my skillset, including Graphic and Web Design and Product Design.
			For a more elaborate version you can check out my "
				/>
				<button
					class="font-bold hover:text-primary-500 transition duration-250 "
					on:click={openPopup}
				>
					<T keyName="CV" defaultValue="CV" />.
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 before:p-1 inline align-baseline  "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
				</button>
			</p>
			<Popup popupClass={'left-10 w-full mr-10 items-start justify-start bg-primary-200'} bind:this={popup}>
				<div class="font-sans font-normal uppercase space-x-2">
					<a
						class="bg-primary-300 py-2 px-3 rounded-md hover:bg-primary-700 text-primary-900 transition-all duration-200 hover:text-primary-400"
						target="_blank"
						href="CV/CV_EN.pdf"
					>
						EN</a
					>
					<a
						class="bg-primary-300 py-2 px-3 rounded-md hover:bg-primary-700 text-primary-900 transition-all duration-200 hover:text-primary-400"
						target="_blank"
						href="CV/CV_EN.pdf"
					>
						ES</a
					>
					<a
						class="bg-primary-300 py-2 px-3 rounded-md hover:bg-primary-700 text-primary-900 transition-all duration-200 hover:text-primary-400"
						target="_blank"
						href="CV/CV_EN.pdf"
					>
						DE</a
					>
				</div>
			</Popup>
		</div>

		{#each Object.entries(categories) as [categoryName, skills], i}
			<div
				style:transform={`translateZ(0)`}
				in:fly={{ y: 30, duration, delay: (150 + i * 150) * firstdelay }}
				class="bg-primary-900 break-inside-avoid-column  shadow-lg shadow-primary-500/40 dark:shadow-primary-400/40 dark:bg-primary-50 p-4 rounded-lg align-top gap-2 grid grid-cols-1"
			>
				<h2 class="text-xl text-primary-50 dark:text-primary-900 font-bold font-sans">
					{categoryName}
				</h2>
				<p class="font-serif text-primary-50 dark:text-primary-900 font-medium  py-1 md:py-1.5">
					<T
						keyName="skill-{categoryName}-text"
						defaultValue="
			{skills.categorydescription}"
					/>
				</p>
				{#each skills.categoryArray as skill, i}
					<h3
						class="font-serif text-primary-200 dark:text-primary-800 font-medium text-sm py-2 md:py-1.5"
					>
						{skill.name}
					</h3>
					<div class="relative flex flex-col justify-left">
						<div class="flex flex-row space-x-[5.7%]">
							<!-- 4.6% for 4 -->
							<!-- slider background -->
							<span class="w-0.5 h-5" />
							{#each Array(4) as _}
								{#each Array(3) as _}
									<span
										class="translate-y-1 before:content-['']  before:w-5 md:before:w-10 before:-translate-x-2.5 before:-translate-y-1 before:absolute before:h-5 w-0.5 h-3 dark:bg-primary-700 bg-primary-300 hover:bg-primary-500 transition hover:-translate-y-[0.25]"
									/>
								{/each}
								<span
									class="w-0.5 h-5 z-10 dark:bg-primary-600 bg-primary-400 hover:bg-primary-500 rounded-full"
								/>
							{/each}
						</div>
						{#if animate}
							<span
								in:slidevertical|once={{ firstdelay, delay: i * 50 * firstdelay }}
								class="absolute z-10 duration-75 {skill.progress} bg-gradient-to-r from-primary-500 to bg-primary-300 h-5 rounded"
							/>
						{/if}
					</div>
				{/each}
			</div>
		{/each}
	{/if}
</div>
