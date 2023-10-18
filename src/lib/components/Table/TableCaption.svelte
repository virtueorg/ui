<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableCaptionElement>;

  export { className as class };

  let className = "";
</script>

<caption class={cn("TableCaption", className)} {...$$restProps}>
  <slot />
</caption>

<style lang="postcss">
  .TableCaption {
    @apply mt-4;
    @apply text-sm;
    @apply text-muted;
  }
</style>
