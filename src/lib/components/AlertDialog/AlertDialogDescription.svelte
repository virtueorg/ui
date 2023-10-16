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
  const { description } = elements;
</script>

{#if asChild}
  <slot builder={$description} />
{:else}
  <div class={cn("AlertDialogDescription", className)} {...$$restProps} use:melt={$description}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .AlertDialogDescription {
    @apply text-sm;
    @apply text-muted;
  }
</style>
