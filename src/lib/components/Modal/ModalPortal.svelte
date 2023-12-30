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
      fixed
      inset-0
      pointer-events-none
      p-5
      flex
      items-end
      justify-center
      z-10

      md:items-center
    `,
  })

  const { elements, states } = ctx.get()
  const { portalled } = elements
  const { open } = states
</script>

{#if $open}
  {#if asChild}
    <slot builder={$portalled} />
  {:else}
    <div class={cn(style.base, className)} use:melt={$portalled} {...$$restProps}>
      <slot />
    </div>
  {/if}
{/if}
