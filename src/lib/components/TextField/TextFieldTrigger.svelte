<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("TextFieldTrigger", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .TextFieldTrigger {
    @apply relative;
    @apply bg-muted/5;
    @apply rounded-lg;
  }
</style>
