<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    asChild?: boolean;
    placeholder?: string;
  };

  export let placeholder: $$Props["placeholder"] = "";
  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { states } = ctx.get();
  const { selectedLabel } = states;
</script>

{#if asChild}
  <slot label={$selectedLabel || placeholder} />
{:else}
  <span class={cn("SelectValue", className)} {...$$restProps}>
    {$selectedLabel || placeholder}
  </span>
{/if}

<style lang="postcss">
  .SelectValue {
    @apply font-bold;
  }
</style>
