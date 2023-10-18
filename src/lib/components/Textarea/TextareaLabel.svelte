<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLLabelAttributes } from "svelte/elements";

  type $$Props = HTMLLabelAttributes;

  export { className as class };

  let className = "";
</script>

<label class={cn("TextareaLabel", className)} {...$$restProps}>
  <slot />
</label>

<style lang="postcss">
  .TextareaLabel {
    @apply absolute;
    @apply top-0;
    @apply left-0;
    @apply p-3;
    @apply text-sm;
    @apply text-muted;
  }
</style>
