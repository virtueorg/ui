<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLLabelAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLLabelAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      text-muted
      text-sm
    `,
  })

  const { elements } = ctx.get()
  const { label } = elements

  $: builder = $label
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <label class={cn(style.base, className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </label>
{/if}
