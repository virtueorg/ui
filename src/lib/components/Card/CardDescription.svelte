<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLParamAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLParamAttributes

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      text-sm
      text-muted
    `,
  })
</script>

<p class={cn(style.base, className)} {...$$restProps}>
  <slot />
</p>
