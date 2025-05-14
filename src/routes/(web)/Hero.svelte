<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { getTolgee, getTranslate } from '@tolgee/svelte';
	import ButtonScrollToSection from '$components/ButtonScrollToSection.svelte';
	import { fly } from 'svelte/transition';
	let visible = true;
	const currentLanguage = getTolgee(['language']);
	const { t } = getTranslate();

	let props = {
		// ### general-purpose props ###
		// multiple options
		mode: 'cascade',
		// numbers
		interval: 30,
		delay: 0,
		// booleans
		keepCursorOnFinish: false,
		showCursorOnDelay: false,
		cursor: true,
		disabled: false,
		// strings
		element: 'div'
	};
	let introElements = {
		en: {
			title: $t('welcome', { defaultValue: 'Welcome' }) + '!',
			my_name_is: 'My name is ',
			and_i_am_a: 'and I am a',
			profession: ['Developer', 'Designer', 'Creator'],
			professionDescription: [
				'I create beautiful web-pages and performant web-apps.',
				'I design digital and physical products with a focus on user experience.',
				'I am a creative thinker with a passion for problem-solving.'
			]
		},
		de: {
			title: 'Willkommen!',
			my_name_is: 'Mein name ist ',
			and_i_am_a: 'und ich bin ein',
			profession: ['Entwickler', 'Designer', 'Kreativer'],
			professionDescription: [
				'Ich erstelle schöne Webseiten und performante Web-Apps.',
				'Ich designe digitale und physische Produkte mit einem Fokus auf Benutzererfahrung.',
				'Ich bin ein kreativer Denker mit einer Leidenschaft für Problemlösung.'
			]
		},
		es: {
			title: 'Bienvenidos!',
			my_name_is: 'Mi nombre es ',
			and_i_am_a: 'y soy un',
			profession: ['desarrollador', 'diseñador', 'creador'],
			professionDescription: [
				'Creo hermosas páginas web y aplicaciones web de alto rendimiento.',
				'Diseño productos digitales y físicos con un enfoque en la experiencia del usuario.',
				'Soy un pensador creativo con una pasión por la resolución de problemas.'
			]
		}
	};

	let activeIndex: number = $state(-1);
	let interval = 3560;
	let initialDelay = 120;
	type LanguageKey = keyof typeof introElements;
	let key: LanguageKey = ($currentLanguage.getLanguage() as LanguageKey) || 'en';

	$effect(() => {
		let firstLoad = true;
		const intervalId = setInterval(() => {
			if (firstLoad) {
				setTimeout(() => {
					activeIndex = (activeIndex + 1) % introElements[key].profession.length;
					firstLoad = false;
				}, initialDelay);
			} else {
				activeIndex = (activeIndex + 1) % introElements[key].profession.length;
			}
		}, interval);
		return () => clearInterval(intervalId);
	});
</script>

<section
	class=" justfiy-center relative -mt-24 flex min-h-[100svh] w-full flex-col content-center items-center sm:-mt-28"
>
	<div
		class="relative mx-auto my-auto flex w-full max-w-2xl flex-col pb-[100svh] md:pb-[calc(100vh)]"
	>
		{#if visible}
			<div
				class="absolute inset-0 flex h-full min-h-max flex-col items-start justify-center [--cursor-color:#000] [--cursor-width:4px] dark:[--cursor-color:#fff]"
			>
				{#each Object.entries(introElements) as [key, value]}
					{#if $currentLanguage.getLanguage() === key}
						<Typewriter {...props}>
							<h1 class=" mb-2 text-6xl sm:mb-4">
								{value.title}
							</h1>
							<h2
								class="text-primary-800 dark:text-primary-50 mb-1 text-3xl leading-relaxed font-light sm:mb-2 sm:text-4xl"
							>
								<span>{value.my_name_is}</span>
								<span class="font-bold">Sebastian Jans</span>
								<span>{value.and_i_am_a}</span>
							</h2>
						</Typewriter>
						<Typewriter mode="loop" wordInterval={3000} interval={30} blinkCount={2} delay={2100}>
							{#each value.profession as profession}
								<h2
									class="text-primary-500 dark:text-primary-400 mb-2 text-3xl leading-relaxed font-medium sm:mb-4 sm:text-4xl"
								>
									{profession}.
								</h2>
							{/each}
						</Typewriter>
						<div class="h-10!">
							{#key activeIndex}
								<h3
									class="dark:text-primary-200 mb-2 text-2xl leading-relaxed font-light sm:mb-4 sm:text-3xl"
									in:fly={{ y: 10, duration: 300, delay: 350 }}
									out:fly={{ y: -10, duration: 300 }}
								>
									{value.professionDescription[activeIndex] || ''}
								</h3>
							{/key}
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</div>

	<ButtonScrollToSection section={'aboutme'}>
		{$t({ key: 'about-me', defaultValue: 'About me' })}
	</ButtonScrollToSection>
</section>
