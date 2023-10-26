<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateProgressProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreateProgressProps & AsChild

  export { className as class }
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
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <div class={cn(style.base, className)} use:melt={$root} {...$$restProps}>
    <slot />
  </div>
{/if}
