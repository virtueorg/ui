<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateSliderProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreateSliderProps & AsChild

  export let asChild: $$Props["asChild"] = false
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      relative
      flex
      w-full
      h-2
      items-center
      bg-muted/5
      rounded-lg
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

  const { elements } = ctx.create({ ...$$restProps, disabled })
  const { root } = elements
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <span class={cn(style.base, style({ disabled }), className)} use:melt={$root} {...$$restProps}>
    <slot />
  </span>
{/if}
