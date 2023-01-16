<script lang="ts">
	import { cubicInOut } from 'svelte/easing';

function slidevertical(node: any, { firstdelay, delay }: { firstdelay: number; delay: number }) {
  return {
    delay,
    duration: 850 * firstdelay,
    css: (t: number) => {
      const eased = cubicInOut(t);

      return `
      transform-origin: left;
      transform: scaleX(${eased})
      `;
    }
  };
}
</script>
