<script lang="ts">
  import { cn } from "$lib"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    asChild?: boolean
  }

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      h-2
      grow
      overflow-hidden
      rounded-full
      bg-primary
    `,
  })

  const { elements } = ctx.get()
  const { range } = elements
</script>

{#if asChild}
  <slot builder={$range} />
{:else}
  <span class={cn(style.base, className)} use:melt={$range} {...$$restProps} />
{/if}
