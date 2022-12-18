<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
  import { mainClass } from '$lib/stores/mainClass';
  import { getTranslate, T } from '@tolgee/svelte';
  import { cvItems } from '../cv_items';
  import { skillItems } from '../skills/skillItems'
  const t = getTranslate();

  pageTitle.set($t({ key: 'works-title', defaultValue: 'Works' }));
	mainClass.set('py-28 pr-0 pl-0 md:pl-0');

</script>

<body class="flex mx-auto justify-center h-[29,7cm] w-[21cm] p-[1cm] bg-primary-100">
  <div class="h-full w-full ">
    <section id="section-to-print" class="p-[1cm] flex flex-row space-x-4 ">
    <div class="w-[11cm]">
      <h1 class="font-sans pb-8 font-normal uppercase text-5xl text-right leading-10">Sebastian Jans</h1>
      <h2 class="text-primary-600 font-sans uppercase font-medium tracking-wider text-2xl py-2"><T keyName="personal-data" defaultValue="Personal Data" /></h2>
      <div class="grid gap-x-2 gap-y-2 grid-cols-[minmax(0,40%)_minmax(0,_1fr)] grid-rows-[1fr_repeat(4,_1.5rem)] justify-center align-baseline w-full h-auto">
        <h3 class="align-baseline text-base"><T keyName="direction" defaultValue="Direction" /></h3>
        <p class="text-left text-sm mt-0.5 align-baseline ">Carrer de Boix 7, Apt 6 <br>46003 Valencia, Valencia</p>
        <h3 class="align-baseline text-base"><T keyName="telephone" defaultValue="Telephone" /></h3>
        <p class="text-left text-sm mt-0.5 align-baseline h-auto">+49 176 644 673 44</p>
        <h3 class="align-baseline text-base">E-Mail</h3>
        <p class="text-left text-sm mt-0.5 align-baseline h-auto">sebajans@icloud.com</p>
        <h3 class="align-baseline text-base"><T keyName="nationality" defaultValue="Nationality" /></h3>
        <p class="text-left text-sm mt-0.5 align-baseline h-auto"><T keyName="nationality-data" defaultValue="German, Argentinean" /></p>
        <h3 class="align-baseline text-base"><T keyName="date-of-birth" defaultValue="Date/Place of Birth" /></h3>
        <p class="text-left text-sm mt-0.5 align-baseline h-auto">14.12.1996, Kirchheim (Teck)</p>
      </div>
      <h2 class="text-primary-600 font-sans uppercase font-medium tracking-wider text-2xl pt-4 pb-2">{$t({ key: 'work-experience', defaultValue: 'Work Experience' })}</h2>
      <div class="flex flex-row flex-wrap">
        {#each cvItems as item}
        {#if item.category === 'job'}
        <h3 class="w-4/6"><T keyName="{item.name}" defaultValue="{item.name}" /></h3>
        <h3 class="w-2/6 mt-1.5 font-medium text-sm text-right">{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}</h3>
        <p class="w-4/6 font-light text-primary-700 font-sans">&#8212; {item.role}</p>
        <p class="w-2/6 text-sm font-sans text-primary-700 text-right">{item.location}</p>
        <p class="w-full text-sm pb-1.5"><T keyName="short-{item.name}" defaultValue="{item.shortdescription}" /></p>
          {/if}
        {/each}
      </div>
      <h2 class="text-primary-600 font-sans uppercase font-medium tracking-wider text-2xl py-2">{$t({ key: 'my-education', defaultValue: 'Education' })}</h2>
      <div class="flex flex-row flex-wrap">
        {#each cvItems as item}
          {#if item.category === 'education'}
            <h3 class="w-4/6"><T keyName="{item.name}" defaultValue="{item.name}" /></h3>
            <h3 class="w-2/6 text-sm mt-1.5 font-medium text-right">{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}</h3>
            <p class="w-4/6 font-light -mt-0.5 text-primary-700 font-sans">&#8212; {item.role}</p>
            <p class="w-2/6 text-sm text-primary-700 font-sans text-right">{item.location}</p>
            <p class="w-full text-sm pb-1.5"><T keyName="short-{item.name}" defaultValue="{item.shortdescription}" /></p>
          {/if}
        {/each}
      </div>
      <h2 class="text-primary-600 font-sans uppercase font-medium tracking-wider text-2xl py-2">{$t({ key: 'experience-abroad', defaultValue: 'experience abroad' })}</h2>
      <div class="flex flex-row flex-wrap">
        <h3 class="w-4/6"><T keyName="south-america" defaultValue="Round trip through South America" /></h3>
        <h3 class="w-2/6 text-sm text-right font-medium mt-1.5">11/2015 - 06/2016</h3>
        <p class="w-full text-sm pb-2"><T keyName="south-america-description" defaultValue="Insight into new cultures, consolidation of spanish skills" /></p>
        <h3 class="w-4/6"><T keyName="great-britain" defaultValue="Language trips in Great Britain" /></h3>
        <h3 class="w-2/6 text-sm text-right font-medium mt-1.5">08/2013 & 08/2014</h3>
        <p class="w-full text-sm"><T keyName="great-britain-description" defaultValue="Living with a host family in Rochester with English classes" /></p>
      </div>

    </div>
    <div class="w-[0.25cm] border-primary-500 border-l-2 border-r-2"></div>
    <div class="w-[7cm]">
      <h1 class="font-sans pb-10 font-normal uppercase text-5xl text-left leading-10"><T keyName="CV" defaultValue="CV" /></h1>
      <img class="rounded-full mt-10 w-40 h-40 object-cover object-top" alt="profile-pic" src="img/profile-pic.jpg">
      <h2 class="mt-6 text-primary-600 font-sans uppercase font-medium tracking-wider text-2xl">{$t({ key: 'skills-title', defaultValue: 'Skills' })}</h2>
      {#each Object.entries(skillItems) as [categoryName, skills], i}
      <div class="flex flex-row flex-wrap">
        <h3 class="pt-2"><T keyName="{categoryName}" defaultValue="{categoryName}" /></h3>
        {#each skills.categoryArray as skill, i}
          <p class="text-sm w-full leading-loose">{skill.name}</p>
            <!-- <p class="text-transparent w-full h-2 space-x-2 flex flex-wrap bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
            {#each Array(5) as i}
              <span class="inline-block w-2 absolute h-2 rounded-full "></span>
            {/each}
            </p> -->
        {/each}
      </div>
      {/each}

    </div>
  </section>
</div>

</body>

<style>
  @media print {
  body * {
    visibility: hidden;
  }
  #section-to-print, #section-to-print * {
    visibility: visible;
  }
  #section-to-print {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>