<script lang="ts">
  import { cn } from "$lib"
  import type { IVariant } from "$lib/types"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLButtonAttributes & {
    variant?: IVariant
  }

  export { className as class }
  export let variant: $$Props["variant"] = "default"

  const style = tv({
    base: cn`
      transition-all
      p-4
      rounded-lg
      flex
      items-center
      justify-center
      gap-2

      active:scale-95

      disabled:bg-muted/5
      disabled:text-muted
      disabled:active:scale-100
    `,
    variants: {
      variant: {
        default: cn`
          bg-transparent
          hover:bg-muted/10
        `,
        success: cn`
          bg-primary
          text-background
          hover:bg-primary/90
        `,
        info: cn`
          bg-muted/5
          text-muted
          hover:bg-muted/10
        `,
        warning: cn`
          bg-warning/5
          text-warning
          hover:bg-warning/10
        `,
        error: cn`
          bg-error/5
          text-error
          hover:bg-error/10
        `,
      },
    },
  })

  let className = ""
</script>

<button class={cn(style.base, style({ variant }), className)} {...$$restProps} on:click>
  <slot />
</button>
