<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { TRANSITION_SCALE, cn } from "$lib/index.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { scale } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      w-80
      rounded-xl
      bg-panel
      border
      border-muted/5
    `,
  })

  const { elements, states } = ctx.get()
  const { menu } = elements
  const { open } = states

  $: builder = $menu
</script>

{#if $open}
  {#if asChild}
    <slot {builder} />
  {:else}
    <div
      class={cn(style.base, className)}
      use:melt={builder}
      transition:scale|global={TRANSITION_SCALE}
      {...$$restProps}
    >
      <slot {builder} />
    </div>
  {/if}
{/if}
