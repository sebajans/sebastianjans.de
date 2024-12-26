<script lang="ts">
  const {
    name,
    class: className,
  }: { name: string; class: string | undefined } = $props();
</script>

{#if name === "color"}
  <iconify-icon icon="mdi:palette-swatch-variant" class={className}
  ></iconify-icon>
{:else if name === "landing-page"}
  <iconify-icon icon="material-symbols:vertical-split-rounded" class={className}
  ></iconify-icon>
{:else if name === "front-end"}
  <iconify-icon icon="material-symbols:code-rounded" class={className}
  ></iconify-icon>
{:else if name === "ui-ux"}
  <iconify-icon icon="fluent:card-ui-24-filled" class={className}
  ></iconify-icon>
{:else if name === "testing"}
  <iconify-icon icon="mdi:user-details" class={className}
  ></iconify-icon>
{:else if name === "responsive"}
  <iconify-icon icon="material-symbols:responsive-layout-rounded" class={className}
  ></iconify-icon>
{:else if name === "content-management"}
  <iconify-icon icon="fluent:content-view-gallery-16-filled" class={className}
  ></iconify-icon>
{:else if name === "ecommerce"}
  <iconify-icon icon="mdi:shop" class={className}
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
{:else if name === "package"}
  <iconify-icon icon="material-symbols:package-2" class={className}
  ></iconify-icon>
{:else if name === "publication"}
  <iconify-icon icon="mdi:newspaper-variant-multiple" class={className}
  ></iconify-icon>
{:else if name === "print"}
  <iconify-icon icon="material-symbols:book-5-rounded" class={className}
  ></iconify-icon>
{:else if name === "illustration"}
  <iconify-icon icon="mdi:draw" class={className}
  ></iconify-icon>
{:else if name === "identity"}
  <iconify-icon icon="mdi:perm-identity" class={className}
  ></iconify-icon>
{:else if name === "brand"}
  <iconify-icon icon="heroicons:rectangle-group-20-solid" class={className}
  ></iconify-icon>
{:else if name === "motion"}
  <iconify-icon icon="material-symbols-light:animated-images" class={className}
  ></iconify-icon>
{/if}
