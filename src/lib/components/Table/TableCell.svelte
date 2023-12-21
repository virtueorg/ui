<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLTdAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLTdAttributes

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      p-5
      align-middle
    `,
  })
</script>

<td class={cn(style.base, className)} {...$$restProps}>
  <slot />
</td>
