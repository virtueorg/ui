<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChildType

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
