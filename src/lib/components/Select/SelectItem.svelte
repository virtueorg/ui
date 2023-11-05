<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> &
    AsChild & {
      value: string
      disabled?: boolean
      label?: string
    }

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"]
  export let disabled: $$Props["disabled"] = false
  export let label: $$Props["label"] = undefined
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      flex
      items-center
      gap-2
      rounded-lg
      p-2
      border
      border-transparent
      cursor-pointer
      
      hover:bg-muted/5
      
      data-[selected]:border-primary
    `,
    variants: {
      disabled: {
        true: cn`
          opacity-50
          cursor-not-allowed
          hover:bg-transparent
        `,
      },
    },
  })

  const { elements } = ctx.createItem(value)
  const { option } = elements
</script>

{#if asChild}
  <slot builder={$option({ value, disabled, label })} />
{:else}
  <div
    class={cn(style.base, style({ disabled }), className)}
    use:melt={$option({ value, disabled, label })}
    {...$$restProps}
  >
    <slot />
  </div>
{/if}
