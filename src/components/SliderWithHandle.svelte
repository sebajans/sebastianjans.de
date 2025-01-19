<script lang="ts">
	let dragging = false;
	let sliderOffset = 0.5; // Initial offset between 0 and 1
	let startOffset = 0; // Initial mouse/touch position on drag start
	let currentOffset = 0; // Current mouse/touch position while dragging

	function handleStart(event: MouseEvent | TouchEvent) {
		event.preventDefault();
		dragging = true;
		startOffset = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
		window.addEventListener('mousemove', handleMove);
		window.addEventListener('touchmove', handleMove, { passive: false }); // Use { passive: false } to prevent default touchmove behavior on some devices
		window.addEventListener('mouseup', handleEnd);
		window.addEventListener('touchend', handleEnd);
	}

	function handleMove(event: MouseEvent | TouchEvent) {
		if (dragging) {
			const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
			currentOffset = clientX - startOffset;
			const divWidth = document.querySelector('.slider-wrapper')!.clientWidth; // Get the width of the slider container div
			sliderOffset += currentOffset / divWidth; // Update sliderOffset relative to divWidth
			sliderOffset = Math.min(Math.max(sliderOffset, 0), 1); // Ensure sliderOffset stays between 0 and 1
			startOffset = clientX;
		}
	}

	function handleEnd() {
		dragging = false;
		currentOffset = 0;
		window.removeEventListener('mousemove', handleMove);
		window.removeEventListener('touchmove', handleMove);
		window.removeEventListener('mouseup', handleEnd);
		window.removeEventListener('touchend', handleEnd);
	}

	export let lowerImage: string;
	export let upperImage: string;
</script>

<div class="relative h-full min-h-[400px] w-full overflow-hidden">
	<div class="slider-wrapper relative h-full w-full">
		<div
			role="slider"
			tabindex="0"
			aria-valuenow={sliderOffset}
			class="slider bg-black dark:bg-teal-50 after:bg-black dark:after:bg-teal-50 absolute z-20 h-full
      w-0.5 cursor-grab active:cursor-grabbing"
			style="top: 0; left: calc({sliderOffset * 100}% - 1px);"
			on:mousedown|preventDefault={handleStart}
			on:touchstart|preventDefault={handleStart}
		/>
	</div>

	<div class="user-select-none pointer-events-none absolute inset-y-0 left-0 h-full w-full">
		<div
			class="user-select-none pointer-events-none absolute inset-y-0 right-0 z-[1] h-full w-full"
			style="clip-path: polygon(100% 0, {sliderOffset * 100}% 0, {sliderOffset *
				100}% 100%, 100% 100% );"
		>
			<img class="h-full w-full object-cover object-left-top" src={lowerImage} alt="Lower" />
		</div>
		<div
			class="user-select-none pointer-events-none absolute inset-y-0 left-0 z-[2] h-full w-full"
			style="clip-path: polygon(0 0, {sliderOffset * 100}% 0, {sliderOffset * 100}% 100%, 0% 100%);"
		>
			<img class="h-full w-full object-cover object-left-top" src={upperImage} alt="Upper" />
		</div>
	</div>
</div>

<style>
	.slider:after {
		@apply absolute left-0 top-1/2 h-5 w-5 -translate-x-[9px] -translate-y-1/2 rotate-45 content-[""];
	}
	.slider-wrapper .slider:active,
	.slider-wrapper .slider:focus,
	.slider-wrapper .slider:after:active {
		@apply cursor-grabbing;
	}
</style>
