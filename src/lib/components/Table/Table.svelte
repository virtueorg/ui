<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLTableAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLTableAttributes & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const parent = tv({
    base: cn`
      w-full
      overflow-auto
      rounded-xl
      border
      border-muted/5
    `,
  })

  const style = tv({
    base: cn`
      w-full
      min-w-[65rem]
      caption-bottom
      rounded-xl
      overflow-hidden
      table-fixed
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <div class={cn(parent.base)}>
    <table class={cn(style.base, className)} {...$$restProps}>
      <slot />
    </table>
  </div>
{/if}
