<script lang="ts">
	import { T } from '@tolgee/svelte'; // change import statement
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let tileOrientation = $state([
		{ id: 1, rotation: 0 },
		{ id: 2, rotation: 0 },
		{ id: 3, rotation: 0 },
		{ id: 4, rotation: 0 }
	]);

	function rotateAll() {
		tileOrientation = tileOrientation.map((tile) => ({
			...tile,
			rotation: Math.floor(Math.random() * 4) * 90
		}));
	}

	let showTiles: boolean = $state(false);
	let rotating: boolean = $state(false);
	let intervalId: any;

	function startAutoRotation() {
		rotating = true;
		intervalId = setInterval(
			() => {
				rotateAll();
			},
			Math.floor(Math.random() * 2000) + 1000
		);
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

	let element: HTMLElement | undefined = $state();
	let intersecting: boolean | undefined = $state();
</script>

<IntersectionObserver once threshold={0.5} {element} bind:intersecting>
	<section bind:this={element} id="graphicdesign-trels" class="relative flex w-full px-4">
		<div
			class="h-works md:h-worksmd mx-auto my-auto grid max-h-[56rem] w-full max-w-4xl grid-cols-9 grid-rows-12 gap-4 md:grid-cols-12 md:grid-rows-9"
		>
			<div
				style:background-image="url('/graphicdesign/CeramicTileTitle.svg')"
				class="{intersecting
					? ''
					: 'translate-y-1/3 opacity-0'} col-span-9 col-start-1 row-span-2 row-start-1
			bg-contain bg-no-repeat transition-all duration-500 md:col-span-6 md:col-start-1 md:row-span-2 md:row-start-1"
			></div>

			<p
				class="{intersecting
					? ''
					: 'translate-y-1/3 opacity-0'} col-span-9 col-start-1 row-span-3 row-start-3 text-justify text-sm transition-all delay-150 duration-500 md:col-span-6 md:col-start-1 md:row-span-4 md:row-start-3 md:text-base"
			>
				<T
					keyName="works-p-trels"
					defaultValue="This is a an award-winning project for my university. It was created for estacion Norte in Valencia, one of the biggest attractions in the city. The elements incorporate various elements from the inside, the reception area and the tracks-area."
				/>
			</p>
			<div
				class="{intersecting
					? ''
					: 'translate-y-1/3 opacity-0'} col-span-3 col-start-7 row-span-4 row-start-6 flex flex-col items-center space-y-4 transition-all delay-300
			duration-500 md:col-span-5 md:col-start-8 md:row-span-1 md:row-start-6 md:flex-row md:space-y-0 md:space-x-4"
			>
				<button onclick={showTile} class="btn standardButton h-fit w-full">
					<!-- {showTiles ? 'show tile' : 'show grid'} -->
					{#if showTiles}
						<T keyName="works-trels-show-tile" defaultValue="show Tile" />
					{:else}
						<T keyName="works-trels-show-grid" defaultValue="show grid" />
					{/if}
				</button>
				<button class="btn standardButton h-fit w-full" onclick={rotateTiles}>
					{#if rotating}
						<T keyName="works-trels-pause-rotation" defaultValue="Pause Rotation" />
					{:else}
						<T keyName="works-trels-start-rotation" defaultValue="Start Rotation" />
					{/if}
				</button>
			</div>
			<div
				class="{intersecting
					? ''
					: 'translate-y-1/3 opacity-0'} col-span-5 col-start-1 row-span-5 row-start-6 h-full w-full object-top transition-all delay-300 duration-500 md:col-span-5 md:col-start-8 md:row-span-5 md:row-start-1"
			>
				{#if showTiles}
					<div
						in:fade={{ duration: 300, delay: 0 }}
						class="grid aspect-square h-auto w-full grid-cols-2 grid-rows-2"
					>
						{#each tileOrientation as tile}
							<div class="overflow-clip">
								<div
									style:background-image="url('/graphicdesign/CeramicTileSmall.webp')"
									style="transform: rotate({tile.rotation}deg);"
									class="h-full w-full bg-cover bg-no-repeat transition-all duration-500"
								></div>
							</div>
						{/each}
					</div>
				{:else}
					<div
						in:fade={{ duration: 300, delay: 0 }}
						class=" relative aspect-square h-full items-start md:w-full"
					>
						<img
							width="364"
							height="364"
							alt="single-ceramic-tile"
							class="absolute h-full object-contain"
							src="/graphicdesign/CeramicTile.webp"
						/>
						<div
							style="transform: translateZ(-10px) translateY(200px) rotateY(-5deg) rotateX(90deg)"
							class="from-primary-800/40 via-primary-800/90 to-primary-800/40 absolute z-0 h-8 w-full bg-linear-to-t blur-[6px]"
						></div>
					</div>
				{/if}
			</div>
			<div
				style:background-image="url('/graphicdesign/CeramicTileMockup-1.webp')"
				class="{intersecting
					? ''
					: 'translate-y-1/3 opacity-0'} col-span-3 col-start-1 row-span-2 row-start-11 rounded-md bg-cover
			bg-no-repeat transition-all delay-700 duration-500 md:col-span-4 md:col-start-1 md:row-span-3 md:row-start-7"
			></div>
			<div
				style:background-image="url('/graphicdesign/CeramicTileMockup-2.webp')"
				class="{intersecting
					? ''
					: 'translate-y-1/3 opacity-0'} col-span-3 col-start-4 row-span-2 row-start-11 rounded-md bg-cover
			bg-no-repeat transition-all delay-[850ms] duration-500 md:col-span-4 md:col-start-5 md:row-span-3 md:row-start-7"
			></div>
			<div
				style:background-image="url('/graphicdesign/CeramicTileMockup-3.webp')"
				class="{intersecting
					? ''
					: 'translate-y-1/3 opacity-0'} col-span-3 col-start-7 row-span-2 row-start-11 rounded-md bg-cover
			bg-no-repeat transition-all delay-1000 duration-500 md:col-span-4 md:col-start-9 md:row-span-3 md:row-start-7"
			></div>
		</div>
	</section>
</IntersectionObserver>
