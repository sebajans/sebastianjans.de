<script lang="ts">
	import T from '@tolgee/svelte/T.svelte'; // change import statement

	import Popup from '../../components/Popup.svelte';

	let popup: any;
	function openPopup() {
		popup.show();
	}
</script>

<!-- style="background:radial-gradient(at left bottom, var(--tw-gradient-from) 0%, transparent 30%), radial-gradient(at top right, var(--tw-gradient-from) 0%, transparent 30%);"
bg-gradient-to-bl from-primary-600/50 dark:from-primary-700/50  -->
<section id="end" class="px-4 w-full relative flex justify-center ">
	<div class="max-w-4xl w-full flex flex-col md:flex-col items-end justify-center">
		<h1 class="w-full text-4xl md:text-5xl text-right">
			<T keyName="download-portfolio-header" defaultValue="Didn't see enough?" />
		</h1>
		<h3 class="dark:text-primary-200 w-3/4 md:w-2/3 self-end text-xl md:text-2xl text-right py-4">
			<T
				keyName="download-portfolio-text"
				defaultValue="Download my portfolio below to see more of my work."
			/>
		</h3>
		<button
			class="relative uppercase font-sans btn standardButton w-auto mt-4  rounded-lg text-primary-50"
			on:click={openPopup}
		>
			<T keyName="download-portfolio-button" defaultValue="Download Portfolio" />
		</button>
		<Popup
			popupClass={'w-full mr-10 items-start justify-start bg-primary-200'}
			position={'w-auto top-auto mt-20 translate-x-0 translate-y-0'}
			bind:this={popup}
		>
			<div class="font-sans font-normal uppercase space-x-2 translate-x-0">
				<a
					class="bg-primary-300 py-2 px-3 rounded-md hover:bg-primary-700 text-primary-900  transition-all duration-200 hover:text-primary-400"
					target="_blank"
					rel="noopener noreferrer"
					href="CV/CV_EN.pdf"
				>
					EN</a
				>
				<a
					class="bg-primary-300 py-2 px-3 rounded-md hover:bg-primary-700 text-primary-900 transition-all duration-200 hover:text-primary-400"
					target="_blank"
					rel="noopener noreferrer"
					href="CV/CV_DE.pdf"
				>
					ES</a
				>
				<a
					class="bg-primary-300 py-2 px-3 rounded-md hover:bg-primary-700 text-primary-900 transition-all duration-200 hover:text-primary-400"
					target="_blank"
					rel="noopener noreferrer"
					href="CV/CV_ES.pdf"
				>
					DE</a
				>
			</div>
		</Popup>
	</div>
</section>

<style>
		.standardButton {
		@apply items-center justify-center text-center text-primary-900 dark:text-primary-50 dark:from-primary-50/40 dark:to-primary-50/30 from-primary-900/30 to-primary-900/20 dark:border-primary-50/10 border-primary-900/10 font-light  bg-gradient-to-tr box-border py-3 px-4 h-auto md:backdrop-blur-sm flex border transition-all ease-in duration-300 rounded-lg hover:from-primary-900/30 hover:to-primary-900/40
				dark:hover:from-primary-50/20 dark:hover:to-primary-50/30 
				hover:border-primary-900/50 dark:hover:border-primary-50/50
				
	}
</style>