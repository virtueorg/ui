<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt, type CreateSwitchProps } from "@melt-ui/svelte";
  import { tv } from "tailwind-variants";
  import ctx from "./ctx";

  type $$Props = Omit<CreateSwitchProps, "checked"> & {
    checked?: CreateSwitchProps["defaultChecked"];
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
      peer
      inline-flex
      h-6
      w-11
      shrink-0
      cursor-pointer
      items-center
      rounded-full
      border-2
      bg-muted
      border-transparent

      disabled:cursor-not-allowed
      disabled:opacity-50

      data-[state=checked]:bg-primary
    `,
  });

  const handleChange: CreateSwitchProps["onCheckedChange"] = ({ next }) => {
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
