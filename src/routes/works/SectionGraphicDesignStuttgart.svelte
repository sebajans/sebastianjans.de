<script lang="ts">
	import T from '@tolgee/svelte/T.svelte'; // change import statement
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

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
	{#if intersecting}
	<div 
	in:fly|global={{x: -100, y: 75, duration: 500, delay: 200, easing: cubicOut}}
	out:fly|global={{ x: -100, y: -75, duration: 500, delay: 100, easing: cubicOut}}
			class="md:row-[1_/_span_5] md:col-[1_/_span_6] row-[4_/_span_6] col-[1_/_span_7] w-full"
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
		in:fly|global={{ y: 50, duration: 500, delay: 200, easing: cubicOut}}
		out:fly|global={{  y: -50, duration: 500, delay: 100, easing: cubicOut}}
			class="self-center row-[9_/_span_3] col-[1_/_span_9] w-full md:row-[6_/_span_6] md:col-[3_/_span_9]"
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
		in:fly|global={{x: -100, y: 50, duration: 800, delay: 500, easing: cubicOut}}
		out:fly|global={{ y: -50, duration: 500, delay: 0, easing: cubicOut}}

			class="row-[7_/_span_5] z-10 col-[2_/_span_4] md:row-[6_/_span_4] md:col-[4_/_span_4] w-full self-center md:self-start"
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
		in:fly|global={{x: 100, y: 50, duration: 800, delay: 500, easing: cubicOut}}
		out:fly|global={{ y: -100, duration: 500, delay: 0, easing: cubicOut}}
			class="row-[5_/_span_5] z-10 self-end col-[6_/_span_3] md:row-[4_/_span_4] md:col-[8_/_span_3] w-full sm:self-end"
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
		in:fly|global={{x: 200, duration: 800, delay: 500, easing: cubicOut}}
		out:fly|global={{ x: 200, duration: 500, delay: 100, easing: cubicOut}}
			class="row-[1_/_span_3] col-[1_/_span_9] h-min box-content transform md:row-[1_/_span_2] md:col-[8_/_span_5] text-justify"
		>
			<T
				keyName="works-p-fachschaft"
				defaultValue="This flyer was made for my student union in order to attract more people into the world of materials science. The University branding guidelines "
			/>
		</p>
		{/if}

	</div>
</section>

</IntersectionObserver>
