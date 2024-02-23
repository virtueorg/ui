<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const { value } = ctx.getRadioItem()
  const { helpers } = ctx.getRadioGroup()
  const { isChecked } = helpers
</script>

{#if asChild}
  <slot isChecked={$isChecked(value)} />
{:else}
  <div class={cn(className)} {...$$restProps}>
    <slot isChecked={$isChecked(value)} />
  </div>
{/if}
