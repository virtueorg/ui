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
  const { content } = elements;
</script>

{#if asChild}
  <slot builder={$content} />
{:else}
  <div class={cn("AlertDialogContent", className)} {...$$restProps} use:melt={$content}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .AlertDialogContent {
    @apply w-full;
    @apply bg-muted/5;
    @apply pointer-events-auto;

    @apply md:max-w-lg;
    @apply md:rounded-lg;
  }
</style>
