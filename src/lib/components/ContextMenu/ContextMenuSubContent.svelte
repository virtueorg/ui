<script lang="ts">
  import { TRANSITION_SCALE, cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { scale } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      w-64
      bg-panel
      rounded-lg
    `,
  })

  const { elements, states } = ctx.getSub()
  const { subMenu } = elements
  const { subOpen } = states
</script>

{#if $subOpen}
  {#if asChild}
    <slot builder={$subMenu} />
  {:else}
    <div
      class={cn(style.base, className)}
      use:melt={$subMenu}
      {...$$restProps}
      transition:scale|global={TRANSITION_SCALE}
    >
      <slot />
    </div>
  {/if}
{/if}
