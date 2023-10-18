<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLElement>;

  export { className as class };

  let className = "";
</script>

<nav class={cn("MobileNav", className)} {...$$restProps}>
  <slot />
</nav>

<style lang="postcss">
  .MobileNav {
    @apply w-full;
    @apply bg-panel;
    @apply p-2;
  }
</style>
