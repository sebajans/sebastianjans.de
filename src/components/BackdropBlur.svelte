<script lang="ts">
	export let showMenu: boolean = false;
</script>

<div
class="{showMenu
  ? 'md:!hidden'
  : 'hidden'} h-full duration-300 transition inset-0 absolute z-20 backdrop-blur-2xl bg-gradient-to-t from-primary-100 dark:from-primary-900"
>
<slot/>
</div>