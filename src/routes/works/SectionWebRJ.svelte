<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';
	import { nightMode } from '$lib/stores/nightMode';
	import WorksHeader from '../../components/WorksHeader.svelte';

	export let scroll: number;
	export let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 0, windowHeight);

	let srcRenaImg1 = 'img/website-rena-front-1.webp';
	let srcRenaImg2 = 'img/website-rena-front-2.webp';
	let srcRenaLogo = '../logos/logo-rj-l.webp';
	let srcRenaLogoDark = '../logos/logo-rj-l-white.webp';
	console.log('loaded');
</script>

<!-- style="background:radial-gradient(at right top, var(--tw-gradient-from) 0%, transparent 30%);" -->
<!-- bg-gradient-to-bl from-primary-200/50 dark:from-primary-700/30 via-transparent to-transparent  -->
<section id="websites" class="flex flex-col relative">
	<div
		class="p-4 h-works md:h-worksmd max-h-[56rem] mx-auto my-auto grid grid-cols-8 grid-rows-12 sm:grid-cols-10 sm:grid-rows-12 gap-6"
	>
		<div
			id="rena-logo"
			style:transform={`translate3d(0,calc(200% - ${sectionScroll}* 200%), 0)`}
			style:background-image={$nightMode ? `url('${srcRenaLogoDark}')` : `url('${srcRenaLogo}')`}
			class="row-[1_/_span_2] col-[1_/_span_4] sm:row-[1_/_span_3] sm:col-[1_/_span_] bg-contain bg-no-repeat bg-top bg-origin-content"
		/>

		<div
			class="row-[3_/_span_6]  col-[2_/_span_7] sm:row-[4_/_span_10] sm:col-[1_/_span_5] w-full h-full flex mx-auto justify-end translate-x-12 md:translate-x-0 z-10"
		>
			<div
				id="rj-browser-window"
				style:transform={`translate3d(0,calc(400% - ${sectionScroll} * 400% ), 0)`}
				class=" h-full w-fit shadow-xl aspect-[14/10] backdrop-blur-sm p-0.5 md:p-1 bg-primary-300/80 dark:bg-primary-600/60 flex flex-col rounded-md md:rounded-lg z-10 "
			>
				<div class="w-full flex flex-row space-x-1 md:space-x-2 md:p-2 p-1">
					{#each Array(3) as _}
						<div class="rounded-full w-2 h-2 md:h-3 md:w-3 bg-primary-50/80 dark:bg-pimary-90/80" />
					{/each}
				</div>
				<img
					width="900"
					height="612"
					alt="website-rena-front-1"
					class="object-cover h-[calc(100%_-_1rem)] md:h-[calc(100%_-_1.75rem)] rounded-md md:rounded-lg"
					src={srcRenaImg1}
				/>
			</div>
		</div>
		<div
			class="row-[5_/_span_5]  col-[1_/_span_5]  sm:row-[1_/_span_8] sm:col-[5_/_span_6] w-full h-full flex mx-auto justify-start sm:justify-start"
		>
			<div
				id="rj-browser-2"
				style:transform={`translate3d(0,calc(40% - 40 * ${sectionScroll}%), 0)`}
				class="h-full w-fit self-center aspect-[14/10] shadow-primary-900/50 shadow-lg backdrop-blur-sm p-0.5 md:p-0.5 bg-primary-400/50 dark:bg-primary-700/50 flex flex-col rounded-lg"
			>
				<div class="relative flex flex-row space-x-1 md:space-x-2 md:p-2 p-1">
					{#each Array(3) as _}
						<div
							class="rounded-full w-1.5 h-1.5 md:h-2.5 md:w-2.5 bg-primary-50/80 dark:bg-pimary-900/80"
						/>
					{/each}
				</div>
				<img
					width="770"
					height="520"
					src={srcRenaImg2}
					alt="website-rena-front-2"
					class="h-[calc(100%_-_1rem)] md:h-[calc(100%_-_1.75rem)] object-cover rounded-lg "
				/>
			</div>
		</div>
		<p
			class="row-[10_/_span_3] col-[1_/_span_8] sm:row-[9_/_span_4] sm:col-[6_/_span_5] h-full w-full self-center text-justify"
			style:transform={`translate3d(0,calc(400% - ${sectionScroll} * 400%), 0)`}
		>
			<T
				keyName="works-p-rj"
				defaultValue="This is the website I created for a make-up stylist. It is primarily aimed at a female audience, so the colour scheme is mainly purple, red and white. The website includes a full-screen front page and a menu bar."
			/>
		</p>
	</div>
</section>
