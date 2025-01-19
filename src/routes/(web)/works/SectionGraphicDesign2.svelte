<script lang="ts">
	import { T } from '@tolgee/svelte';

	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLElement | undefined = $state();
	let intersecting: boolean | undefined = $state();
</script>

<IntersectionObserver once threshold={0.5} {element} bind:intersecting>
	<section bind:this={element} id="graphicdesign2" class="relative w-full px-4">
		<div
			class="mx-auto my-auto flex h-works w-full max-w-4xl flex-col items-center justify-center md:h-worksmd md:flex-row"
		>
			<img
				width="448"
				height="640"
				alt="especimen-tipografico"
				class="{intersecting
					? ''
					: '-translate-x-20 opacity-0'} mb-4 h-auto w-1/2 rounded-lg object-contain transition-all duration-500 md:mr-4"
				src="/graphicdesign/especimen-tipografico.webp"
			/>
			<p
				class="{intersecting
					? ''
					: 'translate-x-20 opacity-0'} h-auto w-full text-justify transition-all delay-200 duration-500 md:w-1/2"
			>
				<T
					keyName="works-p-especimen"
					defaultValue="This is a type specimen i made as a project for my university. The idea was to display a font type in a flattering way, in order to capture the essence of the font."
				/>
			</p>
		</div>
	</section>
</IntersectionObserver>
