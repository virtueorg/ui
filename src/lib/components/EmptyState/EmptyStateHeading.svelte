<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"

  type $$Props = HTMLAttributes<HTMLDivElement>

  export { className as class }

  let className = ""
</script>

<div class={cn(className)} {...$$restProps}>
  <slot />
</div>
