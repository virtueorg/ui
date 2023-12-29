<script lang="ts">
  import { TRANSITION_Y_IN, cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { fly } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      w-full
      flex
      flex-col
      h-full
      bg-panel
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
  <div
    class={cn(style.base, className)}
    use:melt={$content}
    {...$$restProps}
    transition:fly|global={TRANSITION_Y_IN}
  >
    <slot />
  </div>
{/if}
