<script lang="ts">
  import { cn } from "$lib"
  import type { IVariant } from "$lib/types"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    variant?: IVariant
  }

  export { className as class }
  export let variant: $$Props["variant"] = "default"

  const style = tv({
    base: cn`
      rounded-lg
      flex
      items-center
      p-4
      gap-2
    `,
    variants: {
      variant: {
        default: cn`
          bg-panel
        `,
        success: cn`
          bg-primary
          text-background
        `,
        info: cn`
          bg-panel
          text-muted
        `,
        warning: cn`
          bg-warning
          text-background
        `,
        error: cn`
          bg-error
          text-background
        `,
      },
    },
  })

  let className = ""
</script>

<div role="alert" class={cn(style.base, style({ variant }), className)} {...$$restProps}>
  <slot />
</div>
