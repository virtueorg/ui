<script lang="ts">
  import { cn } from "$lib"
  import type { IVariant } from "$lib/types"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    variant?: IVariant
  }

  export { className as class }
  export let variant: $$Props["variant"] = "default"

  let className = ""

  const style = tv({
    base: cn`
      inline-flex
      items-center
      gap-2
      py-2
      px-3
      rounded-lg
    `,
    variants: {
      variant: {
        default: cn`
          bg-transparent
        `,
        success: cn`
          bg-primary/5
          text-primary
        `,
        info: cn`
          bg-muted/5
          text-muted
        `,
        warning: cn`
          bg-warning/5
          text-warning
        `,
        error: cn`
          bg-error/5
          text-error
        `,
      },
    },
  })
</script>

<span class={cn(style.base, style({ variant }), className)} {...$$restProps}>
  <slot />
</span>
