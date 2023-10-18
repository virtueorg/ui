<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("NavBrand", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .NavBrand {
    @apply p-5;
  }
</style>
