<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLDivElement>

  export { className as class }

  const style = tv({
    base: cn`
      h-full
      p-5
      overflow-y-auto
    `,
  })

  let className = ""
</script>

<div class={cn(style.base, className)} {...$$restProps}>
  <slot />
</div>
