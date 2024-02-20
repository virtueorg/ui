<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild, BuilderActionsParams, Variant } from "$lib/types.js"
  import type { ActionReturn } from "svelte/action"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLButtonAttributes &
    AsChild & {
      variant?: Variant
      builders?: any[]
    }

  export let asChild: $$Props["asChild"] = false
  export let type: $$Props["type"] = "button"
  export let variant: $$Props["variant"] = "default"
  export let builders: $$Props["builders"] = []
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      flex
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
          border-background/5
          bg-primary
          text-background
          
          hover:border-background/10
          hover:bg-primary/90

          disabled:hover:border-background/5
          disabled:hover:bg-primary
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
      },
    },
  })

  const builderActions = (node: HTMLElement, params: BuilderActionsParams) => {
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
{:else if builders}
  <button
    {type}
    tabindex="0"
    class={cn(style.base, style({ variant }), className)}
    {...$$restProps}
    use:builderActions={{ builders }}
    on:click
  >
    <slot />
  </button>
{:else}
  <button {type} tabindex="0" class={cn(style.base, style({ variant }), className)} {...$$restProps} on:click>
    <slot />
  </button>
{/if}
