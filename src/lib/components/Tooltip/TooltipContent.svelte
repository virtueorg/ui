<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = ctx.get();
  const { content } = elements;
</script>

{#if asChild}
  <slot builder={$content} />
{:else}
  <div class={cn("TooltipContent", className)} use:melt={$content} {...$$restProps}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .TooltipContent {
    @apply bg-panel;
    @apply rounded-lg;
    @apply p-3;
  }
</style>
