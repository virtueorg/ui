<script lang="ts">
  import type { AsChildType, VariantType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLDivElement> &
    AsChildType & {
      variant?: VariantType
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
