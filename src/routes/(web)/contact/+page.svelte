<!-- <script context="module">
	export const prerender = true;
</script> -->
<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	import { fly } from 'svelte/transition';
	import { mainClass } from '$lib/stores/mainClass';
	import { getTranslate } from '@tolgee/svelte';
	import { T } from '@tolgee/svelte'; // change import statement
	import Popup from '$components/Popup.svelte';
	import TermsOfService from '$components/TermsOfService.svelte';

	const { t } = getTranslate();
	pageTitle.set($t({ key: 'contact-title', defaultValue: 'Contact' }));

	mainClass.set('pb-14 my-auto');

	let popup: any = $state();

	function openPopup() {
		popup.show();
	}
</script>

<svelte:head>
	<title>{$pageTitle}</title>
	<meta
		name="description"
		content="Contact Sebastian Jans via this webform or the mentioned Links."
	/>
</svelte:head>

<!-- https://www.staticforms.xyz -->
<div
	class="mx-auto my-auto flex max-w-4xl flex-col items-center justify-center px-4 hide-scrollbar"
>
	<div class="grid w-full gap-3 pb-3 sm:grid-cols-2 md:gap-6">
		<p class="w-full text-justify md:pb-4">
			<T
				keyName="contact-text"
				defaultValue="
			Feel free to send me a message via my contact form. I am open for any questions or
			inquiries. "
			/>
		</p>
		<div class="flex h-fit flex-row flex-wrap dark:text-primary-100">
			<span class="w-1/4 font-sans font-semibold uppercase"
				><T keyName="my-phone" defaultValue="Phone: " /></span
			>
			<span class="w-3/4">+49 176 644 673 44</span>
			<span class="w-1/4 font-sans font-semibold uppercase"
				><T keyName="my-mail" defaultValue="Mail: " /></span
			>
			<span class="w-3buttonStyle/4">sebajans@icloud.com</span>
		</div>
	</div>
	<div
		in:fly|global={{ y: 30, duration: 450 }}
		class="highlight-content relative mb-24 w-full overflow-auto md:mb-0"
	>
		<div class="w-full transition duration-300">
			<form
				class="grid grid-cols-2 gap-6"
				name="contact"
				method="POST"
				data-netlify="true"
				action="/success"
			>
				<!-- netlify-honeypot="bot-field" -->
				<!-- <input type="hidden" name="accessKey" value="6b38c3a8-57ad-4413-a90b-8386e25f71e7" />
					<!-- <input type="hidden" name="subject" value="Test from jsfiddle" /> -->
				<!-- Replace with the url you want to redirect to -->
				<!-- <input type="hidden" name="redirectTo" value="https://www.sebastianjans.de" /> -->
				<input type="hidden" name="form-name" value="contact" />
				<input type="hidden" name="bot-field" />

				<div>
					<label for="Full_name" class="label"
						><T keyName="full-name" defaultValue="Full Name" />
					</label>
					<input class="input" name="name" type="text" placeholder="John" required />
				</div>
				<div>
					<label for="email" class="label"
						><T keyName="email-address" defaultValue="Email address" /></label
					>
					<input
						type="email"
						name="email"
						class="input"
						placeholder="john.doe@company.com"
						required
					/>
				</div>
				<div>
					<label for="phone" class="label"
						><T keyName="Phone-number" defaultValue="Phone number" />
						<span class="text-xs font-light"
							>(<T keyName="optional" defaultValue="optional" />)</span
						></label
					>
					<!-- https://stackoverflow.com/questions/17260238/how-to-insert-space-every-4-characters-for-iban-registering -->
					<input type="tel" name="phone" class="input" placeholder="+49 123 456 78" />
				</div>
				<div>
					<label for="company" class="label"
						><T keyName="Company" defaultValue="Company" /><span class="text-xs font-light"
							>(<T keyName="optional" defaultValue="optional" />)</span
						></label
					>
					<input type="text" name="company" class="input" placeholder="Google" />
				</div>
				<!-- <div>
						<label for="website" class="label">Website URL</label>
						<input type="url" name="website" class="input" placeholder="yourwebsite.com" />
					</div> -->
				<div class="col-span-2">
					<label for="message" class="label"
						><T keyName="Your-message" defaultValue="Your Message" /></label
					>
					<textarea name="message" class="input h-20" placeholder="Enter your message" required
					></textarea>
				</div>
				<div class="col-span-2 flex items-center sm:col-span-1">
					<div class="flex h-5 items-center">
						<label
							for="remember"
							class="w-full text-sm font-medium text-primary-900 dark:text-primary-50"
						>
							<input
								name="remember"
								type="checkbox"
								value=""
								class="focus:ring-3 mr-2 h-4 w-4 rounded border bg-primary-50 focus:!ring-primary-300 dark:border-primary-600 dark:bg-primary-700 dark:ring-offset-primary-800 dark:focus:!ring-primary-600"
								required
							/>

							<T keyName="i-agree" defaultValue="I agree with the " /><button
								onclick={openPopup}
								class="group font-bold text-primary-500 hover:text-primary-400 dark:text-primary-400 dark:hover:text-primary-600"
								><T keyName="terms-and-conditions" defaultValue="terms and conditions." />
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="duration-250 -0.5 inline h-3.5 w-3.5 align-baseline transition before:p-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg></button
							></label
						>
					</div>
				</div>
				<button
					type="submit"
					class="btn btn-highlight col-span-2 w-full rounded-md px-5 py-2.5 text-center font-sans text-base font-medium tracking-wide text-primary-900 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:text-primary-50 dark:focus:ring-primary-800 sm:col-span-1 sm:w-auto"
				>
					<T keyName="Submit" defaultValue="Submit" />
				</button>
				<input type="hidden" name="form-name" value="contact" />
				<!-- <input class="hidden" type="text" name="honeypot" /> -->
				<!-- Spam protection -->
			</form>
		</div>
	</div>
</div>

<Popup
	popupClass={'w-[90vw] md:w-[70vw] !pl-8  scrollbar fixed h-[70vh] justify-start overflow-y-auto dark:bg-primary-50 bg-primary-900'}
	position={'top-[15vh] left-[5vw] md:left-[15vw]'}
	bind:this={popup}
>
	<TermsOfService />
</Popup>
