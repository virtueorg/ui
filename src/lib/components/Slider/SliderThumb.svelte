<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLSpanElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      block
      h-5
      w-5
      rounded-lg
      bg-primary
    `,
    variants: {
      disabled: {
        true: cn`
          opacity-50
          cursor-not-allowed
        `,
      },
    },
  })

  const { elements, options } = ctx.get()
  const { disabled } = options
  const { thumb } = elements
</script>

{#if asChild}
  <slot builder={$thumb()} />
{:else}
  <span
    class={cn(style.base, style({ disabled: $disabled }), className)}
    use:melt={$thumb()}
    {...$$restProps}
  />
{/if}
