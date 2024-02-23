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
      p-3
      flex
      items-center
      justify-between
      w-full
      rounded-xl
      bg-muted/5
      border
      border-muted/5

      hover:bg-muted/10
      hover:border-muted/10
    `,
  })

  const { elements } = ctx.get()
  const { trigger } = elements

  $: builder = $trigger
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button type="button" class={cn(style.base, className)} use:melt={builder} {...$$restProps} on:click>
    <slot {builder} />
  </button>
{/if}
