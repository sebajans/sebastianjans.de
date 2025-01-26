<script lang="ts">
	import { T } from '@tolgee/svelte'; // change import statement
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLElement | undefined = $state();
	let intersecting: boolean | undefined = $state();
</script>

<IntersectionObserver once threshold={0.5} {element} bind:intersecting>
	<section bind:this={element} id="graphicdesign" class="flex flex-col items-end">
		<div
			class="h-works md:h-worksmd mx-auto my-auto grid max-h-[38rem] w-full max-w-4xl grid-cols-9 grid-rows-12 gap-6 px-4 md:grid-cols-12 md:grid-rows-9"
		>
			<div
				class="{intersecting
					? ''
					: '-translate-x-20 translate-y-12  opacity-0'} col-[1_/_span_7] row-[4_/_span_6] w-full transition-all delay-200 duration-500 md:col-[1_/_span_6] md:row-[1_/_span_5]"
			>
				<img
					width="420"
					height="390"
					alt="graphic-design-shirts"
					class="rounded-lg object-contain"
					src="/graphicdesign/graphic-shirts.svg"
				/>
			</div>
			<div
				class="{intersecting
					? ''
					: 'translate-y-10  opacity-0'} col-[1_/_span_9] row-[9_/_span_3] w-full self-center transition-all delay-200 duration-500 md:col-[3_/_span_9] md:row-[6_/_span_6]"
			>
				<img
					width="642"
					height="388"
					class="scale-125 md:scale-100"
					alt="graphic-design-table"
					src="/graphicdesign/graphic-table.svg"
				/>
			</div>
			<div
				class="{intersecting
					? ''
					: '-translate-y-6 translate-x-12  opacity-0'} z-10 col-[2_/_span_4] row-[7_/_span_5] w-full self-center transition-all delay-500 duration-700 md:col-[4_/_span_4] md:row-[6_/_span_4] md:self-start"
			>
				<img
					width="272"
					height="116"
					alt="graphic-design-innerside"
					class="self-start rounded-lg object-contain"
					src="/graphicdesign/graphic-innerside.webp"
				/>
			</div>
			<div
				class="{intersecting
					? ''
					: '-translate-x-16 translate-y-8  opacity-0'} z-11 col-[6_/_span_3] row-[5_/_span_5] w-full self-end transition-all delay-500 duration-1000 sm:self-end md:col-[8_/_span_3] md:row-[4_/_span_4]"
			>
				<img
					width="198"
					height="208"
					alt="graphic-design-outerside"
					class="rounded-lg object-contain"
					src="/graphicdesign/graphic-outerside.webp"
				/>
			</div>
			<p
				class="{intersecting
					? ''
					: 'translate-x-20  opacity-0'} col-[1_/_span_9] row-[1_/_span_3] box-content h-min transform text-justify transition-all delay-500 duration-700 md:col-[8_/_span_5] md:row-[1_/_span_2]"
			>
				<T
					keyName="works-p-fachschaft"
					defaultValue="This flyer was made for my student union in order to attract more people into the world of materials science. The University branding guidelines "
				/>
			</p>
		</div>
	</section>
</IntersectionObserver>
