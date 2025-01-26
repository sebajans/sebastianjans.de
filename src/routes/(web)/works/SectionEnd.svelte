<script lang="ts">
	import { T } from '@tolgee/svelte';
	import Popup from '$components/Popup.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let popup: any;
	function openPopup() {
		popup.show();
	}

	let element: HTMLElement | undefined = $state();
	let intersecting: boolean | undefined = $state();
</script>

<IntersectionObserver once threshold={0.5} {element} bind:intersecting>
	<section bind:this={element} id="end" class="relative flex w-full justify-center px-4">
		<div class="flex w-full max-w-4xl flex-col items-end justify-center md:flex-col">
			<h1
				class="{intersecting
					? ''
					: 'translate-x-1/3 opacity-0'} w-full text-right text-4xl transition-all duration-500 md:text-5xl"
			>
				<T keyName="download-portfolio-header" defaultValue="Didn't see enough?" />
			</h1>
			<h3
				class="{intersecting
					? ''
					: 'translate-x-1/3 opacity-0'} dark:text-primary-200 w-3/4 self-end py-4 text-right text-xl transition-all delay-100 duration-500 md:w-2/3 md:text-2xl"
			>
				<T
					keyName="download-portfolio-text"
					defaultValue="Download my portfolio below to see more of my work."
				/>
			</h3>
			<button
				class="{intersecting
					? ''
					: 'translate-x-1/3 opacity-0'} btn standardButton text-primary-50 dark:bg-primary-300 relative mt-4 w-auto rounded-lg font-sans uppercase transition-all delay-200 duration-500"
				onclick={openPopup}
			>
				<T keyName="download-portfolio-button" defaultValue="Download Portfolio" />
			</button>
			<Popup
				popupClass={'w-full mr-10 items-start justify-start bg-primary-200'}
				position={'w-auto top-auto mt-20 translate-x-0 translate-y-0'}
				bind:this={popup}
			>
				<div class="translate-x-0 space-x-2 font-sans font-normal uppercase">
					<a
						class="bg-primary-300 text-primary-900 hover:bg-primary-700 hover:text-primary-400 rounded-md px-3 py-2 transition-all duration-200"
						target="_blank"
						rel="noopener noreferrer"
						href="CV/CV_EN.pdf"
					>
						EN</a
					>
					<a
						class="bg-primary-300 text-primary-900 hover:bg-primary-700 hover:text-primary-400 rounded-md px-3 py-2 transition-all duration-200"
						target="_blank"
						rel="noopener noreferrer"
						href="CV/CV_DE.pdf"
					>
						ES</a
					>
					<a
						class="bg-primary-300 text-primary-900 hover:bg-primary-700 hover:text-primary-400 rounded-md px-3 py-2 transition-all duration-200"
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
</IntersectionObserver>
