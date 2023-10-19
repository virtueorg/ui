<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt, type CreateCheckboxProps } from "@melt-ui/svelte";
  import { tv } from "tailwind-variants";

  import ctx from "./ctx";

  type $$Props = Omit<CreateCheckboxProps, "checked"> & {
    checked?: CreateCheckboxProps["defaultChecked"];
    asChild?: boolean;
  };

  export { className as class };
  export let checked: $$Props["checked"] = false;
  export let onCheckedChange: $$Props["onCheckedChange"] = undefined;
  export let asChild: $$Props["asChild"] = false;

  let className = "";

  const style = tv({
    base: cn`
      transition-all
      flex
      items-center
      w-full
      border
      border-transparent
      bg-muted/5
      text-left
      p-3
      rounded-lg

      hover:bg-muted/10

      data-[state=checked]:border-primary
    `,
  });

  const handleChange: CreateCheckboxProps["onCheckedChange"] = ({ next }) => {
    checked = next;
    return next;
  };

  const { elements } = ctx.create({
    ...$$restProps,
    defaultChecked: checked,
    onCheckedChange: onCheckedChange || handleChange,
  });

  const { root } = elements;
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <button
    type="button"
    class={cn(style.base, className)}
    use:melt={$root}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if}
