<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	import { getTranslate, T } from '@tolgee/svelte';
	import { cvItems } from '../FrontModules/cv_items';
	import { skillItems } from '../skills/skillItems';
	const t = getTranslate();

	pageTitle.set($t({ key: 'works-title', defaultValue: 'CV' }));
</script>

<page
	id="section-to-print"
	class="flex mx-auto justify-center !h-[29.7cm] !w-[21cm]  bg-primary-100"
>
	<div class="w-[17cm] h-full m-[2cm] flex flex-row space-x-4 ">
		<div class="w-[11cm]">
			<h1 class="font-sans pb-3 font-normal uppercase text-[2.5rem] text-right leading-8">
				Sebastian Jans
			</h1>
			<h2>
				<T keyName="personal-data" defaultValue="Personal Data" />
			</h2>
			<div
				class="grid gap-x-2 gap-y-1 grid-cols-[minmax(0,40%)_minmax(0,_1fr)] grid-rows-[1fr_repeat(4,_1.5rem)] justify-center align-baseline w-full h-auto"
			>
				<h3 class="align-baseline text-base">
					<T keyName="direction" defaultValue="Direction" />
				</h3>
				<p class="text-left text-sm mt-0.5 align-baseline ">
					Calle Azucena 10, Piso 20<br />46003 Valencia, Valencia
				</p>
				<h3 class="align-baseline text-base">
					<T keyName="telephone" defaultValue="Telephone" />
				</h3>
				<p class="text-left text-sm mt-0.5 align-baseline h-auto">+49 176 644 673 44</p>
				<h3 class="align-baseline text-base">E-Mail</h3>
				<p class="text-left text-sm mt-0.5 align-baseline h-auto">sebajans@icloud.com</p>
				<h3 class="align-baseline text-base">
					<T keyName="nationality" defaultValue="Nationality" />
				</h3>
				<p class="text-left text-sm mt-0.5 align-baseline h-auto">
					<T keyName="nationality-data" defaultValue="German, Argentinean" />
				</p>
				<h3 class="align-baseline text-base">
					<T keyName="date-of-birth" defaultValue="Date/Place of Birth" />
				</h3>
				<p class="text-left text-sm mt-0.5 align-baseline h-auto">14.12.1996, Kirchheim (Teck)</p>
			</div>
			<h2
				class="text-primary-600 font-sans uppercase font-medium tracking-wider text-2xl pt-4 pb-2"
			>
				{$t({ key: 'work-experience', defaultValue: 'Work Experience' })}
			</h2>
			<div class="flex flex-row flex-wrap">
				{#each cvItems as item}
					{#if item.category === 'job'}
						<h3 class="w-4/6"><T keyName={item.name} defaultValue={item.name} /></h3>
						<h3 class="w-2/6 mt-1.5 font-medium text-sm text-right">
							{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}
						</h3>
						<p class="w-4/6 font-light -mt-0.5 text-primary-700 font-sans">
							&#8212;
							<T keyName="role-{item.name}" defaultValue={item.role} />
						</p>
						<p class="w-2/6 text-sm text-primary-700 font-sans text-right">
							<T keyName="location-{item.name}" defaultValue={item.location} />
						</p>
						<p class="w-full text-[0.8em] pb-1.5">
							<T keyName="short-{item.name}" defaultValue={item.shortdescription} />
						</p>
					{/if}
				{/each}
			</div>
			<h2>
				{$t({ key: 'my-education', defaultValue: 'Education' })}
			</h2>
			<div class="flex flex-row flex-wrap">
				{#each cvItems as item}
					{#if item.category === 'education'}
						<h3 class="w-4/6"><T keyName={item.name} defaultValue={item.name} /></h3>
						<h3 class="w-2/6 text-sm mt-1.5 font-medium text-right">
							{item.fromMonth}/{item.fromYear} - {item.toMonth}/{item.toYear}
						</h3>
						<p class="w-4/6 font-light -mt-0.5 text-primary-700 font-sans">
							&#8212;
							<T keyName="role-{item.name}" defaultValue={item.role} />
						</p>
						<p class="w-2/6 text-sm text-primary-700 font-sans text-right">
							<T keyName="location-{item.name}" defaultValue={item.location} />
						</p>
						<p class="w-full text-[0.8em] pb-1.5">
							<T keyName="short-{item.name}" defaultValue={item.shortdescription} />
						</p>
					{/if}
				{/each}
			</div>
			<h2>
				{$t({ key: 'experience-abroad', defaultValue: 'experience abroad' })}
			</h2>
			<div class="flex flex-row flex-wrap">
				<h3 class="w-4/6">
					<T keyName="south-america" defaultValue="Round trip through South America" />
				</h3>
				<h3 class="w-2/6 text-sm text-right font-medium mt-1.5">11/2015 - 06/2016</h3>
				<p class="w-full text-[0.8em] pb-2">
					<T
						keyName="south-america-description"
						defaultValue="Insight into new cultures, consolidation of Spanish skills"
					/>
				</p>
				<h3 class="w-4/6">
					<T keyName="great-britain" defaultValue="Language trips in Great Britain" />
				</h3>
				<h3 class="w-2/6 text-sm text-right font-medium mt-1.5">08/2013 & 08/2014</h3>
				<p class="w-full text-[0.8em]">
					<T
						keyName="great-britain-description"
						defaultValue="Living with a host family in Rochester with English classes"
					/>
				</p>
			</div>
		</div>
		<div class="w-[0.25cm] border-primary-500 border-l-2 border-r-2" />
		<div class="w-[7cm]">
			<h1 class="font-sans pb-4 font-normal uppercase text-[2.5rem] text-left leading-8">
				<T keyName="CV" defaultValue="CV" />
			</h1>
			<img
				class="rounded-full mt-10 w-40 h-40 object-cover object-top"
				alt="profile-pic"
				src="img/profile-pic.webp"
			/>
			<h2>
				{$t({ key: 'skills-title', defaultValue: 'Skills' })}
			</h2>
			{#each Object.entries(skillItems) as [categoryName, skills], i}
				<div class="flex flex-row flex-wrap">
					<h3 class="pt-2"><T keyName={categoryName} defaultValue={categoryName} /></h3>
					{#each skills.categoryArray as skill}
						<p class="text-sm w-full leading-loose">
							<T keyName={skill.name} defaultValue={skill.name} />
						</p>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</page>

<style>
	* {
		box-sizing: border-box;
		-moz-box-sizing: border-box;
	}

	h2 {
		@apply text-primary-600 font-sans uppercase font-medium tracking-wider text-[1.375em] pb-1.5 pt-2;
	}

	@page {
		margin: 0cm !important;
	}
	@media print {
		/* html * {
			visibility: hidden;
		} */
		/* body {
			width: 21cm;
			height: 29.7cm;
			margin: 2cm;
		} */

		#section-to-print {
			border: initial;
			border-radius: initial;
			width: initial;
			min-height: initial;
			box-shadow: initial;
			background: initial;
			page-break-after: always;
		}

		#section-to-print,
		#section-to-print * {
			visibility: visible;
		}
		#section-to-print {
			position: absolute;
			left: 0;
			top: 0;
		}
	}
</style>
