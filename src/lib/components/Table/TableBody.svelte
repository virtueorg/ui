<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLAttributes } from "svelte/elements"

  type $$Props = HTMLAttributes<HTMLTableSectionElement>

  export { className as class }

  let className = ""
</script>

<tbody class={cn(className)} {...$$restProps}>
  <slot />
</tbody>
