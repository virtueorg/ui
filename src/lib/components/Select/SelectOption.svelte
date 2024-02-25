<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt, type SelectOptionProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = SelectOptionProps & AsChildType

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"]
  export let label: $$Props["label"] = ""
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      w-full
      flex
      items-center
      justify-between
      gap-3
      p-3
      rounded-xl
      border
      border-transparent

      hover:bg-muted/5
      hover:border-muted/5

      active:scale-95
    `,
    variants: {
      isSelected: {
        true: cn`
          border-primary
          bg-primary/10

          hover:border-primary
          hover:bg-primary/20
        `,
      },
      disabled: {
        true: cn`
          opacity-50

          hover:border-transparent
          hover:bg-transparent

          active:scale-100
        `,
      },
    },
  })

  ctx.setOption({ value, label, disabled })

  const { elements, helpers } = ctx.get()
  const { option } = elements
  const { isSelected } = helpers

  $: builder = $option({ value, label, disabled })
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button
    type="button"
    {disabled}
    class={cn(style.base, style({ isSelected: $isSelected(value), disabled: disabled }), className)}
    use:melt={builder}
    {...$$restProps}
  >
    <slot {builder} />
  </button>
{/if}
