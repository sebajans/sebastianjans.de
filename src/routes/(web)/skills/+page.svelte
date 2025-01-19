<!-- @migration-task Error while migrating Svelte code: Expected token ;
https://svelte.dev/e/expected_token -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { mainClass } from '$lib/stores/mainClass';
	import { getTranslate } from '@tolgee/svelte';
	import { T } from '@tolgee/svelte'; // change import statement

	import { skillItems } from '$lib/lists/skillItems';
	import { afterNavigate } from '$app/navigation';
	const { t } = getTranslate();
	pageTitle.set($t({ key: 'skills-title', defaultValue: 'Skills' }));
	import Popup from '$components/Popup.svelte';

	mainClass.set('pb-14 my-auto');

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
	<meta name="description" content="Skills of Sebastian Jans as a Designer." />
</svelte:head>

<div
	class="mx-auto my-auto max-w-4xl items-center justify-center gap-8 space-y-8 px-4 sm:columns-2"
>
	{#if visible}
		<div class="relative">
			<p in:fly|global={{ y: 30, duration }} class="text-left text-base">
				<T
					keyName="skills-text-intro"
					defaultValue="
			On this page is an overview of my skillset, including Graphic and Web Design and Product Design.
			For a more elaborate version you can check out my "
				/>
				<button
					aria-label="Open PopUp to download CVs"
					class="duration-250 font-bold transition hover:text-primary-500"
					on:click={openPopup}
				>
					<T keyName="CV" defaultValue="CV" />.
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="inline h-4 w-4 align-baseline before:p-1"
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
			<Popup
				popupClass={'left-10 w-full mr-10 items-start justify-start bg-primary-200'}
				bind:this={popup}
			>
				<div class="space-x-2 font-sans font-normal uppercase">
					<a
						class="rounded-md bg-primary-300 px-3 py-2 text-primary-900 transition-all duration-200 hover:bg-primary-700 hover:text-primary-400"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Download English CV"
						href="CV/CV_EN.pdf"
					>
						EN</a
					>
					<a
						class="rounded-md bg-primary-300 px-3 py-2 text-primary-900 transition-all duration-200 hover:bg-primary-700 hover:text-primary-400"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Download German CV"
						href="CV/CV_DE.pdf"
					>
						ES</a
					>
					<a
						class="rounded-md bg-primary-300 px-3 py-2 text-primary-900 transition-all duration-200 hover:bg-primary-700 hover:text-primary-400"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Download Spanish CV"
						href="CV/CV_ES.pdf"
					>
						DE</a
					>
				</div>
			</Popup>
		</div>
		{#each Object.entries(skillItems).filter(([categoryName, skills]) => categoryName !== 'Language Skills') as [categoryName, skills], i}
			<div
				in:fly|global={{ y: 30, duration, delay: (200 + i * 200) * firstdelay }}
				class="grid break-inside-avoid-column grid-cols-1 gap-2 rounded-lg align-top"
			>
				<h2 class="font-sans text-xl font-bold uppercase text-primary-900 dark:text-primary-50">
					<T keyName="skill-{categoryName}-title" defaultValue={categoryName} />
				</h2>
				<p class="pb-1 font-serif text-primary-900 dark:text-primary-50">
					<T keyName="skill-{categoryName}-text" defaultValue={skills.categorydescription} />
				</p>
				<div class="highlight-content grid h-auto w-full grid-cols-2 flex-wrap gap-3 p-3">
					{#each skills.categoryArray as skill}
						<div class="flex h-7 flex-row items-center">
							<img
								src={skill.iconLink}
								class="text-white pointer-events-none mr-1.5 inline-block aspect-square h-full rounded-md object-fill"
								alt={skill.name}
							/>
							<span
								class="font-serif text-sm font-medium leading-4 text-primary-800 dark:text-primary-100"
							>
								{skill.name}
							</span>
						</div>
						<!-- <div class="flex flex-row items-center h-7">
							<span
								class="font-serif leading-4 dark:text-primary-100 text-primary-800 font-medium text-sm"
							>
								{skill.progress}
							</span>
						</div> -->
					{/each}
				</div>
			</div>
		{/each}
		{#each Object.entries(skillItems).filter(([categoryName, skills]) => categoryName === 'Language Skills') as [categoryName, skills], i}
			<div
				in:fly|global={{ y: 30, duration, delay: (200 + i * 200) * firstdelay }}
				class="grid break-inside-avoid-column grid-cols-1 gap-2 rounded-lg align-top"
			>
				<h2 class="font-sans text-xl font-bold uppercase text-primary-900 dark:text-primary-50">
					<T keyName="skill-{categoryName}-title" defaultValue={categoryName} />
				</h2>
				<p class="pb-1 font-serif text-primary-900 dark:text-primary-50">
					<T keyName="skill-{categoryName}-text" defaultValue={skills.categorydescription} />
				</p>
				<div class="highlight-content grid h-auto w-full grid-cols-2 flex-wrap gap-3 p-3">
					{#each skills.categoryArray as skill}
						<div class="flex h-7 flex-row items-center">
							<img
								src={skill.iconLink}
								class="text-white pointer-events-none mr-1.5 inline-block aspect-square h-full rounded-md object-fill"
								alt={skill.name}
							/>
							<span
								class="font-serif text-sm font-medium leading-4 text-primary-800 dark:text-primary-100"
							>
								{skill.name}
							</span>
						</div>
						<div class="flex h-7 flex-row items-center">
							<span
								class="font-serif text-sm font-medium leading-4 text-primary-800 dark:text-primary-100"
							>
								{skill.progress}
							</span>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</div>
<div class="px-4">
	<div
		class=" mx-auto my-8 mb-16 box-content flex w-auto max-w-4xl flex-col content-between items-center justify-center sm:space-x-2 md:flex-row"
	>
		<p class="mr-auto pb-2 md:pb-0">
			<T
				keyName="skills-convince"
				defaultValue="If you're still hesitant, feel free to give me a brief call, and we can chat about your business!"
			/>
		</p>
		<a class="btn standardButton w-full whitespace-nowrap md:w-fit" href="/contact">
			<T keyName="skills-convince-button" defaultValue="Contact me" />
		</a>
	</div>
</div>

<style>
	.standardButton {
		@apply box-border flex h-auto items-center justify-center rounded-lg border border-primary-900/10 bg-gradient-to-tr from-primary-900/30 to-primary-900/20 px-4 py-2 text-center font-light text-primary-900 transition-all duration-300 ease-in hover:border-primary-900/50 hover:from-primary-900/30 hover:to-primary-900/40 dark:border-primary-50/10 dark:from-primary-50/40 dark:to-primary-50/30 dark:text-primary-50 dark:hover:border-primary-50/50 dark:hover:from-primary-50/20 dark:hover:to-primary-50/30 md:backdrop-blur-sm;
	}
</style>
