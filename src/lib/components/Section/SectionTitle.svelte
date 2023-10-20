<script lang="ts">
  import type { IHeadingTag } from "$lib/types";
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLElement> & {
    tag?: IHeadingTag;
  };

  export { className as class };
  export let tag: $$Props["tag"] = "h2";

  let className = "";

  const style = tv({
    base: cn`
      text-sm
      text-muted
    `,
  });
</script>

<svelte:element this={tag} class={cn(style.base, className)} {...$$restProps}>
  <slot />
</svelte:element>
