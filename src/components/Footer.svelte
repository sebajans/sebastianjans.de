<script type="ts">
	import Popup from "./Popup.svelte";
	import TermsOfService from "./TermsOfService.svelte";
	
	let popup: any;

	function openPopup() {
		popup.show();
	}

</script>
<div class="relative botton-0 inset-x-0 p-6 align-middle text-xs text-center">
	<!--		<button class="hover:text-primary-500" on:click={toggleButton}>Privacy</button> -->
	&copy; Sebastian Jans, 2022 –
	<button class="hover:text-primary-500 font-bold" on:click={openPopup}>Terms of Service</button>
</div>

<Popup popupClass={'w-full fixed h-[60vh] justify-start flex overflow-y-auto w-full dark:bg-primary-900 bg-primary-50'} bind:this={popup}>
	<TermsOfService />
</Popup>