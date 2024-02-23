<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"

  type $$Props = HTMLAttributes<HTMLTableSectionElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""
</script>

{#if asChild}
  <slot />
{:else}
  <tbody class={cn(className)} {...$$restProps}>
    <slot />
  </tbody>
{/if}
