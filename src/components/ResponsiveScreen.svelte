<script lang="ts">
	import { onDestroy } from 'svelte';

	const interval = 3000;
	let modes = [0, 1, 2, 3];
	let currentModeIndex = 0;

	function cycleModes() {
		currentModeIndex = (currentModeIndex + 1) % modes.length;
	}

	const timer = setInterval(cycleModes, interval);
	let currentMode = modes[currentModeIndex];
	// $: currentMode = modes[currentModeIndex];
	// onDestroy(() => {
	//   clearInterval(timer);
	// });
</script>

<div class="flex w-full items-center justify-center">
	<div class="relative flex h-80 flex-row items-center justify-center">
		<div class="h-fit max-h-80 w-auto">
			<div
				class="
            border-primary-900/5 dark:border-primary-50/10 dark:from-primary-50/5 dark:to-primary-50/10 dark:text-primary-50 md:from-primary-900/10 md:to-primary-900/5 relative z-10 flex overflow-clip rounded-md border transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] md:bg-linear-to-br
             {currentMode === 0 && 'aspect-9/20 w-36 flex-col-reverse'}
             {currentMode === 1 && 'aspect-14/10 w-80 flex-col'}
             {currentMode === 2 && 'aspect-10/16 w-40 flex-col'} 
             {currentMode === 3 && 'aspect-9/20 w-32 flex-col '}
              "
			>
				<div
					class="border-primary-900/20 dark:border-primary-50/20 flex h-fit w-full flex-row justify-between gap-x-1 p-1 transition-all
              {currentMode === 0 && 'gap-x-2 border-t'}
              {currentMode === 1 && 'border-b md:gap-x-10 md:p-2'} 
              {currentMode === 2 && 'border-b md:gap-x-2 md:p-2'}
              {currentMode === 3 && 'border-b py-1.5 md:gap-x-4 md:p-2 '}
                "
				>
					<div class="flex flex-row gap-x-1 md:gap-x-1.5">
						{#if currentMode !== 3}
							<div
								class="border-primary-900/10 dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 md:from-primary-900/10 md:to-primary-900/5 h-2 w-2 rounded-full border transition-all md:h-3.5 md:w-3.5 md:bg-linear-to-br"
							></div>
						{/if}
						{#if currentMode === 1 || currentMode === 2}
							{#each Array(2) as _}
								<div
									class="border-primary-900/10 dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 md:from-primary-900/10 md:to-primary-900/5 h-2 w-2 rounded-full border transition-all md:h-3.5 md:w-3.5 md:bg-linear-to-br"
								></div>
							{/each}
						{/if}
					</div>
					<span
						class="border-primary-900/10 dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 md:from-primary-900/10 md:to-primary-900/5 mb-0 h-2 w-full rounded-full border px-2 pt-px text-center text-[0.6rem] leading-[0.8] transition-all md:h-3.5 md:bg-linear-to-br"
					></span>
					<div class="flex flex-row gap-x-1 md:gap-x-2">
						<div
							class="mb-0 h-2 rounded-full border transition-all md:h-3.5
                   {currentMode === 0 &&
								'border-primary-900/10 dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 md:from-primary-900/10 md:to-primary-900/5 w-2 md:w-3.5 md:bg-linear-to-br'}
                   {currentMode === 1 && 'w-8 border-transparent'} 
                   {currentMode === 2 && 'w-full border-transparent'} 
                   {currentMode === 3 && 'w-0 border-none'}
                    "
						></div>
					</div>
				</div>
				<div
					class="relative h-full w-full
              "
				>
					{#if currentMode !== 3}
						<svg class="stroke-primary-900/10 dark:stroke-primary-50/20 h-full w-full">
							<line class="" x1="0" y1="100%" x2="100%" y2="0" />
							<line class="" x1="0" y1="0" x2="100%" y2="100%" />
						</svg>
					{:else if currentMode === 3}
						<div class="relative flex h-full w-full flex-col gap-y-2 px-2 py-4">
							<div
								class="border-primary-900/10 dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 md:from-primary-900/10 md:to-primary-900/5 relative h-16 w-full overflow-clip rounded-sm border pb-0 md:bg-linear-to-br"
							>
								<svg class="stroke-primary-900/10 dark:stroke-primary-50/20 h-full w-full">
									<line class="" x1="0" y1="100%" x2="100%" y2="0" />
									<line class="" x1="0" y1="0" x2="100%" y2="100%" />
								</svg>
							</div>
							<div
								class="border-primary-900/10 dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 md:from-primary-900/10 md:to-primary-900/5 relative mx-auto mt-1 mb-1 h-4 w-[calc(100%_-_1rem)] border md:bg-linear-to-br"
							></div>
							{#each Array(3) as _}
								<div
									class="border-primary-900/10 dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 md:from-primary-900/10 md:to-primary-900/5 relative mx-auto h-2 w-[calc(100%_-_1rem)] border md:bg-linear-to-br"
								></div>
							{/each}
							<div
								class="border-primary-900/10 dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 md:from-primary-900/10 md:to-primary-900/5 relative mr-auto mb-2 ml-2 h-2 w-[calc(100%_-_2rem)] border md:bg-linear-to-br"
							></div>
							<div
								class="border-primary-900/10 dark:border-primary-50/20 dark:from-primary-50/5 dark:to-primary-50/10 md:from-primary-900/10 md:to-primary-900/5 relative h-16 w-full border md:bg-linear-to-br"
							>
								<svg class="stroke-primary-900/10 dark:stroke-primary-50/20 h-full w-full">
									<line class="" x1="0" y1="100%" x2="100%" y2="0" />
									<line class="" x1="0" y1="0" x2="100%" y2="100%" />
								</svg>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
