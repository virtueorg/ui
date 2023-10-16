<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { CreateAccordionProps } from "@melt-ui/svelte";
  import accordionCtx from "./ctx";

  type $$Props = CreateAccordionProps<boolean> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = accordionCtx.create($$restProps);
  const { root } = elements;
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <div
    class={cn`
    flex
    flex-col
    gap-2
    ${className}
    `}
    {...$root}
    {...$$restProps}
  >
    <slot />
  </div>
{/if}
