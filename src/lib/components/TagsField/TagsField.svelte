<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt, type CreateTagsInputProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = CreateTagsInputProps & AsChild

  export let asChild: $$Props["asChild"] = false
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      flex-col
      gap-2
    `,
    variants: {
      disabled: {
        true: cn`
          opacity-50
        `,
      },
    },
  })

  const { elements } = ctx.set({ ...$$restProps, disabled })
  const { root } = elements

  $: builder = $root
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div class={cn(style.base, style({ disabled }), className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </div>
{/if}
