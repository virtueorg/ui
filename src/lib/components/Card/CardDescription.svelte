<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLParamAttributes } from "svelte/elements";

  type $$Props = HTMLParamAttributes;

  export { className as class };

  let className = "";
</script>

<p class={cn("CardDescription", className)} {...$$restProps}>
  <slot />
</p>

<style lang="postcss">
  .CardDescription {
    @apply text-sm;
    @apply text-muted;
  }
</style>
