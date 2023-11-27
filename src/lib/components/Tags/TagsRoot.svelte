<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateTagsInputProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreateTagsInputProps & AsChild

  export let asChild: $$Props["asChild"] = false
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      flex-wrap
      gap-2
      p-2
      rounded-lg
      bg-muted/5
    `,
    variants: {
      disabled: {
        true: cn`
          opacity-50
          cursor-not-allowed
        `,
      },
    },
  })

  const { elements, states } = ctx.create({ ...$$restProps, disabled })
  const { tags } = states
  const { root } = elements
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <div class={cn(style.base, style({ disabled }), className)} use:melt={$root} {...$$restProps}>
    <slot tags={$tags} />
  </div>
{/if}
