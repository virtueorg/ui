<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type Page } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLButtonAttributes &
    AsChild & {
      value: number
    }

  export let value: $$Props["value"]
  export let asChild: $$Props["asChild"] = false
  export { className as class }

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

      data-[selected]:bg-primary
      data-[selected]:text-background

      data-[selected]:hover:bg-primary/90
    `,
  })

  const page: Page = {
    type: "page",
    value: value,
  }

  const { elements } = ctx.get()
  const { pageTrigger } = elements
</script>

{#if asChild}
  <slot builder={$pageTrigger(page)} />
{:else}
  <button class={cn(style.base, className)} use:melt={$pageTrigger(page)}>
    <slot>
      {page.value}
    </slot>
  </button>
{/if}
