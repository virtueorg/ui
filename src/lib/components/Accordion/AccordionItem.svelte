<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt, type AccordionItemProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = Exclude<AccordionItemProps, string> & AsChild

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"]
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      rounded-xl
      bg-muted/5
      border
      border-muted/5

      hover:bg-muted/10
      hover:border-muted/10
    `,
    variants: {
      disabled: {
        true: cn`
          opacity-50

          hover:border-muted/5
          hover:bg-muted/5
        `,
      },
      active: {
        true: cn`
          bg-muted/10
          border-muted/10
        `,
      },
    },
  })

  ctx.setItem({ value, disabled })

  const { elements, helpers, options } = ctx.get()
  const { item } = elements
  const { isSelected } = helpers
  const { disabled: rootDisabled } = options

  $: builder = $item({ value, disabled })
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div
    class={cn(style.base, style({ disabled: $rootDisabled || disabled, active: $isSelected(value) }), className)}
    use:melt={builder}
    {...$$restProps}
  >
    <slot {builder} />
  </div>
{/if}
