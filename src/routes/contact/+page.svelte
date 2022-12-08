<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	import TermsOfService from '../../components/TermsOfService.svelte';
	import { fly } from 'svelte/transition';
	import { mainClass } from '$lib/stores/mainClass';
	import { T, getTranslate } from '@tolgee/svelte';

	const t = getTranslate();
	pageTitle.set($t({ key: 'contact-title', defaultValue: 'Contact' }));

	mainClass.set('pt-28 container');
	let tos = false;

	function toggleButton() {
		tos = !tos;
	}
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<!-- https://www.staticforms.xyz -->
<!-- <div class="min-h-[70vh]"> -->
<div class="grid sm:grid-cols-2 gap-6 pb-3">
	<p class="pb-4 text-justify">
		<T
			keyName="contact-text"
			defaultValue="
			Feel free to send me a message via my contact form. I am open for any questions or
			inquiries. "
		/>
	</p>
	<div class="flex flex-row flex-wrap">
		<span class="w-1/3 font-bold"><T keyName="my-phone" defaultValue="Phone: " /></span>
		<span class="w-2/3">+49 176 644 673 44</span>
		<span class="w-1/3 font-bold"><T keyName="my-mail" defaultValue="Mail: " /></span>
		<span class="w-2/3">sebajans@icloud.com</span>
	</div>
</div>
<div
	in:fly={{ y: 30, duration: 450 }}
	class=" overflow-auto  bg-primary-900 dark:bg-primary-50 rounded-lg p-4"
>
	<div class="relative flex ">
		<div
			class="{tos ? 'opacity-0 -translate-x-full' : 'overflow-hidden w-full opacity-100'}
    w-full transition duration-300"
		>
			<form
				class="grid gap-6 grid-cols-2"
				action="https://api.staticforms.xyz/submit"
				method="post"
				id="staticform"
			>
				<input type="hidden" name="accessKey" value="6b38c3a8-57ad-4413-a90b-8386e25f71e7" />
				<input type="hidden" name="subject" value="Test from jsfiddle" />
				<!-- Replace with the url you want to redirect to -->
				<input type="hidden" name="redirectTo" value="https://www.sebastianjans.de" />
				<div>
					<label for="first_name" class="label"
						>First Name&thinsp<span style="color:#ff0000">*</span>
					</label>
					<input class="input" name="$first_name" type="text" placeholder="John" required />
				</div>
				<div>
					<label for="last_name" class="label"
						>Last Name&thinsp<span style="color:#ff0000">*</span></label
					>
					<input type="text" name="$last_name" class="input" placeholder="Doe" required />
				</div>
				<div>
					<label for="phone" class="label">Phone Number</label>
					<!-- https://stackoverflow.com/questions/17260238/how-to-insert-space-every-4-characters-for-iban-registering -->
					<input type="tel" name="phone" class="input" placeholder="+49 123 456 78" />
					<!-- pattern="+[0-9]{2} [0-9]{3} [0-9]{3} [0-9]{4}" -->
					<!-- pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" -->
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
					<label for="company" class="label">Company</label>
					<input type="text" name="company" class="input" placeholder="Google" />
				</div>
				<div>
					<label for="website" class="label">Website URL</label>
					<input type="url" name="website" class="input" placeholder="yourwebsite.com" />
					<!-- pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]\{2,\}$" -->
				</div>
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
							class="ml-2 font-medium w-full text-primary-50 dark:text-primary-900"
							>I agree with the <span
								on:click={toggleButton}
								class="group font-bold italic hover:text-primary-500"
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
								</svg></span
							></label
						>
					</div>
				</div>
				<button
					type="submit"
					class="col-span-2 sm:col-span-1 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>Submit</button
				>
				<input class="hidden" type="text" name="honeypot" />
				<!-- Spam protection -->
			</form>
		</div>
		<div
			class="{tos
				? 'opacity-100 w-[full] animate-fadein'
				: 'opacity-0 animate-fadeout hidden translate-x-full'}
     transition absolute text-sm text-primary-50 bg-primary-900 dark:text-primary-900 dark:bg-primary-50"
		>
			<button on:click={toggleButton} class="absolute group right-0 group h-7 w-7 space-y-2">
				<span
					class="translate-y-[5px] rotate-45 group-hover:rotate-[135deg] block dark:group-hover:bg-primary-600 dark:bg-primary-900 group-hover:bg-primary-400 bg-primary-50 h-0.5 w-7 duration-300"
				/>
				<span
					class="-translate-y-[5px] -rotate-45 group-hover:rotate-45 block dark:group-hover:bg-primary-600 dark:bg-primary-900 group-hover:bg-primary-400 bg-primary-50 h-0.5 w-7 duration-300"
				/>
			</button>
			<TermsOfService />
		</div>
	</div>
</div>
<!-- https://www.termsandconditionsgenerator.com/live.php?token=ieD1izzWivvmzoIyzVEzAUMBG6W4ABcU -->
<div class="relative botton-0 inset-x-0 p-2 align-middle text-xs text-center">
	<!-- –
		<button class="hover:text-primary-500" on:click={toggleButton}>Privacy</button> -->
	&copy; Sebastian Jans, 2022 –
	<button class="hover:text-primary-500" on:click={toggleButton}>Terms of Service</button>
</div>
<!-- </div> -->
