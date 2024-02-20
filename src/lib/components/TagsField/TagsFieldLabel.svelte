<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import type { HTMLLabelAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLLabelAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      text-muted
      text-sm
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <label class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </label>
{/if}
