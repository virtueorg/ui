<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLThAttributes } from "svelte/elements";

  type $$Props = HTMLThAttributes;

  export { className as class };

  let className = "";
</script>

<th class={cn("TableHead", className)} {...$$restProps}>
  <slot />
</th>

<style lang="postcss">
  .TableHead {
    @apply p-5;
    @apply text-left;
    @apply align-middle;
  }
</style>
