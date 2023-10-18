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
  const { close } = elements;
</script>

{#if asChild}
  <slot builder={$close} />
{:else}
  <button
    type="button"
    class={cn("DrawerClose", className)}
    use:melt={$close}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if}

<style lang="postcss">
  .DrawerClose {
    @apply text-left;
  }
</style>
