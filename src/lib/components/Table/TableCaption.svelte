<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLTableCaptionElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      my-4
      text-sm
      text-muted
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <caption class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </caption>
{/if}
