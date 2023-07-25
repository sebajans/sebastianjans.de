<script lang="ts">
	import T from '@tolgee/svelte/T.svelte'; // change import statement
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';



	let tileOrientation = [
		{ id: 1, rotation: 0 },
		{ id: 2, rotation: 0 },
		{ id: 3, rotation: 0 },
		{ id: 4, rotation: 0 }
	];

	function rotateAll() {
		tileOrientation = tileOrientation.map((tile) => ({
			...tile,
			rotation: Math.floor(Math.random() * 4) * 90
		}));
	}

	let showTiles: boolean = false;
	let rotating: boolean = false;
	let intervalId: any;

	function startAutoRotation() {
		rotating = true;
		intervalId = setInterval(() => {
			rotateAll();
		}, Math.floor(Math.random() * 2000) + 1000);
	}

	function rotateTiles() {
		rotating = !rotating;
		if (rotating) {
			startAutoRotation();
		} else {
			clearInterval(intervalId);
		}
	}
	onMount(() => {
		showTiles = false;
	});

	function showTile() {
		showTiles = !showTiles;
		if (showTiles) {
			startAutoRotation();
		}
	}


	let element: HTMLElement;
  let intersecting:boolean;
</script>


<IntersectionObserver once threshold={0.5} element={element} bind:intersecting={intersecting}
>	
<section bind:this={element} id="graphicdesign-trels" class="px-4 w-full relative flex">
	<div
		class="gap-4 max-w-4xl max-h-[56rem] grid grid-cols-9 grid-rows-12 md:grid-cols-12 md:grid-rows-9 w-full h-works md:h-worksmd mx-auto my-auto "
	>
		<div
			style:background-image="url('/graphicdesign/CeramicTileTitle.svg')"
			class="{intersecting ? '' : 'translate-y-1/3 opacity-0' } transition-all duration-500 bg-no-repeat bg-contain
			col-start-1 row-start-1 col-span-9 row-span-2 md:row-start-1 md:col-start-1  md:col-span-6 md:row-span-2"
		/>

		<p
			class="{intersecting ? '' : 'translate-y-1/3 opacity-0' } transition-all duration-500 delay-150 text-justify text-sm md:text-base col-start-1 row-start-3 col-span-9 row-span-3 md:row-start-3 md:col-start-1 md:col-span-6 md:row-span-4"
		>
			<T
				keyName="works-p-trels"
				defaultValue="This is a an award-winning project for my university. It was created for estacion Norte in Valencia, one of the biggest attractions in the city. The elements incorporate various elements from the inside, the reception area and the tracks-area."
			/>
		</p>
		<div
			class="{intersecting ? '' : 'translate-y-1/3 opacity-0' } transition-all duration-500 delay-300 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center
			col-start-7 row-start-6 col-span-3 row-span-4 md:row-start-6 md:col-start-8  md:col-span-5 md:row-span-1"
		>
			<button on:click={showTile} class="btn standardButton w-full h-fit">
				<!-- {showTiles ? 'show tile' : 'show grid'} -->
				{#if showTiles}
				<T
				keyName="works-trels-show-tile"
				defaultValue="show Tile"
			/>
			{:else}
			<T
			keyName="works-trels-show-grid"
			defaultValue="show grid"
		/>
				{/if}
			</button>
			<button class="btn standardButton w-full h-fit" on:click={rotateTiles}>
				{#if rotating}
				<T
				keyName="works-trels-pause-rotation"
				defaultValue="Pause Rotation"
			/>
			{:else}
			<T
			keyName="works-trels-start-rotation"
			defaultValue="Start Rotation"
		/>
				{/if}
				</button
			>
		</div>
		<div 
			class="{intersecting ? '' : 'translate-y-1/3 opacity-0' } transition-all duration-500 delay-300 h-full w-full object-top col-start-1 row-start-6 col-span-5 row-span-5 md:row-start-1 md:col-start-8  md:col-span-5 md:row-span-5"
		>
			{#if showTiles}
				<div 
				in:fade={{duration: 300, delay: 0}} 
				class="grid grid-cols-2 h-auto w-full grid-rows-2 aspect-square">
					{#each tileOrientation as tile}
						<div class="overflow-clip">
							<div
								style:background-image="url('/graphicdesign/CeramicTileSmall.webp')"
								style="transform: rotate({tile.rotation}deg);"
								class="bg-no-repeat transition-all duration-500 bg-cover h-full w-full"
							/>
						</div>
					{/each}
				</div>
			{:else}
				<div
				in:fade={{duration: 300, delay: 0}} 

				class=" relative md:w-full h-full aspect-square items-start ">
					<img
						width="364"
						height="364"
						alt="single-ceramic-tile"
						class="absolute object-contain h-full"
						src="/graphicdesign/CeramicTile.webp"
					/>
					<div
						style="transform: translateZ(-10px) translateY(200px) rotateY(-5deg) rotateX(90deg)"
						class="bg-gradient-to-t from-primary-800/40 via-primary-800/90 to-primary-800/40 blur-[6px] absolute h-8 z-0 w-full"
					/>
				</div>
			{/if}
		</div>
		<div
			style:background-image="url('/graphicdesign/CeramicTileMockup-1.webp')"
			class="{intersecting ? '' : 'translate-y-1/3 opacity-0' } transition-all duration-500 delay-700 bg-no-repeat bg-cover rounded-md
			col-start-1 row-start-11 col-span-3 row-span-2 md:row-start-7 md:col-start-1  md:col-span-4 md:row-span-3"
		/>
		<div
			style:background-image="url('/graphicdesign/CeramicTileMockup-2.webp')"
			class="{intersecting ? '' : 'translate-y-1/3 opacity-0' } transition-all duration-500 delay-[850ms] bg-no-repeat bg-cover rounded-md
			col-start-4 row-start-11 col-span-3 row-span-2 md:row-start-7 md:col-start-5  md:col-span-4 md:row-span-3"
		/>
		<div
			style:background-image="url('/graphicdesign/CeramicTileMockup-3.webp')"
			class="{intersecting ? '' : 'translate-y-1/3 opacity-0' } transition-all duration-500 delay-1000 bg-no-repeat bg-cover rounded-md
			col-start-7 row-start-11 col-span-3 row-span-2 md:row-start-7 md:col-start-9  md:col-span-4 md:row-span-3"
		/>
	</div>
</section>
</IntersectionObserver>

<style>
	.standardButton {
		@apply items-center justify-center text-center text-primary-900  dark:text-primary-50 dark:from-primary-50/40 dark:to-primary-50/30 from-primary-900/30 to-primary-900/20 dark:border-primary-50/10 border-primary-900/10 font-light  bg-gradient-to-tr box-border py-3.5 px-3 h-auto md:backdrop-blur-sm flex border transition-all ease-in duration-300 rounded-lg hover:from-primary-900/30 hover:to-primary-900/40
				dark:hover:from-primary-50/20 dark:hover:to-primary-50/30 
				hover:border-primary-900/50 dark:hover:border-primary-50/50;
	}
</style>