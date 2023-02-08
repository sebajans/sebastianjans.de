<script>
  import { fly,blur } from 'svelte/transition';
  export let pathname = '';

  import { fade } from 'svelte/transition'
  import { elasticOut } from 'svelte/easing';

	// function whoosh(node, params) {
	// 	const existingTransform = getComputedStyle(node).transform.replace('none', '');

	// 	return {
	// 		delay: params.delay || 0,
	// 		duration: params.duration || 400,
	// 		easing: params.easing || elasticOut,
	// 		css: (t, u) => `transform: ${existingTransform} scale(${t})`
	// 	};
	// }
  function swoop() {
    return {
      duration: 1000,
      easing: elasticOut,
      css: (t, u) => `transform: scale(${t}) translateX(${u * 100}%)`
    }
  }
</script>

{#key pathname}
  <!-- <div style="grid-row: 1 / -1; grid-column: 1 / -1;" 
    in:blur="{{duration: 300, delay: 250 }}"
    out:blur="{{ duration: 300 }}"
    > -->
  <div style="grid-row: 1 / -1; grid-column: 1 / -1;" 
    in:fly="{{ x: 10, duration: 350, delay: 250 }}"
    out:fly="{{ x: -10, duration: 350 }}" 
    >
    <slot/>
  </div>
{/key}