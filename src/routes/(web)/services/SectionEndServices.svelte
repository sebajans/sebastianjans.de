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
		<div class="flex w-full max-w-4xl flex-col items-start justify-center md:flex-col">
			<h1
				class="{intersecting
					? ''
					: '-translate-x-20 opacity-0'} w-full text-4xl transition-all duration-500 md:text-5xl"
			>
				<T keyName="work-with-me" defaultValue="Want to work with me?" />
			</h1>
			<h3
				class="{intersecting
					? ''
					: '-translate-x-20 opacity-0'} w-3/4 py-4 text-xl transition-all delay-100 duration-500 dark:text-primary-200 md:w-2/3 md:text-2xl"
			>
				<T
					keyName="get-in-touch"
					defaultValue="Get in Touch! I'm always looking for new opportunities and challenges. This is my approach:"
				/>
			</h3>
			<div
				class="{intersecting
					? ''
					: '-translate-x-20 opacity-0'} w-full self-end py-4 transition-all delay-200 duration-500 dark:text-primary-200"
			>
				<ol class="list-inside list-decimal">
					<li>
						<T
							keyName="services-step-1"
							defaultValue="Reach out to me for a friendly chat to discuss your goals and project vision."
						/>
					</li>
					<li>
						<T
							keyName="services-step-2"
							defaultValue="Receive a detailed project estimate with flexible packages tailored to your needs."
						/>
					</li>
					<li>
						<T
							keyName="services-step-3"
							defaultValue="Next, we'll schedule a collaborative revision period to refine your project plan."
						/>
					</li>
					<li>
						<T keyName="services-step-4" defaultValue="Get a clear and concise project timeline." />
					</li>
					<li>
						<T keyName="services-step-5" defaultValue="Kick off your project." />
					</li>
					<li>
						<T
							keyName="services-step-6"
							defaultValue="Complete the project with thorough testing and a final review before launch."
						/>
					</li>
				</ol>
			</div>
		</div>
	</section>
</IntersectionObserver>

<style>
	.standardButton {
		@apply box-border flex h-auto items-center justify-center rounded-lg border border-primary-900/10 bg-gradient-to-tr from-primary-900/30 to-primary-900/20 px-4 py-3 text-center font-light text-primary-900 transition-all duration-300 ease-in hover:border-primary-900/50 hover:from-primary-900/30 hover:to-primary-900/40 dark:border-primary-50/10 dark:from-primary-50/40 dark:to-primary-50/30 dark:text-primary-50 dark:hover:border-primary-50/50 dark:hover:from-primary-50/20 dark:hover:to-primary-50/30 md:backdrop-blur-sm;
	}
</style>
