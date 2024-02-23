<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn, TRANSITION_SCALE } from "$lib/index.js"
  import { melt, type Tag } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { scale } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> &
    AsChildType & {
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
      gap-2
      p-2
      rounded-xl
      border
      border-muted/5
      bg-muted/5

      hover:border-muted/10
      hover:bg-muted/10
    `,
    variants: {
      disabled: {
        true: cn`
          hover:border-muted/5
          hover:bg-muted/5
        `,
      },
    },
  })

  ctx.setItem(item)

  const { elements, options } = ctx.get()
  const { tag } = elements
  const { disabled } = options

  $: builder = $tag(item)
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div
    class={cn(style.base, style({ disabled: $disabled }), className)}
    use:melt={builder}
    {...$$restProps}
    transition:scale|global={TRANSITION_SCALE}
  >
    <slot {builder} />
  </div>
{/if}
