<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("DrawerActions", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .DrawerActions {
    @apply flex;
    @apply items-center;
    @apply gap-2;
  }
</style>
