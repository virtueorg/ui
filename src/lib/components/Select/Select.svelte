<script lang="ts">
  import { cn } from "$lib/utils";
  import type { CreateSelectProps } from "@melt-ui/svelte";
  import { tv } from "tailwind-variants";
  import ctx from "./ctx";

  type $$Props = Omit<CreateSelectProps, "selected" | "multiple"> & {
    selected?: CreateSelectProps["defaultSelected"];
    multiple?: boolean;
  };

  export let selected: $$Props["selected"] = undefined;
  export let onSelectedChange: $$Props["onSelectedChange"] = undefined;
  export { className as class };

  let className = "";

  const style = tv({
    base: cn`
      flex
      flex-col
      gap-2
    `,
  });

  const handleChange: CreateSelectProps["onSelectedChange"] = ({ next }) => {
    selected = next;

    return next;
  };

  ctx.create({
    ...$$restProps,
    defaultSelected: selected,
    onSelectedChange: onSelectedChange || handleChange,
  });
</script>

<div class={cn(style.base, className)} {...$$restProps}>
  <slot />
</div>
