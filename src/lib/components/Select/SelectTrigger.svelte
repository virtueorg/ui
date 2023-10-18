<script lang="ts">
  import { ChevronDownIcon } from "$lib/icons";
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { Icon } from "../Icon";
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
  <button type="button" class={cn("SelectTrigger", className)} use:melt={$trigger} {...$$restProps}>
    <div>
      <slot />
    </div>

    <Icon>
      <ChevronDownIcon />
    </Icon>
  </button>
{/if}

<style lang="postcss">
  .SelectTrigger {
    @apply w-full;
    @apply text-left;
    @apply p-3;
    @apply bg-muted/5;
    @apply rounded-lg;
    @apply flex;
    @apply items-center;
    @apply justify-between;
  }
</style>
