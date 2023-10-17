<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = ctx.get();
  const { separator } = elements;
</script>

{#if asChild}
  <slot builder={$separator} />
{:else}
  <div class={cn("DropdownMenuSeparator", className)} {...$$restProps} use:melt={$separator}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .DropdownMenuSeparator {
    @apply h-px;
    @apply bg-muted/10;
  }
</style>
