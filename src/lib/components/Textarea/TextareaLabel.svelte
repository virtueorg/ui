<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLLabelAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLLabelAttributes

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      absolute
      top-0
      left-0
      p-3
      text-sm
      text-muted
    `,
  })
</script>

<label class={cn(style.base, className)} {...$$restProps}>
  <slot />
</label>
