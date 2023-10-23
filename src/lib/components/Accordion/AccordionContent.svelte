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

  const item = ctx.getItem()

  const style = tv({
    base: cn`
      p-4
    `,
  })

  const { elements, helpers } = ctx.get()
  const { content } = elements
  const { isSelected } = helpers
</script>

{#if $isSelected(item.value)}
  {#if asChild}
    <slot builder={$content} />
  {:else}
    <div class={cn(style.base, className)} use:melt={$content(item)} {...$$restProps}>
      <slot />
    </div>
  {/if}
{/if}
