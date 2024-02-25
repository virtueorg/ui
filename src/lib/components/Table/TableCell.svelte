<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLTdAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLTdAttributes & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      p-4
      align-middle
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <td class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </td>
{/if}
