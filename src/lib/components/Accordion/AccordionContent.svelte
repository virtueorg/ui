<script lang="ts">
  import { TRANSITION_BASE, cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { slide } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      p-4
    `,
  })

  const item = ctx.getItem()

  const { elements, helpers } = ctx.get()
  const { content } = elements
  const { isSelected } = helpers

  $: builder = $content(item)
</script>

{#if $isSelected(item.value)}
  {#if asChild}
    <slot {builder} />
  {:else}
    <div
      class={cn(style.base, className)}
      use:melt={builder}
      transition:slide|global={TRANSITION_BASE}
      {...$$restProps}
    >
      <slot {builder} />
    </div>
  {/if}
{/if}
