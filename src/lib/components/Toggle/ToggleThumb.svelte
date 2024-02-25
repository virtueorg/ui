<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
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
      border
      border-background/10
      h-full
      aspect-square
      bg-muted
      rounded-xl
    `,
    variants: {
      checked: {
        true: cn`
          bg-foreground
          border-foreground
          translate-x-5
        `,
      },
    },
  })

  const { states } = ctx.get()
  const { checked } = states
</script>

{#if asChild}
  <slot />
{:else}
  <div class={cn(style.base, style({ checked: $checked }), className)} {...$$restProps} />
{/if}
