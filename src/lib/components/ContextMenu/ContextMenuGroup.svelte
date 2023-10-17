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

  const { group, id } = ctx.createGroup();
</script>

{#if asChild}
  <slot builder={$group(id)} />
{:else}
  <div class={cn("ContextMenuGroup", className)} {...$$restProps} use:melt={$group(id)}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .ContextMenuGroup {
    @apply p-2;
  }
</style>
