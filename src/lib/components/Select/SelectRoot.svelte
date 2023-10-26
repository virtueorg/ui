<script lang="ts">
  import { cn } from "$lib"
  import type { CreateSelectProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreateSelectProps<string, boolean>

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      flex-col
      gap-2
    `,
  })

  ctx.create($$restProps)
</script>

<div class={cn(style.base, className)} {...$$restProps}>
  <slot />
</div>
