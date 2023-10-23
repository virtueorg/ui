<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLDivElement>

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      absolute
      top-0
      right-0
      h-full
      flex
      items-center
      p-3
      text-muted
      pointer-events-none
    `,
  })
</script>

<div class={cn(style.base, className)} {...$$restProps}>
  <slot />
</div>
