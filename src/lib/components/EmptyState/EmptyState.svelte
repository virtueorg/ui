<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      flex-col
      items-center
      justify-center
      text-center
      gap-4
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <div class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </div>
{/if}
