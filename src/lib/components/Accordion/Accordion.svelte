<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { CreateAccordionProps } from "@melt-ui/svelte";
  import ctx from "./ctx";

  type $$Props = CreateAccordionProps<boolean> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = ctx.create($$restProps);
  const { root } = elements;
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <div class={cn("Accordion", className)} {...$root} {...$$restProps}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .Accordion {
    @apply flex;
    @apply flex-col;
    @apply gap-2;
  }
</style>
