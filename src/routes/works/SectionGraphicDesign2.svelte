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
	<section bind:this={element} id="graphicdesign2" class="px-4 w-full relative">
	<div
		class="max-w-4xl flex w-full h-works md:h-worksmd md:flex-row mx-auto flex-col my-auto items-center justify-center"
	>
	{#if intersecting}

		<img
		in:fly|global={{ x: -200, duration: 500, delay: 0, easing: cubicOut}}
			width="448"
			height="640"
			alt="especimen-tipografico"
			class="mb-4 md:mr-4 object-contain rounded-lg w-1/2 h-auto"
			src="/graphicdesign/especimen-tipografico.webp"
		/>
		<p 
		in:fly|global={{ x: 200, duration: 500, delay: 300, easing: cubicOut}}

		class=" h-auto w-full md:w-1/2 text-justify">
			<T
				keyName="works-p-especimen"
				defaultValue="This is a type specimen i made as a project for my university. The idea was to display a font type in a flattering way, in order to capture the essence of the font."
			/>
		</p>
		{/if}

	</div>
</section>
</IntersectionObserver>
