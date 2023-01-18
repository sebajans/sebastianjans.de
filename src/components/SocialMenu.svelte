<script lang="ts">
  	import SocialMediaButton from './SocialMediaButton.svelte';
    import { socialMedia } from './socialMedia';
  	import DarkModeButton from './DarkModeButton.svelte';
    import LanguageSwitcher from './LanguageSwitcher.svelte';
	  import { T } from '@tolgee/svelte';

</script>


<div class="flex flex-col space-y-4 justify-center items-center md:space-x-0 h-auto mb-6">
  
  <!-- <div class="h-0.5 md:w-full justify-center rounded-full bg-primary-900/80 dark:bg-primary-50/80" /> -->
  <div class="flex flex-col space-y-2 items-center">
    <span class="font-sans uppercase"><T keyName="socials" defaultValue="My Socials" /></span>
    <div class="grid grid-cols-4 md:grid-cols-2 gap-2">
      {#each socialMedia as { socialLink, socialIcon, socialMediaName }}
      <SocialMediaButton {socialLink} {socialIcon} {socialMediaName} />
      {/each}
    </div>
  </div>
  <!-- <div class="h-10 hidden md:visible md:h-0.5 md:w-full justify-center w-0.5 rounded-full bg-primary-900/80 dark:bg-primary-50/80" /> -->
  <div class="flex flex-col space-y-2 items-center">
    <span class="font-sans uppercase"><T keyName="Settings" defaultValue="Site Settings" /></span>
    <div class="flex flex-row space-x-2">
      <DarkModeButton />
      <LanguageSwitcher />
    </div>
  </div>
</div>