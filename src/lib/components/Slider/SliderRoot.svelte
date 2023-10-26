<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateSliderProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreateSliderProps & AsChild

  export let asChild: $$Props["asChild"] = false
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

  const { elements } = ctx.create($$restProps)
  const { root } = elements
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <span class={cn(style.base, className)} use:melt={$root} {...$$restProps}>
    <slot />
  </span>
{/if}
