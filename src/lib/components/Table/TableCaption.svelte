<script lang="ts">
  import { cn } from "$lib/utils/misc"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLTableCaptionElement>

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      mt-4
      text-sm
      text-muted
    `,
  })
</script>

<caption class={cn(style.base, className)} {...$$restProps}>
  <slot />
</caption>
