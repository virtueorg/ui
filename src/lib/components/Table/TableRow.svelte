<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLTableSectionElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all

      even:bg-muted/5

      hover:bg-muted/10
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <tr class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </tr>
{/if}
