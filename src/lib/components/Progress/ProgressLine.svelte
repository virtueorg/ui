<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    value?: number
  }

  export { className as class }
  export let value: $$Props["value"] = 0

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      h-full
      bg-primary
      rounded-lg
    `,
  })
</script>

<div class={cn(style.base, className)} style="width: {value}%" {...$$restProps} />
