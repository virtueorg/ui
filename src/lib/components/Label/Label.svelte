<script lang="ts">
  import { cn } from "$lib/utils/misc"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLLabelAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLLabelAttributes & {
    asChild?: boolean
  }

  export { className as class }
  export let asChild: $$Props["asChild"] = false

  let className = ""

  const style = tv({
    base: cn`
      text-sm
      text-muted
    `,
  })

  const { elements } = ctx.create()
  const { root } = elements
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <label use:melt={$root} class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </label>
{/if}
