<script lang="ts">
  import { TRANSITION_SCALE, cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import type { HTMLAttributes } from "svelte/elements"
  import { scale } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      ml-auto
    `,
  })

  const { states } = ctx.getCheckboxItem()
  const { checked } = states
</script>

{#if $checked}
  {#if asChild}
    <slot />
  {:else}
    <div
      class={cn(style.base, className)}
      {...$$restProps}
      transition:scale|global={TRANSITION_SCALE}
    >
      <slot />
    </div>
  {/if}
{/if}
