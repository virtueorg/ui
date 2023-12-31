<script lang="ts">
  import { cn } from "$lib"
  import type { IVariant } from "$lib/types"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLButtonAttributes & {
    variant?: IVariant
    href?: string
  }

  export { className as class }
  export let variant: $$Props["variant"] = "default"
  export let disabled: $$Props["disabled"] = false
  export let href: $$Props["href"] = ""

  const style = tv({
    base: cn`
      transition-all
      p-5
      rounded-lg
      flex
      items-center
      justify-center
      gap-2

      active:scale-95
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
      disabled: {
        true: cn`
          bg-muted/5
          text-muted
          cursor-not-allowed
          
          hover:bg-muted/5
        `,
      },
    },
  })

  let className = ""
</script>

{#if href}
  <a class={cn(style.base, style({ variant, disabled: disabled || false }), className)} {href}>
    <slot />
  </a>
{:else}
  <button
    class={cn(style.base, style({ variant, disabled: disabled || false }), className)}
    {...$$restProps}
    {disabled}
    on:click
  >
    <slot />
  </button>
{/if}
