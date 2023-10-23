<script lang="ts">
  import { cn } from "$lib/utils/misc"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean
  }

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      w-full
      bg-muted/5
      pointer-events-auto
      md:max-w-lg
      md:rounded-lg
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
