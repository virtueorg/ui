<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLParagraphElement>;

  export { className as class };

  let className = "";
</script>

<p class={cn("EmptyStateDescription", className)} {...$$restProps}>
  <slot />
</p>

<style lang="postcss">
  .EmptyStateDescription {
    @apply text-muted;
  }
</style>
