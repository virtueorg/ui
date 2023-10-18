<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLTdAttributes } from "svelte/elements";

  type $$Props = HTMLTdAttributes;

  export { className as class };

  let className = "";
</script>

<td class={cn("TableCell", className)} {...$$restProps}>
  <slot />
</td>

<style lang="postcss">
  .TableCell {
    @apply p-5;
    @apply align-middle;
  }
</style>
