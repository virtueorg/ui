<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("AlertDialogFooter", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .AlertDialogFooter {
    @apply p-5;
    @apply flex;
    @apply gap-2;
    @apply items-center;
    @apply justify-end;
  }
</style>
