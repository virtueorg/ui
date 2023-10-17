<script lang="ts">
  import ChevronRightIcon from "$lib/icons/ChevronRightIcon.svelte";
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import Icon from "../Icon/Icon.svelte";
  import ctx from "./ctx";

  type $$Props = HTMLButtonAttributes & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = ctx.getSub();
  const { subTrigger } = elements;
</script>

{#if asChild}
  <slot builder={$subTrigger} />
{:else}
  <button
    type="button"
    class={cn("ContextMenuSubTrigger", className)}
    {...$$restProps}
    use:melt={$subTrigger}
    on:click
  >
    <slot />

    <Icon class="ml-auto">
      <ChevronRightIcon />
    </Icon>
  </button>
{/if}

<style lang="postcss">
  .ContextMenuSubTrigger {
    @apply transition-all;
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
