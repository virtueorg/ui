<script lang="ts">
  import { cn } from "$lib/utils/misc"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLDivElement>

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      w-11
      h-11
      flex
      items-center
      justify-center
      rounded-lg
      bg-muted/5
      shrink-0
    `,
  })
</script>

<div class={cn(style.base, className)} {...$$restProps}>
  <slot />
</div>
