<script lang="ts">
	export let backgroundColor: string;
</script>

<!-- style="transform:translate3d(0,0,0); transform-style: preserver-3d; backface-visibility: hidden" -->
<div class="w-full sticky top-[6rem] h-16 z-10 right-0 flex flex-row mt-4 md:mt-24">
	<div class="w-[calc(100vw_-_56rem)] h-full" />
	<div class="max-w-4xl w-full">
		<h2
			class="{backgroundColor} backdrop-blur-md md:text-right w-fit ml-auto text-left pr-8 pl-3 rounded-md font-sans py-3 text-4xl "
		>
			<slot />
		</h2>
	</div>
	<!-- <div class="{backgroundColor} w-[calc(100vw_-_56rem)] h-auto" /> -->
</div>
