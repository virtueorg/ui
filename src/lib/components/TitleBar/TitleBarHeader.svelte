<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import type { HTMLAttributes } from "svelte/elements"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""
</script>

{#if asChild}
  <slot />
{:else}
  <header class={cn(className)} {...$$restProps}>
    <slot />
  </header>
{/if}
