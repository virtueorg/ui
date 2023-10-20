<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    asChild?: boolean;
  };

  export { className as class };
  export let asChild: $$Props["asChild"] = false;

  let className = "";

  // TODO: Check why the thumb animation is not working

  const style = tv({
    base: cn`
      transition-all
      pointer-events-none
      block
      h-5
      w-5
      rounded-full
      bg-background
      shadow-lg
      ring-0

      data-[state=checked]:translate-x-5
      data-[state=unchecked]:translate-x-0
    `,
  });

  const { states } = ctx.get();
  const { checked } = states;
</script>

{#if asChild}
  <slot checked={$checked} />
{:else}
  <span class={cn(style.base, className)} {...$$restProps}>
    <slot checked={$checked} />
  </span>
{/if}
