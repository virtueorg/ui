<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import dropdownMenuCtx from "./ctx";

  type $$Props = HTMLButtonAttributes & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = dropdownMenuCtx.get();
  const { trigger } = elements;
</script>

{#if asChild}
  <slot builder={$trigger} />
{:else}
  <button class={cn("DropdownMenuTrigger", className)} {...$$restProps} use:melt={$trigger}>
    <slot />
  </button>
{/if}

<style lang="postcss">
  .DropdownMenuTrigger {
    @apply text-left;
  }
</style>
