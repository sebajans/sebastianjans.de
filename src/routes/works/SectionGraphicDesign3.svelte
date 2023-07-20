<script lang="ts">
	import T from '@tolgee/svelte/T.svelte'; // change import statement
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';


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
</script>

<section id="graphicdesign-trels" class="px-4 w-full relative flex ">
	<div
		class="gap-4 max-w-4xl max-h-[56rem] grid grid-cols-9 grid-rows-12 md:grid-cols-12 md:grid-rows-9 w-full h-works md:h-worksmd mx-auto my-auto "
	>
		<div
			style:background-image="url('/graphicdesign/CeramicTileTitle.svg')"
			class="bg-no-repeat bg-contain
			col-start-1 row-start-1 col-span-9 row-span-2 md:row-start-1 md:col-start-1  md:col-span-6 md:row-span-2"
		/>

		<p
			class="text-justify text-sm md:text-base col-start-1 row-start-3 col-span-9 row-span-5 md:row-start-3 md:col-start-1 md:col-span-6 md:row-span-4"
		>
			<T
				keyName="works-p-trels"
				defaultValue="This is a an award-winning project for my university. It was created for estacion Norte in Valencia, one of the biggest attractions in the city. The elements incorporate various elements from the inside, the reception area and the tracks-area."
			/>
		</p>
		<div
			class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center
			col-start-7 row-start-6 col-span-3 row-span-4 md:row-start-6 md:col-start-8  md:col-span-5 md:row-span-1"
		>
			<button on:click={showTile} class="btn btn-highlight w-full h-fit">
				{showTiles ? 'Show Tile' : 'Show Grid'}
			</button>
			<button class="btn btn-highlight w-full h-fit" on:click={rotateTiles}>
				{rotating ? 'Pause Rotation' : 'Start Rotation'}</button
			>
		</div>
		<div
			class="h-full w-full col-start-1 row-start-6 col-span-5 row-span-5 md:row-start-1 md:col-start-8  md:col-span-5 md:row-span-5"
		>
			{#if showTiles}
				<div 
				in:fade={{duration: 300, delay: 0}} 
				class="grid grid-cols-2 w-full grid-rows-2 aspect-square">
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

				class=" relative w-full aspect-square items-start ">
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
			class="bg-no-repeat bg-cover rounded-md
			col-start-1 row-start-11 col-span-3 row-span-2 md:row-start-7 md:col-start-1  md:col-span-4 md:row-span-3"
		/>
		<div
			style:background-image="url('/graphicdesign/CeramicTileMockup-2.webp')"
			class="bg-no-repeat bg-cover rounded-md
			col-start-4 row-start-11 col-span-3 row-span-2 md:row-start-7 md:col-start-5  md:col-span-4 md:row-span-3"
		/>
		<div
			style:background-image="url('/graphicdesign/CeramicTileMockup-3.webp')"
			class="bg-no-repeat bg-cover rounded-md
			col-start-7 row-start-11 col-span-3 row-span-2 md:row-start-7 md:col-start-9  md:col-span-4 md:row-span-3"
		/>
	</div>
</section>
