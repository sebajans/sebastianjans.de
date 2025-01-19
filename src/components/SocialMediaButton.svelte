<script lang="ts">
	interface Props {
		socialIcon: any;
		socialLink: string;
		socialMediaName: string;
	}

	let { socialIcon, socialLink, socialMediaName }: Props = $props();
</script>

<a
	aria-label={socialMediaName}
	class="duration-250 relative h-10 w-10 rounded-md bg-primary-800/20 p-2 text-primary-900 transition hover:bg-primary-900 hover:text-primary-50 dark:bg-primary-50/20 dark:text-primary-50 dark:hover:bg-primary-50 dark:hover:text-primary-900"
	rel="external"
	href={socialLink}
>
	<span class="h-6 w-6">
		{@html socialIcon}
	</span>
</a>
