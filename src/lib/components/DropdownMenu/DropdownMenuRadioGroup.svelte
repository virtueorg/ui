<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateDropdownMenuRadioGroupProps } from "@melt-ui/svelte"
  import ctx from "./ctx"

  type $$Props = CreateDropdownMenuRadioGroupProps & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const { elements } = ctx.createRadioGroup($$restProps)
  const { radioGroup } = elements
</script>

{#if asChild}
  <slot builder={$radioGroup} />
{:else}
  <div class={cn(className)} use:melt={$radioGroup} {...$$restProps}>
    <slot />
  </div>
{/if}
