<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLLabelAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLLabelAttributes & AsChildType

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
