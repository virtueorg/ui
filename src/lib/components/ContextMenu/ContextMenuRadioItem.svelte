<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt, type CreateContextMenuRadioGroupProps } from "@melt-ui/svelte";
  import contextMenuCtx from "./ctx";

  type $$Props = Omit<CreateContextMenuRadioGroupProps, "value"> & {
    value: string;
    disabled?: boolean;
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export let value: $$Props["value"];
  export let disabled: $$Props["disabled"] = false;
  export { className as class };

  let className = "";

  const { elements } = contextMenuCtx.createRadioItem(value);
  const { radioItem } = elements;
</script>

{#if asChild}
  <slot builder={$radioItem({ value, disabled })} />
{:else}
  <div
    class={cn("ContextMenuRadioItem", className)}
    {...$$restProps}
    use:melt={$radioItem({ value, disabled })}
  >
    <slot />
  </div>
{/if}

<style lang="postcss">
  .ContextMenuRadioItem {
    @apply transition-all;
    @apply flex;
    @apply items-center;
    @apply gap-2;
    @apply rounded-lg;
    @apply p-2;
    @apply cursor-pointer;

    @apply active:scale-95;

    @apply hover:bg-muted/5;
  }
</style>
