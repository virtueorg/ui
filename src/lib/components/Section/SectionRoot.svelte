<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLElement>

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      flex-col
      gap-2
    `,
  })
</script>

<section class={cn(style.base, className)} {...$$restProps}>
  <slot />
</section>
