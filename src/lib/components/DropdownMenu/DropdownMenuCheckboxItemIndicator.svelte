<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const { helpers } = ctx.getCheckboxItem()
  const { isChecked, isIndeterminate } = helpers
</script>

{#if asChild}
  <slot isChecked={$isChecked} isIndeterminate={$isIndeterminate} />
{:else}
  <div class={cn(className)} {...$$restProps}>
    <slot isChecked={$isChecked} isIndeterminate={$isIndeterminate} />
  </div>
{/if}
