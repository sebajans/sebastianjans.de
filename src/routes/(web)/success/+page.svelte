<script>
	import { T } from '@tolgee/svelte';
</script>

<div class="max-w-4xl w-full flex flex-col md:flex-col items-end justify-center">
	<h1 class="w-full text-5xl text-right">
		<T keyName="success-page" defaultValue="Success!" />
	</h1>
	<h3 class="w-full md:w-2/3 self-end text-2xl text-right py-4">
		<T
			keyName="success-text"
			defaultValue="Thank you for contacting me, i will message you shortly!"
		/>
	</h3>
</div>
