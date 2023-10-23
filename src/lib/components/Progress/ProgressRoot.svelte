<script lang="ts">
  import { cn } from "$lib"
  import { melt, type CreateProgressProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ProgressLine from "./ProgressLine.svelte"
  import ctx from "./ctx"

  type $$Props = Omit<CreateProgressProps, "value"> & {
    value?: CreateProgressProps["defaultValue"]
    asChild?: boolean
  }

  export { className as class }
  export let max: $$Props["max"] = 100
  export let value: $$Props["value"] = 0
  export let asChild: $$Props["asChild"] = false

  let className = ""

  const style = tv({
    base: cn`
      bg-muted/5
      h-2
      rounded-lg
      overflow-hidden
    `,
  })

  const { elements } = ctx.create($$restProps)
  const { root } = elements

  $: percentage = (value! * 100) / max!
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <div class={cn(style.base, className)} use:melt={$root} {...$$restProps}>
    <ProgressLine value={percentage} />
  </div>
{/if}
