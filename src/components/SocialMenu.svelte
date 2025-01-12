<script lang="ts">
  import SocialMediaButton from "./SocialMediaButton.svelte";
  import { socialMedia } from "$lib/lists/socialMedia";
  import DarkModeButton from "./DarkModeButton.svelte";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
  import { T } from "@tolgee/svelte"; // change import statement
</script>

<div
  class="flex flex-col gap-y-4 justify-center items-center md:gap-x-0 h-auto mb-6"
>
  <!-- <div class="h-0.5 md:w-full justify-center rounded-full bg-primary-900/80 dark:bg-primary-50/80" /> -->
  <div class="flex flex-col gap-y-2 items-center">
    <span class="dark:text-primary-50 font-sans uppercase"
      ><T keyName="socials" defaultValue="My Socials" /></span
    >
    <div class="grid grid-cols-3 md:grid-cols-1 gap-2">
      {#each socialMedia as { socialLink, socialIcon, socialMediaName }}
        <SocialMediaButton {socialLink} {socialIcon} {socialMediaName} />
      {/each}
    </div>
  </div>
  <!-- <div class="h-10 hidden md:visible md:h-0.5 md:w-full justify-center w-0.5 rounded-full bg-primary-900/80 dark:bg-primary-50/80" /> -->
  <div class="flex flex-col gap-y-2 justify-center items-center">
    <span class="dark:text-primary-50 font-sans uppercase"
      ><T keyName="Settings" defaultValue="Site Settings" /></span
    >
    <div class="flex flex-col items-center gap-2">
      <DarkModeButton />
      <LanguageSwitcher />
    </div>
  </div>
</div>
