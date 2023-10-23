<script lang="ts">
  import { cn } from "$lib/utils/misc"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLElement>

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      w-full
      bg-panel
      p-2
    `,
  })
</script>

<nav class={cn(style.base, className)} {...$$restProps}>
  <slot />
</nav>
