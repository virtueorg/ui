<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import dialogCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements, states } = dialogCtx.get();
  const { portalled } = elements;
  const { open } = states;
</script>

{#if $open}
  {#if asChild}
    <slot builder={$portalled} />
  {:else}
    <div class={cn("AlertDialogPortal", className)} {...$$restProps} use:melt={$portalled}>
      <slot />
    </div>
  {/if}
{/if}

<style lang="postcss">
  .AlertDialogPortal {
    @apply fixed;
    @apply inset-0;
    @apply pointer-events-none;
    @apply flex;
    @apply items-end;
    @apply justify-center;
    @apply z-10;

    @apply md:items-center;
  }
</style>
