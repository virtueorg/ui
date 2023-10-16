<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import alertDialogCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = alertDialogCtx.get();
  const { close } = elements;
</script>

{#if asChild}
  <slot builder={$close} />
{:else}
  <button use:melt={$close} class={cn("AlertDialogAction", className)} {...$$restProps} on:click>
    <slot />
  </button>
{/if}

<style lang="postcss">
  .AlertDialogAction {
    @apply text-left;
  }
</style>
