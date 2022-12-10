<script type="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';
	import { draw, fade } from 'svelte/transition';
	// let srcRenaImg1 = 'img/website-rena-front-1.webp';
	// let srcRenaImg2 = 'img/website-rena-front-2.webp';

	let moveToRight: boolean = false;

	let scroll: number = 0;
	let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 5, windowHeight);
	let showProduct: Boolean = false;
	$: if (sectionScroll >= 0.75 && scroll > 1) {
		showProduct = true;
	}
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="productdesign"
	class="bg-primary-500/50 dark:bg-primary-400/50 w-full relative h-screen h-screen-ios p-7 overflow-hidden flex flex-col "
>
	<div class="flex flex-row w-full">
		<h1 class="text-left md:text-right font-sans py-4 text-4xl w-1/2 md:w-full">Product Design</h1>
		<button
			class="uppercase font-sans bg-primary-800 w-auto h-fit ml-auto my-auto md:hidden px-6 py-2 rounded-lg hover:bg-primary-700 text-primary-50"
			on:click={() => (moveToRight = !moveToRight)}
		>
			Change view
		</button>
	</div>

	<div class=" md:pl-44 grid w-[calc(100%_*_2)] sm:w-full grid-cols-2 gap-x-10 md:gap-y-10">
		{#if showProduct}
			<svg
				class="{moveToRight
					? '-translate-x-full opacity-0 sm:opacity-100 sm:translate-x-0'
					: 'translate-x-0 opacity-100'} scale-[94%] duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vw] max-h-[30vh]"
				viewBox="0 0 991 550"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-1185,-2184)">
					<g transform="matrix(1.81223,0,0,1.81223,686.79,1690.34)">
						<g transform="matrix(1,0,0,1,77.3633,0)">
							<g transform="matrix(1,0,0,1,0,7.3)">
								<path
									in:draw={{ duration: 800 }}
									d="M708.7,297.4L510.2,297.4L510.2,290.3L708.7,290.3L708.7,297.4Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(0.744053,0,0,1.00957,104.327,-39.6225)">
								<rect
									x="147.4"
									y="341.06"
									width="121.9"
									height="218.54"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.3px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,234.1)">
								<path
									in:draw={{ duration: 800, delay: 200 }}
									d="M703,290.3L532.9,290.3L532.9,70.6L703,70.6L703,290.3Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,7.3)">
								<path
									in:draw={{ duration: 800, delay: 400 }}
									d="M510.2,297.4L198.4,297.4L198.4,290.3L510.2,290.3L510.2,297.4Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1.00423,0,233.801)">
								<path
									in:draw={{ duration: 800, delay: 600 }}
									d="M214,290.3L206.9,290.3L206.9,70.6L214,70.6L214,290.3Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1.00423,0,233.801)">
								<path
									in:draw={{ duration: 800, delay: 800 }}
									d="M311.8,290.3L304.7,290.3L304.7,70.6L311.8,70.6L311.8,290.3Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,149.9)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M304.7,225.1L214,225.1L214,220L304.7,220L304.7,225.1Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,0.858041,0,239.038)">
								<path
									in:draw={{ duration: 800, delay: 1200 }}
									d="M694.5,283.2L689.4,283.2L689.4,84.8L694.5,84.8L694.5,283.2Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.23px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,290.5)">
								<path
									in:draw={{ duration: 800, delay: 1400 }}
									d="M304.7,154.8L214,154.8L214,149.7L304.7,149.7L304.7,154.8Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,431.1)">
								<path
									in:draw={{ duration: 800, delay: 1400 }}
									d="M304.7,84.5L214,84.5L214,79.4L304.7,79.4L304.7,84.5Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(4.40447e-17,0.719305,-0.712335,4.36179e-17,931.523,369.674)">
								<rect
									x="148.8"
									y="339.9"
									width="7.1"
									height="219.7"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.61px;"
								/>
							</g>
							<g transform="matrix(4.40447e-17,0.719305,-0.712335,4.36179e-17,931.523,241.001)">
								<rect
									x="148.8"
									y="339.9"
									width="7.1"
									height="219.7"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.61px;"
								/>
							</g>
							<g transform="matrix(1.46625e-15,23.9456,-0.712335,4.36179e-17,931.523,-3251.31)">
								<rect
									x="148.8"
									y="339.9"
									width="7.1"
									height="219.7"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.07px;"
								/>
							</g>
						</g>
					</g>
				</g>
			</svg>

			<svg
				class="{moveToRight
					? '-translate-x-full sm:translate-x-0'
					: 'translate-x-0 opacity-0 sm:opacity-100'} scale-[94%] duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vw] max-h-[30vh]"
				viewBox="0 0 991 550"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-323,-2186)">
					<g transform="matrix(0.920272,0,0,0.920272,-343.331,1500.24)">
						<g transform="matrix(1.97061,0,0,1.97061,27.2107,738.467)">
							<g transform="matrix(1,0,0,1,0,-531.3)">
								<path
									in:draw={{ duration: 800 }}
									d="M779.5,566.7L354.3,566.7L354.3,559.6L779.5,559.6L779.5,566.7Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,-304.5)">
								<path
									in:draw={{ duration: 800, delay: 200 }}
									d="M375.6,559.6L368.5,559.6L368.5,339.9L375.6,339.9L375.6,559.6Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,-2.44427e-11,-304.5)">
								<path
									in:draw={{ duration: 800, delay: 400 }}
									d="M765.4,559.6L758.3,559.6L758.3,339.9L765.4,339.9L765.4,559.6Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
							<g transform="matrix(1.00048,0,0,1,-0.304768,-337.1)">
								<rect
									x="375.6"
									y="381"
									width="382.7"
									height="170.1"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.15px;"
								/>
							</g>
						</g>
					</g>
				</g>
			</svg>
			<svg
				class="{moveToRight
					? '-rotate-90 -translate-x-[6%] translate-y-[7%] sm:translate-x-0 sm:translate-y-0 sm:rotate-0'
					: ' '}  duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vw] max-h-[40vh]"
				viewBox="0 0 991 805"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-1184,-1365)">
					<g transform="matrix(0.870671,0,0,0.870671,208.935,-642.446)">
						<g transform="matrix(0.5,0,0,0.5,974.409,1634.44)">
							<path
								in:draw={{ duration: 800 }}
								d="M295.276,1417.32L2421.26,1417.32L2421.26,3188.98C2130.92,3188.99 1746.98,3183.7 1746.98,3183.7C1390.27,3183.7 1750.8,2350.88 1591,2127.64C1388.75,1845.08 918.738,2155.14 410.678,2149.21C346.823,2148.55 295.405,2096.59 295.405,2032.73C295.276,1830.24 295.276,1417.32 295.276,1417.32Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4.79px;"
							/>
						</g>
						<g transform="matrix(2.08142,0,0,41.1165,709.866,-6658.38)">
							<path
								in:draw={{ duration: 800, delay: 200 }}
								d="M304.7,225.1L214,225.1L214,220L304.7,220L304.7,225.1Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.08px;"
							/>
						</g>
						<g transform="matrix(2.08142,0,0,1.21366,709.866,2257.41)">
							<path
								in:draw={{ duration: 800, delay: 400 }}
								d="M214,290.3L206.9,290.3L206.9,70.6L214,70.6L214,290.3Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.4px;"
							/>
						</g>
						<g transform="matrix(2.08142,0,0,1.21366,709.866,2257.41)">
							<path
								in:draw={{ duration: 800, delay: 600 }}
								d="M311.8,290.3L304.7,290.3L304.7,70.6L311.8,70.6L311.8,290.3Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.4px;"
							/>
						</g>
						<g transform="matrix(2.08142,0,0,4.07899,709.866,2041.35)">
							<path
								in:draw={{ duration: 800, delay: 800 }}
								d="M694.5,283.2L689.4,283.2L689.4,84.8L694.5,84.8L694.5,283.2Z"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.74px;"
							/>
						</g>
						<g transform="matrix(1.18404e-16,1.93368,-0.859283,5.26159e-17,1636.14,2085.79)">
							<rect
								in:fade={{ duration: 800 }}
								x="148.8"
								y="339.9"
								width="7.1"
								height="219.7"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.6px;"
							/>
						</g>
						<g transform="matrix(1.18404e-16,1.93368,-1.61151,9.86766e-17,2720.85,2085.79)">
							<rect
								in:fade={{ duration: 800, delay: 200 }}
								x="148.8"
								y="339.9"
								width="7.1"
								height="219.7"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.34px;"
							/>
						</g>
						<g transform="matrix(1.18404e-16,1.93368,-1.61151,9.86766e-17,2720.85,2908.79)">
							<rect
								in:fade={{ duration: 800, delay: 400 }}
								x="148.8"
								y="339.9"
								width="7.1"
								height="219.7"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.34px;"
							/>
						</g>
						<g transform="matrix(1.18404e-16,1.93368,-1.48267,9.07871e-17,2648.75,2836)">
							<rect
								in:fade={{ duration: 800, delay: 600 }}
								x="148.8"
								y="339.9"
								width="7.1"
								height="219.7"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.39px;"
							/>
						</g>
						<g transform="matrix(5.09307e-16,8.31762,-1.48267,9.07871e-17,2648.75,1899.8)">
							<rect
								in:draw={{ duration: 800, delay: 800 }}
								x="148.8"
								y="339.9"
								width="7.1"
								height="219.7"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.4px;"
							/>
						</g>
						<g transform="matrix(5.09307e-16,8.31762,-1.48267,9.07871e-17,2648.75,1899.8)">
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="148.8"
								y="339.9"
								width="7.1"
								height="219.7"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.4px;"
							/>
						</g>
					</g>
				</g>
			</svg>
			<p
				class="{moveToRight
					? '-translate-x-full sm:translate-x-0 w-1/2 sm:w-full opacity-100'
					: ' opacity-0 sm:opacity-100 w-1/2 sm:w-full'} pr-6 self-end sm:self-start transform transition-all duration-500 relative"
			>
				This table was one of my first projects. I designed it myself and customized it to suit all
				my needs. With the organic cutout in the middle everything is reachable while maximizing
				space.
			</p>
		{/if}
	</div>
</section>
