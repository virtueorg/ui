<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = ctx.get();
  const { fallback } = elements;
</script>

{#if asChild}
  <slot builder={$fallback} />
{:else}
  <span class={cn("AvatarFallback", className)} {...$$restProps} use:melt={$fallback}>
    <slot />
  </span>
{/if}

<style lang="postcss">
  .AvatarFallback {
    @apply text-muted;
  }
</style>
