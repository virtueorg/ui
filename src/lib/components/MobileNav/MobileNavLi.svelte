<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"

  type $$Props = HTMLAttributes<HTMLLIElement>

  export { className as class }

  let className = ""
</script>

<li class={cn(className)} {...$$restProps}>
  <slot />
</li>
