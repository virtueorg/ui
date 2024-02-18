<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt, type AccordionHeadingProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = Exclude<AccordionHeadingProps, number> & AsChild

  export let asChild: $$Props["asChild"] = false
  export let level: $$Props["level"]
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      font-bold
    `,
  })

  const { elements } = ctx.get()
  const { heading } = elements

  $: builder = $heading({ level })
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div class={cn(style.base, className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </div>
{/if}
