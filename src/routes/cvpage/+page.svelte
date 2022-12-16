<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
  import { mainClass } from '$lib/stores/mainClass';
  import { getTranslate } from '@tolgee/svelte';
  import { cvItems } from '../cv_items';
  import { skillItems } from '../skills/skillItems'
	import { each } from 'svelte/internal';
  const t = getTranslate();

  pageTitle.set($t({ key: 'works-title', defaultValue: 'Works' }));
	mainClass.set('py-28 pr-0 pl-0 md:pl-0');

</script>
<div class="flex mx-auto justify-center">
  <div class="flex flex-row h-full w-full max-w-4xl aspect-[210/297] space-x-4  p-20 bg-primary-100">
    <div class="w-[calc(65%_-_0.375rem)]">
      <h1 class="font-sans pb-8 font-normal uppercase text-5xl text-right">Sebastian Jans</h1>
      <h2 class="font-sans uppercase font-medium tracking-wider text-2xl py-2">Personal Data</h2>
      <div class="grid gap-x-4 gap-y-2 grid-cols-[minmax(0,40%)_minmax(0,_1fr)] grid-rows-[1fr_repeat(4,_1.5rem)] justify-center align-baseline w-full h-auto">
        <h3 class="h-auto">Direction</h3>
        <p class="">Carrer de Boix 7, Apt 6 <br>46003 Valencia, Valencia</p>
        <h3 class="h-auto">Telephone</h3>
        <p class="h-auto">+49 176 644 673 44</p>
        <h3 class="h-auto">E-Mail</h3>
        <p class="h-auto">sebajans@icloud.com</p>
        <h3 class="h-auto">Nationality</h3>
        <p class="h-auto">German, Argentinean</p>
        <h3 class="h-auto">Date/Place of birth</h3>
        <p class="h-auto">14.12.1996, Kirchheim unter Teck</p>
      </div>
      <h2 class="font-sans uppercase font-medium tracking-wider text-2xl py-2">Practical experience</h2>
      <div class="flex flex-row flex-wrap">
        {#each cvItems as item}
        {#if item.category === 'job'}
        <h3 class="w-3/4">{item.name}</h3>
        <h3 class="w-1/4 text-sm text-right">{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}</h3>
        <p class="w-3/4 font-sans">&#8212; {item.role}</p>
        <p class="w-1/4 text-sm font-sans text-right">{item.location}</p>
        <p class="w-full text-sm">{item.shortdescription}</p>
          {/if}
        {/each}
      </div>
      <h2 class="font-sans uppercase font-medium tracking-wider text-2xl py-2">Education</h2>
      <div class="flex flex-row flex-wrap">
        {#each cvItems as item}
        {#if item.category === 'education'}
        <h3 class="w-3/4">{item.name}</h3>
        <h3 class="w-1/4 text-sm text-right">{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}</h3>
        <p class="w-3/4 font-sans">&#8212; {item.role}</p>
        <p class="w-1/4 text-sm font-sans text-right">{item.location}</p>
        <p class="w-full text-sm">{item.shortdescription}</p>
          {/if}
        {/each}
      </div>
      <h2 class="font-sans uppercase font-medium tracking-wider text-2xl py-2">Experience abroad</h2>
      <div class="flex flex-row flex-wrap">

      <h3 class="w-3/4">Round trip through South America</h3>
      <h3 class="w-1/4 text-sm text-right">11/2015 - 06/2016</h3>
      <p class="w-3/4 font-sans">Insight into new cultures, consolidation of spanish skills</p>
      <h3 class="w-3/4">Language trips in Great Britain</h3>
      <h3 class="w-1/4 text-sm text-right">08/2013 & 08/2014</h3>
      <p class="w-3/4 font-sans">Living with a host family in Rochester with accompanying English classes</p>
      </div>

    </div>
    <div class="w-3 bg-primary-900"></div>
    <div class="w-[calc(35%_-_0.375rem)]">
      <h1 class="font-sans pb-8 font-normal uppercase text-5xl text-left">CV</h1>
    <img class="rounded-full w-40 h-40 object-cover object-top" alt="profile-pic" src="img/profile-pic.jpg">
    <h2 class="font-sans uppercase font-medium tracking-wider text-2xl py-2">Skills</h2>
    <div class="flex flex-row flex-wrap">
      {#each Object.entries(skillItems) as [categoryName, skills], i}
      <h3>{categoryName}</h3>
      {#each skills.categoryArray as skill, i}
      <p class="text-sm w-full leading-loose">{skill.name}</p>
         <!-- content here -->
      {/each}
      {/each}
    <!-- <p>English</p>
    <p>Spanish</p>
    <p>French</p>
    <p>Russian</p> -->
  </div>

    </div>
  </div>
</div>
