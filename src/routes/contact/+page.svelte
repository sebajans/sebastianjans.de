<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	import { fly } from 'svelte/transition';
	import { mainClass } from '$lib/stores/mainClass';
	import { T, getTranslate } from '@tolgee/svelte';
	import Popup from '../../components/Popup.svelte';
	import TermsOfService from '../../components/TermsOfService.svelte';

	const t = getTranslate();
	pageTitle.set($t({ key: 'contact-title', defaultValue: 'Contact' }));

	mainClass.set('pt-28 min-h-[calc(100vh)]');

	let popup: any;

	function openPopup() {
		popup.show();
	}
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<!-- https://www.staticforms.xyz -->
<div class=" flex flex-col justify-center mx-auto items-center max-w-3xl hide-scrollbar">
	<div class="grid w-full sm:grid-cols-2 gap-6 pb-3 ">
		<p class="w-full pb-4 text-justify">
			<T
				keyName="contact-text"
				defaultValue="
			Feel free to send me a message via my contact form. I am open for any questions or
			inquiries. "
			/>
		</p>
		<div class="flex flex-row h-fit flex-wrap">
			<span class="w-1/4 font-sans font-semibold uppercase"
				><T keyName="my-phone" defaultValue="Phone: " /></span
			>
			<span class="w-3/4">+49 176 644 673 44</span>
			<span class="w-1/4 font-sans font-semibold uppercase"
				><T keyName="my-mail" defaultValue="Mail: " /></span
			>
			<span class="w-3/4">sebajans@icloud.com</span>
		</div>
	</div>
	<div
		in:fly={{ y: 30, duration: 450 }}
		class="relative w-full overflow-auto bg-primary-900 dark:bg-primary-50 rounded-lg p-4 scrollbar"
	>
		<div class="relative flex ">
			<div class="w-full transition duration-300">
				<form
					class="grid gap-6 grid-cols-2"
					name="contact" 
					method="POST"
					data-netlify="true"
					>
					<!-- id="staticform" -->
					<!-- action="https://api.staticforms.xyz/submit" -->
					<!-- <input type="hidden" name="accessKey" value="6b38c3a8-57ad-4413-a90b-8386e25f71e7" />
					<!-- <input type="hidden" name="subject" value="Test from jsfiddle" /> -->
					<!-- Replace with the url you want to redirect to -->
					<!-- <input type="hidden" name="redirectTo" value="https://www.sebastianjans.de" /> -->
					<div>
						<label for="Full_name" class="label"
							>Full Name&thinsp<span style="color:#ff0000">*</span>
						</label>
						<input class="input" name="$Full_name" type="text" placeholder="John" required />
					</div>
					<div>
						<label for="email" class="label"
							>Email address&thinsp<span style="color:#ff0000">*</span></label
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
						<label for="phone" class="label">Phone Number</label>
						<!-- https://stackoverflow.com/questions/17260238/how-to-insert-space-every-4-characters-for-iban-registering -->
						<input type="tel" name="phone" class="input" placeholder="+49 123 456 78" />
					</div>
					<div>
						<label for="company" class="label">Company</label>
						<input type="text" name="company" class="input" placeholder="Google" />
					</div>
					<!-- <div>
						<label for="website" class="label">Website URL</label>
						<input type="url" name="website" class="input" placeholder="yourwebsite.com" />
					</div> -->
					<div class="col-span-2">
						<label for="message" class="label"
							>Your Message&thinsp<span style="color:#ff0000">*</span></label
						>
						<textarea name="message" class="h-20 input" placeholder="Enter your message" required />
					</div>
					<div class="flex items-center col-span-2 sm:col-span-1">
						<div class="flex items-center h-5 ">
							<input
								name="remember"
								type="checkbox"
								value=""
								class="w-4 h-4 bg-primary-50 rounded border focus:ring-3 focus:ring-blue-300 dark:bg-primary-700 dark:border-primary-600 dark:focus:ring-blue-600 dark:ring-offset-primary-800"
								required
							/>
							<label
								for="remember"
								class="ml-2 text-sm font-medium w-full text-primary-50 dark:text-primary-900"
								>I agree with the <button
									on:click={openPopup}
									class="group font-bold font-serif italic hover:text-primary-500"
									>terms and conditions.&thinsp<span style="color:#ff0000">*</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-3.5 w-3.5 before:p-1 inline align-baseline transition duration-250 -0.5"
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
						class="col-span-2 sm:col-span-1 text-primary-900 dark:text-primary-50 bg-primary-300 hover:bg-primary-400 dark:hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:focus:ring-primary-800"
						>Submit</button
><input type="hidden" name="form-name" value="contact">
					<!-- <input class="hidden" type="text" name="honeypot" /> -->
					<!-- Spam protection -->
				</form>
			</div>
		</div>
	</div>
</div>

<Popup
	popupClass={'w-[70vw] fixed h-[70vh] justify-start flex overflow-y-auto w-full dark:bg-primary-900 bg-primary-50'}
	bind:this={popup}
>
	<TermsOfService />
</Popup>
