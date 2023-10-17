<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
    value: string;
    disabled?: boolean;
    label?: string;
  };

  export let asChild: $$Props["asChild"] = false;
  export let value: $$Props["value"];
  export let disabled: $$Props["disabled"] = false;
  export let label: $$Props["label"] = "";
  export { className as class };

  let className = "";

  const { elements } = ctx.createItem(value);
  const { option } = elements;
</script>

{#if asChild}
  <slot builder={$option({ value, disabled, label })} />
{:else}
  <div
    class={cn("SelectItem", className)}
    class:disabled
    {...$$restProps}
    use:melt={$option({ value, disabled, label })}
  >
    <slot />
  </div>
{/if}

<style lang="postcss">
  .SelectItem {
    @apply transition-all;
    @apply flex;
    @apply items-center;
    @apply gap-2;
    @apply rounded-lg;
    @apply p-2;
    @apply border;
    @apply border-transparent;
    @apply cursor-pointer;

    @apply active:scale-95;

    @apply hover:bg-muted/5;

    @apply data-[selected]:border-primary;
  }

  .disabled {
    @apply opacity-50;
  }
</style>
