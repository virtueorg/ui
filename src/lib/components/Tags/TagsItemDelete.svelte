<script lang="ts">
  import { CloseIcon, cn, Icon } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import ctx from "./ctx"

  type $$Props = HTMLButtonAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const item = ctx.getItem()
  const { elements } = ctx.get()
  const { deleteTrigger } = elements
</script>

{#if asChild}
  <slot builder={$deleteTrigger(item)} />
{:else}
  <button type="button" class={cn(className)} use:melt={$deleteTrigger(item)} {...$$restProps}>
    <slot>
      <Icon class="w-4 h-4">
        <CloseIcon />
      </Icon>
    </slot>
  </button>
{/if}
