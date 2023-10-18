<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLUListElement>;

  export { className as class };

  let className = "";
</script>

<ul class={cn("NavUl", className)} {...$$restProps}>
  <slot />
</ul>

<style lang="postcss">
  .NavUl {
    @apply p-5;
    @apply flex;
    @apply flex-col;
    @apply gap-2;
  }
</style>
