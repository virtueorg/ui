<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt, type CreateAccordionProps } from "@melt-ui/svelte";
  import { tv } from "tailwind-variants";
  import ctx from "./ctx";

  type $$Props = CreateAccordionProps<boolean> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const style = tv({
    base: cn`
      flex
      flex-col
      gap-2
    `,
  });

  const { elements } = ctx.create($$restProps);
  const { root } = elements;
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <div use:melt={$root} class={cn(style.base, className)} {...$root} {...$$restProps}>
    <slot />
  </div>
{/if}
