<script lang="ts">
  const {
    name,
    class: className,
  }: { name: string; class: string | undefined } = $props();
</script>

{#if name === "color"}
  <iconify-icon icon="mdi:palette-swatch-variant" class={className}
  ></iconify-icon>
{:else if name === "logo"}
  <iconify-icon icon="material-symbols:activity-zone" class={className}
  ></iconify-icon>
{:else if name === "typography"}
  <iconify-icon
    icon="material-symbols:custom-typography-rounded"
    class={className}
  ></iconify-icon>
{:else if name === "pattern"}
  <iconify-icon icon="icon-park-outline:lattice-pattern" class={className}
  ></iconify-icon>
{:else if name === "icon"}
  <iconify-icon icon="tdesign:icon" class={className}></iconify-icon>
{:else if name === "strategy"}
  <iconify-icon icon="mdi:strategy" class={className}></iconify-icon>
{:else if name === "mockup"}
  <iconify-icon
    icon="material-symbols:desktop-cloud-stack-rounded"
    class={className}
  ></iconify-icon>
{:else if name === "guide"}
  <iconify-icon icon="fluent:style-guide-24-filled" class={className}
  ></iconify-icon>
{:else if name === "naming"}
  <iconify-icon icon="fluent:code-text-16-filled" class={className}
  ></iconify-icon>
{/if}
