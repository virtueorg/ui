<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("TextFieldIcon", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .TextFieldIcon {
    @apply absolute;
    @apply top-0;
    @apply right-0;
    @apply h-full;
    @apply flex;
    @apply items-center;
    @apply p-3;
    @apply text-muted;
    @apply pointer-events-none;
  }
</style>
