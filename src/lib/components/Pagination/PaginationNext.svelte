<script lang="ts">
  import { ChevronRightIcon, Icon, cn } from "$lib"
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
      active:scale-95
      
      disabled:bg-transparent
      disabled:opacity-50
    `,
  })

  const { elements } = ctx.get()
  const { nextButton } = elements
</script>

{#if asChild}
  <slot builder={$nextButton} />
{:else}
  <button class={cn(style.base, className)} use:melt={$nextButton}>
    <slot>
      <Icon>
        <ChevronRightIcon />
      </Icon>
    </slot>
  </button>
{/if}
