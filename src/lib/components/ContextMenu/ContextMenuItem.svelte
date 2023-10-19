<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLButtonAttributes & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = ctx.get();
  const { item } = elements;
</script>

{#if asChild}
  <slot builder={$item} />
{:else}
  <button
    type="button"
    class={cn("ContextMenuItem", className)}
    use:melt={$item}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if}

<style lang="postcss">
  .ContextMenuItem {
    @apply transition-all;
    @apply text-left;
    @apply w-full;
    @apply flex;
    @apply items-center;
    @apply gap-2;
    @apply rounded-lg;
    @apply p-2;
    @apply cursor-pointer;

    @apply active:scale-95;

    @apply hover:bg-muted/5;
  }
</style>
