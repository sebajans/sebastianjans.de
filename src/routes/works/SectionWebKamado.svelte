<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';
	import { nightMode } from '$lib/stores/nightMode';

	export let scroll: number;
	export let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 1, windowHeight);

	let srcKamadoLogoDark = '/logos/logo-kamadob10-white.webp';
	let srcKamadoLogo = '/logos/logo-kamadob10.webp';
	let srcKamadoMobile = 'img/website-kamadob10-front-mobile.webp';
	let srcKamadoFront = 'img/website-kamadob10-front.webp';
</script>

<section id="kamadoB10" class="relative flex w-full flex-col items-center justify-center">
	<div
		class="grid h-works md:h-worksmd max-h-[56rem] w-full grid-cols-8 grid-rows-12 gap-6 px-3 md:grid-cols-10 md:grid-rows-12"
	>
		<div
			id="kb10-logo"
			style:transform={`translate3d(0,calc(80% - ${sectionScroll}* 80%), 0)`}
			style:background-image={$nightMode
				? `url('${srcKamadoLogoDark}')`
				: `url('${srcKamadoLogo}')`}
			class="col-[5_/_span_4] row-[1_/_span_2] h-full w-full bg-contain bg-left-bottom bg-no-repeat bg-origin-content md:col-[5_/_span_6] md:row-[1_/_span_2]"
		/>
		<!-- PHONE -->
		<div
			class="col-[7_/_span_2] row-[3_/_span_10] flex h-full w-full justify-start md:justify-end md:col-[1_/_span_4] md:row-[1_/_span_12] "
		>
			<div
				id="kb10-browser-phone"
				style:transform={`translate3d(calc(-100% + 100 * ${sectionScroll}%),0, 0)`}
				class="relative z-10 aspect-[10/19.6] h-full max-h-[40rem]  w-auto self-center
			rounded-xl bg-primary-200/80 shadow-xl shadow-primary-800/40 backdrop-blur-sm dark:bg-primary-700/60 md:rounded-3xl"
			>
				<img
					width="320"
					height="584"
					alt="website-kamadob10-front-mobile"
					class="h-[calc(100%_-_2.75rem)] mx-auto rounded-t-[0.75rem] object-cover object-top px-0.5 pt-0.5 md:h-[calc(100%_-_3.25rem)] md:rounded-t-[1.25rem] md:px-1 md:pt-1"
					src={srcKamadoMobile}
				/>
				<div class="relative mt-2 mb-2 flex flex-row space-x-2 md:mb-3">
					<div class="dark:bg-pimary-90/80 h-5 w-1 rounded-r-full bg-primary-50/80 md:h-6" />
					<span
						class="dark:bg-pimary-90/80 h-5 w-full rounded-md bg-primary-50/80 p-0.5 text-center font-sans text-xs text-primary-900/80 shadow-lg md:h-6 md:text-sm"
					>
						kamadob10.eu
					</span>
					<div class="dark:bg-pimary-90/80 h-5 w-1 rounded-l-full bg-primary-50/80 md:h-6" />
				</div>
				<div
					class="absolute bottom-1 left-1/2 h-0.5 w-2/5 -translate-x-1/2 self-center rounded-full bg-primary-50/80 md:h-1"
				/>
			</div>
		</div>
		<!-- BROSWER -->
		<div
			class="col-[1_/_span_6] row-[1_/_span_8] flex h-full w-full -translate-x-1/3 justify-end md:justify-start md:col-[4_/_span_6] md:row-[6_/_span_7] md:translate-x-0"
		>
			<div
				id="kb10-browser-front"
				style:transform={`translate3d(0,calc(100% - 100 * ${sectionScroll}%), 0)`}
				class="h-full w-fit self-center aspect-[13/10] shadow-primary-900/30 shadow-md backdrop-blur-sm p-0.5 md:p-0.5 bg-primary-400/50 dark:bg-primary-700/50 flex flex-col rounded-lg"
			>
				<div class="relative flex flex-row space-x-1 p-1 md:space-x-2 md:p-2">
					{#each Array(3) as _}
						<div class="dark:bg-pimary-90/80 h-2 w-2 rounded-full bg-primary-50/80 md:h-3 md:w-3" />
					{/each}
				</div>
				<img
					width="688"
					height="462"
					alt="website-kamado-front"
					class="h-[calc(100%_-_1rem)] rounded-lg object-cover md:h-[calc(100%_-_1.75rem)]"
					src={srcKamadoFront}
				/>
			</div>
		</div>

		<p
			class="col-[1_/_span_6] row-[10_/_span_3] text-justify md:col-[5_/_span_6]  md:row-[3_/_span_3]"
			style:transform={`translate3d(calc(200% - ${sectionScroll} * 200%),0, 0)`}
		>
			<T
				keyName="works-p-kamado"
				defaultValue="This website was for my former employer, who produces high-end handmade kamado grills. The objective for this website to appeal to high-end customers and highlight the USPs."
			/>
		</p>
	</div>
</section>
<!-- before:h-4 before:rounded-b-md before:w-1/2 before:bg-primary-700/70 before:backdrop-blur-xl before:absolute before:mt-1 before:left-1/2 before:-translate-x-1/2  -->
