<script lang="ts">
  import { cn } from "$lib/utils";
  import type { CreateSelectProps } from "@melt-ui/svelte";
  import type { ListboxOption } from "@melt-ui/svelte/dist/builders/listbox/types";
  import type { ChangeFn } from "@melt-ui/svelte/internal/helpers";
  import ctx from "./ctx";

  type $$Props = Omit<CreateSelectProps, "selected" | "multiple"> & {
    selected?: ListboxOption<unknown>;
    multiple?: boolean;
  };

  export let selected: $$Props["selected"] = undefined;
  export let onSelectedChange: $$Props["onSelectedChange"] = undefined;
  export { className as class };

  let className = "";

  const handleChange: ChangeFn<ListboxOption<unknown> | undefined> = ({ next }) => {
    selected = next;

    return next;
  };

  ctx.create({
    ...$$restProps,
    defaultSelected: selected,
    onSelectedChange: onSelectedChange || handleChange,
  });
</script>

<div class={cn("Select", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .Select {
    @apply flex;
    @apply flex-col;
    @apply gap-2;
  }
</style>
