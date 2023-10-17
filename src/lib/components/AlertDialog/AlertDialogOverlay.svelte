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
  const { overlay } = elements;
</script>

{#if asChild}
  <slot builder={$overlay} />
{:else}
  <div class={cn("AlertDialogOverlay", className)} {...$$restProps} use:melt={$overlay}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .AlertDialogOverlay {
    @apply absolute;
    @apply inset-0;
    @apply bg-background/80;
    @apply -z-10;
    @apply pointer-events-auto;
  }
</style>
