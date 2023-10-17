<script lang="ts">
  import { TRANSITION_Y_IN } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { fly } from "svelte/transition";
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
  <div
    class={cn("DrawerContent", className)}
    transition:fly={TRANSITION_Y_IN}
    {...$$restProps}
    use:melt={$content}
  >
    <slot />
  </div>
{/if}

<style lang="postcss">
  .DrawerContent {
    @apply w-full;
    @apply h-full;
    @apply flex;
    @apply flex-col;
    @apply bg-panel;
    @apply pointer-events-auto;

    @apply md:max-w-lg;
  }
</style>
