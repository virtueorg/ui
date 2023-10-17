<script lang="ts">
  import { TRANSITION_BASE } from "$lib/utils";
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { slide } from "svelte/transition";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const item = ctx.getItem();

  const { elements, helpers } = ctx.get();
  const { content } = elements;
  const { isSelected } = helpers;
</script>

{#if $isSelected(item.value)}
  {#if asChild}
    <slot builder={$content} />
  {:else}
    <div
      class={cn("AccordionContent", className)}
      {...$$restProps}
      transition:slide={TRANSITION_BASE}
      use:melt={$content(item)}
    >
      <slot />
    </div>
  {/if}
{/if}

<style lang="postcss">
  .AccordionContent {
    @apply p-5;
  }
</style>
