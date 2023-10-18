<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLTableAttributes } from "svelte/elements";

  type $$Props = HTMLTableAttributes;

  export { className as class };

  let className = "";
</script>

<div class={cn("TableContainer")}>
  <table class={cn("Table", className)} {...$$restProps}>
    <slot />
  </table>
</div>

<style lang="postcss">
  .TableContainer {
    @apply w-full;
    @apply overflow-auto;
  }

  .Table {
    @apply w-full;
    @apply min-w-[65rem];
    @apply caption-bottom;
    @apply rounded-lg;
    @apply overflow-hidden;
    @apply table-fixed;
  }
</style>
