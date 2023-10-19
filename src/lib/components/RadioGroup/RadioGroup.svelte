<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt, type CreateRadioGroupProps } from "@melt-ui/svelte";
  import { tv } from "tailwind-variants";
  import ctx from "./ctx";

  type $$Props = CreateRadioGroupProps & {
    value?: CreateRadioGroupProps["defaultValue"];
    asChild?: boolean;
  };

  export { className as class };
  export let value: $$Props["value"] = undefined;

  export let asChild: boolean = false;

  const style = tv({
    base: cn`
      flex
      flex-col
      gap-2
    `,
  });

  let className = "";

  const { elements } = ctx.create({
    ...$$restProps,
    defaultValue: value,
  });
  const { root } = elements;
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <div use:melt={$root} class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </div>
{/if}
