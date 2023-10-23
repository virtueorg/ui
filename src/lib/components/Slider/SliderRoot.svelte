<script lang="ts">
  import { cn } from "$lib"
  import { melt, type CreateSliderProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = Omit<CreateSliderProps, "value"> & {
    asChild?: boolean
    value?: number[]
  }

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"] = [0]
  export let max: $$Props["max"] = 100
  export let onValueChange: $$Props["onValueChange"] = undefined
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
  })

  const handleChange: CreateSliderProps["onValueChange"] = ({ next }) => {
    value = next

    return next
  }

  const { elements } = ctx.create({
    ...$$restProps,
    defaultValue: value,
    max: max,
    onValueChange: onValueChange || handleChange,
  })
  const { root } = elements
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <span class={cn(style.base, className)} use:melt={$root} {...$$restProps}>
    <slot />
  </span>
{/if}
