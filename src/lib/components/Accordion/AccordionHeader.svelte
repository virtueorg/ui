<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import { tv } from "tailwind-variants";
  import ctx from "./ctx";

  type $$Props = {
    asChild?: boolean;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  };

  export let level: $$Props["level"] = 3;
  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const style = tv({
    base: cn`
      font-bold
    `,
  });

  const { elements } = ctx.get();
  const { heading } = elements;
</script>

{#if asChild}
  <slot builder={$heading(level || 3)} />
{:else}
  <div class={cn(style.base, className)} use:melt={$heading(level || 3)} {...$$restProps}>
    <slot />
  </div>
{/if}
