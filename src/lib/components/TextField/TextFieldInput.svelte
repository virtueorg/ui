<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import type { HTMLInputAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLInputAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"] = ""
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      p-3
      rounded-xl
      bg-muted/5
      border
      border-muted/5

      placeholder:text-muted/60

      hover:border-muted/10
      hover:bg-muted/10
      
      focus:border-muted/10
      focus:bg-muted/10
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <input class={cn(style.base, className)} {...$$restProps} bind:value />
{/if}
