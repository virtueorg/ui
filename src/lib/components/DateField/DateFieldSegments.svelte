<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      flex
      items-center
      gap-3
      border
      border-muted/5
      bg-muted/5
      p-3
      rounded-xl

      hover:bg-muted/10
      hover:border-muted/10

      focus-within:bg-muted/10
      focus-within:border-muted/10
    `,
    variants: {
      disabled: {
        true: cn`
          opacity-50

          hover:bg-muted/5
          hover:border-muted/5
          
          active:scale-100
        `,
      },
    },
  })

  const { elements, states, options } = ctx.get()
  const { field } = elements
  const { segmentContents } = states
  const { disabled } = options

  $: builder = $field
</script>

{#if asChild}
  <slot {builder} segments={$segmentContents} />
{:else}
  <div class={cn(style.base, style({ disabled: $disabled }), className)} use:melt={builder} {...$$restProps}>
    <slot {builder} segments={$segmentContents} />
  </div>
{/if}
