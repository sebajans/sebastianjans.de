<script lang="ts">
	import { T } from '@tolgee/svelte';
	import type { MainService } from './services';
	// import { services } from "./services";
	import ServiceComponent from './ServiceComponent.svelte';
	const { service }: { service: MainService } = $props();
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';

	const plugin = Autoplay({ delay: 1000, stopOnInteraction: false });

	const opts = {
		loop: true,
		duration: 4000,
		easing: 'linear'
	};
</script>

<section
	class="col-start-1 row-start-1 flex h-works min-h-[50svh] w-full flex-col items-center justify-center px-2 transition-all duration-500 md:h-worksmd md:max-h-[56rem]"
>
	<div class="sm:fle x-row my-auto flex flex-col items-center">
		<div class="grid h-full w-full grid-cols-1 items-center gap-6 sm:grid-cols-2">
			<div class="flex w-full flex-col">
				<h2 class="text-left">
					<T keyName="h-web-services" defaultValue="From start to finish, i've got you covered" />
				</h2>
				<p class="text-left">
					<T
						keyName="p-web-services-text"
						defaultValue="I offer a range of services to help you build your website from start to finish. Whether you need help with design, development, or marketing, I've got you covered. I'll work with you to create a website that meets your needs and helps you achieve your goals."
					/>
				</p>
			</div>
			<div class="flex">
				<Carousel.Root
					plugins={[plugin]}
					{opts}
					on:mousenter={() => plugin.stop}
					on:mouseleave={() => plugin.reset}
					orientation="vertical"
					class="w-full px-4 md:px-0"
				>
					<Carousel.Content class="h-[24rem] sm:h-[24rem] md:h-[28rem] ">
						{#each service.subServices as item}
							<Carousel.Item class="w-full basis-1/2 dark:text-primary-50 sm:basis-1/3 ">
								<div
									class=" md:bg-transp arent !bg-primaryO riginal-200 relative flex h-full min-h-[8rem] w-full flex-col items-start justify-start border-transparent !bg-opacity-0 px-2 py-2 backdrop-blur-md transition-all hover:border-primary-900/5 hover:!bg-opacity-100 dark:border-transparent dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 dark:hover:border-primary-50/10 md:rounded-md md:border md:from-primary-900/10 md:to-primary-900/5 md:px-3 md:py-3 md:hover:bg-gradient-to-br"
								>
									<ServiceComponent
										name={item.component ? item.component : ''}
										class="h-12 text-5xl"
									/>
									<h3 class=" z-10 flex items-start justify-start text-start">
										<T keyName="h3-{item.name}" defaultValue={item.name} />
									</h3>
									<span class=" z-10 flex items-start justify-start text-start text-sm">
										<T keyName="span-{item.name}-description" defaultValue={item.description} />
									</span>
								</div>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
				</Carousel.Root>
			</div>
		</div>
	</div>
</section>
