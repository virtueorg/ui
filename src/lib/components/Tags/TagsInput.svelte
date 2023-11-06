<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLInputAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLInputAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      grow
      bg-transparent
      outline-none
      py-1

      data-[invalid]:text-error
    `,
  })

  const { elements } = ctx.get()
  const { input } = elements
</script>

{#if asChild}
  <slot builder={$input} />
{:else}
  <input class={cn(style.base, className)} use:melt={$input} {...$$restProps} />
{/if}
