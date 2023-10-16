<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import accordionCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  const item = accordionCtx.getItem();

  const { elements } = accordionCtx.get();
  const { trigger } = elements;

  let className = "";
</script>

{#if asChild}
  <slot builder={$trigger(item)} />
{:else}
  <button
    class={cn`
    w-full
    text-left
    p-5
    flex
    items-center
    justify-between
    ${className}
  `}
    {...$$restProps}
    use:melt={$trigger(item)}
    on:click
  >
    <slot />
  </button>
{/if}
