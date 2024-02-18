<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLButtonAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
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

      disabled:opacity-50
      disabled:bg-transparent
      disabled:border-muted/5
    `,
  })

  const { elements } = ctx.get()
  const { nextButton } = elements

  $: builder = $nextButton
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button type="button" class={cn(style.base, className)} use:melt={builder} {...$$restProps} on:click>
    <slot {builder} />
  </button>
{/if}
