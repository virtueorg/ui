<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLParagraphElement>;

  export { className as class };

  let className = "";
</script>

<p class={cn("TitleBarDescription", className)} {...$$restProps}>
  <slot />
</p>

<style lang="postcss">
  .TitleBarDescription {
    @apply text-sm;
    @apply text-muted;
    @apply truncate;
  }
</style>
