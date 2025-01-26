<script lang="ts">
	import { getTranslate } from '@tolgee/svelte';
	import { T } from '@tolgee/svelte';
	import { cvItems } from '$lib/lists/cvItems';
	import { skillItems, type SkillItems } from '$lib/lists/skillItems';
	import DarkModeButton from '$components/DarkModeButton.svelte';
	import LanguageSwitcher from '$components/LanguageSwitcher.svelte';

	function printPage() {
		const body = document.querySelector('body');
		if (body) {
			body.style.width = '21cm';
			body.style.height = '29.7cm';
			body.style.margin = '0px !important';
			body.style.padding = '0';
		}
		// console.log(body);
		window.print();
	}

	const { t } = getTranslate();

	interface IntroItems {
		fieldOfWork: string[];
		name: string;
		defaultValue: string;
	}
	let introtext: IntroItems[] = [
		{
			fieldOfWork: ['webdev'],
			name: 'webdev',
			defaultValue:
				"Hey, I'm Sebastian. I'm a front-end web developer. I'm currently working as a freelancer. While studying Materials Science I realized i wanted to work in a more creative field. I started to learn web development and graphic design in my free time. I'm passionate about creating beautiful and functional websites and designs."
		},
		{
			fieldOfWork: ['graphicdesign'],
			name: 'graphicdesign',
			defaultValue:
				"Hey, I'm Sebastian. I'm a graphic designer. I'm currently working as a freelancer. While studying Materials Science I realized i wanted to work in a more creative field. I started to learn graphic design in my free time. I'm passionate about creating beautiful designs."
		},
		{
			fieldOfWork: ['productdesign'],
			name: 'productdesign',
			defaultValue:
				"Hey, I'm Sebastian. I'm a product designer. I'm currently working as a freelancer. While studying Materials Science I realized i wanted to work in a more creative field. I studied Design Engineering and graphic design in my free time. I'm passionate about creating beautiful designs."
		}
	];

	let filteredCvItems = $state(cvItems);
	let filteredSkillItems = $state(skillItems);
	let filteredIntroText = $state(introtext);

	function selectCategory(fieldOfWork: string[] = ['webdev']) {
		filteredCvItems = cvItems.filter((item) =>
			item.fieldOfWork.some((field) => fieldOfWork.includes(field))
		);

		filteredIntroText = introtext.filter((item) =>
			item.fieldOfWork.some((field) => fieldOfWork.includes(field))
		);

		filteredSkillItems = Object.entries(skillItems).reduce((acc, [categoryName, skills]) => {
			acc[categoryName] = {
				categorydescription: skills.categorydescription,
				categoryArray: skills.categoryArray.filter((skill) =>
					skill.fieldOfWork.some((field) => fieldOfWork.includes(field))
				)
			};
			return acc;
		}, {} as SkillItems);
	}
</script>

<div class="hide-on-print sticky inset-x-0 top-0 px-4 pt-4">
	<div
		class=" z-50 mb-4 flex h-14 w-full flex-row items-center justify-between space-x-6 rounded-md border border-primary-600/30 bg-primary-600/30 p-2 shadow-md backdrop-blur-md dark:bg-primary-400/50"
	>
		<div>
			<span class="mx-2 dark:text-primary-50">Categories:</span>
			<button class="btn btn-navajo" onclick={() => selectCategory(['webdev'])}>Web dev</button>
			<button class="btn btn-navajo" onclick={() => selectCategory(['graphicdesign'])}
				>Graphic design</button
			>
			<button class="btn btn-navajo" onclick={() => selectCategory(['productdesign'])}
				>Product design</button
			>
		</div>
		<button class="btn btn-navajo" onclick={printPage}>print page</button>
		<div class="flex flex-row space-x-2">
			<LanguageSwitcher />
			<DarkModeButton />
		</div>
	</div>
