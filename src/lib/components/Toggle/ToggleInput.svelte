<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import type { HTMLInputAttributes } from "svelte/elements"
  import ctx from "./ctx"

  type $$Props = HTMLInputAttributes & AsChild

  export { className as class }
  export let asChild: $$Props["asChild"] = false

  let className = ""

  const { states, options } = ctx.get()
  const { checked } = states
  const { disabled } = options
</script>

{#if asChild}
  <slot value={$checked} disabled={$disabled} />
{:else}
  <input hidden class={cn(className)} value={$checked} disabled={$disabled} {...$$restProps} />
{/if}
