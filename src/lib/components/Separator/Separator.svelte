<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt, type CreateSeparatorProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = CreateSeparatorProps & AsChildType

  export let asChild: $$Props["asChild"] = false
  export let orientation: $$Props["orientation"] = "horizontal"
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      bg-muted/5
      shrink-0
    `,
    variants: {
      orientation: {
        horizontal: cn`
          w-full
          h-px
        `,
        vertical: cn`
          w-px
          h-full
        `,
      },
    },
  })

  const { elements } = ctx.set({ ...$$restProps, orientation })
  const { root } = elements

  $: builder = $root
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div class={cn(style.base, style({ orientation }), className)} use:melt={builder} {...$$restProps} />
{/if}
