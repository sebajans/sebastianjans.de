<script lang="ts">
  	import SocialMediaButton from './SocialMediaButton.svelte';
    import { socialMedia } from './socialMedia';
  	import DarkModeButton from './DarkModeButton.svelte';
    import { getLanguageStore } from '@tolgee/svelte';
    import LanguageSwitcher from './LanguageSwitcher.svelte';
    const languageStore = getLanguageStore();
</script>


<div class="flex flex-row space-x-2 h-10">
  {#each socialMedia as { socialLink, socialIcon }}
    <SocialMediaButton {socialLink} {socialIcon} />
  {/each}
  <div class="h-10 justify-center w-0.5 rounded-full bg-primary-900 dark:bg-primary-50" />
  <DarkModeButton />
  <!-- Language switcher comes here DE/EN/ES expandable menu -->
	<LanguageSwitcher />
  <!-- <select bind:value={$languageStore} class="appearance-none rounded-md text-base px-3 font-sans items-center text-center content-center flex flex-row w-10 h-10 bg-primary-900 text-primary-50 hover:text-primary-500">
    <option value="en">EN</option>
    <option value="de">DE</option>
    <option value="es">ES</option>
  </select> -->
</div>