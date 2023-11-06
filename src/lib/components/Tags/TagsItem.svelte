<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type Tag } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = AsChild & {
    name: string
    item: Tag
  }

  export let asChild: $$Props["asChild"] = false
  export let name: $$Props["name"] = ""
  export let item: $$Props["item"]
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      flex
      items-center
      gap-1
      py-1
      px-2
      rounded-lg
      bg-primary/5
      text-primary

      hover:bg-primary/10

      data-[selected]:bg-primary/20
    `,
  })

  ctx.createItem(item)

  const { elements } = ctx.get()
  const { tag } = elements
</script>

{#if asChild}
  <slot builder={$tag(item)} />
{:else}
  <div class={cn(style.base, className)} use:melt={$tag(item)} {...$$restProps}>
    <input type="checkbox" {name} class="hidden" value={item.value} checked />
    <slot />
  </div>
{/if}
