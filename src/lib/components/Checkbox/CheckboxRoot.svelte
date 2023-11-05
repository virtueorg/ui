<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateCheckboxProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreateCheckboxProps & AsChild

  export { className as class }
  export let asChild: $$Props["asChild"] = false
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
    variants: {
      disabled: {
        true: cn`
          opacity-50
          cursor-not-allowed
          hover:bg-muted/5
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
  <button
    type="button"
    class={cn(style.base, style({ disabled }), className)}
    use:melt={$root}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if}
