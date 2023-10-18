<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLElement>;

  export { className as class };

  let className = "";
</script>

<section class={cn("Section", className)} {...$$restProps}>
  <slot />
</section>

<style lang="postcss">
  .Section {
    @apply flex;
    @apply flex-col;
    @apply gap-2;
  }
</style>
