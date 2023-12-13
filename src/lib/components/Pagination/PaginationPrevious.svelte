<script lang="ts">
  import { ChevronLeftIcon, Icon, cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLButtonAttributes & AsChild

  export { className as class }
  export let asChild: $$Props["asChild"] = false

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      py-3
      px-4
      rounded-lg
      bg-muted/5
      text-muted

      hover:bg-muted/10

      disabled:bg-transparent
      disabled:opacity-50
    `,
  })

  const { elements } = ctx.get()
  const { prevButton } = elements
</script>

{#if asChild}
  <slot builder={$prevButton} />
{:else}
  <button class={cn(style.base, className)} use:melt={$prevButton}>
    <slot>
      <Icon>
        <ChevronLeftIcon />
      </Icon>
    </slot>
  </button>
{/if}
