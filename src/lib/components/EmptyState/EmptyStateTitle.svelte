<script lang="ts">
  import type { IHeadingTag } from "$lib/types";
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLHeadingElement> & {
    tag?: IHeadingTag;
  };

  export { className as class };
  export let tag: $$Props["tag"] = "h3";

  let className = "";

  const style = tv({
    base: cn`
      font-bold;
      text-2xl;
    `,
  });
</script>

<svelte:element this={tag} class={cn(style.base, className)} {...$$restProps}>
  <slot />
</svelte:element>
