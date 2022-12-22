<script lang="ts">
	export let socialIcon: any;
	export let socialLink: string;
	export let socialMediaName: string;
</script>

<a 
	aria-label="{socialMediaName}"
	class="p-2 h-10 w-10 relative rounded-md hover:text-primary-500 dark:hover:text-primary-500 bg-primary-900 text-primary-50 dark:bg-primary-50 dark:text-primary-900" rel="external" href={socialLink}>
	<span class="h-6 w-6 transition duration-250">
		{@html socialIcon}
	</span>
</a>