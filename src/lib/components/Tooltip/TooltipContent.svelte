<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      bg-panel
      rounded-lg
      p-3
    `,
  })

  const { elements } = ctx.get()
  const { content } = elements
</script>

{#if asChild}
  <slot builder={$content} />
{:else}
  <div class={cn(style.base, className)} use:melt={$content} {...$$restProps}>
    <slot />
  </div>
{/if}
