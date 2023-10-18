<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLUListElement>;

  export { className as class };

  let className = "";
</script>

<ul class={cn("MobileNavUl", className)} {...$$restProps}>
  <slot />
</ul>

<style lang="postcss">
  .MobileNavUl {
    @apply p-2;
    @apply flex;
    @apply items-center;
    @apply justify-between;
  }
</style>
