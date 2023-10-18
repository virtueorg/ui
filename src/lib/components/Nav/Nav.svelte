<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLElement>;

  export { className as class };

  let className = "";
</script>

<nav class={cn("Nav", className)} {...$$restProps}>
  <slot />
</nav>

<style lang="postcss">
  .Nav {
    @apply bg-panel;
    @apply flex;
    @apply flex-col;
  }
</style>
