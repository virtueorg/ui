<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { slide } from "svelte/transition";
  import accordionCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";

  const item = accordionCtx.getItem();

  const { elements, helpers } = accordionCtx.get();
  const { content } = elements;
  const { isSelected } = helpers;
</script>

{#if $isSelected(item.value)}
  <div
    class={cn`
    p-5 
    ${className}
    `}
    {...$$restProps}
    transition:slide
    use:melt={$content(item)}
  >
    <slot />
  </div>
{/if}
