<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type Tag } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = AsChild & {
    item: Tag
  }

  export let asChild: $$Props["asChild"] = false
  export let item: $$Props["item"]
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      flex
      items-center
      overflow-hidden
      py-1
      px-2
      rounded-lg
      bg-primary/5
      text-primary
      outline-none

      data-[invalid-edit]:text-error
      data-[invalid-edit]:bg-error/5
    `,
  })

  const { elements, options } = ctx.get()

  const { disabled } = options
  const { edit } = elements
</script>

{#if !$disabled}
  {#if asChild}
    <slot builder={$edit(item)} />
  {:else}
    <div class={cn(style.base, className)} use:melt={$edit(item)} {...$$restProps} />
  {/if}
{/if}
