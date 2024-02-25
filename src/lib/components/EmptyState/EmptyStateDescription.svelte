<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLParagraphElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      text-muted
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <p class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </p>
{/if}
