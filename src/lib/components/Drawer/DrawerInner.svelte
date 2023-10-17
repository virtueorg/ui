<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("DrawerInner", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .DrawerInner {
    @apply p-5;
    @apply h-full;
  }
</style>
