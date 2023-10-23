<script lang="ts">
  import { cn } from "$lib"
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
      w-64
      bg-panel
      rounded-lg
    `,
  })

  const { elements, states } = ctx.get()
  const { menu } = elements
  const { open } = states
</script>

{#if open}
  {#if asChild}
    <slot builder={$menu} />
  {:else}
    <div class={cn(style.base, className)} use:melt={$menu} {...$$restProps}>
      <slot />
    </div>
  {/if}
{/if}
