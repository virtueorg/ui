<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("TextField", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .TextField {
    @apply flex;
    @apply flex-col;
    @apply gap-2;
  }
</style>
