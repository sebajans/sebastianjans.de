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
  class="p-2 h-10 transition duration-250 w-10 relative rounded-md hover:text-primary-50 dark:hover:text-primary-900 bg-primary-800/20 hover:bg-primary-900 text-primary-900 dark:bg-primary-50/20 dark:hover:bg-primary-50 dark:text-primary-50"
  rel="external"
  href={socialLink}
>
  <span class="h-6 w-6">
    {@html socialIcon}
  </span>
</a>
