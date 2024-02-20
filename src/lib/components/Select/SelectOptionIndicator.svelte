<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import type { HTMLAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const { value } = ctx.getOption()
  const { helpers } = ctx.get()
  const { isSelected } = helpers
</script>

{#if asChild}
  <slot isSelected={$isSelected(value)} />
{:else}
  <div class={cn(className)} {...$$restProps}>
    <slot isSelected={$isSelected(value)} />
  </div>
{/if}
