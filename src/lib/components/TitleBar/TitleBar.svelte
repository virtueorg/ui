<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("TitleBar", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .TitleBar {
    @apply flex;
    @apply items-center;
    @apply gap-2;
    @apply truncate;
  }
</style>
