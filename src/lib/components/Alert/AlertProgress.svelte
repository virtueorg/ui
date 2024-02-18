<script lang="ts">
  import { ALERT_TIMEOUT, cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { onMount } from "svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""
  let width = "100%"

  const style = tv({
    base: cn`
      absolute
      bottom-0
      left-0
      w-full
      h-1
      transition-all
      ease-linear
    `,
    variants: {
      variant: {
        default: cn`
          bg-foreground/5
        `,
        success: cn`
          bg-background/30
        `,
        info: cn`
          bg-foreground/5
        `,
        warning: cn`
          bg-background/30
        `,
        error: cn`
          bg-background/30
        `,
      },
    },
  })

  const alert = ctx.get()

  onMount(() => {
    width = "0%"
  })
</script>

{#if asChild}
  <slot />
{:else}
  <div
    class={cn(style.base, style({ variant: alert.variant }), className)}
    style="transition-duration: {ALERT_TIMEOUT}ms; width: {width}"
    {...$$restProps}
  >
    <slot />
  </div>
{/if}
