<script lang="ts">
  import type { AsChildType, BuilderActionsParamsType, BuilderType, ExtendedVariantType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { ActionReturn } from "svelte/action"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLButtonAttributes &
    AsChildType & {
      variant?: ExtendedVariantType
      builders?: BuilderType[]
      href?: string
    }

  export let asChild: $$Props["asChild"] = false
  export let type: $$Props["type"] = "button"
  export let variant: $$Props["variant"] = "default"
  export let href: $$Props["href"] = ""
  export let builders: $$Props["builders"] = []
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      inline-flex
      items-center
      justify-center
      gap-3
      rounded-xl
      p-4
      border

      active:scale-95

      disabled:scale-100
      disabled:opacity-50
    `,
    variants: {
      variant: {
        default: cn`
          border-muted/5

          hover:border-muted/10
          hover:bg-muted/10

          disabled:hover:border-muted/5
          disabled:hover:bg-transparent
        `,
        success: cn`
          border-primary/5
          bg-primary/5
          text-primary
          
          hover:border-primary/10
          hover:bg-primary/20

          disabled:hover:border-primary/5
          disabled:hover:bg-primary/5
        `,
        info: cn`
          border-muted/5
          bg-muted/5
          text-muted

          hover:border-muted/10
          hover:bg-muted/10
          
          disabled:hover:border-muted/5
          disabled:hover:bg-muted/5
        `,
        warning: cn`
          border-warning/5
          bg-warning/5
          text-warning

          hover:border-warning/10
          hover:bg-warning/10

          disabled:hover:border-warning/5
          disabled:hover:bg-warning/5
        `,
        error: cn`
          border-error/5
          bg-error/5
          text-error

          hover:border-error/10
          hover:bg-error/10

          disabled:hover:border-error/5
          disabled:hover:bg-error/5
        `,
        successFilled: cn`
          border-primary
          bg-primary
          text-background
          
          hover:border-primary/90
          hover:bg-primary/90

          disabled:hover:border-primary
          disabled:hover:bg-primary
        `,
        infoFilled: cn`
          border-muted
          bg-muted
          text-background

          hover:border-muted/90
          hover:bg-muted/90
          
          disabled:hover:border-muted
          disabled:hover:bg-muted
        `,
        warningFilled: cn`
          border-warning
          bg-warning
          text-background

          hover:border-warning/90
          hover:bg-warning/90

          disabled:hover:border-warning
          disabled:hover:bg-warning
        `,
        errorFilled: cn`
          border-error
          bg-error
          text-background

          hover:border-error/90
          hover:bg-error/90

          disabled:hover:border-error
          disabled:hover:bg-error
        `,
      },
    },
  })

  const builderActions = (node: HTMLElement, params: BuilderActionsParamsType) => {
    if (!params.builders) return

    const unsubs: ActionReturn[] = []

    params.builders.forEach(builder => {
      const action = builder.action(node)

      if (action) {
        unsubs.push(action)
      }
    })

    return {
      destroy: () => {
        unsubs.forEach(unsub => {
          if (unsub.destroy) {
            unsub.destroy()
          }
        })
      },
    }
  }
</script>

{#if asChild}
  <slot />
{:else}
  <svelte:element
    this={href ? "a" : "button"}
    role={href ? undefined : "button"}
    type={href ? undefined : type}
    href={href ? href : undefined}
    tabindex="0"
    class={cn(style.base, style({ variant }), className)}
    {...$$restProps}
    use:builderActions={{ builders }}
    on:click
  >
    <slot />
  </svelte:element>
{/if}
