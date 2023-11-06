<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement>

  export { className as class }

  let className = ""

  const item = ctx.getItem()
</script>

<div class={cn(className)} {...$$restProps}>
  {item.value}
</div>
