<script lang="ts">
  import { TRANSITION_BASE, cn } from "$lib"
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

  const { helpers, value } = ctx.getItem()
  const { isChecked } = helpers
</script>

{#if $isChecked(value)}
  <div class={cn(style.base, className)} {...$$restProps} transition:scale|global={TRANSITION_BASE}>
    <slot />
  </div>
{/if}
