<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateRadioGroupProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreateRadioGroupProps & AsChild

  export let asChild: $$Props["asChild"] = false
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  const style = tv({
    base: cn`
      flex
      flex-col
      gap-2
    `,
    variants: {
      disabled: {
        true: cn`
          opacity-50
          cursor-default
        `,
      },
    },
  })

  let className = ""

  const { elements } = ctx.create({ ...$$restProps, disabled })
  const { root } = elements
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <div class={cn(style.base, style({ disabled }), className)} use:melt={$root} {...$$restProps}>
    <slot />
  </div>
{/if}
