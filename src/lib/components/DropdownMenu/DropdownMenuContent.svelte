<script lang="ts">
  import { TRANSITION_SCALE } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { scale } from "svelte/transition";
  import dropdownMenuCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements, states } = dropdownMenuCtx.get();
  const { menu } = elements;
  const { open } = states;
</script>

{#if open}
  {#if asChild}
    <slot builder={$menu} />
  {:else}
    <div
      class={cn("DropdownMenuContent", className)}
      {...$$restProps}
      transition:scale={TRANSITION_SCALE}
      use:melt={$menu}
    >
      <slot />
    </div>
  {/if}
{/if}

<style lang="postcss">
  .DropdownMenuContent {
    @apply w-64;
    @apply bg-panel;
    @apply rounded-lg;
  }
</style>
