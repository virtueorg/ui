<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt, type CreatePaginationProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = CreatePaginationProps & AsChildType

  export let asChild: $$Props["asChild"] = false
  export let count: $$Props["count"]
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      items-center
      gap-3
    `,
  })

  const { elements, states } = ctx.set({ ...$$restProps, count })
  const { root } = elements
  const { pages } = states

  $: builder = $root
</script>

{#if asChild}
  <slot {builder} pages={$pages} />
{:else}
  <div class={cn(style.base, className)} use:melt={builder} {...$$restProps}>
    <slot {builder} pages={$pages} />
  </div>
{/if}
