<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt, type CreateProgressProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = CreateProgressProps & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      relative
      h-2
      rounded-xl
      border
      border-muted/5
      bg-muted/5
    `,
  })

  const { elements } = ctx.set($$restProps)
  const { root } = elements

  $: builder = $root
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div class={cn(style.base, className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </div>
{/if}
