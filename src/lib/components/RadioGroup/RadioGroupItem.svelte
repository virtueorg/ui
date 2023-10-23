<script lang="ts">
  import { cn } from "$lib/utils/misc"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = Omit<HTMLButtonAttributes, "value"> & {
    value: string
    disabled?: boolean
    asChild?: boolean
  }

  export { className as class }
  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"]
  export let disabled: $$Props["disabled"] = false

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      flex
      items-center
      w-full
      border
      border-transparent
      bg-muted/5
      text-left
      p-3
      rounded-lg

      hover:bg-muted/10

      data-[state=checked]:border-primary
    `,
  })

  const { elements } = ctx.createItem(value)
  const { item } = elements
</script>

{#if asChild}
  <slot builder={$item({ value, disabled })} />
{:else}
  <button
    type="button"
    use:melt={$item({ value, disabled })}
    class={cn(style.base, className)}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if}
