<script lang="ts">
  import { TRANSITION_SCALE, cn } from "$lib/index.js"
  import type { Alert, AsChild } from "$lib/types.js"
  import type { HTMLAttributes } from "svelte/elements"
  import { scale } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> &
    AsChild & {
      alert: Alert
    }

  export let asChild: $$Props["asChild"] = false
  export let alert: $$Props["alert"]
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      relative
      p-4
      rounded-xl
      border
      flex
      items-center
      overflow-hidden
    `,
    variants: {
      variant: {
        default: cn`
          border-muted/5
          bg-panel
        `,
        success: cn`
          border-background/5
          bg-primary
          text-background
        `,
        info: cn`
          border-muted/5
          bg-panel
        `,
        warning: cn`
          border-background/5
          bg-warning
          text-background
        `,
        error: cn`
          border-background/5
          bg-error
          text-background
        `,
      },
    },
  })

  ctx.set(alert)
</script>

{#if asChild}
  <slot />
{:else}
  <div
    class={cn(style.base, style({ variant: alert.variant }), className)}
    {...$$restProps}
    transition:scale|global={TRANSITION_SCALE}
  >
    <slot />
  </div>
{/if}
