<script lang="ts">
  import { cn } from "$lib/utils/misc"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = Omit<HTMLButtonAttributes, "disabled"> & {
    asChild?: boolean
    value: string
    disabled?: boolean
  }

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"]
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      text-left
      flex
      items-center
      gap-2
      py-3
      px-5
      border-b-2
      border-muted/20
      opacity-50

      data-[state=active]:border-primary
      data-[state=active]:text-primary
      data-[state=active]:opacity-100
    `,
  })

  const { elements } = ctx.get()
  const { trigger } = elements
</script>

{#if asChild}
  <slot builder={$trigger({ value, disabled })} />
{:else}
  <button
    type="button"
    class={cn(style.base, className)}
    use:melt={$trigger({ value, disabled })}
    {...$$restProps}
  >
    <slot />
  </button>
{/if}
