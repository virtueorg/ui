<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      absolute
      inset-0
      bg-background/80
      -z-10
      pointer-events-auto
    `,
  })

  const { elements } = ctx.get()
  const { overlay } = elements
</script>

{#if asChild}
  <slot builder={$overlay} />
{:else}
  <div class={cn(style.base, className)} use:melt={$overlay} {...$$restProps}>
    <slot />
  </div>
{/if}
