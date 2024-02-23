<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt, type CreateDropdownMenuRadioGroupProps } from "@melt-ui/svelte"
  import ctx from "./ctx.js"

  type $$Props = CreateDropdownMenuRadioGroupProps & AsChildType

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
