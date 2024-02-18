<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> &
    AsChild & {
      value: string
    }

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"]
  export { className as class }

  let className = ""

  const { elements } = ctx.get()
  const { content } = elements

  $: builder = $content(value)
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div class={cn(className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </div>
{/if}