</div>
<page class="section-to-print space-y-10">
	<div
		id="page-1"
		class="flex h-[29.7cm]! w-[21cm]! justify-center bg-primary-50 p-[2cm] outline outline-1 outline-offset-1 dark:bg-primary-900"
	>
		<div
			class=" grid h-[25.7cm] grid-cols-[10.5cm__0.2cm__5.5cm] grid-rows-12 gap-x-[0.4cm] gap-y-[0.5cm]"
		>
			<div class="col-start-1 row-span-3 row-start-1 flex flex-col">
				<h1 class="pb-3 text-right font-sans text-[2.5rem] font-normal uppercase leading-8">
					Sebastian Jans
				</h1>
				{#each filteredIntroText as text}
					<!-- {#if text.fieldOfWork.some((field) => field === "webdev")} -->
					<p class="my-auto text-left align-baseline text-sm">
						<T keyName="introduction-text-{text.name}" defaultValue={text.defaultValue} />
					</p>
					<!-- {/if} -->
				{/each}
				<!-- <p class="text-left text-sm my-auto align-baseline">
          <T
            keyName="introduction-text"
            defaultValue="Hey, I'm Sebastian. I'm a web developer and graphic designer. I'm currently working as a freelancer. While studying Materials Science I realized i wanted to work in a more creative field. I started to learn web development and graphic design in my free time. I'm passionate about creating beautiful and functional websites and designs."
          />
        </p> -->
			</div>

			<div class="col-start-1 row-span-4 row-start-4 border-t-2 border-primary-600 pt-4">
				<h2 class="mt-0 pt-0!">
					{$t({ key: 'work-experience', defaultValue: 'Work Experience' })}
				</h2>
				<div class="flex flex-row flex-wrap">
					{#each filteredCvItems as item}
						{#if item.category === 'job'}
							<h3 class="w-4/6 dark:text-primary-300">
								<T keyName={item.name} defaultValue={item.name} />
							</h3>
							<h3 class="mt-1.5 w-2/6 text-right text-sm font-medium dark:text-primary-300">
								{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}
							</h3>
							<p class="-mt-0.5 w-4/6 font-sans font-light text-primary-700">
								&#8212;
								<T keyName="role-{item.name}" defaultValue={item.role} />
							</p>
							<p class="w-2/6 text-right font-sans text-sm text-primary-700">
								<T keyName="location-{item.name}" defaultValue={item.location} />
							</p>
							<p class="w-full pb-1.5 text-[0.8em]">
								<T keyName="short-{item.name}" defaultValue={item.shortdescription} />
							</p>
						{/if}
					{/each}
				</div>
			</div>
			<div class="col-start-1 row-span-3 row-start-8 border-t-2 border-primary-600 pt-4">
				<h2 class="pt-0!">
					{$t({ key: 'my-education', defaultValue: 'Education' })}
				</h2>
				<div class="flex flex-row flex-wrap">
					{#each filteredCvItems as item}
						{#if item.category === 'education'}
							<h3 class="w-4/6 dark:text-primary-300">
								<T keyName={item.name} defaultValue={item.name} />
							</h3>
							<h3 class="mt-1.5 w-2/6 text-right text-sm font-medium dark:text-primary-300">
								{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}
							</h3>
							<p class="-mt-0.5 w-4/6 font-sans font-light text-primary-700">
								&#8212;
								<T keyName="role-{item.name}" defaultValue={item.role} />
							</p>
							<p class="w-2/6 text-right font-sans text-sm text-primary-700">
								<T keyName="location-{item.name}" defaultValue={item.location} />
							</p>
							<p class="w-full pb-1.5 text-[0.8em]">
								<T keyName="short-{item.name}" defaultValue={item.shortdescription} />
							</p>
						{/if}
					{/each}
				</div>
			</div>
			<div
				class="col-span-1 col-start-2 row-span-4 h-[25.7cm] border-l-2 border-r-2 border-primary-500"
			></div>
			<div class="col-start-3 row-span-1 row-start-4 border-t-2 border-primary-600 pt-4">
				<h2 class="pt-0!">
					<T keyName="personal-data" defaultValue="Personal Data" />
				</h2>
				<div
					class="grid-co ls-[minmax(0,40%)_minmax(0,_1fr)] grid-rows-[1fr_rep eat(4,_1.5rem)] justify -center grid h-auto w-full gap-x-2 gap-y-0 align-baseline"
				>
					<h3 class="align-baseline text-base dark:text-primary-300">
						<T keyName="direction" defaultValue="Direction" />
					</h3>
					<p class="mb-1.5 mt-0.5 text-left align-baseline text-xs">
						Calle Azucena 10, Piso 20<br />46025 Valencia, Valencia
					</p>
					<h3 class="align-baseline text-base dark:text-primary-300">
						<T keyName="telephone" defaultValue="Telephone" />
					</h3>
					<p class="mb-1.5 mt-0.5 h-auto text-left align-baseline text-xs">+49 176 644 673 44</p>
					<h3 class="align-baseline text-base dark:text-primary-300">E-Mail</h3>
					<p class="mb-1.5 mt-0.5 h-auto text-left align-baseline text-xs">sebajans@icloud.com</p>
					<h3 class="align-baseline text-base dark:text-primary-300">
						<T keyName="nationality" defaultValue="Nationality" />
					</h3>
					<p class="mb-1.5 mt-0.5 h-auto text-left align-baseline text-xs">
						<T keyName="nationality-data" defaultValue="German, Argentinean" />
					</p>
					<h3 class="align-baseline text-base dark:text-primary-300">
						<T keyName="date-of-birth" defaultValue="Date/Place of Birth" />
					</h3>
					<p class="mb-1.5 mt-0.5 h-auto text-left align-baseline text-xs">
						14.12.1996, Kirchheim (Teck)
					</p>
				</div>
			</div>
			<div class="col-span-1 col-start-3 row-span-3 row-start-1 flex flex-col justify-start">
				<h1 class="pb-4 text-left font-sans text-[2.5rem] font-normal uppercase leading-8">
					<T keyName="CV" defaultValue="CV" />
				</h1>
				<img
					class="mx-auto my-auto aspect-square w-40 rounded-full object-cover object-top outline outline-2 outline-primary-500"
					alt="profile-pic"
					src="/img/profile-pic.webp"
				/>
			</div>
			<div
				class="col-span-1 col-start-3 row-span-6 row-start-8 border-t-2 border-primary-600 pt-4"
			>
				<h2 class="pt-0!">
					{$t({ key: 'skills-title', defaultValue: 'Skills' })}
				</h2>
				{#each Object.entries(filteredSkillItems) as [categoryName, skills], i}
					{#if skills.categoryArray.length > 0 && categoryName !== 'Language Skills'}
						<div class="flex flex-row flex-wrap">
							<!-- <h3 class="pt-2">
                <T keyName={categoryName} defaultValue={categoryName} />
              </h3> -->
							{#each skills.categoryArray as skill}
								<p class="w-full text-sm leading-loose">
									<T keyName={skill.name} defaultValue={skill.name} />
								</p>
							{/each}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
	<div
		id="page-2"
		class="flex h-[29.7cm]! w-[21cm]! justify-center bg-primary-50 p-[2cm] outline outline-1 outline-offset-1 dark:bg-primary-900"
	>
		<div class=" grid max-h-[25.7cm] grid-cols-[10.5cm_0.2cm_5.5cm] gap-x-[0.4cm] gap-y-[0.5cm]">
			<div class="col-span-1 row-span-1 row-start-1 flex flex-col">
				<h2 class="pt-0!">
					{$t({ key: 'experience-abroad', defaultValue: 'experience abroad' })}
				</h2>
				<div class="flex flex-row flex-wrap">
					<h3 class="w-4/6 dark:text-primary-300">
						<T keyName="south-america" defaultValue="Round trip through South America" />
					</h3>
					<h3 class="mt-1.5 w-2/6 text-right text-sm font-medium dark:text-primary-300">
						11/2015 - 06/2016
					</h3>
					<p class="w-full pb-2 text-[0.8em]">
						<T
							keyName="south-america-description"
							defaultValue="Insight into new cultures, consolidation of Spanish skills"
						/>
					</p>
					<h3 class="w-4/6 dark:text-primary-300">
						<T keyName="great-britain" defaultValue="Language trips in Great Britain" />
					</h3>
					<h3 class="mt-1.5 w-2/6 text-right text-sm font-medium dark:text-primary-300">
						08/2013 & 08/2014
					</h3>
					<p class="w-full text-[0.8em]">
						<T
							keyName="great-britain-description"
							defaultValue="Living with a host family in Rochester with English classes"
						/>
					</p>
				</div>
				<!-- </div>
      <div class="col-span-1 row-start-2 row-span-1 col-start-1"> -->
				<h2 class="mt-8 pt-0!">
					{$t({ key: 'my-certificate', defaultValue: 'Certificates' })}
				</h2>
				<div class="flex flex-row flex-wrap">
					{#each filteredCvItems as item}
						{#if item.category === 'certificate'}
							<h3 class="w-4/6 dark:text-primary-300">
								<T keyName="achievement-title-{item.name}" defaultValue={item.name} />
							</h3>
							<h3 class="mt-1.5 w-2/6 text-right text-sm font-medium dark:text-primary-300">
								{item.fromYear}
							</h3>

							<p class="w-full pb-1.5 text-[0.8em]">
								<T keyName="achievement-text-{item.name}" defaultValue={item.shortdescription} />
							</p>
						{/if}
					{/each}
				</div>
			</div>
			<div
				class="col-span-1 col-start-2 row-span-full row-start-1 h-[25.7cm] border-l-2 border-r-2 border-primary-500"
			></div>
			<div class="col-span-1 col-start-3 row-start-1">
				<h2 class="pt-0!">
					{$t({
						key: 'language-skills-title',
						defaultValue: 'Language Skills'
					})}
				</h2>
				{#each Object.entries(filteredSkillItems) as [categoryName, skills], i}
					{#if skills.categoryArray.length > 0 && categoryName === 'Language Skills'}
						<div class="flex flex-row flex-wrap">
							<!-- <h3 class="pt-2">
                <T keyName={categoryName} defaultValue={categoryName} />
              </h3> -->
							{#each skills.categoryArray as skill}
								<p class="w-full text-sm leading-loose">
									<T keyName={skill.name} defaultValue={skill.name} />
								</p>
							{/each}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</page>

<style>
	* {
		box-sizing: border-box;
		-moz-box-sizing: border-box;
	}

	h2 {
		@apply pb-1.5 pt-2 font-sans text-[1.375em] font-medium uppercase tracking-wider text-primary-600;
	}

	@page {
		margin: 0cm !important;
	}
	@media print {
		/* html * {
			visibility: hidden;
		} 
		 body {
			width: 21cm;
			height: 29.7cm;
		} */

		.hide-on-print {
			visibility: hidden;
		}

		.section-to-print {
			border: initial;
			border-radius: initial;
			width: initial;
			min-height: initial;
			box-shadow: initial;
			background: initial;
			page-break-after: always;
		}

		.section-to-print,
		.section-to-print * {
			visibility: visible;
		}
		.section-to-print {
			position: absolute;
			left: 0;
			top: 0;
		}
	}
</style>
