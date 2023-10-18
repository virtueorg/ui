<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableSectionElement>;

  export { className as class };

  let className = "";
</script>

<thead class={cn("TableHeader", className)} {...$$restProps}>
  <slot />
</thead>

<style lang="postcss">
  .TableHeader {
    @apply bg-muted/5;
  }

  .TableHeader:hover > :global(tr) {
    @apply bg-transparent;
  }
</style>
