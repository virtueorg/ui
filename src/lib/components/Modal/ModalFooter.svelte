<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLDivElement>

  export { className as class }
  let className = ""

  const style = tv({
    base: cn`
      p-4
      flex
      gap-2
      items-center
      justify-end
    `,
  })
</script>

<div class={cn(style.base, className)} {...$$restProps}>
  <slot />
</div>
