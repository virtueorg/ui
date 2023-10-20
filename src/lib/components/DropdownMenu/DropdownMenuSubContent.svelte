<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const style = tv({
    base: cn`
      w-64
      bg-panel
      rounded-lg
    `,
  });

  const { elements, states } = ctx.getSub();
  const { subMenu } = elements;
  const { subOpen } = states;
</script>

{#if $subOpen}
  {#if asChild}
    <slot builder={$subMenu} />
  {:else}
    <div class={cn(style.base, className)} use:melt={$subMenu} {...$$restProps}>
      <slot />
    </div>
  {/if}
{/if}
