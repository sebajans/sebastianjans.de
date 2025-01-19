<script lang="ts">
  import { T } from "@tolgee/svelte";
  import { fly } from "svelte/transition";
  let profilePicture = "img/profile-pic.webp";
  import ButtonScrollToSection from "$components/ButtonScrollToSection.svelte";
  import { getTranslate } from "@tolgee/svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  const { t } = getTranslate();
  let slidesToScroll = 1;
</script>

<section
  class="pt-4 md:pt-20 pb-20 relative w-[calc(100vw_-_0rem)] md:w-[calc(100vw_-_12rem)] h-full min-h-screen flex flex-col justfiy-center"
  id="aboutme"
>
  <div
    class="space-y-4 max-w-4xl w-full my-auto h-full mx-auto border-primary-900/5 dark:border-primary-50/10 md:border md:pl-3 py-2 md:py-3 md:rounded-md"
  >
    <h1
      in:fly|global={{ y: 50, duration: 500 }}
      class="text-center md:text-left text-primary-900 dark:text-primary-50"
    >
      {$t({ key: "about-me", defaultValue: "About me" })}
    </h1>
    <Carousel.Root
      orientation="horizontal"
      opts={{ slidesToScroll: slidesToScroll }}
      class="px-0 md:px-0"
    >
      <Carousel.Content class="-ml-4">
        <Carousel.Item
          class="snap-center min-h-[20rem] md:min-h-[18rem] justify-center w-full pl-6 pr-2 text-sm md:text-base"
        >
          <img
            in:fly|global={{ duration: 2000 }}
            width="200"
            height="200"
            src={profilePicture}
            alt="profile"
            class="w-1/3 md:w-1/5 h-full ml-4 mb-4 object-cover object-top float-right max-w-[12rem] max-h-[12rem] md:max-w-[16rem] md:max-h-[16rem] md:grow-0 aspect-square rounded-xl"
          />

          <p class="md:w-full mb-2 text-justify md:text-xl">
            {$t({
              key: "front-about-text",
              defaultValue:
                "I am 25 years old and from Germany. I studied my Bachelors in Materials Science while i was self-teaching myself all kinds of Design capabilities. After finishing my degree i decided to persue a different career path in the field of Design. ",
            })}
          </p>

          <p class="md:w-full mb-2 text-justify md:text-xl">
            {$t({
              key: "front-about-text-2",
              defaultValue:
                "I moved to Spain and started studying Design Engineering at the Universitat Politécnica de Valencia and am now working on my Master Thesis.",
            })}
          </p>
          <p class="md:w-full mb-2 text-justify md:text-xl">
            {$t({
              key: "front-about-text-3",
              defaultValue:
                "My key strengths include a keen eye for detail, a talent for crafting clean and intuitive layouts, and the ability to bring ideas to life with beautiful and effective visuals.",
            })}
          </p>
        </Carousel.Item>
        <Carousel.Item
          class="snap-center sm:basis-1/2 h-full min-h-[11rem] w-full flex md:flex-row flex-col pl-6 pr-2 items-end md:items-start"
        >
          <div
            class="h-full p-3 backdrop-blur-md border border-primary-900/5 dark:border-primary-50/10 bg-gradient-to-br from-primary-900/10 to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 rounded-md w-full flex flex-col justify-start"
          >
            <h2
              class="font-sans text-primary-900 dark:text-primary-50 text-2xl"
            >
              <T keyName="likes-title" defaultValue="Some things i like" />
            </h2>
            <ul class="list-likes">
              <li class="list-li">
                <T keyName="likes-item-1" defaultValue="Orange juice" />
              </li>
              <li class="list-li">
                <T keyName="likes-item-2" defaultValue="Traveling" />
              </li>
              <li class="list-li">
                <T keyName="likes-item-3" defaultValue="Staying up late" />
              </li>
              <li class="list-li">
                <T keyName="likes-item-4" defaultValue="Cats" />
              </li>
              <li class="list-li">
                <T keyName="likes-item-5" defaultValue="Puzzles" />
              </li>
              <li class="list-li">
                <T keyName="likes-item-6" defaultValue="Gaming" />
              </li>
            </ul>
          </div>
        </Carousel.Item>
        <Carousel.Item
          class="snap-center sm:basis-1/2 h-full min-h-[11rem] w-full flex md:flex-row flex-col pl-6 pr-2 items-end md:items-start"
        >
          <div
            class="h-full w-full p-3 backdrop-blur-md border border-primary-900/5 dark:border-primary-50/10 bg-gradient-to-br from-primary-900/10 to-primary-900/5 dark:from-primary-50/5 dark:to-primary-50/10 rounded-md flex flex-col justify-start"
          >
            <h2
              class="font-sans text-primary-900 dark:text-primary-50 text-2xl"
            >
              <T
                keyName="dislikes-title"
                defaultValue="Some things i dislike"
              />
            </h2>
            <ul class="list-likes">
              <li class="list-li">
                <T keyName="dislikes-item-1" defaultValue="Coffee" />
              </li>
              <li class="list-li">
                <T keyName="dislikes-item-2" defaultValue="Public speaking" />
              </li>
              <li class="list-li">
                <T keyName="dislikes-item-3" defaultValue="Comic Sans MS" />
              </li>
              <li class="list-li">
                <T keyName="dislikes-item-4" defaultValue="Horror movies" />
              </li>
              <li class="list-li">
                <T keyName="dislikes-item-5" defaultValue="Bad Communication" />
              </li>
            </ul>
          </div>
        </Carousel.Item>
      </Carousel.Content>
      <div class="flex justify-between translate-y-6 px-2 md:px-4">
        <Carousel.Previous
          class="relative !translate-x-0 left-0 bg-primary-900 dark:bg-primary-50 hover:bg-primary-500 dark:hover:bg-primary-500 border-none"
        />
        <Carousel.Next
          class="relative !translate-x-0 right-0 bg-primary-900 dark:bg-primary-50 hover:bg-primary-500 dark:hover:bg-primary-500 border-none"
        />
      </div>
    </Carousel.Root>
    <ButtonScrollToSection section={"cv_jobs"}
      >{$t({
        key: "work-experience",
        defaultValue: "Work Experience",
      })}</ButtonScrollToSection
    >
  </div>
</section>

<style>
  ul .list-likes {
    @apply pt-3 space-y-3;
  }

  .list-li::before {
    content: "";
    @apply translate-y-px w-3 h-3 inline-block rounded-full border backdrop-blur-md mr-2 border-primary-900/5 dark:border-primary-50/10 bg-gradient-to-br  from-primary-900/10 to-primary-900/5 dark:from-primary-50/25 dark:to-primary-50/10;
  }

  .list-li {
    @apply py-0.5 px-2;
  }

</style>
