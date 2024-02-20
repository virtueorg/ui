<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt, type SegmentPart } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> &
    AsChild & {
      part: SegmentPart
    }

  export let asChild: $$Props["asChild"] = false
  export let part: $$Props["part"]
  export { className as class }

  let className = ""

  const { elements } = ctx.get()
  const { segment } = elements

  $: builder = $segment(part)
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div class={cn(className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </div>
{/if}
