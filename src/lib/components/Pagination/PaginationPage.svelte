<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt, type Page } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLButtonAttributes &
    AsChild & {
      page: Page
    }

  export let asChild: $$Props["asChild"] = false
  export let page: $$Props["page"]
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      p-4
      rounded-xl
      border
      border-muted/5

      hover:bg-muted/10
      hover:border-muted/10

      active:scale-95

      data-[selected]:bg-primary
      data-[selected]:text-background
      data-[selected]:border-background/10
      
      data-[selected]:hover:bg-primary/90
      data-[selected]:hover:border-background/20
    `,
  })

  const { elements } = ctx.get()
  const { pageTrigger } = elements

  $: builder = $pageTrigger(page)
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button type="button" class={cn(style.base, className)} use:melt={builder} {...$$restProps} on:click>
    <slot {builder} />
  </button>
{/if}
