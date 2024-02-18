<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLImgAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLImgAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const { elements } = ctx.get()
  const { fallback } = elements

  $: builder = $fallback
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div class={cn(className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </div>
{/if}
