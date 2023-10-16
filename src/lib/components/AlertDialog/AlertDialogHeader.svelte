<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("AlertDialogHeader", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .AlertDialogHeader {
    @apply p-5;
    @apply flex;
    @apply flex-col;
  }
</style>
