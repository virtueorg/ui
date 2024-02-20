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
     inline-flex
     p-3
     rounded-xl
     border
    `,
    variants: {
      variant: {
        default: cn`
          border-muted/5
          bg-muted/5
          text-muted
        `,
        success: cn`
          border-primary/5
          bg-primary/5
          text-primary
        `,
        info: cn`
          border-muted/5
          bg-muted/5
          text-muted
        `,
        warning: cn`
          border-warning/5
          bg-warning/5
          text-warning
        `,
        error: cn`
          border-error/5
          bg-error/5
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
