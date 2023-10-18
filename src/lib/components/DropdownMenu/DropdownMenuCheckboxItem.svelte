<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt, type CreateDropdownMenuCheckboxItemProps } from "@melt-ui/svelte";
  import type { ChangeFn } from "@melt-ui/svelte/internal/helpers";
  import ctx from "./ctx";

  type $$Props = Omit<CreateDropdownMenuCheckboxItemProps, "checked"> & {
    asChild?: boolean;
    checked?: boolean;
  };

  export let checked: $$Props["checked"] = false;
  export let onCheckedChange: $$Props["onCheckedChange"] = undefined;
  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const handleChange: ChangeFn<boolean | "indeterminate"> = ({ next }) => {
    checked = Boolean(next);
    return checked;
  };

  const { elements } = ctx.createCheckboxItem({
    ...$$restProps,
    defaultChecked: checked,
    onCheckedChange: onCheckedChange || handleChange,
  });
  const { checkboxItem } = elements;
</script>

{#if asChild}
  <slot builder={$checkboxItem} />
{:else}
  <div class={cn("DropdownMenuCheckboxItem", className)} use:melt={$checkboxItem} {...$$restProps}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .DropdownMenuCheckboxItem {
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
