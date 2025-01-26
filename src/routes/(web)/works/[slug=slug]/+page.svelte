<script lang="ts">
	import { page } from '$app/stores';
	import { projectItems } from '$lib/lists/projects';
	import { T, getTranslate } from '@tolgee/svelte';
	import { pageTitle } from '$lib/stores/pageTitle';
	import Box from '$components/Box.svelte';
	import { settingsState } from '$lib/stores/settingsState';

	const { t } = getTranslate(); // Tolgee t translation

	import type { ProjectData } from '$lib/lists/projects';
	import Button from '$lib/components/ui/button/button.svelte';
	import WireframeWindow from '$components/WireframeWindow.svelte';
	import WireframeWindowMobile from '$components/WireframeWindowMobile.svelte';
	import SliderWithHandle from '$components/SliderWithHandle.svelte';

	let project = projectItems.find((item) => item.slug === $page.params.slug) as ProjectData;

	// let validproject = project as (typeof projectItems)[number] | undefined;
	// console.log(project.colors?.length);

	pageTitle.set(
		$t({
			key: `${project.slug}-title`,
			defaultValue: `Project: ${project.clientName}`
		})
	);
</script>

<svelte:head>
	<title>SJ | Work: {project.clientName}</title>
	<meta name="description" content="Learn more about the work SJ did for {project.clientName}" />
</svelte:head>

{#if project}
	<section class="w-full pb-20 pt-24 sm:pt-28 md:pb-28">
		<div class="mx-auto w-full max-w-4xl space-y-4">
			<Button href="/works#{project.slug}" variant="default">
				<!-- <span class="flex flex-row items-center"> -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="mr-2 h-4 w-4 stroke-2 group-hover:stroke-3"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
					/>
				</svg>
				<span class="text-current">
					<T keyName="btn-back" defaultValue="Back" />
				</span>
				<!-- </span> -->
			</Button>
			<div class="grid-gallery grid-flow-row-dense justify-start gap-6 text-sm md:text-base">
				<Box
					show={project !== undefined}
					outerClass="p-4 col-span-2 row-span-2 sm:row-span-1 md:col-span-4"
				>
					<div class="grid w-full grid-cols-3 items-center gap-4 sm:flex-row">
						<div class="col-span-3 h-52 min-h-0 p-2 sm:min-w-0 md:col-span-1">
							<div
								id="rena-logo"
								style:background-image={$settingsState.darkMode
									? `url('${project.logoDark}')`
									: `url('${project.logo}')`}
								class="h-full w-full bg-contain bg-center bg-no-repeat bg-origin-content transition-all duration-500"
								></div>
						</div>
						<div class="col-span-3 p-4 md:col-span-2">
							<p>
								<T
									keyName="project-shortdescription-{project.slug}"
									defaultValue={project.shortDescription}
								/>
							</p>
						</div>
					</div>
				</Box>
				<WireframeWindow
					className="col-span-2 md:col-span-3 row-span-2"
					screenshotImage={project.screenshot}
					altTag="project-screenshot-{project.slug}-1"
					url={project.url}
				/>
				<WireframeWindow
					className="col-span-2 row-span-2"
					screenshotImage={project.screenshot2}
					altTag="project-screenshot-{project.slug}-2"
					url={project.url}
				/>
				<WireframeWindowMobile
					className="col-span-1 row-span-2 w-full"
					screenshotImage={project.screenshotMobile}
					url={project.url}
					altTag="project-screenshot-mobile-{project.slug}-1"
				/>
				<Box
					show={project !== undefined}
					outerClass="p-4 col-span-2 md:col-span-3 row-span-1 items-center flex"
				>
					<h2>
						<T keyName="project-Process" defaultValue="Process" />
					</h2>
					<p>
						{#each project.processText as text}
							<T keyName="project-text-{text}" defaultValue={text} /> &nbsp;
						{/each}
					</p>
				</Box>
				{#if project.colors}
					<Box
						show={project !== undefined}
						outerClass="relative p-4 col-span-2 row-span-1 items-center "
						innerClass="flex flex-row justify-center h-full w-full"
					>
						<div class="flex h-full w-full items-center">
							<h2>
								<T keyName="project-Colors" defaultValue="Colors" />
							</h2>
						</div>
						<div class="relative flex h-full w-full pl-4">
							{#each project.colors as color}
								<div
									style="background-color: {color}; width: calc(100% / {project.colors?.length})"
									style:width="calc(1/{project.colors?.length})%"
									class=""
									></div>
							{/each}
						</div>
					</Box>
				{/if}
				<Box
					show={project !== undefined}
					outerClass="p-4 col-span-2 md:col-span-2 row-span-1 items-center flex"
				>
					<h2>
						<T keyName="project-problemStatement" defaultValue="Problem Statement" />
					</h2>
					<p>
						{#each project.problemStatement as text}
							<T keyName="project-text-{text}" defaultValue={text} />
						{/each}
					</p>
				</Box>
				<Box
					show={project !== undefined}
					outerClass="relative p-4 col-span-2 md:col-span-1 row-span-2 items-center flex"
				>
					<h2>
						<T keyName="project-objectives" defaultValue="Objectives" />
					</h2>
					<ul class="list-disc pl-5">
						{#each project.objectives as objective, i}
							<li class="mb-2 font-light">
								<T keyName="project-objective-{project.slug}-{i}" defaultValue={objective} />
							</li>
						{/each}
					</ul>
				</Box>

				<Box
					show={project !== undefined}
					outerClass="relative p-4 col-span-1 row-span-1 items-center flex"
				>
					<h2>
						<T keyName="project-Tools" defaultValue="Tools" />
					</h2>
					<ul class="list-disc pl-5">
						{#each project.tools as tool}
							<li class="font-light">
								<T keyName="project-tool-{tool}" defaultValue={tool} />
							</li>
						{/each}
					</ul>
				</Box>
				{#if project.solution}
					<Box
						show={project !== undefined}
						outerClass="p-4 col-span-2 md:col-span-2 row-span-1 items-center flex"
					>
						<h2>
							<T keyName="project-Solution" defaultValue="Solution" />
						</h2>
						<p>
							{#each project.solution as text}
								<T keyName="project-text-{text}" defaultValue={text} />
							{/each}
						</p>
					</Box>
				{/if}
				{#if project.comparisonImage}
					<Box
						show={project !== undefined}
						outerClass="relative col-span-2  overflow-hidden md:col-span-3 md:row-span-2 row-span-1 items-center flex"
						innerClass="flex w-full h-full p-px pb-0.5 overflow-hidden"
					>
						<SliderWithHandle
							lowerImage={project.comparisonImage[0].lowerImage}
							upperImage={project.comparisonImage[0].upperImage}
						/>
					</Box>
				{/if}
				{#if project.photoGridPositions}
					{#each project.photoGridPositions as item}
						<div
							style=" grid-row: span {item.rowspan}; grid-column: span {item.colspan}; "
							class=""
						>
							<img src={item.url} alt="" class="block h-full w-full object-contain object-center" />
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</section>
{/if}

<style>
	.grid-gallery {
		display: grid;
		grid-template-columns: repeat(2, minmax(0px, 1fr));
		grid-template-rows: minmax(0, 1fr);
		min-height: 0;
		min-width: 0;
	}
	@media (min-width: 768px) {
		.grid-gallery {
			grid-template-columns: repeat(4, minmax(0px, 1fr));
		}
	}
</style>
