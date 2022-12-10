<script type="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';
	import { draw, fade } from 'svelte/transition';
	let scroll: number = 0;
	let windowHeight: number;
	$: sectionScroll = scrollInSection(scroll, 6, windowHeight);
	// let srcRenaImg1 = 'img/website-rena-front-1.webp';
	// let srcRenaImg2 = 'img/website-rena-front-2.webp';
	let showProduct: boolean = false;
	$: if (sectionScroll >= 0.75 && scroll > 1) {
		showProduct = true;
	}
	let moveToRight: boolean = false;
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight} />

<section
	id="productdesign"
	class="bg-primary-500/50 dark:bg-primary-400/50 w-full relative h-screen h-screen-ios p-7 overflow-hidden "
>
	{#if showProduct}
		<div class=" md:pl-44 grid grid-cols-4 gap-4">
			<button on:click={() => (moveToRight = !moveToRight)}>
				<svg
					class="{moveToRight
						? '-rotate-90 -translate-x-[6%] translate-y-[7%] sm:translate-x-0 sm:translate-y-0 sm:rotate-0'
						: ' '}  hover:text-primary-600 sm:hover:text-primary-900 sm:dark:hover:text-primary-50 duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vh]"
					viewBox="0 0 386 350"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xml:space="preserve"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
				>
					<g transform="matrix(1,0,0,1,-1658,-2299)">
						<g id="Side" transform="matrix(1.20447,0,0,1.20001,549.724,-225.347)">
							<g transform="matrix(-8.17676e-17,0.330647,0.342105,-1.48987e-16,398.529,2012.03)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:5.15px;"
								/>
							</g>
							<g transform="matrix(-8.17676e-17,0.330647,0.342105,-1.48987e-16,96.1666,2012.03)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:5.15px;"
								/>
							</g>
							<g transform="matrix(0.0747331,1.32396e-17,-2.09479e-17,0.989788,919.116,-278.871)">
								<path
									in:draw={{ duration: 800, delay: 400 }}
									d="M4074.58,2413.27L234.139,2413.17L234.139,2458.25L4074.58,2458.3L4074.58,2413.27Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.47px;"
								/>
							</g>
							<g transform="matrix(0.0827292,1.39397e-17,-2.31892e-17,1.04213,901.89,-185.486)">
								<path
									in:draw={{ duration: 800, delay: 400 }}
									d="M4074.58,2413.27L234.139,2413.17L234.139,2458.25L4074.58,2458.3L4074.58,2413.27Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.35px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,47.2441,0)">
								<g transform="matrix(1,0,0,0.9,44.8819,172.441)">
									<path
										in:fade={{ duration: 800, delay: 400 }}
										d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
									/>
								</g>
								<g transform="matrix(1,0,0,0.428571,49.6063,1328.57)">
									<rect
										in:fade={{ duration: 800, delay: 1000 }}
										x="848.031"
										y="2444.88"
										width="4.724"
										height="16.535"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
							</g>
							<g transform="matrix(1,0,0,1,314.173,0)">
								<g transform="matrix(1,0,0,0.9,44.8819,172.441)">
									<path
										in:fade={{ duration: 800, delay: 400 }}
										d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
									/>
								</g>
								<g transform="matrix(1,0,0,0.428571,49.6063,1328.57)">
									<rect
										in:fade={{ duration: 800, delay: 1000 }}
										x="848.031"
										y="2444.88"
										width="4.724"
										height="16.535"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
							</g>
							<rect
								in:fade={{ duration: 800, delay: 1000 }}
								x="921.26"
								y="2109.66"
								width="317.717"
								height="266.72"
								style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.73px;"
							/>
							<g transform="matrix(1.05541,0,0,1.05714,-80.9614,-153.071)">
								<circle
									cx="1105.51"
									cy="2265.35"
									r="82.677"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.64px;"
								/>
							</g>
							<g transform="matrix(0.996296,0,0,1,3.41207,0)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="921.26"
									y="2104.72"
									width="318.898"
									height="4.933"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
						</g>
					</g>
				</svg>
			</button>
			<button on:click={() => (moveToRight = !moveToRight)}>
				<svg
					class="{moveToRight
						? '-rotate-90 -translate-x-[6%] translate-y-[7%] sm:translate-x-0 sm:translate-y-0 sm:rotate-0'
						: ' '} scale-[90%] col-span-2 hover:text-primary-600 sm:hover:text-primary-900 sm:dark:hover:text-primary-50 duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vh]"
					width="100%"
					height="100%"
					viewBox="0 0 712 350"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xml:space="preserve"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
				>
					<g transform="matrix(1,0,0,1,-878,-2299)">
						<g id="front" transform="matrix(1.20001,0,0,1.20001,525.48,-1009.13)">
							<g transform="matrix(1,0,0,1,1.13687e-13,572.835)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2185.04"
									width="590.551"
									height="271.654"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(0.88968,0,0,1.05263,32.5749,443.535)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.78px;"
								/>
							</g>
							<g transform="matrix(0.88968,0,0,1.10526,32.5749,92.1881)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.73px;"
								/>
							</g>
							<g transform="matrix(0.0735587,0,0,3.89474,815.28,-6585.89)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.63px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1.02778,227,510.761)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="610"
									y="2234.65"
									width="3.974"
									height="170.079"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.71px;"
								/>
							</g>
							<g transform="matrix(0.0676157,0,0,3.89474,275.31,-6585.89)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.63px;"
								/>
							</g>
							<g transform="matrix(0.00590201,0,0,3.89474,338.415,-6585.89)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.63px;"
								/>
							</g>
							<g transform="matrix(0.0720047,0,0,3.89474,540.943,-6585.89)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.63px;"
								/>
							</g>
							<g transform="matrix(0.99292,0,0,1,1.63507,572.835)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="344.882"
									y="2404.72"
									width="219.685"
									height="4.724"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(2.68817,0,0,1,-631.826,353.15)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="344.882"
									y="2404.72"
									width="219.685"
									height="4.724"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.86px;"
								/>
							</g>
							<g transform="matrix(1.0333,0,0,1,253.634,572.835)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="344.882"
									y="2404.72"
									width="219.685"
									height="4.724"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.71px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1.02778,-47.7953,510.761)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="610"
									y="2234.65"
									width="3.974"
									height="170.079"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.71px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,1.13687e-13,572.835)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="610"
									y="2234.65"
									width="3.974"
									height="170.079"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(1,0,0,0.9,4.72441,825.591)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
								/>
							</g>
							<g transform="matrix(1,0,0,0.428571,9.44882,1981.72)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="848.031"
									y="2444.88"
									width="4.724"
									height="16.535"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.26px;"
								/>
							</g>
							<g transform="matrix(1,0,0,0.9,-533.858,825.591)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
								/>
							</g>
							<g transform="matrix(1,0,0,0.428571,-529.134,1981.72)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="848.031"
									y="2444.88"
									width="4.724"
									height="16.535"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.26px;"
								/>
							</g>
						</g>
					</g>
				</svg>
			</button>
			<button on:click={() => (moveToRight = !moveToRight)}>
				<svg
					class="{moveToRight
						? '-rotate-90 -translate-x-[6%] translate-y-[7%] sm:translate-x-0 sm:translate-y-0 sm:rotate-0'
						: ' '} hover:text-primary-600 sm:hover:text-primary-900 sm:dark:hover:text-primary-50 duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vh]"
					viewBox="0 0 385 350"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xml:space="preserve"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
				>
					<g transform="matrix(1,0,0,1,-425,-2299)">
						<g id="Side" transform="matrix(-1.20447,0,0,1.20001,1918.57,-225.347)">
							<g transform="matrix(79.9489,0,0,1.56944,-47847.6,-1397.7)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="610"
									y="2234.65"
									width="3.974"
									height="170.079"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.02px;"
								/>
							</g>
							<g transform="matrix(0.498148,0,0,0.957702,462.336,89.0267)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="921.26"
									y="2104.72"
									width="318.898"
									height="4.933"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(0.498148,0,0,0.957702,621.194,89.0267)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="921.26"
									y="2104.72"
									width="318.898"
									height="4.933"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(0.5,0,0,1.00078,619.488,-1.85909)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="921.26"
									y="2109.66"
									width="317.717"
									height="266.72"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(-6.27733e-17,0.263345,0.342105,-9.88622e-17,398.529,2076.57)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:5.67px;"
								/>
							</g>
							<g transform="matrix(-6.2738e-17,0.26322,0.342105,-9.87691e-17,255.025,2076.69)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:5.67px;"
								/>
							</g>
							<g transform="matrix(-6.37899e-17,0.26366,0.31462,-1.06911e-16,307.194,2076.27)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:5.97px;"
								/>
							</g>
							<g transform="matrix(0.0333833,1.33015e-17,-9.35743e-18,0.994412,1087.6,-290.237)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M4074.58,2413.17L234.139,2413.17L234.139,2458.25L4074.58,2458.3L4074.58,2413.17Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.47px;"
								/>
							</g>
							<g transform="matrix(0.00399807,1.33015e-17,-1.12067e-18,0.994412,1222.69,-290.237)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="234.139"
									y="2413.17"
									width="3840.44"
									height="45.134"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.47px;"
								/>
							</g>
							<g transform="matrix(0.00399807,1.33015e-17,-1.12067e-18,0.994412,1079.13,-290.237)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="234.139"
									y="2413.17"
									width="3840.44"
									height="45.134"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.47px;"
								/>
							</g>
							<g transform="matrix(0.0827292,1.40016e-17,-2.31892e-17,1.04675,901.89,-196.851)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M4074.58,2413.27L234.139,2413.17L234.139,2458.25L4074.58,2458.3L4074.58,2413.27Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.34px;"
								/>
							</g>
							<g transform="matrix(0.0413498,1.32396e-17,-1.15905e-17,0.989788,911.578,-279.08)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M4074.58,2413.17L234.139,2413.17L234.139,2458.25L4074.58,2458.3L4074.58,2413.17Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.48px;"
								/>
							</g>
							<g transform="matrix(0.0413646,1.39397e-17,-1.15946e-17,1.04213,1070.43,-185.486)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M4074.58,2412.97L234.139,2412.97L234.139,2458.25L4074.58,2458.3L4074.58,2412.97Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.35px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,47.2441,0)">
								<g transform="matrix(1,0,0,0.9,44.8819,172.441)">
									<path
										in:fade={{ duration: 800, delay: 1000 }}
										d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
									/>
								</g>
								<g transform="matrix(1,0,0,0.428571,49.6063,1328.57)">
									<rect
										in:fade={{ duration: 800, delay: 1000 }}
										x="848.031"
										y="2444.88"
										width="4.724"
										height="16.535"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
							</g>
							<g transform="matrix(1,0,0,1,314.173,0)">
								<g transform="matrix(1,0,0,0.9,44.8819,172.441)">
									<path
										in:fade={{ duration: 800, delay: 1000 }}
										d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
									/>
								</g>
								<g transform="matrix(1,0,0,0.428571,49.6063,1328.57)">
									<rect
										in:fade={{ duration: 800, delay: 1000 }}
										x="848.031"
										y="2444.88"
										width="4.724"
										height="16.535"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
							</g>
							<g transform="matrix(1,0,0,1,206.247,0)">
								<g transform="matrix(1,0,0,0.9,44.8819,172.441)">
									<path
										in:fade={{ duration: 800, delay: 1000 }}
										d="M869.291,2468.5L840.945,2468.5L850.384,2456.69L859.853,2456.69L869.291,2468.5Z"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.82px;"
									/>
								</g>
								<g transform="matrix(1,0,0,0.428571,49.6063,1328.57)">
									<rect
										in:fade={{ duration: 800, delay: 1000 }}
										x="848.031"
										y="2444.88"
										width="4.724"
										height="16.535"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
							</g>
							<g transform="matrix(-4.75768e-17,-0.779877,-0.331645,2.03829e-17,1660.1,3331.31)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="1285.04"
									y="1960.63"
									width="224.409"
									height="42.578"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2.9px;"
								/>
							</g>
							<g transform="matrix(-4.35543e-17,-0.713939,-0.996296,6.12323e-17,3019.72,3230.07)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="1268.5"
									y="2003.15"
									width="238.583"
									height="14.173"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(-4.75932e-17,-0.780145,-0.304008,1.86843e-17,1530.25,3331.65)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="1285.04"
									y="1960.63"
									width="224.409"
									height="42.578"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(-4.63051e-17,-0.75903,-0.331645,2.03829e-17,1598.56,3299.79)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="1285.04"
									y="1960.63"
									width="224.409"
									height="42.578"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(-0.996163,0,0,1,2121.39,-108.661)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="901.238"
									y="2433.07"
									width="128.683"
									height="4.724"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(-0.436187,0,0,1,1459.11,-108.661)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="901.238"
									y="2433.07"
									width="128.683"
									height="4.724"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;stroke-miterlimit:1.5;"
								/>
							</g>
							<g transform="matrix(-0.478251,0,0,1,1426.77,-108.661)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="901.238"
									y="2433.07"
									width="128.683"
									height="4.724"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;stroke-miterlimit:1.5;"
								/>
							</g>
						</g>
					</g>
				</svg>
			</button>

			<img
				src="/productdesign/bench.webp"
				class="md:my-8 my-4 inline h-auto w-2/3 max-w-md pr-2 align-middle"
				alt="logo-rj"
			/>
			<button on:click={() => (moveToRight = !moveToRight)}>
				<svg
					class="{moveToRight
						? '-rotate-90 -translate-x-[6%] translate-y-[7%] sm:translate-x-0 sm:translate-y-0 sm:rotate-0'
						: ' '} col-span-2 scale-[90%] hover:text-primary-600 sm:hover:text-primary-900 sm:dark:hover:text-primary-50 duration-500 transform text-primary-900 dark:text-primary-50 w-full sm:max-w-[60vh]"
					viewBox="0 0 712 386"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xml:space="preserve"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
				>
					<g transform="matrix(1,0,0,1,-878,-1727)">
						<g id="Top" transform="matrix(1.20001,0,0,1.20001,525.48,-376.256)">
							<g transform="matrix(1,0,0,1,0,-112.205)">
								<g transform="matrix(1,0,0,1,0,-609.449)">
									<circle
										in:fade={{ duration: 800, delay: 1000 }}
										cx="321.26"
										cy="2499.21"
										r="14.173"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
								<g transform="matrix(1,0,0,1,-1.54898e-12,-609.449)">
									<circle
										in:fade={{ duration: 800, delay: 1000 }}
										cx="321.26"
										cy="2499.21"
										r="2.362"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
							</g>
							<g transform="matrix(1,0,0,1,540.945,-112.205)">
								<g transform="matrix(1,0,0,1,0,-609.449)">
									<circle
										in:fade={{ duration: 800, delay: 1000 }}
										cx="321.26"
										cy="2499.21"
										r="14.173"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
								<g transform="matrix(1,0,0,1,-1.54898e-12,-609.449)">
									<circle
										in:fade={{ duration: 800, delay: 1000 }}
										cx="321.26"
										cy="2499.21"
										r="2.362"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
							</g>
							<g transform="matrix(1,0,0,1,0,-112.205)">
								<g transform="matrix(1,0,0,1,0,-491.339)">
									<circle
										in:fade={{ duration: 800, delay: 1000 }}
										cx="321.26"
										cy="2499.21"
										r="14.173"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
								<g transform="matrix(1,0,0,1,-1.54898e-12,-491.339)">
									<circle
										in:fade={{ duration: 800, delay: 1000 }}
										cx="321.26"
										cy="2499.21"
										r="2.362"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
							</g>
							<g transform="matrix(1,0,0,1,540.945,34.8289)">
								<g transform="matrix(1,0,0,1,0,-491.339)">
									<circle
										in:fade={{ duration: 800, delay: 1000 }}
										cx="321.26"
										cy="2499.21"
										r="14.173"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
								<g transform="matrix(1,0,0,1,-1.54898e-12,-491.339)">
									<circle
										in:fade={{ duration: 800, delay: 1000 }}
										cx="321.26"
										cy="2499.21"
										r="2.362"
										style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
									/>
								</g>
							</g>
							<g id="Top1" transform="matrix(1,0,0,1,-8.52651e-14,-572.835)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M295.276,2326.77L295.276,2486.22L885.827,2645.67L885.827,2326.77L885.827,2645.67L885.827,2326.77L295.276,2326.77L885.827,2326.77"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(0.0721866,0.0193423,-0.0885434,0.330448,758.414,1167.57)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
								/>
							</g>
							<g transform="matrix(0.0721866,0.0193423,-0.0885434,0.330448,758.414,1167.57)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M958.989,2413.12L296.46,2412.78L296.46,2457.66L958.989,2458L958.989,2413.12Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
								/>
							</g>
							<g transform="matrix(-0.0735177,4.42724e-18,-2.12886e-17,-0.342105,365.783,2594.38)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
								/>
							</g>
							<g transform="matrix(-0.0735177,4.42724e-18,-2.12886e-17,-0.342105,907.535,2594.38)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
								/>
							</g>
							<g transform="matrix(-0.0779917,4.97514e-18,-2.00345e-17,-0.342105,637.003,2594.38)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="2411.81"
									width="663.78"
									height="44.882"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:7px;"
								/>
							</g>
							<g transform="matrix(1,0,0,1,0,-112.205)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M295.276,2025.59L885.827,2185.04L885.827,2169.08L295.276,2009.63L295.276,2025.59Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:2px;"
								/>
							</g>
							<g transform="matrix(0.996016,0,0,0.928571,1.1764,21.0911)">
								<rect
									in:fade={{ duration: 800, delay: 1000 }}
									x="295.276"
									y="1866.14"
									width="592.913"
									height="16.535"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.8px;"
								/>
							</g>
							<g transform="matrix(0.0721866,0.0193423,-0.0885434,0.330448,491.485,1095.4)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M917.972,2413.22L241.696,2412.93L296.869,2457.99L918.936,2458.25L917.972,2413.22Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
								/>
							</g>
							<g transform="matrix(0,-0.0747331,-0.342105,0,1136.26,1919.07)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M2003.25,2413.22L233.896,2413.17L289.612,2458.25L2004.22,2458.25L2003.25,2413.22Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
								/>
							</g>
							<g transform="matrix(0,-0.0747331,-0.342105,0,1711.39,2073.8)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M4074.58,2413.27L226.42,2413.17L282.135,2458.25L4074.58,2458.3L4074.58,2413.27Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
								/>
							</g>
							<g transform="matrix(-0.0727463,-0.0194923,0.0885434,-0.330448,689.753,2874.71)">
								<path
									in:draw={{ duration: 800, delay: 1000 }}
									d="M912.504,2412.7L241.056,2412.41L296.229,2457.47L913.083,2457.73L912.504,2412.7Z"
									style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:4px;"
								/>
							</g>
						</g>
					</g>
				</svg>
			</button>
		</div>
	{/if}
</section>
