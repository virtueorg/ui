<script lang="ts">
  import { TRANSITION_SCALE, cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"
  import { scale } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement>

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      ml-auto
      text-primary
    `,
  })

  const value = ctx.getItem()
  const { helpers } = ctx.get()
  const { isSelected } = helpers
</script>

{#if $isSelected(value)}
  <div
    class={cn(style.base, className)}
    {...$$restProps}
    transition:scale|global={TRANSITION_SCALE}
  >
    <slot />
  </div>
{/if}
