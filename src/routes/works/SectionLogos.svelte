
<script type="ts">
  import { T } from '@tolgee/svelte';
  import { scrollInSection } from '../../components/scrollInSection'
	import { LogoItems } from './logoitems';

  let scroll:number = 0
  let windowHeight:number
  $: sectionScroll = scrollInSection(scroll, 3, windowHeight)
  let srcRenaImg1 = 'img/website-rena-front-1.webp';
	let srcRenaImg2 = 'img/website-rena-front-2.webp';
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="logodesign"
	class="bg-primary-300/20 w-full relative h-screen h-screen-ios p-7 overflow-hidden"
>
	<!-- on:exitViewport={() => (showLogoDesign = false)} -->
		<!-- {scroll <= sectionLogos
			? ''
			: 'opacity-0'}  -->
	<h1
		class="
			transition-all duration-75 font-sans py-4 text-4xl"
	>
		Logo Design
	</h1>
	<p class="pb-4">
		<T
			keyName="logo-design-paragraph"
			defaultValue="These logotypes show some of my previous logo design works."
		/>
	</p>
	<div class=" h-full w-full grid grid-rows-3 gap-y-10">
		<div class="relative flex space-x-10 -translate-x-[100vw] w-full ">
			{#each LogoItems.sort(() => 0.5 - Math.random()) as logo}
				<div
					class="{logo.class} transform animate-zerotohundred bg-contain bg-no-repeat bg-center bg-origin-content rounded-lg shadow-md h-full aspect-square w-full md:w-[30vh] md:h-[30vh] p-2 md:p-8"
				/>
			{/each}
		</div>
		<!-- in:fly={{ x: 15, duration: 400, delay: 500 }} -->
		<div class="relative flex space-x-10 translate-x-[-100vw]">
			{#each LogoItems.sort(() => 0.55 - Math.random()) as logo}
				<div
					class="{logo.class} transform animate-hundredtozero bg-contain bg-no-repeat bg-center bg-origin-content rounded-lg shadow-md h-full aspect-square w-full md:w-[30vh] md:h-[30vh] p-2 md:p-8"
				/>
			{/each}
		</div>
		<!-- in:fly={{ x: -50, duration: 400, delay: 1000 }} -->
		<div class="relative flex space-x-10 -translate-x-[100vw]">
			{#each LogoItems.sort(() => 0.45 - Math.random()) as logo}
				<div
					class="{logo.class} transform animate-zerotohundred bg-contain bg-no-repeat bg-center bg-origin-content rounded-lg shadow-md h-full aspect-square w-full md:w-[30vh] md:h-[30vh] p-2 md:p-8"
				/>
			{/each}
		</div>
	</div>
</section>