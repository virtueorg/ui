<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import drawerCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = drawerCtx.get();
  const { description } = elements;
</script>

{#if asChild}
  <slot builder={$description} />
{:else}
  <div class={cn("DrawerDescription", className)} {...$$restProps} use:melt={$description}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .DrawerDescription {
    @apply text-sm;
    @apply text-muted;
  }
</style>
