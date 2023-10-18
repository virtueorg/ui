<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("DetailValue", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .DetailValue {
    @apply w-full;
    @apply text-right;
    @apply ml-auto;
  }
</style>
