<script lang="ts">
  import type { IHeadingTag } from "$lib/types";
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLHeadingElement> & {
    tag?: IHeadingTag;
  };

  export { className as class };
  export let tag: $$Props["tag"] = "h2";

  let className = "";
</script>

<svelte:element this={tag} class={cn("TitleBarTitle", className)} {...$$restProps}>
  <slot />
</svelte:element>

<style lang="postcss">
  .TitleBarTitle {
    @apply font-bold;
    @apply truncate;
  }
</style>
