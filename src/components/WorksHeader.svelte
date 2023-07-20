<script lang="ts">
	export let backgroundColor: string;
</script>

<div class="top-0  w-screen md:w-full
 sticky  md:top-12 h-20 md:h-16 z-20 inset-x-0 md:right-0 flex flex-row mt-0 md:mt-4">
	<div class="w-[calc(100vw_-_56rem)] h-full" />
	<div class="max-w-4xl w-full">
		<h2
			class="{backgroundColor} backdrop-blur-lg text-right md:text-right w-full md:w-fit ml-auto pr-8 pl-3  md:rounded-md font-sans py-6 md:py-3 text-2xl md:text-4xl "
		>
			<slot />
		</h2>
	</div>
</div>
