<script lang="ts">
	import { T } from '@tolgee/svelte'; // change import statement
	import IntersectionObserver from 'svelte-intersection-observer';

	import CupholderModel from './product-items/CupholderModel.svelte';
	import CupHolderModelClose from './product-items/CupHolderModelClose.svelte';

	let zoomIn: boolean = $state(false);

	let element1: HTMLElement | undefined = $state();
	let intersecting1: boolean | undefined = $state();
	let element2: HTMLElement | undefined = $state();
	let intersecting2: boolean | undefined = $state();
	let element3: HTMLElement | undefined = $state();
	let intersecting3: boolean | undefined = $state();
	let element4: HTMLElement | undefined = $state();
	let intersecting4: boolean | undefined = $state();
	let element5: HTMLElement | undefined = $state();
	let intersecting5: boolean | undefined = $state();
	let element6: HTMLElement | undefined = $state();
	let intersecting6: boolean | undefined = $state();
	let element7: HTMLElement | undefined = $state();
	let intersecting7: boolean | undefined = $state();
</script>

<!-- style="background:radial-gradient(at left bottom, var(--tw-gradient-from) 0%, transparent 30%);"
bg-linear-to-bl from-primary-500/50 -->

<section id="productdesign" class="relative flex max-h-screen flex-col justify-center px-4">
	<div
		class="!md:h-worksmd h-works flex max-h-[56rem] w-full flex-row-reverse items-center justify-center md:flex-row"
	>
		<div
			class="grid h-full w-full max-w-4xl grid-cols-9 grid-rows-12 items-center justify-center gap-4 sm:w-full md:grid-cols-12 md:grid-rows-9 md:gap-5"
		>
			<IntersectionObserver
				once
				threshold={0.2}
				element={element1}
				bind:intersecting={intersecting1}
			>
				<div
					bind:this={element1}
					class="
			col-span-3 col-start-1 row-span-2
			row-start-1 h-full w-full overflow-hidden rounded-md md:col-span-4
			md:row-span-3"
				>
					<img
						width="222"
						height="275"
						src="/productdesign/cupholder/Cupholder_compressed.webp"
						alt="The cupholder in the compressed form"
						class="{intersecting1
							? ''
							: 'translate-y-1/2 opacity-0'} h-full w-full rounded-md object-contain sepia transition-all delay-250 duration-500"
					/>
				</div>
			</IntersectionObserver>
			<IntersectionObserver
				once
				threshold={0.2}
				element={element2}
				bind:intersecting={intersecting2}
			>
				<div
					bind:this={element2}
					class=" {intersecting2 ? '' : '-translate-x-1/2 opacity-0'}
				from-primary-500 to-primary-500/20 dark:to-primary-100/70 col-span-3 col-start-1 row-span-3
			row-start-3 h-full w-full overflow-hidden rounded-md bg-linear-to-tr
			 transition-all delay-150 duration-500 md:col-span-4 md:row-span-6"
				>
					<img
						width="222"
						height="570"
						src="/productdesign/cupholder/1_cupholder-frontal-full.webp"
						alt="The cupholder fully extended, showing the LED indicator"
						class="   h-full w-full object-cover sepia"
					/>
				</div>
			</IntersectionObserver>
			<IntersectionObserver
				once
				threshold={0.2}
				element={element3}
				bind:intersecting={intersecting3}
			>
				<div
					bind:this={element3}
					class="{intersecting3
						? ''
						: 'translate-y-1/2 opacity-0'} col-span-6 col-start-4 row-span-5 row-start-1 h-full w-full
			 overflow-hidden transition-all delay-150 duration-500 md:col-span-8 md:col-start-5 md:row-span-2 md:row-start-1"
				>
					<h1 class="text-left font-sans text-2xl font-bold md:pb-4 md:text-4xl">
						<T keyName="Cupholder-title" defaultValue="Cupholder" />
					</h1>
					<p class="text-left text-sm">
						<T
							keyName="Cupholder-text"
							defaultValue="A smart, modern Cupholder with an included heating element. It also features a telescope and a diaphragm mechanism for the part that holds the bottle."
						/>
					</p>
				</div>
			</IntersectionObserver>
			<IntersectionObserver
				once
				threshold={0.2}
				element={element4}
				bind:intersecting={intersecting4}
			>
				<div
					bind:this={element4}
					id="center"
					class="{intersecting4
						? ''
						: 'translate-y-1/2 opacity-0'} from-primary-500 to-primary-500/20 dark:to-primary-100/70 col-span-5 col-start-5 row-span-3
			row-start-6 aspect-auto h-full overflow-hidden rounded-md bg-linear-to-tl transition-all delay-150 duration-500 md:col-span-5 md:col-start-5 md:row-span-4 md:row-start-3"
				>
					<img
						width="282"
						height="373"
						src="/productdesign/cupholder/cupholder51.webp"
						alt=""
						class="h-full w-full rounded-md object-cover object-center sepia"
					/>
				</div>
			</IntersectionObserver>
			<IntersectionObserver
				once
				threshold={0.2}
				element={element5}
				bind:intersecting={intersecting5}
			>
				<div
					bind:this={element5}
					id="bottom-center"
					class="{intersecting5
						? ''
						: 'translate-y-1/2 opacity-0'} from-primary-500 to-primary-500/20 dark:to-primary-100/70 col-span-4 col-start-1 row-span-3
			row-start-6 h-full w-full overflow-hidden rounded-md bg-linear-to-tr transition-all delay-150
			 duration-500 md:col-span-3 md:col-start-5 md:row-span-3 md:row-start-7"
				>
					<img
						width="161"
						height="275"
						src="/productdesign/cupholder/render-4.webp"
						alt=""
						class="h-full w-full object-cover brightness-200 sepia"
					/>
				</div>
			</IntersectionObserver>
			<IntersectionObserver
				once
				threshold={0.2}
				element={element6}
				bind:intersecting={intersecting6}
			>
				<div
					bind:this={element6}
					class="{intersecting6
						? ''
						: 'translate-y-1/2 opacity-0'} relative col-span-4 col-start-6 row-span-4 row-start-9 h-full
			 w-full rounded-md transition-all delay-150 duration-500 md:col-span-3 md:col-start-10 md:row-span-4
			  md:row-start-3"
				>
					<CupholderModel
						onclick={() => (zoomIn = false)}
						imgClass="{zoomIn
							? 'opacity-50'
							: 'opacity-100'} transition-all duration-300 w-full h-full p-1 object-top object-contain text-primary-900 dark:text-primary-50"
					/>
					<button
						aria-label="Zoom in"
						onclick={() => (zoomIn = !zoomIn)}
						class="{zoomIn
							? ''
							: 'animate-ping'} border-primary-900 bg-primary-50/50 dark:border-primary-50 dark:bg-primary-900/50 absolute top-[7%] left-[6%] h-6 w-6 rounded-full border-[0.5px]"
					></button>
					<CupHolderModelClose
						imgClass="{zoomIn
							? 'opacity-100 w-24 h-24'
							: 'opacity-0 w-5 h-5'} pointer-events-none left-[8.5%] top-[8.7%] border transition-all duration-300 aspect-square rounded-full bg-primary-50 dark:bg-primary-900 absolute object-contain text-primary-900 dark:text-primary-50"
					/>
				</div>
			</IntersectionObserver>
			<IntersectionObserver
				once
				threshold={0.2}
				element={element7}
				bind:intersecting={intersecting7}
			>
				<div
					bind:this={element7}
					id="bottom-right"
					class="{intersecting7
						? ''
						: 'translate-y-1/2 opacity-0'} from-primary-500 to-primary-500/20 dark:to-primary-100/70 col-span-5 col-start-1 row-span-4
			row-start-9 h-full w-full overflow-hidden rounded-md bg-linear-to-br transition-all delay-150 duration-500 md:col-span-5 md:col-start-8 md:row-span-3 md:row-start-7"
				>
					<img
						width="234"
						height="267"
						src="/productdesign/cupholder/Cupholder_top_opened.webp"
						alt=""
						class="h-full w-full object-cover object-top px-2 pt-2 brightness-100 sepia md:px-6"
					/>
				</div>
			</IntersectionObserver>
		</div>
	</div>
</section>

<!-- <style>
	.h-works {
		height: calc(100svh - 10rem);
	}
</style> -->
