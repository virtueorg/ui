<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const style = tv({
    base: cn`
      block
      h-5
      w-5
      rounded-lg
      bg-primary

      disabled:pointer-events-none
      disabled:opacity-50
    `,
  });

  const { elements } = ctx.get();
  const { thumb } = elements;
</script>

{#if asChild}
  <slot builder={$thumb()} />
{:else}
  <span class={cn(style.base, className)} use:melt={$thumb()} {...$$restProps} />
{/if}
