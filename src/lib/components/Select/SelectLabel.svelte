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

  const { groupLabel, id } = ctx.getGroup();
</script>

{#if asChild}
  <slot builder={$groupLabel(id)} />
{:else}
  <div class={cn("SelectLabel", className)} {...$$restProps} use:melt={$groupLabel(id)}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .SelectLabel {
    @apply text-sm;
    @apply text-muted;
  }
</style>
