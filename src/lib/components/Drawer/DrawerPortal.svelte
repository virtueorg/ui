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

  const { elements, states } = ctx.get();
  const { portalled } = elements;
  const { open } = states;
</script>

{#if $open}
  {#if asChild}
    <slot builder={$portalled} />
  {:else}
    <div class={cn("DrawerPortal", className)} use:melt={$portalled} {...$$restProps}>
      <slot />
    </div>
  {/if}
{/if}

<style lang="postcss">
  .DrawerPortal {
    @apply fixed;
    @apply inset-0;
    @apply pointer-events-none;
    @apply flex;
    @apply items-center;
    @apply justify-end;
    @apply z-10;
  }
</style>
