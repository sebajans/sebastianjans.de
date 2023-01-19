<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { mainClass } from '$lib/stores/mainClass';
	import { T, getTranslate } from '@tolgee/svelte';
	import { skillItems } from './skillItems';
	import { afterNavigate } from '$app/navigation';
	const t = getTranslate();
	pageTitle.set($t({ key: 'skills-title', defaultValue: 'Skills' }));
	import Popup from '../../components/Popup.svelte';

	mainClass.set('pt-28 pb-20 md:pb-0');

	let visible: boolean = false;
	let duration: number;
	let firstdelay: number;
	onMount(() => (visible = true));
	afterNavigate(({ from }) => {
		duration = from === null ? 450 : 0;
		firstdelay = from === null ? 1 : 0;
		visible = true;
	});

	let popup: any;
	function openPopup() {
		popup.show();
	}
</script>

<svelte:head>
	<title>{$pageTitle}</title>
	<meta name="description" content="Skills of Sebastian Jans as a Designer.">
</svelte:head>

<div class=" sm:columns-2 space-y-8 gap-8 pb-12 max-w-4xl justify-center items-center mx-auto my-auto">

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
				aria-label="Open PopUp to download CVs"
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
						aria-label="Download English CV"
						href="CV/CV_EN.pdf"
					>
						EN</a
					>
					<a
						class="bg-primary-300 py-2 px-3 rounded-md hover:bg-primary-700 text-primary-900 transition-all duration-200 hover:text-primary-400"
						target="_blank"
						aria-label="Download German CV"
						href="CV/CV_DE.pdf"
					>
						ES</a
					>
					<a
						class="bg-primary-300 py-2 px-3 rounded-md hover:bg-primary-700 text-primary-900 transition-all duration-200 hover:text-primary-400"
						target="_blank"
						aria-label="Download Spanish CV"
						href="CV/CV_ES.pdf"
					>
						DE</a
					>
				</div>
			</Popup>
		</div>
		{#each Object.entries(skillItems) as [categoryName, skills], i}
		<!-- style:transform={`translateZ(0)`} -->
			<div
				in:fly={{ y: 30, duration, delay: (200 + i * 200) * firstdelay }}
				class="break-inside-avoid-column rounded-lg align-top gap-2 grid grid-cols-1"
			>
				<h2 class="text-xl uppercase dark:text-primary-50 text-primary-900 font-bold font-sans">
					<T
						keyName="skill-{categoryName}-title"
						defaultValue="{categoryName}"
					/>
					
				</h2>
				<p class="font-serif dark:text-primary-50 text-primary-900  pb-1">
					<T
						keyName="skill-{categoryName}-text"
						defaultValue="{skills.categorydescription}"
					/>
				</p>
				<div class="w-full h-auto gap-3 grid grid-cols-2 flex-wrap p-3 rounded-md dark:bg-primary-700/50 bg-primary-200/50">
					{#each skills.categoryArray as skill}
						<div
						class="flex flex-row items-center h-7"
						>
						<img src={skill.iconLink} class="pointer-events-none inline-block h-full rounded-md aspect-square mr-1.5 object-fill " alt={skill.name}>
						<span class="font-serif leading-4 dark:text-primary-100 text-primary-800 font-medium text-sm">
								{skill.name}
							</span>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</div>