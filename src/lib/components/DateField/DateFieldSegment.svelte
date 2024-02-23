<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt, type SegmentPart } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> &
    AsChildType & {
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
