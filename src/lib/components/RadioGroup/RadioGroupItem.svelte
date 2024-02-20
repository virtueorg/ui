<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt, type RadioGroupItemProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = Exclude<RadioGroupItemProps, string> & AsChild

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"]
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
      border-muted/5

      hover:bg-muted/5
      hover:border-muted/10

      active:scale-95
    `,
    variants: {
      isChecked: {
        true: cn`
          border-primary
          bg-primary/5

          hover:border-primary
          hover:bg-primary/10
        `,
      },
      disabled: {
        true: cn`
          opacity-50

          hover:bg-transparent
          hover:border-muted/5
          
          active:scale-100
        `,
      },
    },
  })

  ctx.setItem({ value, disabled })

  const { elements, helpers } = ctx.get()
  const { item } = elements
  const { isChecked } = helpers

  $: builder = $item({ value, disabled })
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button
    type="button"
    class={cn(style.base, style({ isChecked: $isChecked(value), disabled: disabled }), className)}
    use:melt={builder}
    {...$$restProps}
    on:click
  >
    <slot {builder} />
  </button>
{/if}
