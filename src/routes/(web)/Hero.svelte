<script lang="ts">
  import Typewriter from "svelte-typewriter";
  import { getTolgee, getTranslate } from "@tolgee/svelte";

  let visible = true;
  const currentLanguage = getTolgee(["language"]);
	const { t } = getTranslate();

  let props = {
    // ### general-purpose props ###
    // multiple options
    mode: "cascade",
    // numbers
    interval: 30,
    delay: 0,
    // booleans
    keepCursorOnFinish: false,
    showCursorOnDelay: false,
    cursor: true,
    disabled: false,
    // strings
    element: "div",
  };
  let introElements = {
en:
{
  title: $t("welcome", { defaultValue: "Welcome" }) + "!",
  subtitle: "I am a web developer",
},
de:
{
  title: "Hallo, ich bin Sebastian Jans",
  subtitle: "Ich bin ein Web-entwickler",
},
es: {
  title: "Hola, soy Sebastian Jans",
  subtitle: "Soy un desarollador web",
},

  };

  
</script>

<section
  class=" relative w-full -mt-24 sm:-mt-28 min-h-[100svh] flex flex-col justfiy-center items-center content-center"
>
  <div
    class="relative pb-[100svh] md:pb-[calc(100vh)] flex flex-col w-full max-w-2xl my-auto mx-auto"
  >
    <!-- <p use:concurrent={{ interval: 30 }}>Testing the typewriter effect</p> -->

    {#if visible}
      <div
        class="absolute inset-0 h-full min-h-max flex flex-col justify-center items-start"
      >
      <Typewriter mode="loop" wordInterval={2000} interval={30} delay={3000}>

        <h2
class="font-light text-primary-500 dark:text-white [--cursor-color:#000] dark:[--cursor-color:#fff] text-3xl sm:text-4xl leading-relaxed mb-2 sm:mb-4"
>
<span class="font-medium text-teal-600 dark:text-teal-300"
  >{introElements.en.title}.</span
>
</h2>
        <h2
class="font-light text-primary-500 dark:text-white [--cursor-color:#000] dark:[--cursor-color:#fff] text-3xl sm:text-4xl leading-relaxed mb-2 sm:mb-4"
>
<span class="font-medium text-teal-600 dark:text-teal-300"
  >product designer.</span
>
</h2>
        <h2
class="font-light text-primary-500 dark:text-white [--cursor-color:#000] dark:[--cursor-color:#fff] text-3xl sm:text-4xl leading-relaxed mb-2 sm:mb-4"
>
<span class="font-medium text-teal-600 dark:text-teal-300"
  >ux designer.</span
>
</h2>
</Typewriter>

        {#if $currentLanguage.getLanguage() === "en"}
          <Typewriter {...props}>
            <h1
              class="[--cursor-color:#000] dark:[--cursor-color:#fff] text-6xl mb-2 sm:mb-4"
            >
              Welcome!
            </h1>
            <h2
              class="font-light text-primary-800 dark:text-white [--cursor-color:#000] dark:[--cursor-color:#fff] text-3xl sm:text-4xl leading-relaxed mb-1 sm:mb-2"
            >
              <span> My name is </span>
              <span class="font-medium text-teal-600 dark:text-teal-300"
                >Sebastian Jans</span
              >
              <span> and I am a</span>
            </h2>
            <h2
              class="font-light text-primary-500 dark:text-white [--cursor-color:#000] dark:[--cursor-color:#fff] text-3xl sm:text-4xl leading-relaxed mb-2 sm:mb-4"
            >
              <span class="font-medium text-teal-600 dark:text-teal-300"
                >web developer.</span
              >
            </h2>
            <h3
              class="[--cursor-color:#000] dark:[--cursor-color:#fff] text-primary-800 text-2xl dark:text-white"
            >
              I create beautiful web-pages and web-apps.
            </h3>
          </Typewriter>
        {:else if $currentLanguage.getLanguage() === "de"}
          <Typewriter {...props}>
            <h1
              class="[--cursor-color:#000] dark:[--cursor-color:#fff] text-6xl mb-2 sm:mb-4"
            >
              Willkommen!
            </h1>
            <h2
              class="font-light text-primary-800 dark:text-white [--cursor-color:#000] dark:[--cursor-color:#fff] text-4xl leading-relaxed mb-1 sm:mb-2"
            >
              <span>Mein Name ist </span>
              <span class="font-medium text-teal-600 dark:text-teal-300"
                >Sebastian Jans</span
              >
              <span> und ich bin ein</span>
            </h2>
            <h2
              class="font-light text-primary-500 dark:text-white [--cursor-color:#000] dark:[--cursor-color:#fff] text-3xl sm:text-4xl leading-relaxed mb-2 sm:mb-4"
            >
              <span class="font-medium text-teal-600 dark:text-teal-300"
                >Web-entwickler.</span
              >
            </h2>
            <h3
              class="[--cursor-color:#000] dark:[--cursor-color:#fff] text-primary-800 text-2xl dark:text-white"
            >
              Ich kreiere wunderschöne Webseiten und Web-Apps.
            </h3>
          </Typewriter>
        {:else if $currentLanguage.getLanguage() === "es"}
          <Typewriter {...props}>
            <h1
              class="[--cursor-color:#000] dark:[--cursor-color:#fff] text-6xl mb-2 sm:mb-4"
            >
              Bienvenidos!
            </h1>
            <h2
              class="font-light text-primary-800 dark:text-white [--cursor-color:#000] dark:[--cursor-color:#fff] text-4xl leading-relaxed mb-1 sm:mb-2"
            >
              <span>Mi nombre es </span>
              <span class="font-medium text-teal-600 dark:text-teal-300"
                >Sebastian Jans</span
              >
              <span> y soy un</span>
            </h2>
            <h2
              class="font-light text-primary-500 dark:text-white [--cursor-color:#000] dark:[--cursor-color:#fff] text-3xl sm:text-4xl leading-relaxed mb-2 sm:mb-4"
            >
              <span class="font-medium text-teal-600 dark:text-teal-300"
                >Desarollador web.</span
              >
            </h2>
            <h3
              class="[--cursor-color:#000] dark:[--cursor-color:#fff] text-primary-800 text-2xl dark:text-white"
            >
              Yo creo hermosas páginas web y aplicaciones web.
            </h3>
          </Typewriter>
        {/if}
      </div>
    {/if}
  </div>

  <!-- <ButtonScrollToSection section={"aboutme"}>
    {$t({ key: "about-me", defaultValue: "About me" })}
  </ButtonScrollToSection> -->
</section>