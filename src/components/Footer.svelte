<script lang="ts">
	import Popup from './Popup.svelte';
	import TermsOfService from './TermsOfService.svelte';
	import { T } from '@tolgee/svelte';

	let popup: any;
	function openPopup() {
		popup.show();
	}

	let now: number = new Date().getFullYear();
</script>

<div class="absolute z-10 bottom-0 inset-x-0 md:ml-44 py-5 pl-16 pr-2 text-xs text-center">
	<!--		<button aria-label="View Privacy PopUp" class="hover:text-primary-500" on:click={toggleButton}>Privacy</button> -->
	&copy; Sebastian Jans, {now} –
	<button
		aria-label="View Terms of Service PopUp"
		class="hover:text-primary-500 font-bold"
		on:click={openPopup}
	>
		<T keyName="terms-of-service" defaultValue="Terms of Service" /></button
	>
</div>

<Popup
	popupClass={'w-[90vw] md:w-[70vw] !pl-8  scrollbar fixed h-[70vh] justify-start overflow-y-auto dark:bg-primary-50 bg-primary-900'}
	position={'top-[15vh] left-[5vw] md:left-[15vw]'}
	bind:this={popup}
>
	<TermsOfService />
</Popup>
