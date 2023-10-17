<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt, type CreateContextMenuRadioGroupProps } from "@melt-ui/svelte";
  import type { ChangeFn } from "@melt-ui/svelte/internal/helpers";
  import contextMenuCtx from "./ctx";

  type $$Props = Omit<CreateContextMenuRadioGroupProps, "value"> & {
    asChild?: boolean;
    value?: string;
  };

  export let asChild: $$Props["asChild"] = false;
  export let value: $$Props["value"] = "";
  export { className as class };

  let className = "";

  const handleChange: ChangeFn<string | null> = ({ next }) => {
    value = String(next);
    return value;
  };

  const { elements } = contextMenuCtx.createRadioGroup({
    ...$$restProps,
    onValueChange: handleChange,
    defaultValue: value,
  });
  const { radioGroup } = elements;
</script>

{#if asChild}
  <slot builder={$radioGroup} />
{:else}
  <div class={cn(className)} {...$$restProps} use:melt={$radioGroup}>
    <slot />
  </div>
{/if}
