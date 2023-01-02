<script lang="ts">
	import { T } from '@tolgee/svelte';
	import { scrollInSection } from '../../components/scrollInSection';
	import { draw, fade } from 'svelte/transition';

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

<!-- in:draw={{ duration: 800 }} 
									in:draw={{ duration: 800, delay: 200 }}
-->

<section
	id="productdesign"
	class="bg-primary-500/50 dark:bg-primary-400/50 w-full relative h-screen h-screen-ios overflow-hidden flex flex-col "
>
	<div class="w-full h-auto flex flex-row mt-4 md:mt-24">
		<div class="w-[calc(100vw_-_56rem)] h-auto" />

		<div class="max-w-4xl w-full">
			<h2
				class="bg-primary-500 dark:bg-primary-400 md:text-right w-fit ml-auto text-left pr-8 pl-3 rounded-l-md font-sans py-3 text-4xl "
			>
				<T keyName="works-productdesign" defaultValue="Product Design" />
			</h2>
		</div>
		<div class="w-[calc(100vw_-_56rem)] h-auto bg-primary-500 dark:bg-primary-400" />
	</div>

	<div class="flex flex-row-reverse md:flex-row w-full justify-center items-center my-auto">
		<div class=" md:pl-44 px-4 grid max-w-4xl w-full sm:w-full grid-cols-2">
			{#if showProduct}
				<div class="{moveToRight
					? '-translate-x-full sm:translate-x-0 opacity-0 sm:opacity-100'
					: 'translate-x-0 opacity-100'} duration-500  transform relative">
					<p
						class="absolute font-sans tracking-wide font-medium opacity-80 uppercase top-1/2 -translate-y-1/2 transform left-1/2 -translate-x-2/3"
					>
					<T
							keyName="front-view"
							defaultValue="Front View"
						/>
					</p>
					<svg
						class=" w-full  text-primary-900 dark:text-primary-50 h-full"
						width="100%"
						height="100%"
						viewBox="0 0 1000 1000"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						xml:space="preserve"
						style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
					>
						<g transform="matrix(1,0,0,1,-1050,0)">
							<rect
								id="product-table-front"
								x="1050"
								y="0"
								width="1000"
								height="1000"
								style="fill:none;"
							/>
							<g id="product-table-front1">
								<g transform="matrix(1.95571,0,0,1.95571,662.987,-290.431)">
									<rect
										in:fade={{ duration: 800, delay: 800 }}
										x="510.2"
										y="290.3"
										width="198.5"
										height="7.1"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.95571,662.987,-290.431)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M510.2,297.911C509.918,297.911 509.689,297.682 509.689,297.4L509.689,290.3C509.689,290.018 509.918,289.789 510.2,289.789L708.7,289.789C708.982,289.789 709.211,290.018 709.211,290.3L709.211,297.4C709.211,297.682 708.982,297.911 708.7,297.911L510.2,297.911ZM708.189,296.889C708.189,296.889 708.189,290.811 708.189,290.811L510.711,290.811L510.711,296.889L708.189,296.889Z"
										style="fill:currentColor;"
									/>
								</g>
								<g transform="matrix(1.45515,0,0,1.97442,867.02,-382.198)">
									<rect
										x="147.4"
										y="341.06"
										width="121.9"
										height="218.54"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(1.45515,0,0,1.97442,867.02,-382.198)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M269.3,560.106L147.4,560.106C147.02,560.106 146.713,559.88 146.713,559.6L146.713,341.06C146.713,340.78 147.02,340.554 147.4,340.554L269.3,340.554C269.68,340.554 269.987,340.78 269.987,341.06L269.987,559.6C269.987,559.88 269.68,560.106 269.3,560.106ZM268.613,559.094C268.613,559.094 268.613,341.567 268.613,341.567C268.613,341.567 148.087,341.567 148.087,341.567C148.087,353.137 148.087,559.094 148.087,559.094L268.613,559.094Z"
										style="fill:currentColor;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.95571,662.987,153.125)">
									<rect
										x="532.9"
										y="70.6"
										width="170.1"
										height="219.7"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.95571,662.987,153.125)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M532.9,290.811C532.618,290.811 532.389,290.582 532.389,290.3L532.389,70.6C532.389,70.318 532.618,70.089 532.9,70.089L703,70.089C703.282,70.089 703.511,70.318 703.511,70.6L703.511,290.3C703.511,290.582 703.282,290.811 703,290.811L532.9,290.811ZM618,289.789L702.489,289.789L702.489,71.111L533.411,71.111L533.411,289.789L618,289.789Z"
										style="fill:currentColor;"
									/>
								</g>
								<g transform="matrix(3.20077,0,0,1.95571,415.967,-290.431)">
									<rect
										x="198.4"
										y="290.3"
										width="311.8"
										height="7.1"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(3.20077,0,0,1.95571,415.967,-290.431)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M198.4,297.911C198.227,297.911 198.088,297.682 198.088,297.4L198.088,290.3C198.088,290.018 198.227,289.789 198.4,289.789L510.2,289.789C510.373,289.789 510.512,290.018 510.512,290.3L510.512,297.4C510.512,297.682 510.373,297.911 510.2,297.911L198.4,297.911ZM509.888,296.889L509.888,290.811L198.712,290.811C198.712,290.811 198.712,296.889 198.712,296.889L509.888,296.889Z"
										style="fill:currentColor;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.96399,662.987,152.54)">
									<rect
										x="206.9"
										y="70.6"
										width="7.1"
										height="219.7"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.96399,662.987,152.54)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M206.9,290.809C206.618,290.809 206.389,290.581 206.389,290.3L206.389,70.6C206.389,70.319 206.618,70.091 206.9,70.091L214,70.091C214.282,70.091 214.511,70.319 214.511,70.6L214.511,290.3C214.511,290.581 214.282,290.809 214,290.809L206.9,290.809ZM210.5,289.791C210.5,289.791 213.489,289.791 213.489,289.791L213.489,71.109C213.489,71.109 207.411,71.109 207.411,71.109L207.411,289.791L210.5,289.791Z"
										style="fill:currentColor;"
									/>
								</g>
								<g transform="matrix(2.86755e-15,46.8307,-1.39312,8.53041e-17,2484.78,-6663.33)">
									<rect
										x="148.8"
										y="339.9"
										width="7.1"
										height="219.7"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(2.86755e-15,46.8307,-1.39312,8.53041e-17,2484.78,-6663.33)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M155.9,560.318L148.8,560.318C148.788,560.318 148.779,559.996 148.779,559.6L148.779,339.9C148.779,339.504 148.788,339.182 148.8,339.182L155.9,339.182C155.912,339.182 155.921,339.504 155.921,339.9L155.921,559.6C155.921,559.996 155.912,560.318 155.9,560.318ZM155.879,558.882L155.879,340.618L148.821,340.618L148.821,558.882L155.879,558.882Z"
										style="fill:currentColor;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.96399,662.987,152.54)">
									<rect
										x="304.7"
										y="70.6"
										width="7.1"
										height="219.7"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.96399,662.987,152.54)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M304.7,290.809C304.418,290.809 304.189,290.581 304.189,290.3L304.189,70.6C304.189,70.319 304.418,70.091 304.7,70.091L311.8,70.091C312.082,70.091 312.311,70.319 312.311,70.6L312.311,290.3C312.311,290.581 312.082,290.809 311.8,290.809L304.7,290.809ZM308.3,289.791C308.3,289.791 311.289,289.791 311.289,289.791L311.289,71.109C311.289,71.109 305.211,71.109 305.211,71.109L305.211,289.791L308.3,289.791Z"
										style="fill:currentColor;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.95571,662.987,-11.5461)">
									<rect
										x="214"
										y="220"
										width="90.7"
										height="5.1"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.95571,662.987,-11.5461)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M214,225.611C213.718,225.611 213.489,225.382 213.489,225.1L213.489,220C213.489,219.718 213.718,219.489 214,219.489L304.7,219.489C304.982,219.489 305.211,219.718 305.211,220L305.211,225.1C305.211,225.382 304.982,225.611 304.7,225.611L214,225.611ZM259.4,224.589L304.189,224.589C304.189,224.589 304.189,220.511 304.189,220.511L214.511,220.511C214.511,220.511 214.511,224.589 214.511,224.589L259.4,224.589Z"
										style="fill:currentColor;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.6759,662.987,162.968)">
									<rect
										x="689.4"
										y="84.8"
										width="5.1"
										height="198.4"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.6759,662.987,162.968)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M689.4,283.797C689.118,283.797 688.889,283.53 688.889,283.2L688.889,84.8C688.889,84.47 689.118,84.203 689.4,84.203L694.5,84.203C694.782,84.203 695.011,84.47 695.011,84.8L695.011,283.2C695.011,283.53 694.782,283.797 694.5,283.797L689.4,283.797ZM693.989,282.603L693.989,85.397L689.911,85.397L689.911,282.603L693.989,282.603Z"
										style="fill:currentColor;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.95571,662.987,263.427)">
									<rect
										x="214"
										y="149.7"
										width="90.7"
										height="5.1"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.95571,662.987,263.427)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M214,155.311C213.718,155.311 213.489,155.082 213.489,154.8L213.489,149.7C213.489,149.418 213.718,149.189 214,149.189L304.7,149.189C304.982,149.189 305.211,149.418 305.211,149.7L305.211,154.8C305.211,155.082 304.982,155.311 304.7,155.311L214,155.311ZM259.4,154.289L304.189,154.289C304.189,154.289 304.189,150.211 304.189,150.211L214.511,150.211C214.511,150.211 214.511,154.289 214.511,154.289L259.4,154.289Z"
										style="fill:currentColor;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.95571,662.987,538.4)">
									<rect
										x="214"
										y="79.4"
										width="90.7"
										height="5.1"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(1.95571,0,0,1.95571,662.987,538.4)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M214,85.011C213.718,85.011 213.489,84.782 213.489,84.5L213.489,79.4C213.489,79.118 213.718,78.889 214,78.889L304.7,78.889C304.982,78.889 305.211,79.118 305.211,79.4L305.211,84.5C305.211,84.782 304.982,85.011 304.7,85.011L214,85.011ZM259.4,83.989L304.189,83.989C304.189,83.989 304.189,79.911 304.189,79.911L214.511,79.911C214.511,79.911 214.511,83.989 214.511,83.989L259.4,83.989Z"
										style="fill:currentColor;"
									/>
								</g>
								<g transform="matrix(8.61388e-17,1.40675,-1.39312,8.53041e-17,2484.78,418.269)">
									<rect
										x="148.8"
										y="339.9"
										width="7.1"
										height="219.7"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(8.61388e-17,1.40675,-1.39312,8.53041e-17,2484.78,418.269)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M155.9,560.318L148.8,560.318C148.407,560.318 148.089,559.996 148.089,559.6L148.089,339.9C148.089,339.504 148.407,339.182 148.8,339.182L155.9,339.182C156.293,339.182 156.611,339.504 156.611,339.9L156.611,559.6C156.611,559.996 156.293,560.318 155.9,560.318ZM155.189,558.882C155.189,558.882 155.189,340.618 155.189,340.618L149.511,340.618C149.511,340.618 149.511,558.882 149.511,558.882L155.189,558.882Z"
										style="fill:currentColor;"
									/>
								</g>
								<g transform="matrix(8.61388e-17,1.40675,-1.39312,8.53041e-17,2484.78,166.621)">
									<rect
										x="148.8"
										y="339.9"
										width="7.1"
										height="219.7"
										style="fill:currentColor;fill-opacity:0.1;"
									/>
								</g>
								<g transform="matrix(8.61388e-17,1.40675,-1.39312,8.53041e-17,2484.78,166.621)">
									<path
										in:draw={{ duration: 800, delay: 800 }}
										d="M155.9,560.318L148.8,560.318C148.407,560.318 148.089,559.996 148.089,559.6L148.089,339.9C148.089,339.504 148.407,339.182 148.8,339.182L155.9,339.182C156.293,339.182 156.611,339.504 156.611,339.9L156.611,559.6C156.611,559.996 156.293,560.318 155.9,560.318ZM155.189,558.882L155.189,340.618L149.511,340.618C149.511,340.618 149.511,558.882 149.511,558.882L155.189,558.882Z"
										style="fill:currentColor;"
									/>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div class="relative ">
					<img
						class="{moveToRight
							? 'opacity-100 '
							: 'opacity-0 translate-x-full'} absolute w-full h-full transition-all duration-500"
						src="/productdesign/bench.webp"
						alt="bench"
					/>

					<div
						class="{moveToRight
							? '-translate-x-full sm:translate-x-0 sm:opacity-0'
							: 'translate-x-0 opacity-100 sm:opacity-100'} duration-500"
					>
						<p
							class="opacity-80 absolute font-sans tracking-wide  font-medium uppercase top-1/2 -translate-y-1/2 transform left-1/2 -translate-x-1/3"
						>
						<T
						keyName="Side-view"
						defaultValue="Side View"
					/>
						</p>
						<svg
							class=" duration-500 w-full transform text-primary-900 dark:text-primary-50 sm:max-w-[50vw] h-auto max-h-[40vh]"
							width="100%"
							height="100%"
							viewBox="0 0 1000 1000"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							xml:space="preserve"
							style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
						>
							<g transform="matrix(1,0,0,1,-1050,0)">
								<g transform="matrix(1,0,0,1,-1050,0)">
									<rect
										id="product-table-side"
										x="2100"
										y="0"
										width="1000"
										height="1000"
										style="fill:none;"
									/>
									<g id="product-table-side1">
										<g transform="matrix(0.997927,0,0,0.997927,5.38982,1.0365)">
											<g transform="matrix(1.96781,0,0,1.96781,1484.45,-824.338)">
												<rect
													x="354.3"
													y="559.6"
													width="425.2"
													height="7.1"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.02px;"
												/>
											</g>
											<g transform="matrix(1.96781,0,0,1.96781,1484.45,-378.038)">
												<rect
													x="368.5"
													y="339.9"
													width="7.1"
													height="219.7"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.02px;"
												/>
											</g>
											<g transform="matrix(1.96781,0,0,1.96781,1484.45,-378.038)">
												<rect
													x="758.3"
													y="339.9"
													width="7.1"
													height="219.7"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.02px;"
												/>
											</g>
											<g transform="matrix(1.96875,0,0,1.94191,1483.85,-432.322)">
												<rect
													x="375.6"
													y="381"
													width="382.7"
													height="170.1"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.02px;"
												/>
											</g>
											<g transform="matrix(1.96781,0,0,1.96781,1902.8,-824.338)">
												<rect
													x="141.7"
													y="559.6"
													width="141.8"
													height="7.1"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.02px;"
												/>
											</g>
											<g transform="matrix(2.05983,0,0,1.96781,1878.02,-378.038)">
												<rect
													x="147.4"
													y="339.9"
													width="121.9"
													height="219.7"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.99px;"
												/>
											</g>
											<g transform="matrix(1.93299,0,0,1.96781,1921.96,-378.038)">
												<rect
													x="148.8"
													y="339.9"
													width="7.1"
													height="219.7"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.03px;"
												/>
											</g>
											<g transform="matrix(1.96781,0,0,1.96781,1916.53,-543.728)">
												<rect
													x="155.9"
													y="489.3"
													width="102.1"
													height="5.1"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.02px;"
												/>
											</g>
											<g transform="matrix(1.96781,0,0,1.96781,1916.53,-267.054)">
												<rect
													x="155.9"
													y="419"
													width="102.1"
													height="5.1"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.02px;"
												/>
											</g>
											<g transform="matrix(1.96781,0,0,1.96781,1916.53,9.62099)">
												<rect
													x="155.9"
													y="348.7"
													width="102.1"
													height="5.1"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.02px;"
												/>
											</g>
											<g
												transform="matrix(1.82287,-2.52368e-22,-2.38959e-22,1.5035,2636.89,-203.493)"
											>
												<rect
													x="148.8"
													y="339.9"
													width="7.1"
													height="219.7"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.23px;"
												/>
											</g>
											<g
												transform="matrix(7.84098,3.4019e-22,-2.38959e-22,1.5035,1754.34,-203.493)"
											>
												<rect
													x="148.8"
													y="339.9"
													width="7.1"
													height="219.7"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.36px;"
												/>
											</g>
											<g
												transform="matrix(7.84098,3.4019e-22,-2.38959e-22,1.5035,1754.34,-203.493)"
											>
												<rect
													x="148.8"
													y="339.9"
													width="7.1"
													height="219.7"
													style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:0.36px;"
												/>
											</g>
										</g>
										<g transform="matrix(8.61388e-17,1.40675,-0.25287,1.54838e-17,3061.92,418.269)">
											<rect
												x="148.8"
												y="339.9"
												width="7.1"
												height="219.7"
												style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.98px;"
											/>
										</g>
										<g transform="matrix(8.61388e-17,1.40675,-0.25287,1.54838e-17,3061.92,166.621)">
											<rect
												x="148.8"
												y="339.9"
												width="7.1"
												height="219.7"
												style="fill:currentColor;fill-opacity:0.1;stroke:currentColor;stroke-width:1.98px;"
											/>
										</g>
									</g>
								</g>
							</g>
						</svg>
					</div>
				</div>
				<div class="relative">
					<span
						class="{moveToRight
							? '-translate-x-1/3'
							: '-translate-x-2/3'} absolute duration-500 font-sans tracking-wide font-medium opacity-80 uppercase top-1/2 -translate-y-1/2 transform left-1/2 "
					>
					<T
					keyName="Top-view"
					defaultValue="Top View"
				/>
				</span>

					<svg
						class="{moveToRight
							? '-rotate-90 -translate-y-[7%] sm:-translate-y-5 sm:rotate-0'
							: ' -translate-y-5 '}  duration-500 w-full transform text-primary-900 dark:text-primary-50 sm:max-w-[50vw] h-auto max-h-[40vh]"
						width="100%"
						height="100%"
						viewBox="0 0 1000 1000"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						xml:space="preserve"
						style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
					>
						<g transform="matrix(1,0,0,1,0,-1050)">
							<g transform="matrix(1.00908,0,0,1.00908,2.27374e-13,1050)">
								<rect
									id="product-table-top"
									x="-0"
									y="-0"
									width="991"
									height="991"
									style="fill:none;"
								/>
								<clipPath id="_clip1">
									<rect id="product-table-top1" x="-0" y="-0" width="991" height="991" />
								</clipPath>
								<g clip-path="url(#_clip1)">
									<g transform="matrix(0.991,0,0,0.991,-1138.43,-1255.73)">
										<g transform="matrix(0.46943,0,0,0.46943,1011.16,685.133)">
											<path
												d="M295.276,1417.32L2421.26,1417.32L2421.26,3188.98C2130.92,3188.99 1746.98,3183.7 1746.98,3183.7C1390.27,3183.7 1750.8,2350.88 1591,2127.64C1388.75,1845.08 918.738,2155.14 410.678,2149.21C346.823,2148.55 295.405,2096.59 295.405,2032.73C295.276,1830.24 295.276,1417.32 295.276,1417.32Z"
												style="fill:currentColor;fill-opacity:0.1;"
											/>
										</g>
										<g transform="matrix(0.46943,0,0,0.46943,1011.16,685.133)">
											<path
												d="M295.276,1415.19L2421.26,1415.19C2422.44,1415.19 2423.39,1416.14 2423.39,1417.32L2423.39,3188.98C2423.39,3190.16 2422.44,3191.11 2421.26,3191.11C2131.9,3191.12 1749.58,3185.87 1746.96,3185.83C1703.55,3185.83 1670.63,3173.61 1646,3151.81C1621.42,3130.06 1605.09,3098.73 1594.92,3060.27C1581.48,3009.43 1578.81,2946.09 1581.87,2876.17C1588.74,2719.4 1624.4,2529.47 1631.12,2373.68C1635.58,2270.39 1627.41,2182.16 1589.27,2128.88C1508.84,2016.51 1385.74,1998.63 1234.73,2016.99C1006.83,2044.69 715.592,2154.9 410.656,2151.34C345.633,2150.67 293.275,2097.76 293.275,2032.73C293.146,1830.24 293.146,1417.32 293.146,1417.32C293.146,1416.14 294.099,1415.19 295.276,1415.19ZM297.406,1419.45C297.406,1451.56 297.412,1838.73 297.535,2032.73C297.535,2095.42 348.014,2146.43 410.701,2147.08C715.435,2150.64 1006.47,2040.45 1234.22,2012.76C1386.98,1994.19 1511.37,2012.72 1592.73,2126.4C1631.3,2180.27 1639.89,2269.43 1635.38,2373.86C1628.66,2529.65 1592.99,2719.58 1586.13,2876.35C1583.09,2945.79 1585.69,3008.69 1599.04,3059.18C1608.97,3096.73 1624.82,3127.38 1648.82,3148.62C1672.76,3169.8 1704.79,3181.57 1746.98,3181.57C1746.99,3181.57 1747,3181.57 1747.01,3181.57C1747.01,3181.57 2129.06,3186.83 2419.13,3186.85L2419.13,1419.45L297.406,1419.45Z"
												style="fill:currentColor;"
											/>
										</g>
										<g transform="matrix(1.95808,0,0,38.68,761.017,-7117.6)">
											<rect
												x="214"
												y="220"
												width="90.7"
												height="5.1"
												style="fill:currentColor;fill-opacity:0.1;"
											/>
										</g>
										<g transform="matrix(1.95808,0,0,38.68,761.017,-7117.6)">
											<path
												d="M304.7,225.126L214,225.126C213.718,225.126 213.489,225.114 213.489,225.1L213.489,220C213.489,219.986 213.718,219.974 214,219.974L304.7,219.974C304.982,219.974 305.211,219.986 305.211,220L305.211,225.1C305.211,225.114 304.982,225.126 304.7,225.126ZM304.189,225.074L304.189,220.026L214.511,220.026L214.511,225.074L304.189,225.074Z"
												style="fill:currentColor;"
											/>
										</g>
										<g transform="matrix(1.95808,0,0,1.14174,761.017,1269.85)">
											<rect
												x="206.9"
												y="70.6"
												width="7.1"
												height="219.7"
												style="fill:currentColor;fill-opacity:0.1;"
											/>
										</g>
										<g transform="matrix(1.95808,0,0,1.14174,761.017,1269.85)">
											<path
												d="M214,291.176L206.9,291.176C206.618,291.176 206.389,290.784 206.389,290.3L206.389,70.6C206.389,70.116 206.618,69.724 206.9,69.724L214,69.724C214.282,69.724 214.511,70.116 214.511,70.6L214.511,290.3C214.511,290.784 214.282,291.176 214,291.176ZM213.489,289.424L213.489,71.476L207.411,71.476L207.411,289.424L213.489,289.424Z"
												style="fill:currentColor;"
											/>
										</g>
										<g transform="matrix(1.95808,0,0,1.14174,761.017,1269.85)">
											<rect
												x="304.7"
												y="70.6"
												width="7.1"
												height="219.7"
												style="fill:currentColor;fill-opacity:0.1;"
											/>
										</g>
										<g transform="matrix(1.95808,0,0,1.14174,761.017,1269.85)">
											<path
												d="M311.8,291.176L304.7,291.176C304.418,291.176 304.189,290.784 304.189,290.3L304.189,70.6C304.189,70.116 304.418,69.724 304.7,69.724L311.8,69.724C312.082,69.724 312.311,70.116 312.311,70.6L312.311,290.3C312.311,290.784 312.082,291.176 311.8,291.176ZM311.289,289.424L311.289,71.476L305.211,71.476L305.211,289.424L311.289,289.424Z"
												style="fill:currentColor;"
											/>
										</g>
										<g transform="matrix(1.95808,0,0,3.83727,761.017,1066.6)">
											<rect
												x="689.4"
												y="84.8"
												width="5.1"
												height="198.4"
												style="fill:currentColor;fill-opacity:0.1;"
											/>
										</g>
										<g transform="matrix(1.95808,0,0,3.83727,761.017,1066.6)">
											<path
												d="M694.5,283.461L689.4,283.461C689.118,283.461 688.889,283.344 688.889,283.2L688.889,84.8C688.889,84.656 689.118,84.539 689.4,84.539L694.5,84.539C694.782,84.539 695.011,84.656 695.011,84.8L695.011,283.2C695.011,283.344 694.782,283.461 694.5,283.461ZM693.989,282.939C693.989,282.939 693.989,85.061 693.989,85.061C693.989,85.061 689.911,85.061 689.911,85.061C689.911,93.068 689.911,282.939 689.911,282.939L693.989,282.939Z"
												style="fill:currentColor;"
											/>
										</g>
										<g transform="matrix(1.11387e-16,1.81909,-0.808363,4.94979e-17,1632.4,1108.4)">
											<rect
												x="148.8"
												y="339.9"
												width="7.1"
												height="219.7"
												style="fill:currentColor;fill-opacity:0.1;"
											/>
										</g>
										<g transform="matrix(1.11387e-16,1.81909,-0.808363,4.94979e-17,1632.4,1108.4)">
											<path
												d="M156.45,339.9L156.45,559.6C156.45,560.283 156.204,560.837 155.9,560.837L148.8,560.837C148.496,560.837 148.25,560.283 148.25,559.6L148.25,339.9C148.25,339.217 148.496,338.663 148.8,338.663L155.9,338.663C156.204,338.663 156.45,339.217 156.45,339.9ZM155.35,341.137L149.35,341.137L149.35,558.363L155.35,558.363L155.35,341.137Z"
												style="fill:currentColor;"
											/>
										</g>
										<g transform="matrix(1.11387e-16,1.81909,-1.51601,9.28291e-17,2652.83,1108.4)">
											<rect
												x="148.8"
												y="339.9"
												width="7.1"
												height="219.7"
												style="fill:currentColor;fill-opacity:0.1;"
											/>
										</g>
										<g transform="matrix(1.11387e-16,1.81909,-1.51601,9.28291e-17,2652.83,1108.4)">
											<path
												d="M156.45,339.9L156.45,559.6C156.45,559.964 156.204,560.26 155.9,560.26L148.8,560.26C148.496,560.26 148.25,559.964 148.25,559.6L148.25,339.9C148.25,339.536 148.496,339.24 148.8,339.24L155.9,339.24C156.204,339.24 156.45,339.536 156.45,339.9ZM155.35,340.56L149.35,340.56L149.35,558.94L155.35,558.94L155.35,340.56Z"
												style="fill:currentColor;"
											/>
										</g>
										<g transform="matrix(1.11387e-16,1.81909,-1.51601,9.28291e-17,2652.83,1882.63)">
											<rect
												x="148.8"
												y="339.9"
												width="7.1"
												height="219.7"
												style="fill:currentColor;fill-opacity:0.1;"
											/>
										</g>
										<g transform="matrix(1.11387e-16,1.81909,-1.51601,9.28291e-17,2652.83,1882.63)">
											<path
												d="M156.45,339.9L156.45,559.6C156.45,559.964 156.204,560.26 155.9,560.26L148.8,560.26C148.496,560.26 148.25,559.964 148.25,559.6L148.25,339.9C148.25,339.536 148.496,339.24 148.8,339.24L155.9,339.24C156.204,339.24 156.45,339.536 156.45,339.9ZM155.35,340.56L149.35,340.56L149.35,558.94L155.35,558.94L155.35,340.56Z"
												style="fill:currentColor;"
											/>
										</g>
										<g transform="matrix(1.11387e-16,1.81909,-1.39481,8.54071e-17,2585,1814.16)">
											<rect
												x="148.8"
												y="339.9"
												width="7.1"
												height="219.7"
												style="fill:currentColor;fill-opacity:0.1;"
											/>
										</g>
										<g transform="matrix(1.11387e-16,1.81909,-1.39481,8.54071e-17,2585,1814.16)">
											<path
												d="M156.45,339.9L156.45,559.6C156.45,559.996 156.204,560.317 155.9,560.317L148.8,560.317C148.496,560.317 148.25,559.996 148.25,559.6L148.25,339.9C148.25,339.504 148.496,339.183 148.8,339.183L155.9,339.183C156.204,339.183 156.45,339.504 156.45,339.9ZM155.35,340.617C155.35,340.617 149.35,340.617 149.35,340.617L149.35,558.883C149.35,558.883 155.35,558.883 155.35,558.883L155.35,340.617Z"
												style="fill:currentColor;"
											/>
										</g>
										<g transform="matrix(4.79126e-16,7.82472,-1.39481,8.54071e-17,2585,933.434)">
											<rect
												x="148.8"
												y="339.9"
												width="7.1"
												height="219.7"
												style="fill:currentColor;fill-opacity:0.1;"
											/>
										</g>
										<g transform="matrix(4.79126e-16,7.82472,-1.39481,8.54071e-17,2585,933.434)">
											<path
												d="M156.028,339.9L156.028,559.6C156.028,559.996 155.971,560.317 155.9,560.317L148.8,560.317C148.729,560.317 148.672,559.996 148.672,559.6L148.672,339.9C148.672,339.504 148.729,339.183 148.8,339.183L155.9,339.183C155.971,339.183 156.028,339.504 156.028,339.9ZM155.772,340.617C155.772,340.617 148.928,340.617 148.928,340.617L148.928,558.883C148.928,558.883 155.772,558.883 155.772,558.883L155.772,340.617Z"
												style="fill:currentColor;"
											/>
										</g>
										<g transform="matrix(4.79126e-16,7.82472,-1.39481,8.54071e-17,2585,933.434)">
											<rect
												x="148.8"
												y="339.9"
												width="7.1"
												height="219.7"
												style="fill:currentColor;fill-opacity:0.1;"
											/>
										</g>
										<g transform="matrix(4.79126e-16,7.82472,-1.39481,8.54071e-17,2585,933.434)">
											<path
												d="M156.028,339.9L156.028,559.6C156.028,559.996 155.971,560.317 155.9,560.317L148.8,560.317C148.729,560.317 148.672,559.996 148.672,559.6L148.672,339.9C148.672,339.504 148.729,339.183 148.8,339.183L155.9,339.183C155.971,339.183 156.028,339.504 156.028,339.9ZM155.772,340.617C155.772,340.617 148.928,340.617 148.928,340.617L148.928,558.883C148.928,558.883 155.772,558.883 155.772,558.883L155.772,340.617Z"
												style="fill:currentColor;"
											/>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div
					class="
					 w-full pl-6 self-start text-justify transform transition-all duration-500 relative items-center flex flex-col justify-center"
				>
					<p style="-webkit-hyphens: auto;
					-ms-hyphens: auto;
					hyphens: auto;">
						<T
							keyName="description-product-design-2"
							defaultValue="This table was one of my first projects. I designed it myself and customized it to suit
						all my needs. With the organic cutout in the middle everything is reachable while
						maximizing space."
						/>
					</p>
					<button
						class="uppercase font-sans bg-primary-800 w-auto mt-4 px-6 py-2 rounded-lg hover:bg-primary-700 text-primary-50"
						on:click={() => (moveToRight = !moveToRight)}
					>
						<T keyName="change-view-button" defaultValue="View Images" />
					</button>
				</div>
			{/if}
		</div>
	</div>
</section>
