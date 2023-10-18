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
  const { thumb } = elements;
</script>

{#if asChild}
  <slot builder={$thumb()} />
{:else}
  <span class={cn("SliderThumb", className)} use:melt={$thumb()} {...$$restProps} />
{/if}

<style lang="postcss">
  .SliderThumb {
    @apply block;
    @apply h-5;
    @apply w-5;
    @apply rounded-lg;
    @apply bg-primary;

    @apply disabled:pointer-events-none;
    @apply disabled:opacity-50;
  }
</style>
