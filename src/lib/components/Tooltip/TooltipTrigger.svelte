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
  const { trigger } = elements;
</script>

{#if asChild}
  <slot builder={$trigger} />
{:else}
  <button
    type="button"
    class={cn("TooltipTrigger", className)}
    use:melt={$trigger}
    {...$$restProps}
  >
    <slot />
  </button>
{/if}

<style lang="postcss">
  .TooltipTrigger {
    @apply text-left;
  }
</style>
