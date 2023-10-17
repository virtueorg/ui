<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  const item = ctx.getItem();

  const { elements } = ctx.get();
  const { trigger } = elements;

  let className = "";
</script>

{#if asChild}
  <slot builder={$trigger(item)} />
{:else}
  <button
    class={cn("AccordionTrigger", className)}
    {...$$restProps}
    use:melt={$trigger(item)}
    on:click
  >
    <slot />
  </button>
{/if}

<style lang="postcss">
  .AccordionTrigger {
    @apply w-full;
    @apply text-left;
    @apply p-5;
    @apply flex;
    @apply items-center;
    @apply justify-between;
  }
</style>
