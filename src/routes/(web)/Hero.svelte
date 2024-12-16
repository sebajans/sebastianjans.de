<script lang="ts">
  import Typewriter from "svelte-typewriter";
  import { getTolgee, getTranslate } from "@tolgee/svelte";
  import ButtonScrollToSection from "$components/ButtonScrollToSection.svelte";
  import { fly } from "svelte/transition";
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
    en: {
      title: $t("welcome", { defaultValue: "Welcome" }) + "!",
      my_name_is: "My name is ",
      and_i_am_a: "and I am a",
      profession: ["Developer", "Designer", "Creator"],
      professionDescription: [
        "I create beautiful web-pages and performant web-apps.",
        "I design digital and physical products with a focus on user experience.",
        "I am a creative thinker with a passion for problem-solving.",
      ],
    },
    de: {
      title: "Willkommen!",
      my_name_is: "Mein name ist ",
      and_i_am_a: "und ich bin ein",
      profession: ["Entwickler", "Designer", "Kreativer"],
      professionDescription: [
        "Ich erstelle schöne Webseiten und performante Web-Apps.",
        "Ich designe digitale und physische Produkte mit einem Fokus auf Benutzererfahrung.",
        "Ich bin ein kreativer Denker mit einer Leidenschaft für Problemlösung.",
      ],
    },
    es: {
      title: "Bienvenidos!",
      my_name_is: "Mi nombre es ",
      and_i_am_a: "y soy un",
      profession: ["desarrollador", "diseñador", "creador"],
      professionDescription: [
        "Creo hermosas páginas web y aplicaciones web de alto rendimiento.",
        "Diseño productos digitales y físicos con un enfoque en la experiencia del usuario.",
        "Soy un pensador creativo con una pasión por la resolución de problemas.",
      ],
    },
  };

  let activeIndex: number = $state(-1);
  let interval = 3200;
  type LanguageKey = keyof typeof introElements;
  let key: LanguageKey =
    ($currentLanguage.getLanguage() as LanguageKey) || "en";

  $effect(() => {
    const intervalId = setInterval(() => {
      activeIndex = (activeIndex + 1) % introElements[key].profession.length;
    }, interval);
    return () => clearInterval(intervalId);
  });
</script>

<section
  class=" relative w-full -mt-24 sm:-mt-28 min-h-[100svh] flex flex-col justfiy-center items-center content-center"
>
  <div
    class="relative pb-[100svh] md:pb-[calc(100vh)] flex flex-col w-full max-w-2xl my-auto mx-auto"
  >
    {#if visible}
      <div
        class="absolute inset-0 h-full min-h-max flex flex-col justify-center items-start"
      >
        {#each Object.entries(introElements) as [key, value]}
          {#if $currentLanguage.getLanguage() === key}
            <Typewriter {...props}>
              <h1
                class="[--cursor-color:#000] dark:[--cursor-color:#fff] text-6xl mb-2 sm:mb-4"
              >
                {value.title}
              </h1>
              <h2
                class="font-light text-primary-800 dark:text-white [--cursor-color:#000] dark:[--cursor-color:#fff] text-3xl sm:text-4xl leading-relaxed mb-1 sm:mb-2"
              >
                <span>{value.my_name_is}</span>
                <span class="font-bold">Sebastian Jans</span>
                <span>{value.and_i_am_a}</span>
              </h2>
            </Typewriter>
            <Typewriter
              mode="loop"
              wordInterval={3000}
              interval={30}
              delay={2500}
            >
              {#each value.profession as profession}
                <h2
                  class="font-medium text-primary-500 dark:text-primary-400 [--cursor-color:#000] dark:[--cursor-color:#fff] text-3xl sm:text-4xl leading-relaxed mb-2 sm:mb-4"
                >
                  {profession}.
                </h2>
              {/each}
            </Typewriter>
            <div class="!h-10">
              {#key activeIndex}
                <h3
                  class="font-light dark:text-primary-200 text-2xl sm:text-3xl leading-relaxed mb-2 sm:mb-4"
                  in:fly={{ y: 10, duration: 300, delay: 350 }}
                  out:fly={{ y: -10, duration: 300 }}
                >
                  {value.professionDescription[activeIndex] || ""}
                </h3>
              {/key}
            </div>
          {/if}
        {/each}
      </div>
    {/if}
  </div>

  <ButtonScrollToSection section={"aboutme"}>
    {$t({ key: "about-me", defaultValue: "About me" })}
  </ButtonScrollToSection>
</section>
