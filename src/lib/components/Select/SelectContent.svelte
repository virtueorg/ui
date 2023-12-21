<script lang="ts">
  import { TRANSITION_Y_OUT, cn } from "$lib"
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
      bg-panel
      rounded-lg
    `,
  })

  const { elements, states } = ctx.get()
  const { menu } = elements
  const { open } = states
</script>

{#if $open}
  {#if asChild}
    <slot builder={$menu} />
  {:else}
    <div
      class={cn(style.base, className)}
      use:melt={$menu}
      {...$$restProps}
      transition:fly|global={TRANSITION_Y_OUT}
    >
      <slot />
    </div>
  {/if}
{/if}
