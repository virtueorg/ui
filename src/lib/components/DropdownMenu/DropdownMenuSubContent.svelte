<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import dropdownMenuCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements, states } = dropdownMenuCtx.getSub();
  const { subMenu } = elements;
  const { subOpen } = states;
</script>

{#if $subOpen}
  {#if asChild}
    <slot builder={$subMenu} />
  {:else}
    <div class={cn("DropdownMenuSubContent", className)} {...$$restProps} use:melt={$subMenu}>
      <slot />
    </div>
  {/if}
{/if}

<style lang="postcss">
  .DropdownMenuSubContent {
    @apply w-64;
    @apply bg-panel;
    @apply rounded-lg;
  }
</style>
