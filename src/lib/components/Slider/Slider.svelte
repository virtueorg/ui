<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt, type CreateSliderProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = CreateSliderProps & AsChildType

  export let asChild: $$Props["asChild"] = false
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      relative
      flex
      items-center
      h-2
      border
      border-muted/5
      bg-muted/5
      rounded-xl
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
