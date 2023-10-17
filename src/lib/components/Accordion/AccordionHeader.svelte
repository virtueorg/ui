<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import ctx from "./ctx";

  type $$Props = {
    asChild?: boolean;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  };

  export let level: $$Props["level"] = 3;
  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  const { elements } = ctx.get();
  const { heading } = elements;

  let className = "";
</script>

{#if asChild}
  <slot builder={$heading(level || 3)} />
{:else}
  <div class={cn("AccordionHeader", className)} {...$$restProps} use:melt={$heading(level || 3)}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .AccordionHeader {
    @apply font-bold;
  }
</style>
