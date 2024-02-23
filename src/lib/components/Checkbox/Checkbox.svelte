<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt, type CreateCheckboxProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = CreateCheckboxProps & AsChildType

  export let asChild: $$Props["asChild"] = false
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      p-4
      w-full
      flex
      items-center
      justify-between
      rounded-xl
      border
      border-muted/5
      bg-muted/5

      hover:border-muted/10
      hover:bg-muted/10
      
      active:scale-95
    `,
    variants: {
      checked: {
        true: `
          border-primary
          bg-primary/10

          hover:border-primary
          hover:bg-primary/20
        `,
        indeterminate: ``,
      },
      disabled: {
        true: cn`
          opacity-50

          hover:border-muted/5
          hover:bg-muted/5

          active:scale-100
        `,
      },
    },
  })

  const { elements, states } = ctx.set({ ...$$restProps, disabled })
  const { root } = elements
  const { checked } = states

  $: builder = $root
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button
    type="button"
    class={cn(style.base, style({ checked: $checked, disabled: disabled }), className)}
    use:melt={builder}
    {...$$restProps}
    on:click
  >
    <slot {builder} />
  </button>
{/if}
