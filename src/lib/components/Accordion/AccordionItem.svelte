<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type AccordionItemProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = Exclude<AccordionItemProps, string> & AsChild

  export let value: $$Props["value"]
  export let disabled: $$Props["disabled"] = false
  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      bg-muted/5
      rounded-lg
    `,
    variants: {
      disabled: {
        true: cn`
          opacity-50
        `,
      },
    },
  })

  const { item, props } = ctx.setItem({ value, disabled })
</script>

{#if asChild}
  <slot builder={$item(props)} />
{:else}
  <div
    class={cn(style.base, style({ disabled }), className)}
    use:melt={$item(props)}
    {...$$restProps}
  >
    <slot />
  </div>
{/if}
