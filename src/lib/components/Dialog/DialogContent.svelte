<script lang="ts">
  import { TRANSITION_FLY_Y, cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { fly } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      relative
      w-full
      bg-panel
      rounded-xl
      flex
      flex-col
      max-h-full

      md:max-w-md
    `,
  })

  const { elements } = ctx.get()
  const { content } = elements

  $: builder = $content
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div class={cn(style.base, className)} use:melt={builder} transition:fly|global={TRANSITION_FLY_Y} {...$$restProps}>
    <slot {builder} />
  </div>
{/if}
