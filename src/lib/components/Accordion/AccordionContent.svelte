<script lang="ts">
  import { TRANSITION_BASE, cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { slide } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const item = ctx.getItem()

  const style = tv({
    base: cn`
      p-5
    `,
  })

  const { elements, helpers } = ctx.get()
  const { content } = elements
  const { isSelected } = helpers
</script>

{#if $isSelected(item.value)}
  {#if asChild}
    <slot builder={$content} />
  {:else}
    <div
      class={cn(style.base, className)}
      use:melt={$content(item)}
      {...$$restProps}
      transition:slide|global={TRANSITION_BASE}
    >
      <slot />
    </div>
  {/if}
{/if}
