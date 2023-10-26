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
      text-left
    `,
  })

  const { elements } = ctx.get()
  const { close } = elements
</script>

{#if asChild}
  <slot builder={$close} />
{:else}
  <button
    type="button"
    class={cn(style.base, className)}
    use:melt={$close}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if}
