<script lang="ts">
	import { T } from '@tolgee/svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLElement | undefined = $state();
	let intersecting: boolean | undefined = $state();

	const servicesSteps = [
		{
			key: 'services-step-1',
			value: 'Reach out to me for a friendly chat to discuss your goals and project vision.'
		},
		{
			key: 'services-step-2',
			value: 'Receive a detailed project estimate with flexible packages tailored to your needs.'
		},
		{
			key: 'services-step-3',
			value: "Next, we'll schedule a collaborative revision period to refine your project plan."
		},
		{ key: 'services-step-4', value: 'Get a clear and concise project timeline.' },
		{ key: 'services-step-5', value: 'Kick off your project.' },
		{
			key: 'services-step-6',
			value: 'Complete the project with thorough testing and a final review before launch.'
		}
	];
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
					: '-translate-x-20 opacity-0'} dark:text-primary-200 w-3/4 py-4 text-xl transition-all delay-100 duration-500 md:w-2/3 md:text-2xl"
			>
				<T
					keyName="get-in-touch"
					defaultValue="Get in Touch! I'm always looking for new opportunities and challenges. This is my approach:"
				/>
			</h3>
			<div
				class="{intersecting
					? ''
					: '-translate-x-20 opacity-0'} dark:text-primary-200 w-full self-end py-4 transition-all delay-200 duration-500"
			>
				<ul class="grid sm:grid-cols-2 md:grid-cols-3">
					{#each servicesSteps as step}
						<li class="flex py-2">
							<T keyName={step.key} defaultValue={step.value} />
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>
</IntersectionObserver>
