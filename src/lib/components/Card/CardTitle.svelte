<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLHeadingElement> & {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

  export { className as class };
  export let tag: $$Props["tag"] = "h5";

  let className = "";
</script>

<svelte:element this={tag} class={cn("font-bold", className)} {...$$restProps}>
  <slot />
</svelte:element>
