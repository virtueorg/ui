<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateTabsProps } from "@melt-ui/svelte"
  import ctx from "./ctx"

  type $$Props = CreateTabsProps & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const { elements } = ctx.create($$restProps)
  const { root } = elements
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <div class={cn(className)} use:melt={$root} {...$$restProps}>
    <slot />
  </div>
{/if}
