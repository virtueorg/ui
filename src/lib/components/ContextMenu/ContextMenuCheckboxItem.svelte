<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt, type CreateContextMenuCheckboxItemProps } from "@melt-ui/svelte";
  import { tv } from "tailwind-variants";
  import ctx from "./ctx";

  type $$Props = Omit<CreateContextMenuCheckboxItemProps, "checked"> & {
    asChild?: boolean;
    checked?: boolean;
  };

  export let checked: $$Props["checked"] = false;
  export let onCheckedChange: $$Props["onCheckedChange"] = undefined;
  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const style = tv({
    base: cn`
      transition-all
      flex
      items-center
      gap-2
      rounded-lg
      p-2
      cursor-pointer

      active:scale-95

      hover:bg-muted/5
    `,
  });

  const handleChange: CreateContextMenuCheckboxItemProps["onCheckedChange"] = ({ next }) => {
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
  <div class={cn(style.base, className)} use:melt={$checkboxItem} {...$$restProps}>
    <slot />
  </div>
{/if}
