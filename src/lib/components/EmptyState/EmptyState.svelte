<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("EmptyState", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .EmptyState {
    @apply flex;
    @apply flex-col;
    @apply items-center;
    @apply justify-center;
    @apply gap-3;
    @apply text-center;
  }
</style>
