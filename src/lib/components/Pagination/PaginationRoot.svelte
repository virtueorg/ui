<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import type { CreatePaginationProps } from "@melt-ui/svelte"
  import { melt } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreatePaginationProps & AsChild

  export let count: $$Props["count"]
  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      gap-2
    `,
  })

  const { elements, states } = ctx.create({ ...$$restProps, count })
  const { root } = elements
  const { pages } = states
</script>

{#if asChild}
  <slot pages={$pages} builder={$root} />
{:else}
  <nav class={cn(style.base, className)} use:melt={$root}>
    <slot pages={$pages} />
  </nav>
{/if}
