<script lang="ts">
  import { cn } from "$lib/utils/misc"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLTableSectionElement>

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

<tr class={cn(style.base, className)} {...$$restProps}>
  <slot />
</tr>
