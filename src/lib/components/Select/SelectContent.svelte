<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { TRANSITION_BASE, cn } from "$lib/index.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { slide } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      p-2
      border
      border-muted/5
      bg-panel
      rounded-xl
      flex
      flex-col
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
      transition:slide|global={TRANSITION_BASE}
      {...$$restProps}
    >
      <slot {builder} />
    </div>
  {/if}
{/if}
