<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLTableSectionElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      bg-muted/5
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <thead class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </thead>
{/if}
