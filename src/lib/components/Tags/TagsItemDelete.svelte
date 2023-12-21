<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLButtonAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      active:scale-95
    `,
  })

  const item = ctx.getItem()
  const { elements } = ctx.get()
  const { deleteTrigger } = elements
</script>

{#if asChild}
  <slot builder={$deleteTrigger(item)} />
{:else}
  <button
    type="button"
    class={cn(style.base, className)}
    use:melt={$deleteTrigger(item)}
    {...$$restProps}
  >
    <slot />
  </button>
{/if}
