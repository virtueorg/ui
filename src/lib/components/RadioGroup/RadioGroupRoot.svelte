<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateRadioGroupProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreateRadioGroupProps & AsChild

  export let asChild: boolean = false
  export { className as class }

  const style = tv({
    base: cn`
      flex
      flex-col
      gap-2
    `,
  })

  let className = ""

  const { elements } = ctx.create($$restProps)
  const { root } = elements
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <div class={cn(style.base, className)} use:melt={$root} {...$$restProps}>
    <slot />
  </div>
{/if}
