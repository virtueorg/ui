<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("EmptyStateIllustration", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .EmptyStateIllustration {
    @apply w-40;
    @apply h-40;
  }
</style>
