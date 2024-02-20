<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt, type CreateSwitchProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = CreateSwitchProps & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      relative
      border
      border-muted/5
      bg-muted/5
      inline-flex
      w-11
      h-6
      rounded-xl
      p-0.5

      hover:border-muted/10
      hover:bg-muted/10

      active:scale-95
    `,
    variants: {
      checked: {
        true: cn`
          border-primary
          bg-primary
          
          hover:border-primary/90
          hover:bg-primary/90
        `,
      },
    },
  })

  const { elements, states } = ctx.set($$restProps)
  const { root } = elements
  const { checked } = states

  $: builder = $root
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button
    type="button"
    class={cn(style.base, style({ checked: $checked }), className)}
    use:melt={builder}
    {...$$restProps}
    on:click
  >
    <slot {builder} />
  </button>
{/if}
