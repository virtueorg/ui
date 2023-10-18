<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("TitleBarIcon", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .TitleBarIcon {
    @apply w-11;
    @apply h-11;
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply rounded-lg;
    @apply bg-muted/5;
    @apply shrink-0;
  }
</style>
