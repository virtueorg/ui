<script lang="ts">
  import { cn } from "$lib/utils/misc"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLInputAttributes } from "svelte/elements"
  import ctx from "./ctx"

  type $$Props = HTMLInputAttributes & {
    asChild?: boolean
  }

  export { className as class }

  let className = ""
  export let asChild: $$Props["asChild"] = false

  const { elements, helpers, options } = ctx.get()
  const { input } = elements
  const { isChecked } = helpers
  const { disabled } = options
</script>

{#if asChild}
  <slot builder={$input} isChecked={$isChecked} disabled={$disabled} />
{:else}
  <input
    class={cn(className)}
    checked={$isChecked}
    disabled={$disabled}
    use:melt={$input}
    {...$$restProps}
  />
{/if}
