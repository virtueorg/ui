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
      fixed
      inset-0
      pointer-events-none
      flex
      items-center
      justify-end
      z-10
    `,
  });

  const { elements, states } = ctx.get();
  const { portalled } = elements;
  const { open } = states;
</script>

{#if $open}
  {#if asChild}
    <slot builder={$portalled} />
  {:else}
    <div class={cn(style.base, className)} use:melt={$portalled} {...$$restProps}>
      <slot />
    </div>
  {/if}
{/if}
