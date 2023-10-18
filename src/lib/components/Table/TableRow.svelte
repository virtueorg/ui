<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableSectionElement>;

  export { className as class };

  let className = "";
</script>

<tr class={cn("TableRow", className)} {...$$restProps}>
  <slot />
</tr>

<style lang="postcss">
  .TableRow {
    @apply transition-all;

    @apply even:bg-muted/5;

    @apply hover:bg-muted/10;
  }
</style>
