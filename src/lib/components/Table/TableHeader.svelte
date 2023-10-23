<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLTableSectionElement>

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      bg-muted/5
    `,
  })
</script>

<thead class={cn(style.base, className)} {...$$restProps}>
  <slot />
</thead>
