<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt, type CreateSliderProps } from "@melt-ui/svelte";
  import ctx from "./ctx";

  type $$Props = Omit<CreateSliderProps, "value"> & {
    asChild?: boolean;
    value?: number[];
  };

  export let asChild: $$Props["asChild"] = false;
  export let value: $$Props["value"] = [0];
  export let max: $$Props["max"] = 100;
  export let onValueChange: $$Props["onValueChange"] = undefined;
  export { className as class };

  let className = "";

  const handleChange: CreateSliderProps["onValueChange"] = ({ next }) => {
    value = next;

    return next;
  };

  const { elements } = ctx.create({
    ...$$restProps,
    defaultValue: value,
    max: max,
    onValueChange: onValueChange || handleChange,
  });
  const { root } = elements;
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <span class={cn("Slider", className)} {...$$restProps} use:melt={$root}>
    <slot />
  </span>
{/if}

<style lang="postcss">
  .Slider {
    @apply relative;
    @apply flex;
    @apply w-full;
    @apply h-2;
    @apply items-center;
    @apply bg-muted/5;
    @apply rounded-lg;
  }
</style>
