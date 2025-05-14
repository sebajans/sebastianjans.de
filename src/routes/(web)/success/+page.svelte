<script>
	import { T } from '@tolgee/svelte';
</script>

<div class="flex w-full max-w-4xl flex-col items-end justify-center md:flex-col">
	<h1 class="w-full text-right text-5xl">
		<T keyName="success-page" defaultValue="Success!" />
	</h1>
	<h3 class="w-full self-end py-4 text-right text-2xl md:w-2/3">
		<T
			keyName="success-text"
			defaultValue="Thank you for contacting me, i will message you shortly!"
		/>
	</h3>
</div>
