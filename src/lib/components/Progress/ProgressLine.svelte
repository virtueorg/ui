<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement>

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      h-full
      bg-primary
      rounded-lg
    `,
  })

  const { states, options } = ctx.get()
  const { value } = states
  const { max } = options

  $: percentage = ($value * 100) / $max
</script>

<div class={cn(style.base, className)} style="width: {percentage}%" {...$$restProps} />
