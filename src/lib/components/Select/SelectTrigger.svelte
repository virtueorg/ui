<script lang="ts">
  import { ChevronDownIcon, Icon, cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLButtonAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      w-full
      text-left
      p-3
      bg-muted/5
      rounded-lg
      flex
      items-center
      justify-between
    `,
  })

  const { elements } = ctx.get()
  const { trigger } = elements
</script>

{#if asChild}
  <slot builder={$trigger} />
{:else}
  <button type="button" class={cn(style.base, className)} use:melt={$trigger} {...$$restProps}>
    <div>
      <slot />
    </div>

    <Icon>
      <ChevronDownIcon />
    </Icon>
  </button>
{/if}
