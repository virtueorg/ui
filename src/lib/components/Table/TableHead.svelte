<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import type { HTMLThAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLThAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      p-4
      text-left
      align-middle
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <th class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </th>
{/if}
