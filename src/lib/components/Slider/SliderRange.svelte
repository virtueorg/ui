<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = ctx.get();
  const { range } = elements;
</script>

{#if asChild}
  <slot builder={$range} />
{:else}
  <span class={cn("SliderRange", className)} use:melt={$range} {...$$restProps} />
{/if}

<style lang="postcss">
  .SliderRange {
    @apply h-2;
    @apply grow;
    @apply overflow-hidden;
    @apply rounded-full;
    @apply bg-primary;
  }
</style>
