<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateContextMenuRadioGroupProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = Omit<CreateContextMenuRadioGroupProps, "value"> &
    AsChild & {
      value: string
      disabled?: boolean
    }

  export let value: $$Props["value"]
  export let asChild: $$Props["asChild"] = false
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      w-full
      flex
      items-center
      gap-2
      rounded-lg
      p-2
      cursor-pointer

      hover:bg-muted/5

      active:scale-95
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

  const { elements } = ctx.createRadioItem(value)
  const { radioItem } = elements
</script>

{#if asChild}
  <slot builder={$radioItem({ value, disabled })} />
{:else}
  <button
    type="button"
    class={cn(style.base, style({ disabled }), className)}
    use:melt={$radioItem({ value, disabled })}
    {disabled}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if}
