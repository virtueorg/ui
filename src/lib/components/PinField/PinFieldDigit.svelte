<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLInputAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLInputAttributes & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      w-14
      border
      border-muted/5
      bg-muted/5
      rounded-xl
      text-center
      p-4

      hover:bg-muted/10
      hover:border-muted/10

      focus:bg-muted/10
      focus:border-muted/10
    `,
  })

  const { elements } = ctx.get()
  const { input } = elements

  $: builder = $input()
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <input class={cn(style.base, className)} use:melt={builder} {...$$restProps} />
{/if}
