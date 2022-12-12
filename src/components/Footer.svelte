<script type="ts">
	import Popup from "./Popup.svelte";
	import TermsOfService from "./TermsOfService.svelte";
	
	let popup: any;

	function openPopup() {
		popup.show();
	}

</script>
<div class="absolute  bottom-0 inset-x-0 md:ml-44 md:py-6 pb-20 align-middle text-xs text-center">
	<!--		<button class="hover:text-primary-500" on:click={toggleButton}>Privacy</button> -->
	&copy; Sebastian Jans, 2022 –
	<button class="hover:text-primary-500 font-bold" on:click={openPopup}>Terms of Service</button>
</div>

<Popup popupClass={'w-[70vw] pl-8 top-[15vh] left-[15vw] scrollbar fixed h-[70vh] justify-start overflow-y-auto dark:bg-primary-900 bg-primary-50'} bind:this={popup}>
	<TermsOfService />
</Popup>