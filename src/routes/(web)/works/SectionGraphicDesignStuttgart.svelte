<script lang="ts">
	import { T } from '@tolgee/svelte'; // change import statement
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLElement;
  let intersecting:boolean;
</script>

<IntersectionObserver once threshold={0.5} element={element} bind:intersecting={intersecting}
>	

<section bind:this={element} id="graphicdesign" class="flex flex-col items-end ">
	<div
		class="w-full px-4 max-w-4xl max-h-[38rem]  h-works md:h-worksmd mx-auto my-auto grid grid-cols-9 grid-rows-12 md:grid-cols-12 md:grid-rows-9 gap-6"
	>
	<div 
			class="{intersecting ? '' : '-translate-x-20 translate-y-12  opacity-0' } transition-all duration-500 delay-200 md:row-[1_/_span_5] md:col-[1_/_span_6] row-[4_/_span_6] col-[1_/_span_7] w-full"
		>
			<img
				width="420"
				height="390"
				alt="graphic-design-shirts"
				class="object-contain rounded-lg"
				src="/graphicdesign/graphic-shirts.svg"
			/>
		</div>
		<div
			class="{intersecting ? '' : 'translate-y-10  opacity-0' } transition-all duration-500 delay-200 self-center row-[9_/_span_3] col-[1_/_span_9] w-full md:row-[6_/_span_6] md:col-[3_/_span_9]"
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

			class="{intersecting ? '' : 'translate-x-12 -translate-y-6  opacity-0' } transition-all duration-700 delay-500 row-[7_/_span_5] z-10 col-[2_/_span_4] md:row-[6_/_span_4] md:col-[4_/_span_4] w-full self-center md:self-start"
		>
			<img
				width="272"
				height="116"
				alt="graphic-design-innerside"
				class="object-contain self-start rounded-lg"
				src="/graphicdesign/graphic-innerside.webp"
			/>
		</div>
		<div
			class="{intersecting ? '' : '-translate-x-16 translate-y-8  opacity-0' } transition-all duration-1000 delay-500 row-[5_/_span_5] z-[11] self-end col-[6_/_span_3] md:row-[4_/_span_4] md:col-[8_/_span_3] w-full sm:self-end"
		>
			<img
				width="198"
				height="208"
				alt="graphic-design-outerside"
				class="object-contain rounded-lg"
				src="/graphicdesign/graphic-outerside.webp"
			/>
		</div>
		<p
			class="{intersecting ? '' : 'translate-x-20  opacity-0' } transition-all duration-700 delay-500 row-[1_/_span_3] col-[1_/_span_9] h-min box-content transform md:row-[1_/_span_2] md:col-[8_/_span_5] text-justify"
		>
			<T
				keyName="works-p-fachschaft"
				defaultValue="This flyer was made for my student union in order to attract more people into the world of materials science. The University branding guidelines "
			/>
		</p>

	</div>
</section>

</IntersectionObserver>
