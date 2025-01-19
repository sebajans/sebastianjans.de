<script lang="ts">
	import ResponsiveScreen from '$components/ResponsiveScreen.svelte';
	import { T } from '@tolgee/svelte';
</script>

<section
	class="flex min-h-[50svh] w-full snap-center flex-col items-center justify-center px-2 transition-all duration-500"
>
	<div class="flex flex-col items-center md:flex-row-reverse">
		<div class="w-full">
			<h2 class="text-left">
				<T keyName="h-responsive" defaultValue="We are mobile-first" />
			</h2>
			<p class="text-left">
				<T
					keyName="p-responsive-design"
					defaultValue="I build websites that are mobile-first and responsive. This means that your website will look great on any device, from a smartphone to a desktop computer. I also make sure that your website is accessible to everyone, including people with disabilities."
				/>
			</p>
		</div>
		<ResponsiveScreen />
	</div>
</section>
