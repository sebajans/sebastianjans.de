<script lang="ts">
  	import SocialMediaButton from './SocialMediaButton.svelte';
    import { socialMedia } from './socialMedia';
  	import DarkModeButton from './DarkModeButton.svelte';
    import { getLanguageStore } from '@tolgee/svelte';
    import LanguageSwitcher from './LanguageSwitcher.svelte';
    const languageStore = getLanguageStore();
</script>


<div class="flex flex-row space-x-2 h-10">
  {#each socialMedia as { socialLink, socialIcon, socialMediaName }}
    <SocialMediaButton {socialLink} {socialIcon} {socialMediaName} />
  {/each}
  <div class="h-10 justify-center w-0.5 rounded-full bg-primary-900 dark:bg-primary-50" />
  <DarkModeButton />
  <!-- Language switcher comes here DE/EN/ES expandable menu -->
	<LanguageSwitcher />

</div>