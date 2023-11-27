<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLSpanElement> & AsChild

  export { className as class }
  export let asChild: $$Props["asChild"] = false

  let className = ""

  const style = tv({
    base: cn`
      p-3
      text-muted
      cursor-default
    `,
  })
</script>

{#if asChild}
  <slot>...</slot>
{:else}
  <span class={cn(style.base, className)}>
    <slot>...</slot>
  </span>
{/if}
