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
    @appl absolute;
    @appl top-0;
    @appl left-0;
    @appl p-3;
    @appl text-sm;
    @appl text-muted;
  }
</style>
