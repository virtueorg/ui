<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLThAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLThAttributes

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      p-5
      text-left
      align-middle
    `,
  })
</script>

<th class={cn(style.base, className)} {...$$restProps}>
  <slot />
</th>
