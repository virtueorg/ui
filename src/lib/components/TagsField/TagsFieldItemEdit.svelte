<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt, type Tag } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLButtonAttributes &
    AsChild & {
      item: Tag
    }

  export let asChild: $$Props["asChild"] = false
  export let item: $$Props["item"]
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      items-center
      gap-2
      p-2
      rounded-xl
      border
      border-muted/5
      bg-muted/5
    `,
  })

  const { elements, options } = ctx.get()
  const { edit } = elements
  const { disabled } = options

  $: builder = $edit(item)
</script>

{#if !$disabled}
  {#if asChild}
    <slot {builder} />
  {:else}
    <div class={cn(style.base, className)} use:melt={builder} {...$$restProps} />
  {/if}
{/if}
