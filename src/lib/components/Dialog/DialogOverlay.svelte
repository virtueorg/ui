<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { TRANSITION_BASE, cn } from "$lib/index.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { fade } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      absolute
      inset-0
      bg-background/80
    `,
  })

  const { elements } = ctx.get()
  const { overlay } = elements

  $: builder = $overlay
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div class={cn(style.base, className)} use:melt={builder} transition:fade|global={TRANSITION_BASE} {...$$restProps}>
    <slot {builder} />
  </div>
{/if}
