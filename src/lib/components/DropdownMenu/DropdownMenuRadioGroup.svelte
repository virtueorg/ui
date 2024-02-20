<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt, type CreateDropdownMenuRadioGroupProps } from "@melt-ui/svelte"
  import ctx from "./ctx.js"

  type $$Props = CreateDropdownMenuRadioGroupProps & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const { elements } = ctx.setRadioGroup($$restProps)
  const { radioGroup } = elements

  $: builder = $radioGroup
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div class={cn(className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </div>
{/if}
