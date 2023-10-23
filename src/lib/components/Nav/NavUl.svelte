<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLUListElement>

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      p-4
      flex
      flex-col
      gap-2
    `,
  })
</script>

<ul class={cn(style.base, className)} {...$$restProps}>
  <slot />
</ul>
