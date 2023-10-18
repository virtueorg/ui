<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("Card", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .Card {
    @apply rounded-lg;
    @apply bg-muted/5;
  }
</style>
