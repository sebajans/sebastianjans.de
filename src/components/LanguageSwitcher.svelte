<script lang="ts">
  import { getTolgee } from "@tolgee/svelte";
  import { onMount } from "svelte";

  const tolgee = getTolgee(["language"]);

  let availableLangs = [
    { lang: "de", fullLanguage: "Deutsch" },
    { lang: "en", fullLanguage: "English" },
    { lang: "es", fullLanguage: "Español" },
  ];

  interface Props {
    langExpanded?: boolean;
  }

  let { langExpanded = $bindable(false) }: Props = $props();

  onMount(() => {
    langExpanded = false;
  });

  function expandMenu() {
    langExpanded = !langExpanded;
  }
</script>

<div
  class="{langExpanded
    ? 'w-[5.5rem]'
    : 'w-10'} h-10 font-sans flex group overflow-hidden duration-300 transition-all items-center justify-center flex-row relative rounded-md text-primary-50 bg-primary-900/20 hover:bg-primary-900 dark:bg-primary-50/20 dark:hover:bg-primary-50"
>
  <!-- {#if !langExpanded} -->

  <button
    aria-label="Open Language Switcher"
    class="  "
    onclick={expandMenu}
    onfocus={expandMenu}
  >
    <div
      class="px-1 transition-all uppercase duration-250 text-lg group-hover:text-primary-500 dark:hover:text-primary-500 dark:text-primary-50 text-primary-900"
    >
      {$tolgee.getLanguage()}
    </div>
  </button>
  <!-- {:else} -->
  {#if langExpanded}
    {#each availableLangs as language}
      {#if language.lang != $tolgee.getLanguage()}
        <span class="dark:text-primary-900"> / </span>
        <div
          role="button"
          tabindex="0"
          aria-label="Open Language Switcher (Currently selected language: {$tolgee.getLanguage()})"
          onclick={() => {
            $tolgee.changeLanguage(language.lang);
          }}
          onkeypress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              $tolgee.changeLanguage(language.lang);
            }
          }}
          class="w-5 px-0.5 transition-all hover:scale-110 uppercase duration-250 group-hover:text-primary-200 dark:group-hover:text-primary-700 hover:!text-primary-500 dark:hover:text-primary-400 dark:text-primary-900 cursor-pointer"
        >
          {language.lang}
        </div>
      {/if}
    {/each}
  {/if}
</div>
