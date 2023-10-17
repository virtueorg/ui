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
  const { trigger } = elements;
</script>

{#if asChild}
  <slot builder={$trigger} />
{:else}
  <div class={cn("ContextMenuTrigger", className)} {...$$restProps} use:melt={$trigger}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .ContextMenuTrigger {
    @apply text-left;
  }
</style>
