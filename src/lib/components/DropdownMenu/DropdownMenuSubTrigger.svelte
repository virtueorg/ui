<script lang="ts">
  import ChevronRightIcon from "$lib/icons/ChevronRightIcon.svelte";
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import Icon from "../Icon/Icon.svelte";
  import dropdownMenuCtx from "./ctx";

  type $$Props = HTMLButtonAttributes & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = dropdownMenuCtx.getSub();
  const { subTrigger } = elements;
</script>

{#if asChild}
  <slot builder={$subTrigger} />
{:else}
  <button
    class={cn("DropdownMenuSubTrigger", className)}
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
  .DropdownMenuSubTrigger {
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
