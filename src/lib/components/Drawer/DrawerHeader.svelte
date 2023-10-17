<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("DrawerHeader", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .DrawerHeader {
    @apply p-5;
    @apply flex;
    @apply items-center;
    @apply justify-between;
  }
</style>
