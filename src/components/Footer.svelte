<script lang="ts">
	import Popup from './Popup.svelte';
	import TermsOfService from './TermsOfService.svelte';
	import { T } from '@tolgee/svelte'; // change import statement

	let popup: any = $state();
	function openPopup() {
		popup.show();
	}

	let now: number = new Date().getFullYear();
</script>

<div
	class=" absolute inset-x-0 bottom-0 z-10 px-2 py-5 text-center text-xs dark:text-primary-100 md:ml-40"
>
	<!--		<button aria-label="View Privacy PopUp" class="hover:text-primary-500" on:click={toggleButton}>Privacy</button> -->
	&copy; Sebastian Jans, {now} –
	<a
		aria-label="View Terms of Service PopUp"
		class="font-bold hover:text-primary-500"
		href="terms"
		onclick={openPopup}
	>
		<T keyName="terms-of-service" defaultValue="Terms of Service" /></a
	>
</div>

<!-- <Popup
	popupClass={'w-[90vw] md:w-[70vw] !pl-8  scrollbar fixed h-[70vh] justify-start overflow-y-auto dark:bg-primary-50 bg-primary-900'}
	position={'top-[15vh] left-[5vw] md:left-[15vw]'}
	bind:this={popup}
>
	<TermsOfService />
</Popup> -->
