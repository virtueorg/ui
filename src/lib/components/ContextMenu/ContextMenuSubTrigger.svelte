<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLButtonAttributes & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      w-full
      flex
      items-center
      justify-between
      gap-3
      p-3
      rounded-xl
      border
      border-transparent

      hover:bg-muted/5
      hover:border-muted/5

      active:scale-95
    `,
  })

  const { elements } = ctx.getSub()
  const { subTrigger } = elements

  $: builder = $subTrigger
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button type="button" class={cn(style.base, className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </button>
{/if}
