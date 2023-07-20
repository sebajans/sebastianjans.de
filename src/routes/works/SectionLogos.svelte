<script lang="ts">
	import { onMount } from 'svelte';
	import T from '@tolgee/svelte/T.svelte'; // change import statement

	import { LogoItems } from './logoitems';
	import { settingsState } from '$lib/stores/settingsState';
	import { fly } from 'svelte/transition';

	type m = { x: number; y: number };
	let m = { x: 0, y: 0 };
	let n = { x: 0, y: 0 };
	() => (n = getDivPosition());

	let offset = { x: 0, y: 0 };
	// $: console.log("n: " + n.x + n.y,"offset "+ offset.x + offset.y)
	function handleMousemove(event: any) {
		m.x = event.clientX;
		m.y = event.clientY;
		n = getDivPosition();
		offset.x = Math.round(n.x - m.x);
		offset.y = Math.round(n.y - m.y);
	}
	function getDivPosition() {
		let div: any = document.getElementById('logos');
		let rect = div.getBoundingClientRect();

		type n = { x: number; y: number };
		let n = {
			x: rect.x + rect.width / 2,
			y: rect.y + rect.height / 2
		};
		return n;
	}

	onMount(() => {
		let n = getDivPosition();
		return n;
	});

	let activeNumber: number = -1;
</script>

<!-- style="background:radial-gradient(at right top, var(--tw-gradient-from) 0%, transparent 30%), radial-gradient(at left bottom, var(--tw-gradient-from) 0%, transparent 30%); "
bg-gradient-to-bl from-primary-300/50 dark:from-primary-600/30  -->
<section
	on:mousemove={handleMousemove}
	on:keydown={() => (activeNumber = -1)}
	on:click={() => (activeNumber = -1)}
	id="logodesign"
	class="flex flex-col"
>
	<div
		class="relative my-auto mx-auto h-works md:h-worksmd max-w-4xl w-full  flex flex-col md:flex-row items-center justify-center"
	>
		<p class="max-w-4xl box-content my-4 px-3 text-left sm:w-2/5">
			<T
				keyName="logo-design-paragraph"
				defaultValue="These logotypes show some of my previous logo design works."
			/>
		</p>
		<div
			class=" w-full"
			style:transform={`translate3d(calc(0.05*${offset.x}px), calc(0.05*${offset.y}px), 0)`}
		>
			<div
				id="logos"
				on:keydown|stopPropagation
				on:click|stopPropagation
				class="logo-main {activeNumber === -1
					? ''
					: 'scale-75 translate-x-20 opacity-30 !blur-[2px] pointer-events-none'} transform max-h-[calc(100vh_-_5.5rem)] aspect-square group w-full max-w-3/5 gap-5 grid grid-rows-3 grid-cols-3 justify-center items-center transition-all duration-300"
			>
				{#each LogoItems as logo, i}
					<!-- {#each (LogoItems.sort(() => Math.random())) as logo, i} -->
					<!-- in:fly|global={{delay: i*50, y: 20, duration: 50}}  -->
					<div class="logo-individual flex justify-center items-center transition-all duration-200">
						<button
							on:keydown
							on:click={() => (activeNumber = i)}
							style:background-image={$settingsState.darkMode
								? `url('${logo.imageDark}')`
								: `url('${logo.image}')`}
							class="bg-contain bg-no-repeat bg-center bg-origin-content w-full max-w-[120px] md:max-w-[160px] aspect-square p-2 duration-200 transition-all"
						/>
					</div>
				{/each}
				<!-- </div> -->
			</div>
		</div>

		{#if LogoItems[activeNumber]}
			<div
				on:keydown|stopPropagation
				on:click|stopPropagation
				transition:fly|global={{ x: -300, duration: 300 }}
				class="{LogoItems[activeNumber]
					? 'translate-x-0'
					: 'translate-x-full'} max-h-[calc(100vh_-_5.5rem)] rounded-r-xl md:rounded-xl shadow-primary-900/30 shadow-md bg-primary-300 dark:bg-primary-600 absolute flex flex-col w-4/5 md:w-3/5  h-4/5 p-4 items-center justify-between left-0 md:right-2/5"
			>
				<div
					style:background-image={$settingsState.darkMode
						? `url('${LogoItems[activeNumber].imageDark}')`
						: `url('${LogoItems[activeNumber].image}')`}
					class=" bg-contain bg-no-repeat bg-center bg-origin-content h-1/2 aspect-square p-2 md:p-4 duration-200 transition-all my-auto"
				/>
				<div class="pb-4">
					<h2 class="font-sans text-3xl text-center pb-2">
						{LogoItems[activeNumber].title}
					</h2>
					<p class="text-center">
						{LogoItems[activeNumber].text}
					</p>
				</div>

				<button
					class="absolute z-20 group top-4 right-4 h-6 w-6 group font-sans hover:text-primary-500"
					on:click={() => (activeNumber = -1)}
				>
					<span
						class="transition-all transform group-hover:rotate-[135deg] rotate-45 block h-0.5 w-6 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 duration-250 "
					/>
					<span
						class="transition-all transform -rotate-45 group-hover:rotate-45 -translate-y-0.5 block h-0.5 w-6 group-hover:bg-primary-600 dark:group-hover:bg-primary-100 bg-primary-900 dark:bg-primary-400 duration-250 "
					/>
				</button>
			</div>
		{/if}
	</div>
</section>

<style>
	.logo-main:hover .logo-individual {
		@apply blur-[2px] opacity-60 scale-90;
	}
	.logo-main .logo-individual:hover {
		@apply blur-0 opacity-100 scale-100;
	}
</style>
