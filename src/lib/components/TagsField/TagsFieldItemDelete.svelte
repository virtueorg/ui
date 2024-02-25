<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLButtonAttributes & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const item = ctx.getItem()
  const { elements } = ctx.get()
  const { deleteTrigger } = elements

  $: builder = $deleteTrigger(item)
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button type="button" class={cn(className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </button>
{/if}
