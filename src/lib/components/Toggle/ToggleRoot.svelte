<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateSwitchProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreateSwitchProps & AsChild
  export let asChild: $$Props["asChild"] = false
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      peer
      inline-flex
      h-6
      w-11
      shrink-0
      cursor-pointer
      items-center
      rounded-full
      border-2
      bg-muted/50
      border-transparent

      active:scale-95
    `,
    variants: {
      checked: {
        true: cn`
          bg-primary
        `,
      },
      disabled: {
        true: cn`
          opacity-50
          cursor-not-allowed
        `,
      },
    },
  })

  const { elements, states } = ctx.create({ ...$$restProps, disabled })
  const { checked } = states
  const { root } = elements
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <button
    type="button"
    class={cn(style.base, style({ checked: $checked, disabled }), className)}
    use:melt={$root}
    {disabled}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if}
