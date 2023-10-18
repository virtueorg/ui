<script lang="ts">
  import type { IHeadingTag } from "$lib/types";
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLHeadingElement> & {
    tag?: IHeadingTag;
  };

  export { className as class };
  export let tag: $$Props["tag"] = "h3";

  let className = "";
</script>

<svelte:element this={tag} class={cn("EmptyStateTitle", className)} {...$$restProps}>
  <slot />
</svelte:element>

<style lang="postcss">
  .EmptyStateTitle {
    @apply font-bold;
    @apply text-2xl;
  }
</style>
