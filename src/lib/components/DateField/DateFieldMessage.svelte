<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild, Variant } from "$lib/types.js"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLDivElement> &
    AsChild & {
      variant?: Variant
    }

  export let asChild: $$Props["asChild"] = false
  export let variant: $$Props["variant"] = "default"
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      text-sm
    `,
    variants: {
      variant: {
        default: cn`
          text-muted
        `,
        success: cn`
          text-primary
        `,
        info: cn`
          text-muted
        `,
        warning: cn`
          text-warning
        `,
        error: cn`
          text-error
        `,
      },
    },
  })
</script>

{#if asChild}
  <slot />
{:else}
  <div class={cn(style.base, style({ variant }), className)} {...$$restProps}>
    <slot />
  </div>
{/if}
